import React, { useEffect, useState } from 'react'
import {  User } from '../interfaces/reqres.response'
import { loadUserActions } from '../actions/load-user.action'

const useUser = () => {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        loadUserActions(1)
        .then((users:User[]) => setUsers(users))
    }, [])

  return {
    users,
  }
}

export default useUser
