class Appointments {
    create (medicId: string, centerId: string, date: Date): void {
        console.log("Appointment created");
        console.log("medicId: ", medicId);
        console.log("centerId: ", centerId);
        console.log("date: ", date);
    } 
}

class AppointmentImages extends Appointments {
    createImageAppointment(historyId:string ,type: string, centerId: string, date: Date): void {
        console.log("AppointmentImages created");
        console.log("historyId: ", historyId);
        console.log("type: ", type);
        console.log("centerId: ", centerId);
        console.log("date: ", date);
    }
}

class appointmentLaboratory extends AppointmentImages {
    createLaboratoryAppointment(historyId:string ,type: string, centerId: string, date: Date): void {
        console.log("appointmentLaboratory created");
        console.log("historyId: ", historyId);
        console.log("type: ", type);
        console.log("centerId: ", centerId);
        console.log("date: ", date);
    }
}

const Appointment = new Appointments();
Appointment.create("medicId", "centerId", new Date());
