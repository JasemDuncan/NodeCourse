import { Router } from "express";
import { CourseController } from "./controller";
import { CourseInfraestructure } from "../infraestructure/course.infraestructure";

export class CourseRoutes {
    readonly router: Router

    constructor( private readonly  controller: CourseController) {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', this.controller.getAll);
        this.router.get('/:id', this.controller.getById);
        this.router.get('/page/:page', this.controller.getByPage);
        this.router.post('/', this.controller.create);
        this.router.put('/:id', this.controller.update);
        this.router.delete('/:id', this.controller.delete);
    }

}

const courseRepository: CourseRepository = new CourseInfraestructure();

const courseSave = new CourseSave(courseRepository);
const courseGetAll = new CourseGetAll(courseRepository);
const courseGetById = new CourseGetById(courseRepository);
const courseGetByPage = new CourseGetByPage(courseRepository);
const courseUpdate = new CourseUpdate(courseRepository);
const courseDelete = new CourseDelete(courseRepository);

const controller = new CourseRoutes(courseSave, courseGetAll, courseGetById, courseGetByPage, courseUpdate, courseDelete);
const routes = new CourseRoutes(controller);