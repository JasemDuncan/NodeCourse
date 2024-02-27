import { Course } from "../domain/course";

import { Request, Response } from 'express';
import {v4 as uuidv4} from 'uuid';

export class CourseController {
    constructor(private readonly courseSave: CourseSave, private readonly courseGetAll: CourseGetaAll,
        private readonly courseGetById: CourseGetById,
        private readonly courseGetByPage: CourseGetByPage
        ) { }


    async create (req: Request, res: Response) {
        const {title, slug} = req.body;
        const courseId = uuidv4();

        const props: CourseProperties = {
            courseId,
            title,
            slug,
        };

        const course = new Course(props);
        const valueReturned = await this.courseSave.execute(course);
        res.json(valueReturned);
    }

    async getAll (req: Request, res: Response) {
        const courses = this.courseSave.filter((course)=> !course.deleteAt);
        return 
    }
    async getById (req: Request, res: Response) {
        return this.courseSave.findById(req, res);
    }

    async getByPage (req: Request, res: Response) {
        const { page, pageSize } = req.params;
        const courses = await this.coursesGetByPage.execute(page, pageSize);
        res.json(courses);
    }
    async update (req: Request, res: Response) {
        const { courseId } = req.params;
        const body =req.body;

        const course = await this.courseGetById.execute(courseId);
        course.update(body);
        const valueReturned = await this.courseSave.execute(course);

    }

    async delete (req: Request, res: Response) {
        const {courseId} = req.params;

    }

}