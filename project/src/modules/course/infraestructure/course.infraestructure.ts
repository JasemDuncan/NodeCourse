import { CourseMemory } from './course.memory';
export class CourseInfraestructure {
    courseMemory = new CourseMemory();

    async createCourse(course: any) {
        return this.courseMemory.createCourse(course);
    }

    async updateCourse(course: any) {
        return this.courseMemory.updateCourse(course);
    }

    async deleteCourse(courseId: string) {
        return this.courseMemory.deleteCourse(courseId);
    } 

    async listCourses() {
        return this.courseMemory.listCourses();
    }

    async getCourse(courseId: string) {
        return this.courseMemory.getCourse(courseId);
    }   

    async getCourseByPage(page: number, limit: number) {
        return this.courseMemory.getCourseByPage(page, limit);
    }

}