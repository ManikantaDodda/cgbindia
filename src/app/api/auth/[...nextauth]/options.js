import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import User from '@/models/user';
import connectToDB from '@/database';

export const authOptions = {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "Email", type: "text", placeholder: "your-email@example.com" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          // Connect to the database
          await connectToDB();
  
          // Find the user by email
          const user = await User.findOne({ email: credentials.email });
            console.log(user);
          if (!user) {
            throw new Error('No user found with this email');
          }
  
          // Compare passwords
          const isValidPassword = await compare(credentials.password, user.password);
  
          if (!isValidPassword) {
            throw new Error('Invalid password');
          }
  
          return { id: user._id, email: user.email, role : user.role, name : user.name }; // Return user data if authenticated
        },
      }),
    ],
    session: {
      strategy: 'jwt', // Use JWTs to manage sessions
    },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
          token.role = user.role;
        }
        return token;
      },
      async session({ session, token }) {
        session.user.id = token.id; 
        session.user.role = token.role;
        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET || 'your_secret_key', // Add your secret here
  };