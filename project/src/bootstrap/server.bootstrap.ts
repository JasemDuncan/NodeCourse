import { Application } from 'express';
import http from 'http';
import { IBootstrap } from './bootstrap.interface';

export class ServerBootstrap implements IBootstrap{
    constructor(private readonly app: Application) { }

    initialize(): Promise<boolean> {
        
        const promise = new Promise((resolve, reject) => {
            const server = http.createServer(this.app);
        server
            .listen(3000)
            .on('listening', () => { console.log('Server is running on port 3000'); resolve(true)})
            .on('error', (error: NodeJS.ErrnoException) => { reject(error)});
        });

        return 

    }


    
}