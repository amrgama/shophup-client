import React from 'react'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from 'react-hook-form'
import SubmitBtn from '../form/SubmitBtn'
import FormInput from '../form/FormInput'
import ActionButton from '../UI-kits/ActionButton'

const yupSchema = yup.object({
    coupon: yup.string()
    .required("You must enter your coupon")
    .min(10, "coupon length must be at least 5 characters")
    .max(150, "coupon length must be less than 150 characters")
})

const Coupon = ({}) => {

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
  }

  return (
    <form 
        onSubmit={handleSubmit(submit)} 
        autoComplete="off"
        noValidate
        className="w-100 d-flex flex-column flex-md-row flex-wrap align-items-center gap-4 p-4 border rounded-3"
    >
      <FormInput
        id={"coupon"}
        name={"coupon"}
        type={"text"}
        placeholder={"Your coupon"}
        register={{...register("coupon")}}
        errorMsg={errors?.coupon?.message}
      />

      <div className="col-12 col-md-4 col-lg-3" style={{height: "55px"}}>
        <ActionButton 
          text={"Add your coupon"} 
          type={"submit"} 
          isLoading={false} 
          isDisabled={isDisapled()} 
          extraClasses={"h-100 text-muted"}
        />
      </div>
    </form>
  )
}

export default Coupon