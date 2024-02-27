import * as http from 'http';
import express, {Request, Response}from 'express';

class App {
  expressApp: express.Application;

  constructor(){
    this.expressApp = express();
    this.mountRoutes();
  }

  mountRoutes(): void {
    this.expressApp.get('/', (req: Request, res: Response) => {
      res.setHeader("x-kong","asdasdad").send("Hello World!");
    });
  }
}

/// add default export
export default new App().expressApp;