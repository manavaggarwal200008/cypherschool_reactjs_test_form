import React from 'react'
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
 
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("username")} placeholder='Email' />
                    <input type="text" {...register("password")} placeholder='password' />
                     
                    <button className='btn'>Sign In</button>
                    <button className='btn'>Login As Guest User</button>
                    <h6>New to Moviebox? Sign Up Now</h6>
                </form>

            </div>
            <div className="col-2">
               
            </div>
        </div>
    </section>
  )
}
