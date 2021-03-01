import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton } from './logout-button';
import { LoginButton } from './login-button';

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <LogoutButton />
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Not logged in</h2>
      <LoginButton />
    </div>
  );
};