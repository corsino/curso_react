import React from 'react'
import { useState } from 'react'

const ListRender = () => {
const[users, setUsers] = useState([{nome:"Abel", id:1}, {nome:"Zé", id:2}, {nome:"Amanda", id:3}]);

const deleteRandom = () =>
{
  const randomNumber = Math.floor(Math.random() * 4);
 
  setUsers((prevUsers) =>
  {
      return prevUsers.filter((user) => randomNumber !== user.id);
  });
};

  return (
    <div>
        
        <ul>
            {users.map((user,i)=>(
                <li key={user.id}>{user.nome}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random</button>
    </div>
  );
};
export default ListRender;