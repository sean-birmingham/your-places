import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'John Doe',
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
