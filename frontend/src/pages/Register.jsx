import React from 'react'
import {useState} from 'react'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'

function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })


  const {name, email, password, password2} = formData

  const onChange = (e) => {
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()


    if(password !== password2) {
      toast.error('passwords do not match')
    }

  }


  return (
    <>
       <section className="heading">
         <h1>
           <FaUser /> Register
         </h1>
         <p>Please create an account</p>
       </section>


       <div className="section form">
         <form onSubmit={onSubmit}>
           <div className="form-group">
             <input type="text" required className="form-control" id='name' name='name' value={name} onChange={onChange} placeholder='Enter your name' />
           </div>

           <div className="form-group">
             <input type="email" required className="form-control" id='email' name='email' value={email} onChange={onChange} placeholder='Enter your email' />
           </div>

           <div className="form-group">
             <input type="password" required  className="form-control" id='password' name='password' value={password} onChange={onChange} placeholder='Enter your password' />
           </div>

           <div className="form-group">
             <input type="password" required  className="form-control" id='password2' name='password2' value={password2} onChange={onChange} placeholder='Confirm password' />
           </div>
           <div className="formgroup">
             <button className="btn btn-block">
               Submit
             </button>
           </div>
         </form>
       </div>
    </>
  )
}

export default Register