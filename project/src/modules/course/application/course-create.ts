import { Course } from "../domain/course";
import { CourseRepository } from "../domain/value-objects/repositopry/course.repository";

export class CourseCreate {
    constructor( private readonly repository: CourseRepository) {}

    async execute(course: Course) {
        return this.repository.createCourse(course);
    }
}