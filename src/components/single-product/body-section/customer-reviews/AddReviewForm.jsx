import React, { useEffect } from 'react'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import FormInput from '../../../form/FormInput'
import { useForm } from 'react-hook-form'
import SubmitBtn from '../../../form/SubmitBtn'
import { TiStar } from "react-icons/ti";
import RatingField from './RatingField'
import Textarea from '../../../form/Textarea'
import UploadInput from '../../../form/UploadInput'

const yupSchema = yup.object({
    review: yup.string()
    .min(5, "review length must be at least 5 characters")
    .max(150, "review length must be less than 150 characters"),
    files: yup.array()
    .max("5", "You must only upload up to 5 images or videos"),
    email: yup.string().
    required("email is required").
    email(),
    password: yup.string().
    required("password is required").
    min(8, "password length must be at least 8")
})

const AddReviewForm = ({}) => {

  const {
    handleSubmit,
    register,
    formState: {errors}
  } = useForm({
      resolver: yupResolver(yupSchema)
  })


  // useEffect(()=>{

  //     if(isError){
  //         toast.error(message)
  //     }

  //     if(isSuccess && Object.keys(user).length){
  //         navigate("/")
  //     }

  // }, [user, isLoading, isSuccess, isError, navigate, dispatch])

  const isDisapled = ()=> {
      if(Object.keys(errors).length){
          return true
      }
      return false
  }
  
  const submit = (data)=>{
    console.log("submitData", data)
    if(data){
      // dispatch(login(data))
    }
  }

  return (
    <div className='py-5'>
      <div className="container d-flex flex-column gap-4">
        <span className="fs-5">Add a review</span>
        <span>Your email address will not be published. Required fields are marked <span className="text-danger fs-5">*</span></span>
        <form 
          onSubmit={handleSubmit(submit)} 
          autoComplete="off"
          noValidate
          className="w-100 d-flex flex-column gap-4"
        >
            <RatingField />
            <Textarea
              id={"review"}
              name={"review"}
              label={"Review"}
              placeholder={"Your review"}
              register={{...register("review")}}
              errorMsg={errors?.review?.message}
            />
            <UploadInput
              id={"files"}
              name={"files"}
              label={"Upload up to 5 images or videos"}
              register={{...register("files")}}
              errorMsg={errors?.files?.message}
            />
            <FormInput
              id={"fullName"}
              name={"fullName"}
              type={"text"}
              label={"Full name"}
              placeholder={"Your full name"}
              register={{...register("fullName")}}
              errorMsg={errors?.fullName?.message}
            />
          <FormInput
            id={"email"}
            name={"email"}
            type={"email"}
            label={"email"}
            placeholder={"email"}
            register={{...register("email")}}
            errorMsg={errors?.email?.message}
          />
          <div className="form-check d-flex flex-wrap align-items-center">
            <input className="form-check-input border border-1 border-dark me-2" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
               Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          <div className="col-12" style={{height: "55px"}}>
            <SubmitBtn text={"Add review"} isLoading={false} isDisabled={isDisapled()} />
          </div>
          {/* <p className="text-muted">
            Don't have an account? 
            <SignUpButton extraClasses={"nav-link text-decoration-underline"}/>
          </p> */}
        </form>
      </div>
    </div>
  )
}

export default AddReviewForm