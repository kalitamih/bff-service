import { All, Controller, Param, Req } from '@nestjs/common';

import { Request } from 'express';
import { BffService } from './bff.service';

@Controller('/')
export class BffController {
    constructor(private _bffService: BffService) {}    
    
    @All('/:service')
    async redirectToService(@Req() req: Request, @Param() params) {
        const service = params.service;
        const body = req.body;
        const method = req.method;
        const url = req.originalUrl.replace(`/${service}`, '');
        const response = await this._bffService.request(service, url, method, body);
     
        return response;
    }
}
