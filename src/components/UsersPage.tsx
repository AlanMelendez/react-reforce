import React from 'react'
import UserRow from './UserRow'
import useUser from '../hooks/useUser'

// https://reqres.in/api/users?page=2


export const UsersPage = () => {



  const {users} = useUser();

  console.log('Users: ', users);

  return (
    <div>
        {/* Creamos una tabla... */}
      <table className="w-[500px] rounded-lg overflow-hidden shadow-lg bg-amber-900 text-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Avatar</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          <UserRow />
        </tbody>

      </table>

      <div className="flex justify-between w-[500px] mx-auto mt-5">
        <button className='p-2 bg-blue-400 text-white rounded-xl'>Anterior</button>
        <button className='p-2 bg-blue-400 text-white rounded-xl'>Siguiente</button>

      </div>
              
    </div>
  )
}

export default UsersPage
