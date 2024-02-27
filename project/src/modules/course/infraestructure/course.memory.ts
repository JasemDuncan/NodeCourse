import { CourseEntity } from "./entities/course.entity";

export class CourseMemory {
private courses: CourseEntity[] = [];

    async createCourse(course: any) {
        this.courses.push(course);
    }

    async updateCourse(course: any) {
        const index = this.courses.findIndex(c => c.id === course.id);
        this.courses[index] = course;
    }

    async deleteCourse(courseId: string) {
        this.courses = this.courses.filter(c => c.id !== courseId);
    }

    async listCourses() {
        return [...this.courses];
    }
}