import axios from 'axios';
import { User } from '../interfaces/reqres.response';

export const loadUserActions = async (page:number) => {

    try {
        const {data} = await axios.get<User>(`https://reqres.in/api/users?page=${page}`);

        return data.data;
        
    } catch (error) {
        console.error(error);
        return [];
    }
}