import React, { useEffect, useRef, useState } from 'react'
import {  User } from '../interfaces/reqres.response'
import { loadUserActions } from '../actions/load-user.action'

const useUser = () => {

    const [users, setUsers] = useState<User[]>([]);
    const currentPageRef = useRef(1);

    useEffect(() => {
        loadUserActions(1)
        .then((users:User[]) => setUsers(users))
    }, [])


    const nextPage = async() => {
        currentPageRef.current++;
        const user = await loadUserActions(currentPageRef.current);

        if(user.length > 0){
            setUsers(user);
            console.log('Users: ', users);
        }else{
            currentPageRef.current--;
        }
    }

    const prevPage = async() => {
        if(currentPageRef.current > 1){
            currentPageRef.current--;
            const user = await loadUserActions(currentPageRef.current);

            if(user.length > 0){
                setUsers(user);
                console.log('Users: ', users);
            }else{
                currentPageRef.current++;
            }
        }
    }

  return {
    users,
    nextPage,
    prevPage
  }
}

export default useUser
