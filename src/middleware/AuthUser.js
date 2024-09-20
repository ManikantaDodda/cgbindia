import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';

export async function authenticate(req, requiredRole = "admin") {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    throw new Error('Unauthorized');
  }
  
  // You now have access to session.user.role
  console.log('User role:', session.user.role);

  if (requiredRole && session.user.role !== requiredRole) {
    throw new Error('Forbidden: Insufficient role');
  }

  return session;
}

