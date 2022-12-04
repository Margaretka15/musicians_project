import axios from 'axios';
import {urls} from "./BaseUrl";

const URL = urls.getBaseUrl() + 'artists.json';

class UsersService
{
   getUsers () {
     return   axios.get(URL);
   }

}
export default new UsersService();