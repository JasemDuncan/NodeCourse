enum FRECUENCY {
    SUNDAY = 'SUNDAY',
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY'

}

interfae ISchedule {
    scheduleId: string;
    courseId: string;
    title: string;
    summary: string;
    slogan: string;
    dateStart: Date;
    hourStart: Date;
    hourEnd: Date;
    duration: number;
    frecuency: FRECUENCY;
    type: TYPE_SCHEDULE;
    name: string;
    description: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

const day = "MONDAY";
const freq:FRECUENCY = FRECUENCY[day as keyof typeof FRECUENCY];

c

