import axios from 'axios';
import { BaseService } from './base.service';

class DashboardService extends BaseService {

    private static instance: DashboardService;

    private constructor() {  super(); }

    public static get Instance() {
       // Do you need arguments? Make it a regular method instead.
       return this.instance || (this.instance = new this());
    }

    public getHomeDetails(): Promise<any> {
        return axios.get(`${this.api}/dashboard/home`);
    }
}

// export a singleton instance in the global namespace
export const dashboardService = DashboardService.Instance;
