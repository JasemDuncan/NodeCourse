
import { validate } from 'uuid';
import { Course, CourseProperties } from './course';
import { CourseIdVO } from '@course/domain/value-objects/course-id.vo';
import { TextLongVO } from '../../core/domain/value-objects/text-long.vo';
import { text } from 'stream/consumers';

export class CourseFactory {
    static create(props: CourseProperties) {
        CourseIdVO.create(props.courseId);
        TextLongVO.create(props.title, 5, "Title must be at least 5 characters");
        TextLongVO.create(props.slug, 5, "Slug must be at least 5 characters");

       
        return new Course(props);
    }
}