import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import AuthImagePattern from '../Components/AuthImagePattern'
import {Eye, EyeOff, Loader2, Lock, Mail, MessageSquare , User} from 'lucide-react'
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import toast from 'react-hot-toast'

const  SignupPage = () => {
  const [showPassword ,setShowPassword] = useState(false);

  const [formData ,setFormData] = useState({
    fullName:"",
    email:"",
    password:"",
  });

  const {signup , isSigningUp} = useAuthStore();
  
  const validateForm =()=>{
    if(!formData.fullName.trim()) return toast.error("fullname is required");
    if(!formData.email.trim()) return toast.error("email is required");
   // if(!/S+@+\S+\.\S+/.test(formData.email)) return toast.error("email is Invalid")
    if(!formData.password) return toast.error("fullname is required");
    if(formData.password.length <6 ) return toast.error("at least 6 character password") 
     return true;

    
  };
  const handleSubmit =(e)=>{
    e.preventDefault();
    const success = validateForm();
    if(success === true) signup(formData);
  }

  return (

    <div className=' min-h-screen grid lg:grid-cols-2'>
      
      {/* {left side that creation Account } */}
      <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
        {/* {logo} */}
        <div className='w-full max-w-md space-y-8'>
          <div className='text-center mb-8'>
            <div className=' flex flex-col items-center gap-2 group'>
            <div className=' size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg:-primary/20 transition-colors'>
              <MessageSquare className=" size-6 text-primary"  />
              </div>
              <h1 className='text-2xl font-bold mt-2'>Create Account</h1>
              <p className=' text-base-content/60'>Get Started with your free Account</p>
            </div>
            </div>
            <form onSubmit={handleSubmit} className='space-y-6'   >
              <div className='from-control'>
                <label  className=' label'>
                  <span className='label-text font-medium'>Full Name</span>
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <User className='size-5 text-base-content/40'/>
                  </div>
                  <input type="text"
                  className={`input input-border w-full pl-10`}
                  placeholder='Prashil Lonare'
                  value={formData.fullName}
                  onChange={(e)=> setFormData({...formData ,fullName: e.target.value})} />
                </div>
              </div>
              {/* {email tag colm} */}

              <div className='from-control'>
                <label  className=' label'>
                  <span className='label-text font-medium'>E-mail</span>
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <Mail className='size-5 text-base-content/40'/>
                  </div>
                  <input type="email"
                  className={`input input-border w-full pl-10`}
                  placeholder='you@exsample.com'
                  value={formData.email}
                  onChange={(e)=> setFormData({...formData ,email: e.target.value})} />
                </div>
              </div>
                {/* {password field with hidden password FEATURE} */}
                <div className='from-control'>
                <label  className=' label'>
                  <span className='label-text font-medium'>Password</span>
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <Lock className='size-5 text-base-content/40'/>
                  </div>
                  <input type= {showPassword ?"text": "password"}
                  className={`input input-border w-full pl-10`}
                  placeholder='********'
                  value={formData.password}
                  onChange={(e)=> setFormData({...formData ,password: e.target.value})} />

                    {/* {submit btn} */}
                  <button type="button"
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                  onClick={()=>setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className=' size-5 text-base-content/40'/>
                        ):(
                        <Eye className=' size-5 text-base-content/40'/>
                        )}
                  </button>
                </div>
              </div>

                      {/* { the btn of creatrin acccount} */}
                      <button type='submit' className='btn btn-primary w-full' disabled={isSigningUp}>
                        {isSigningUp ? (
                          <>
                          <Loader2 className='size-5 animate-bounce'/>
                          Loading bhai.....
                          </>
                        ):(
                          "Create Account bhai"
                        )}
                      </button>
            </form>
            <div className='text-center'>
              <p className='text-base-content/60'>
              Already  have an account ? {" "}
              <Link to="/login" className='link link-primary' >
              Sign In </Link> </p>
            </div>
        </div>
      </div>
              
              {/* { rigth side community side} */}

          <AuthImagePattern 
          title=" Join Our Community"
          subtitle =" connect with friends , share moments, and stay in touch with your friends"/>

    </div>


  )
}

export default SignupPage;