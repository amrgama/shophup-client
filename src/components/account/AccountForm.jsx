import React from 'react'
import SubmitBtn from '../form/SubmitBtn';
import FormInput from '../form/FormInput';
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'

const yupSchema = yup.object({
    yourName: yup.string().required("your name is required"),
    userName: yup.string().required("user name is required"),
    phone: yup.number("enter valid number")
    .required("your phone is required"),
    email: yup.string().
    required("email is required").
    email(),
})

const AccountForm = () => {
    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(yupSchema)
    })

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
        className="w-100 d-flex flex-wrap gap-4 m-auto"
    >
        <div className="col-12 col-md d-flex flex-column gap-4">
            <FormInput
                id={"yourName"}
                name={"yourName"}
                type={"text"}
                label={"Your name"}
                placeholder={"Enter your name"}
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
        </div>
        <div className="col-12 col-md d-flex flex-column gap-4">
            <FormInput
                id={"phone"}
                name={"phone"}
                type={"phone"}
                label={"Your phone number"}
                placeholder={"Enter your phone number"}
                register={{...register("phone")}}
                errorMsg={errors?.phone?.message}
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
        </div>
        {/* <div className="col-12 d-flex flex-column gap-4">
            <FormInput
                id={"new-password"}
                name={"newPassword"}
                type={"password"}
                label={"New password"}
                placeholder={"Enter your new password"}
                register={{...register("newPassword")}}
                errorMsg={errors?.newPassword?.message}
            />
        </div> */}
        <div className="col-12 d-flex align-items-center gap-4 mt-4">
            <div className="w-50" style={{height: "55px"}}>
                <SubmitBtn 
                    text={"Update"} 
                    isLoading={false} 
                    isDisabled={isDisapled()} 
                    extraClasses={"btn-secondary"}
                />
            </div>
            <div className="w-50" style={{height: "55px"}}>
                <button 
                    type='button'
                    className='w-100 h-100 btn border-1 border-danger bg-white text-danger fw-500 shadow-sm px-3 py-2 lh-lg'
                >
                    Cancel
                </button>
            </div>
        </div>
    </form>
  )
}

export default AccountForm