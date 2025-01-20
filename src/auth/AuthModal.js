import React, { useState } from 'react';
import './AuthModal.css';
import { Images } from '../db/config/assets/Images';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true); 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user', 
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', formData);
    } else {
      console.log('Registering with:', formData);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(''); 
  };

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return false;
    }
    setError('');
    return true;
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <img src={Images.homeLogo} alt="homeLogo" style={{ width: "100px", height: "80px" }}/>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>

        {!isLogin && (
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className='input'
            />
          </div>
        )}

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='input'

          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className='input'

          />
        </div>

        {!isLogin && (
          <div className="input-group">
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
               className='input'
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        )}

        {error && <p className="error">{error}</p>}

        <div className="form-buttons">
          <button
            type="submit"
            onClick={validateForm}
            className="submit-btn"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
          <button type="button" onClick={toggleForm} className="toggle-btn">
            {isLogin ? 'Create an account' : 'Already have an account?'}
          </button>
        </div>
      </form>
    </div>
  );
}
