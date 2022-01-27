import { useParams } from "react-router-dom";
import doctors from '../../src/assets/doctors.json';
import AppointmentForm from "./AppointmentForm";
import TimeFrame from "./TimeFrame";
import Doctor from './Doctor';
import Background from './../assets/backgroundFormImage.jpg'
import './DoctorProfile.css'


const DoctorProfile = (props)=>{
    console.log(props)
    const {id} = useParams()
    console.log(doctors["doctors"][id], id)
    const doctor = doctors["doctors"].filter((doc)=>doc.id===id)
    console.log(doctor)

    return(
        <>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>

        <div>
            <center>
            <h1>Know About your Doctor</h1>
            <Doctor docData={doctor[0]}/>
            <br/>
            <div className="container bg-image" style={{ borderRadius:"10px", border:"solid 2px #6CEBFF", margin:"30px", }}>
            <h2 style={{ color:"orange", }}>Fill the below form to get Appointment!!</h2>
            <AppointmentForm/>
            </div>
            </center>
        </div>
        </>
    )
}

export default DoctorProfile;

/*

<div className="container " style={{ padding:"20px", width:"70%", border:"black solid 1px", borderRadius:"10px", backgroundColor:"#BEF6FF", margin:"30px", }}>

                
            </div>

*/