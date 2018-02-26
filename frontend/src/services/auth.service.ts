import axios from 'axios';
import { Credentials } from '@/models/credentials.interface';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Rx';

class AuthService extends BaseService {

    private static instance: AuthService;

    private constructor() {  super(); }

    public static get Instance() {
       // Do you need arguments? Make it a regular method instead.
       return this.instance || (this.instance = new this());
    }

    public login(credentials: Credentials): Observable<any> {
        return Observable.fromPromise(axios.post(`${this.api}/auth/login`, credentials))
        .map((res: any) => res.data.auth_token)
        .catch((error: any) => this.handleError(error.response));
    }

    public facebookLogin(accessToken: string): Observable<any> {
        return Observable.fromPromise(axios.post(`${this.api}/externalauth/facebook`, {accessToken}))
        .map((res: any) => res.data.auth_token)
        .catch((error: any) => this.handleError(error.response));
    }
}

// export a singleton instance in the global namespace
export const authService = AuthService.Instance;
