

export function simulateHttpRequest(action: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulating an HTTP request
      if (action.type === 'LOGIN_REQUEST') {
        // Simulating a successful login
        resolve({ data: { message: 'Login successful' } });
      } else if (action.type === 'LOGOUT_REQUEST') {
        // Simulating a successful logout
        resolve({ data: { message: 'Logout successful' } });
      } else {
        // Simulating an error
        reject(new Error('Request failed'));
      }
    }, 1000); // Simulating a delay of 1 second
  });
}
