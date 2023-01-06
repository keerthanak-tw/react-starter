import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import Card from './components/UI/Card';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevState) => ([...prevState, user]));
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {users.length && <UserList users={users} />}
      {users.length === 0 && <Card className='no-user'>No users found</Card>}
    </div>
  );
}

export default App;
