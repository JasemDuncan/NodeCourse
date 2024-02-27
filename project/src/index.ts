// // import http from 'http';
// // 

// import { ServerBootstrap } from "./bootstrap/server.bootstrap";

// // import express, {Request, Response}from 'express';

// // const app = express();

// // app.get('/', (req: Request, res: Response) => {
// //     //   res.writeHead(200, {'Content-Type': 'text/plain'});
// //     //   res.write('Hello World!');
// //     //   res.end();
// //     //esta liena es igual que las otras 3
// //     //   res.status(200).type("text/html").send("Hello World!"); // esto es por defecto y se resume en la sigueinte linea
// //   res.setHeader("x-kong","asdasdad").send("Hello World!");
// // });



// // app.get('/users', (req: Request, res: Response) => {    
// //     res.setHeader("x-kong","asdasdad").send("Hello World!");
// //   }     );

// import http from 'http';
// import {app} from './app';
// import { start } from 'repl';

// const server = http.createServer(app);

// //  function startServer(){
// //     const promise = new Promise((resolve, reject) => {
// //         server
// //         .listen(3000)
// //         .on('listening', () => { console.log('Server is running on port 3000'); resolve(true)})
// //         .on('error', (error: NodeJS.ErrnoException) => { reject(error)});
// //     });
// //     return  promise;    
// // }

// async function startApp(){
//     try{
//         await startServer();
//     }catch(err){    
//         console.log(err);
//     }
// }

// startApp();

// // try {
// //     server.listen(3000, () => {
// //         console.log('Server is running on port 3000');
// //     });

// // }catch(err){
// //     console.log(err);
// // }   

import { IBootstrap } from "./bootstrap/bootstrap.interface";

import { ServerBootstrap } from "./bootstrap/server.bootstrap";
import app from "./app";
import { Course , CourseProperties} from './modules/course/domain/course';
import { CourseFactory } from "./modules/course/domain/course-factory";


const props: CourseProperties = {
    courseId: "course",
    title: "Curso de Node.js",
    slug: "curso-de-node-js"
};

const course = CourseFactory.create(props);
console.log(course);
course.update({title: "Node 2 course", status: "published"});
courseCreate.execute(course);
  
(async () => {
    const server = new ServerBootstrap(app);
    try {
        const listPromise: Array<Promise<boolean| Error>> = [server.initialize()];
        await Promise.all(listPromise);
        await server.initialize();
    }catch(err){
        console.log(err);
    }
})();
