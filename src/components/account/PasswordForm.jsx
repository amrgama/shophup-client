import React from 'react'
import SubmitBtn from '../form/SubmitBtn';
import FormInput from '../form/FormInput';
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'

const yupSchema = yup.object({
    newPassword: yup.string().required("new password is required"),
    confirmPassword: yup.string().required("confirm your new password")
})

const PasswordForm = () => {
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
        <div className="col-12 d-flex flex-column gap-4">
            <FormInput
                id={"new-password"}
                name={"newPassword"}
                type={"password"}
                label={"New password"}
                placeholder={"Enter your new password"}
                register={{...register("newPassword")}}
                errorMsg={errors?.newPassword?.message}
            />
        </div>
        <div className="col-12 d-flex flex-column gap-4">
            <FormInput
                id={"confirm-password"}
                name={"confirmPassword"}
                type={"password"}
                label={"Confirm password"}
                placeholder={"Enter your new password again"}
                register={{...register("confirmPassword")}}
                errorMsg={errors?.confirmPassword?.message}
            />
        </div>
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

export default PasswordForm