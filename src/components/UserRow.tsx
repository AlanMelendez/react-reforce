import React from 'react'

const UserRow = () => {
  return (
    <tr className="p-2">
            <td className="rounder-full w-14  px-4 py-2">
                <img src="https://randomuser.me/api/portraits" alt="avatar" className="rounded-full w-10 h-10" />
            </td>
            <td className="px-4 py-2">John Doe</td>
            <td className="px-4 py-2"> xd</td>
    </tr>
  )
}

export default UserRow
