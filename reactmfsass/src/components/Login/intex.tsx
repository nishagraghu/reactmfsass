import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/authAction'

const LoginForm: React.FC = () => {
  

  const handleLogin = () => {
    const user: any = { username: 'your_username', password: 'your_password' }; // Replace with actual user credentials
    login();
  };

  return (
    <div>
 
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
