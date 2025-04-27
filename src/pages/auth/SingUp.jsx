import React, { useEffect } from 'react'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import FormInput from '../../components/form/FormInput'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import {DiApple} from "react-icons/di"
import {TiSocialTwitter, TiSocialFacebook} from "react-icons/ti"
import {PiGoogleLogoBold} from "react-icons/pi"
import SubmitBtn from '../../components/form/SubmitBtn'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../features/auth/authSlice'
// import SignInButton from '../header/header-bottom/SignInLink'

const yupSchema = yup.object({
    yourName: yup.string().required("your name is required"),
    userName: yup.string().required("user name is required"),
    email: yup.string().
    required("email is required").
    email(),
    password: yup.string().
    required("password is required")
    // .min(8, "password length must be at least 8")
})

const SignUp = ({}) => {

  const {
    handleSubmit,
    register,
    formState: {errors}
  } = useForm({
      resolver: yupResolver(yupSchema)
  })

  // const dispatch = useDispatch()
  // const {user, isLoading, isSuccess, isError, message} = useSelector(state => state.auth)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const {user, isLoading, isSuccess, isError, message} = useSelector(state => state.auth)
    
  useEffect(()=>{

      if(isError){
          toast.error(message)
      }

      if(isSuccess && Object.keys(user).length){
          toast.success(`Congratulations your new account have been successfully created`);
          navigate("/sign-in");
      }

  }, [user, isLoading, isSuccess, isError, navigate, dispatch])

  const isDisapled = ()=> {
    if(Object.keys(errors).length){
      return true
    }
    return false
  }
  
  const submit = (data)=>{
    console.log("submitData", data)
    if(data){
      dispatch(signup(data))
    }
  }

  return (
    <main className='min-vh-100 py-5'>
      <div className="container d-flex flex-column h-100">
        <h1 className="text-dark fs-2 fw-bold mx-auto mb-5">Sign-Up</h1>
        <form 
          onSubmit={handleSubmit(submit)} 
          autoComplete="off"
          noValidate
          className="w-100 d-flex flex-column gap-4 m-auto"
          style={{maxWidth: "500px"}}
        >
            <FormInput
                id={"yourName"}
                name={"yourName"}
                type={"text"}
                label={"Your name"}
                placeholder={"your name"}
                register={{...register("yourName")}}
                errorMsg={errors?.yourName?.message}
            />
            <FormInput
                id={"userName"}
                name={"userName"}
                type={"text"}
                label={"Username"}
                placeholder={"username"}
                register={{...register("userName")}}
                errorMsg={errors?.userName?.message}
            />
          <FormInput
            id={"email"}
            name={"email"}
            type={"email"}
            label={"Username or email address"}
            placeholder={"email"}
            register={{...register("email")}}
            errorMsg={errors?.email?.message}
          />
          <FormInput
            id={"password"}
            name={"password"}
            type={"password"}
            label={"Password"}
            placeholder={"password"}
            register={{...register("password")}}
            errorMsg={errors?.password?.message}
          />
          <div className="form-check d-flex flex-wrap align-items-center">
            <input className="form-check-input border border-1 border-dark me-2" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label me-auto" htmlFor="flexCheckDefault">
              Default checkbox
            </label>
            <Link className="nav-link text-decoration-underline fw-500 text-dark">Lost your password</Link>
          </div>
          <div className='col-12 d-flex flex-column gap-2'>
            <div className="col-12" style={{height: "55px"}}>
              <SubmitBtn text={"Create account"} isLoading={isLoading} isDisabled={isDisapled()} />
            </div>
            <Link to={"/sign-in"} className="nav-link fw-500 text-primary text-end">have account already</Link>
          </div>
         
          {/* <p className="text-muted">
            If you have an account?
            <SignInButton extraClasses={"nav-link text-decoration-underline px-1"}/>
          </p> */}
          <div className="d-flex align-items-center lh-lg">
            <hr className='col d-block m-0'/>
            <span className='fs-4 text-primary fw-boider px-2'>Or</span>
            <hr className='col d-block m-0'/>
          </div>
          <div className="signin-with d-flex flex-wrap align-items-center">
            <div className="col-3 p-2">
              <Link to={"/"} className="nav-link btn btn-secondary py-2 shadow-sm">
                <TiSocialFacebook className="fs-5 text-dark" />
              </Link>
            </div>
            <div className="col-3 p-2">
              <Link to={"/"} className="nav-link btn btn-secondary py-2 shadow-sm">
                <PiGoogleLogoBold className="fs-5 text-dark" />
              </Link>
            </div>
            <div className="col-3 p-2">
              <Link to={"/"} className="nav-link btn btn-secondary py-2 shadow-sm">
                <TiSocialTwitter className="fs-5 text-dark" />
              </Link>
            </div>
            <div className="col-3 p-2">
              <Link to={"/"} className="nav-link btn btn-secondary py-2 shadow-sm">
                <DiApple className="fs-5 text-dark" />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default SignUp