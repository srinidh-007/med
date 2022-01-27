import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUserSession, getUser } from '../../Utils/Common';
import DoctorsCreateStyles from './DoctorsCreate.module.css';

const DoctorsCreate = () => {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    navigate('/login');
  }




  const createPost = async (e) => {
    let form = document.querySelector('form');
    e.preventDefault();

    const doc = {
      f_name: form.f_name.value,
      l_name: form.l_name.value,
      email: form.email.value,
      user_name: form.user_name.value,
      mobile: form.mobile.value,
      dob: form.dob.value,
      city: form.city.value,
      state: form.state.value,
      specialization: form.specialization.value,
      year_of_exp: form.year_of_exp.value,
      is_admin: false,
      is_doctor: true,
    }

    await fetch('http://localhost:8000/doctors', {
      method: 'POST',
      body: JSON.stringify(doc),
      headers: { 'Content-Type': 'application/json' }
    })

    window.location.replace('/doctorsList')
  }


const CreateDoctor = () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', createPost);
}


  return (
    <div>
      <h1>Welcome to the Doctor's List, {user.name}! </h1> <br /><br />

      <input
        type="button"
        value="Logout"
        onClick={handleLogout}
      />

      <br /><br />

      <div className={`container ${DoctorsCreateStyles.container}`}>
              <form className={DoctorsCreateStyles.account_form}>
                  <fieldset>
                      <div className={`row-header ${DoctorsCreateStyles.row_header}`}>
                      <div className={`number ${DoctorsCreateStyles.number}`}>🩺</div>
                      <h1>Add New Doctor</h1> <br />
                      </div>
                      <div className={`row ${DoctorsCreateStyles.row}`}>
                          <div className={`row__field ${DoctorsCreateStyles.row__field}`}>
                              <label for='f_name'>First Name</label>
                              <input name="f_name" className={`icon ${DoctorsCreateStyles.create_form_input} ${DoctorsCreateStyles.icon}`}  type="text" autocomplete="on" placeholder="" required />
                          </div>
                          <div className={`row__field ${DoctorsCreateStyles.row__field}`}>
                              <label for='l_name'>Last Name</label>
                              <input name="l_name" className={`icon ${DoctorsCreateStyles.create_form_input} ${DoctorsCreateStyles.icon}`}  type="text"  autocomplete="on" placeholder="" required />
                          </div>
                      </div>
                      <div className={`row ${DoctorsCreateStyles.row}`}>
                        <div className={`row__field ${DoctorsCreateStyles.row__field}`}>
                            <label for='email'>Email</label>
                            <input name="email" className={DoctorsCreateStyles.create_form_input}  type="email" placeholder="" autocomplete="on" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                        </div>
                        <div className={`row__field ${DoctorsCreateStyles.row__field}`}>
                            <label for='user_name'>User Name</label>
                            <input name="user_name" className={`icon ${DoctorsCreateStyles.create_form_input} ${DoctorsCreateStyles.icon}`}  type="text"  autocomplete="on" placeholder="" required />
                        </div>
                      </div>
                      <div className={`row ${DoctorsCreateStyles.row}`}>
                        <div className={`row__field ${DoctorsCreateStyles.row__field}`}>
                            <label for='mobile'>Phone Number</label>
                            <input name="mobile" className={DoctorsCreateStyles.create_form_input}  type="text" placeholder="" autocomplete="on" required />
                        </div>
                        <div className={`row__field ${DoctorsCreateStyles.row__field}`}>
                            <label for='dob'>D.O.B</label>
                            <input name="dob" className={`icon ${DoctorsCreateStyles.create_form_input} ${DoctorsCreateStyles.icon}`} type="text"  autocomplete="on" placeholder="dd/mm/yyyy" required />
                        </div>
                      </div>
                      <div className={`row ${DoctorsCreateStyles.row}`}>
                        <div className={`row__field ${DoctorsCreateStyles.row__field}`}>
                            <label for='city'>City</label>
                            <input name="city" className={DoctorsCreateStyles.create_form_input}  type="text" placeholder="" autocomplete="on" required />
                        </div>
                        <div className={`row__field ${DoctorsCreateStyles.row__field}`}>
                            <label for='state'>State</label>
                            <input name="state" className={`icon ${DoctorsCreateStyles.create_form_input} ${DoctorsCreateStyles.icon}`} type="text"  autocomplete="on" placeholder="" required />
                        </div>
                      </div>

                      <div className={`row ${DoctorsCreateStyles.row}`}>
                        <div className={`row__field ${DoctorsCreateStyles.row__field}`}>
                            <label for='specialization'>Specialized IN</label>
                            <input name="specialization" className={DoctorsCreateStyles.create_form_input}  type="text" placeholder="" autocomplete="on" required />
                        </div>
                        <div className={`row__field ${DoctorsCreateStyles.row__field}`}>
                            <label for='year_of_exp'>Years of Experience</label>
                            <input name="year_of_exp" className={DoctorsCreateStyles.create_form_input}  type="text"  autocomplete="on" placeholder="" required />
                        </div>
                      </div>

                      <a href="/doctorsList"><input type="button" name="previous" className={` button--light button ${DoctorsCreateStyles.create_form_input} ${DoctorsCreateStyles.button} ${DoctorsCreateStyles.button__light}`} value="< Back" /></a>
                      <a ><input onClick={CreateDoctor} type="submit" name="next" className={` button--dark button ${DoctorsCreateStyles.create_form_input} ${DoctorsCreateStyles.button} ${DoctorsCreateStyles.button__dark}`} value="Create Account >" /></a>
                  </fieldset>
              </form>

          </div>

    </div>
  );
}

export default DoctorsCreate;
