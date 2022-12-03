import axios from 'axios';

export default function usersService(url: string, callback: Function) {

    axios.get(`/data/${url}.json`)
        .then((response) => {
            const data = response.data;
            // console.log(data);
            callback(data);
        })
        .catch(error=>console.log(error))
}
