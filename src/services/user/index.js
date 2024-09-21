import axios from 'axios';

export async function fetchUsersdData() {
  try {
    const res = await axios.get('/api/user');

    return res.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized');
    } else {
      console.error('An error occurred:', error);
    }
  }
}
