import { Request } from 'express';
import { BffService } from './bff.service';
export declare class BffController {
    private _bffService;
    constructor(_bffService: BffService);
    redirectToService(req: Request, params: any): Promise<any>;
}
