import React, { useState, useEffect } from 'react';
import './ProfilePage.css';

function ProfilePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // ... code to update profile in database
      setIsSubmitted(true);
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      // Optionally: Load other user info or navigate to a different page
    }
  }, [isSubmitted]);

  return (
    <div className="profile-page">
      {isMenuOpen ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h1>Welcome, {name}!</h1>
      )}
      {isSubmitted && !isMenuOpen && <p>User profile updated successfully!</p>}
    </div>
  );
}

export default ProfilePage;


