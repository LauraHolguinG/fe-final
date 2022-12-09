import React from "react";
import { useState } from 'react';
import  {useContextGlobal}  from '../Components/utils/global.context';
import { useEffect } from "react";

const Form = () => {
  const {formStyle} = useContextGlobal();
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
  })
  const validEmail = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
  const validName = new RegExp(/[a-zA-Z]{5,30}$/g);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(user));
    setSubmit(true);
  }

  useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && submit){
      console.log(user)
    }
  },[formErrors])

  const validate = (user) => {
    const errors = {};
    if(!user.name){
      errors.name = "Se requiere un nombre de usuario"
    }else if(!validName.test(user.name.trim())){
      errors.name = true;
    }

    if(!user.email){
      errors.email = "Se requiere un email"
    }else if(!validEmail.test(user.email)){
      errors.email = true;
    }
    return errors;
  }

  const handleChange = (e) => {
    setUser({
        ...user,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="name-input" >Name</label>
        <input type="text" name='name' id="name-input" onChange={handleChange} />
        <p>{formErrors.name}</p>
        <label htmlFor="email-input">Email</label>
        <input type="text" name='email' id="email-input" onChange={handleChange}/>
        <p>{formErrors.email}</p>
        <button>Registrarse</button>
      </form>
      {(formErrors.name || formErrors.email) === true && <p>Por favor verifique los datos nuevamente</p>}
      {Object.keys(formErrors).length === 0 && submit && <p>Gracias {user.name} te contactaremos cuanto antes via email</p>}
    </div>
  );
};

export default Form;
