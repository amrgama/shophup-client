import React from 'react'
import FormInput from '../../form/FormInput';
import SubmitBtn from '../../form/SubmitBtn';
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'
import Select from '../../UI-kits/form/Select';


const yupSchema = yup.object({
    firstName: yup.string().required("Your first name is required"),
    lastName: yup.string().required("Your last name is required"),
    companyName: yup.string(),
    country: yup.string().required("Country is required"),
    streetAddress: yup.string().required("Street address is required"),
    city: yup.string().required("City or town is required"),
    state: yup.string().required("State is required"),
    zipCode: yup.number("You must enter your zip code as a number")
    .required("Zip Code is required")
})

const ShippingAddressForm = () => {
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
        className="w-100 d-flex flex-column gap-4"
    >
        <div className='d-flex flex-wrap gap-4'>
            <FormInput
                id={"firstName"}
                name={"firstName"}
                type={"text"}
                label={"First name"}
                placeholder={"Your first name"}
                register={{...register("firstName")}}
                errorMsg={errors?.firstName?.message}
            />
            <FormInput
                id={"lastName"}
                name={"lastName"}
                type={"text"}
                label={"Last name"}
                placeholder={"Your last name"}
                register={{...register("lastName")}}
                errorMsg={errors?.lastName?.message}
            />
        </div>
        <FormInput
        id={"companyName"}
        name={"companyName"}
        type={"text"}
        label={"company name (optional)"}
        placeholder={"Your company name"}
        register={{...register("companyName")}}
        errorMsg={errors?.companyName?.message}
        />
        <Select
            id={"country"}
            name={"country"}
            type={"text"}
            label={"Country / Region"}
            emptyOption={"Your country / region"}
            register={{...register("country")}}
            errorMsg={errors?.country?.message}
            extraClasses={"h-fit"}
        />
        <FormInput
            id={"city"}
            name={"city"}
            type={"text"}
            label={"Town / City"}
            placeholder={"Your town / city"}
            register={{...register("city")}}
            errorMsg={errors?.city?.message}
            extraClasses={"h-fit"}
        />
        <FormInput
            id={"streetAddress"}
            name={"streetAddress"}
            type={"text"}
            label={"Street address"}
            placeholder={"House number and street name"}
            register={{...register("streetAddress")}}
            errorMsg={errors?.streetAddress?.message}
        />
        <FormInput
            id={"apartment"}
            name={"apartment"}
            type={"text"}
            placeholder={"Apartment, suit, unit, etc. (optional)"}
            register={{...register("apartment")}}
            errorMsg={errors?.apartment?.message}
        />
        <div className="d-flex flex-wrap gap-4">
        <FormInput
            id={"state"}
            name={"state"}
            type={"text"}
            label={"State"}
            placeholder={"Your state"}
            register={{...register("state")}}
            errorMsg={errors?.state?.message}
        />
        <FormInput
            id={"zip"}
            name={"zip"}
            type={"text"}
            label={"Zip code"}
            placeholder={"Your zip code"}
            register={{...register("zip")}}
            errorMsg={errors?.zip?.message}
        />
        </div>
        <div style={{width: "300px", height: "55px"}}>
            <SubmitBtn
                text={"Save address"} 
                isLoading={false} 
                isDisabled={isDisapled()} 
                extraClasses={"btn-secondary"}
            />
        </div>
    </form>
  )
}

export default ShippingAddressForm