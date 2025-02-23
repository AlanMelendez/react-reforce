import axios from 'axios';
import { User, UserList } from '../interfaces/reqres.response';

export const loadUserActions = async (page:number) => {

    try {
        const {data} = await axios.get<UserList[]>(`https://reqres.in/api/users?page=${page}`);

        return data.data;
        
    } catch (error) {
        console.error(error);
        return [];
    }
}