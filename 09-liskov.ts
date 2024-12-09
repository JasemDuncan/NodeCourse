class Appointment
{
    createMedicAppointment(medicId: string, centerId: string, date: Date)
    {
        console.log("medicId",medicId)
        console.log("centerId", centerId)
        console.log("date",date)
    }
}

class AppointmentImage extends Appointment {
    createImageAppointment(historyId: string, type: string, centerId: string, date: Date)
    {
        console.log("historyId", historyId)
        console.log("type", type)
        console.log("centerId", centerId)
        console.log("date",date)       
    }
}

class AppointmentLaboratory extends AppointmentImage {
    createLaboratoryAppointment(historyId: string, type: string, centerId: string, date: Date)
    {
        console.log("historyId", historyId)
        console.log("type", type)
        console.log("centerId", centerId)
        console.log("date",date)               
    }
}

//Lisvok: Cualquier clase que deriba de la clase base podria remplazar la clase base
// entonces remplazar Appointment  con AppointmentImage
//const appointment = new Appointment()
//const appointment = new AppointmentImage()
const appointment = new AppointmentLaboratory()
appointment.createMedicAppointment("abc","def",new Date())
