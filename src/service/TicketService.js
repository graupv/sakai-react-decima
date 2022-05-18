import axios from 'axios'

export class TicketService {

    getCountries() {
        return axios.get('assets/demo/data/countries.json')
            .then(res => res.data.data);
    }
}  