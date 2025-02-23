import React from 'react'
import { User } from '../interfaces/reqres.response'


interface UserRowProps {
    user: User
}

const UserRow = ({user}: UserRowProps) => {
  return (
    <tr className="p-2">
            <td className="rounder-full w-14  px-4 py-2">
                <img src={user.avatar} alt="avatar" className="rounded-full w-10 h-10" />
            </td>
            <td className="px-4 py-2">{user.first_name}</td>
            <td className="px-4 py-2"> {user.email}</td>
    </tr>
  )
}

export default UserRow
