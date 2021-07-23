import React, { useState } from 'react';

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'
function App() {
  const [users, setUsers] = useState([])
  const usersListHandler = (newUser) =>{
    setUsers(oldArray =>{
      return [...oldArray, newUser]
    })
  }
  return (
    <div>
      <AddUser onAddUsersList={usersListHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
