import * as http from 'http';
import express, {Request, Response, NextFunction}from 'express';


class App {
  expressApp: express.Application;

  constructor(){
    this.expressApp = express();
    this.middleware();
    this.mountRoutes();
    this.mountErrorHandlers();
  }

  middleware(): void {
    this.expressApp.use(express.json());
    this.expressApp.use(express.urlencoded({extended: true}));
  }

  mountRoutes(): void {
    this.expressApp.use("/course")

  }
  mountErrorHandlers(): void {
    this.expressApp.use((req: Request, res: Response) => {
      res.status(404).json({message: "Not Found"});
    });

    this.expressApp.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack);
      res.status(500).json({message: "Internal Server Error"});
    });
  }
}

/// add default export
export default new App().expressApp;