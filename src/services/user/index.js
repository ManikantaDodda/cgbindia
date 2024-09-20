export async function fetchUsersdData() {
    const res = await fetch('/api/user', {
      method: 'GET',
    });
  
    if (res.status === 401) {
      console.log('Unauthorized');
    } else {
      const data = await res.json();
      return data;
    }
  }
  