import axios from 'axios';
import { UserRegistration } from '@/models/user.registration.interface';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Rx';

class AccountService extends BaseService {

    private static instance: AccountService;

    private constructor() {  super(); }

    public static get Instance() {
       // Do you need arguments? Make it a regular method instead.
       return this.instance || (this.instance = new this());
    }

    public register(userRegistration: UserRegistration): Observable<any> {
        return Observable.fromPromise(axios.post(`${this.api}/accounts`, userRegistration))
        .map((res: any) => true)
        .catch((error: any) => this.handleError(error.response));
    }
}

// export a singleton instance in the global namespace
export const accountService = AccountService.Instance;
