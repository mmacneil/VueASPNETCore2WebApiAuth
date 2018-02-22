import axios from 'axios';
import { UserRegistration } from '@/models/user.registration.interface';

const api = 'http://localhost:5000/api';

class AccountService {

    private static instance: AccountService;

    private constructor() {}

    public static get Instance() {
       // Do you need arguments? Make it a regular method instead.
       return this.instance || (this.instance = new this());
    }

    public register(userRegistration: UserRegistration): any {
        return axios.post(`${api}/accounts`, {userRegistration});
    }
}

// export a singleton instance in the global namespace
const accountService = AccountService.Instance;
