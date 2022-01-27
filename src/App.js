import './App.css';
import {BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import CommonDashboard from './components/CommonDashboard';
import Menubar from './components/Menubar';
import {FooterContainer} from './containers/footer'
import Home from './components/Home';
//import CalendarFunc from './components/Calendar';
import DoctorProfile from './components/DoctorProfile'
import ActiveAppoint from './components/ActiveAppoint';

import Login from './components/Login';
import SignUp from './components/SignUp';
import DoctorsList from './components/AdminComponents/DoctorsList';
import DoctorsDetails from './components/AdminComponents/DoctorsDetails';
import DoctorsCreate from './components/AdminComponents/DoctorsCreate';
import PublicRoute from './Utils/PublicRoute';
import PrivateRoute from './Utils/PrivateRoute';
import IsAdmin from './Utils/IsAdmin';
import About from './components/About';
import AppointmentList from './components/appointmentlist';

// import {connect} from "react-redux";

function App() {
  return (
    <div className="App">
      
    <Router>
      
      <Routes>
      <Route path="/" element={<Home/>} />
      
      <Route path = "/doctors" exact element={ <PrivateRoute> <Menubar /> <CommonDashboard/> <FooterContainer /> </PrivateRoute> } />
      <Route path="/:id/details" exact element={<PrivateRoute> <Menubar /> <DoctorProfile/> <FooterContainer /> </PrivateRoute>}/>
      <Route path="/appointments" exact element={ <PrivateRoute> <Menubar /> <AppointmentList/> <FooterContainer /> </PrivateRoute>  }/>
      <Route path="/activeappointments" exact element={ <PrivateRoute> <Menubar /> <ActiveAppoint/> <FooterContainer /> </PrivateRoute>  }/>
      <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} />
      <Route path="/about" element={ <PublicRoute> <About/> <FooterContainer /></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute> <SignUp /> </PublicRoute>} />
      <Route path="/doctorsList" element={<IsAdmin> <Menubar /> <DoctorsList /> </IsAdmin>} />
      <Route path="/doctorsList/details" element={<IsAdmin> <Menubar /> <DoctorsDetails /> </IsAdmin>} />
      <Route path="/doctorsList/create" element={<IsAdmin> <Menubar /> <DoctorsCreate /> </IsAdmin>} />

      </Routes>

      </Router>
      
    </div>
  );
}

export default App;

// const mapStateToProps =(state)=>{
//   return {
//       cartValue : state.shop.cart
//   }
// }

// export default connect(mapStateToProps)(App);



//export default App;
