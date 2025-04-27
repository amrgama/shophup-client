import React, { useEffect } from 'react'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import FormInput from '../form/FormInput'
import SubmitBtn from '../form/SubmitBtn'
import Textarea from '../form/Textarea'
// import SignUpButton from '../header/header-bottom/SignUpButton'

const yupSchema = yup.object({
  name: yup.string().
  required("name is required"),
  email: yup.string().
  required("email is required").
  email(),
  subject: yup.string().
  required("subject is required"),
  message: yup.string()
  .min(5, "message length must be at least 5 characters")
  .max(250, "message length must be less than 150 characters"),
})

const ContactForm = ({}) => {

  const {
    handleSubmit,
    register,
    formState: {errors}
  } = useForm({
      resolver: yupResolver(yupSchema)
  })

  // const dispatch = useDispatch()
  // const {user, isLoading, isSuccess, isError, message} = useSelector(state => state.auth)
//   const navigate = useNavigate()

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
    <form 
        onSubmit={handleSubmit(submit)} 
        autoComplete="off"
        noValidate
        className="col-12 col-lg d-flex flex-column gap-4"
        style={{maxWidth: "1000px"}}
    >
        <div className="h-fit d-flex flex-wrap gap-4">
            <FormInput
            id={"name"}
            name={"name"}
            type={"text"}
            label={"Name"}
            placeholder={"Your name"}
            register={{...register("name")}}
            errorMsg={errors?.name?.message}
            extraClasses={"h-fit"}
            />
            <FormInput
                id={"email"}
                name={"email"}
                type={"email"}
                label={"email"}
                placeholder={"Your email address"}
                register={{...register("email")}}
                errorMsg={errors?.email?.message}
                extraClasses={"h-fit"}
            />
        </div>
        <FormInput
            id={"subject"}
            name={"subject"}
            type={"text"}
            label={"Subject"}
            placeholder={"Your subject"}
            register={{...register("subject")}}
            errorMsg={errors?.subject?.message}
        />
        <Textarea
            id={"message"}
            name={"message"}
            label={"message"}
            placeholder={"Your message"}
            register={{...register("message")}}
            errorMsg={errors?.message?.message}
        />
        <div className="col-12" style={{height: "55px"}}>
            <SubmitBtn text={"Get in"} isLoading={false} isDisabled={isDisapled()} />
        </div>
    </form>
  )
}

export default ContactForm