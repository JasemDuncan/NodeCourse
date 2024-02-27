export type CourseStatus = "draft"|"published";
import {validate} from 'uuid';

export interface CourseRequired {
    courseId: string;
    title: string;
    slug: string;
}



export class CourseOptional {
    status: CourseStatus;
}

export type CourseData = CourseRequired & Partial<CourseOptional>;
export type CoursePropertiesToUpdate = Partial!<Omit<CourseRequired, "courseId"> & Pick<CourseOptional, "status">>;

export class Course {
    private courseId: string;
    private title: string;
    private slug: string;
    private status: CourseStatus;
    private createdAt: Date;
    private updatedAt: Date;
    private deletedAt: Date;

    constructor(props: CourseData){
        

        Object.assign(this, props);
        this.status = props.status || "draft";
        this.createdAt = props.createdAt || new Date();


        this.courseId = props.courseId;
        this.title = props.title;
        this.slug = props.slug;
        this.status = props.status || "draft";
    }
    update(props: CoursePropertiesToUpdate){
        Object.assign(this, props);
        this.updatedAt new Date();
    }

    delete() {
        this.deletedAt = new Date();
    }

    get courseId(){
        return this.courseId;
    }

    get title(){
        return this.title;
    }

    get slug(){
        return this.slug;
    }

    get status(){
        return this.status;
    }
}