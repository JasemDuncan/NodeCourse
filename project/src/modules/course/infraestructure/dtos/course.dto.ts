import { Course } from "../../domain/course";
import { CourseEntity } from "../entities/course.entity";
import { instanceToPlain, plainToClass, plainToInstance } from "class-transformer";

export class CourseDto{
    static fropmDomainToData( course: Course): CourseEntity{
        const courseEntity =  plainToInstance(CourseEntity, course.properties);


        // const courseEntity = new CourseEntity();
        // courseEntity.id = course.id;
        // courseEntity.title = course.title;
        // courseEntity.slug = course.slug;

        return courseEntity;
    }
}