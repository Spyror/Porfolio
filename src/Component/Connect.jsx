import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Swal from 'sweetalert2'
import '../App.css'

const Connect=()=>{
  const validation = yup.object().shape({
    name:yup.string().required().min(3).max(22),
    email:yup.string().required().email()
  })

  const {register, handleSubmit,formState:{errors}} =useForm({
    resolver:yupResolver(validation)
  })

  const userValidation =(data)=>{
    console.log(data);
    Swal.fire({
      title:"Send",
      text:"Successfully send the message.",
      icon:"success",
      timer:1500,
      showConfirmButton:false
    })
  }


  return (<>
  <div className="outerBox">
    <h1 className='text-center cHeading'>Let's connect</h1>
    <div className="container">
      <div className="row cBox">
        <div className="col-6 cImgBox">
          <img src="/images/contact-me.svg"/>
        </div>
        <div className="col-6 cForm">
          <form onSubmit={handleSubmit((d)=>{userValidation(d)})}>
            <label htmlFor="name">
              <img src="/icons/user.svg"/>Name
            </label>
            <br />
            <input id='name' type="text" {...register('name')}/>
            <br />
            {errors.name && <p className='error'>{errors.name.message}</p>}
            <label htmlFor="email">
              <img src="/icons/at-symbol.svg" alt="" />Email
            </label>
            <br />
            <input id='email' type="email"{...register('email')}/>
            {errors.email && <p className='error'>{errors.email.message}</p>}
            <br />
            <label htmlFor="message">
              <img src="/icons/chat.svg" alt="" />Message
            </label>
            <br />
            <textarea id='message'/>
            <br />
            <input type='submit' className='btn btn-primary' id='button' value="Send Message"/>
              {/* <img src="/icons/telegram.svg"/> */}
          </form>
        </div>
      </div>
    </div>
  </div>
  </>)
}

export default Connect;