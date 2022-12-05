import axios, {AxiosResponse} from 'axios';
import {urls} from "./BaseUrl";
import IArtist from "../interface/IArtist";

const URL = urls.getBaseUrl() + 'artists';

class UsersService {
    getUsers() : Promise<AxiosResponse<IArtist[]>> {
        return axios.get<IArtist[]>(URL);
    }

}

export default new UsersService();