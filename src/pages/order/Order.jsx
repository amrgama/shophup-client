import React, { useEffect } from 'react'
import Container from '../../components/UI-kits/Container'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from 'react-hook-form'
import SubmitBtn from '../../components/form/SubmitBtn'
import BillingAddress from '../../components/order/BillingAddress'
import ShippingAddress from '../../components/order/ShippingAddress'
import Textarea from '../../components/form/Textarea'
import OrderCard from '../../components/order/OrderCard'
import MainCard from '../../components/UI-kits/cards/MainCard'
import ActionButton from '../../components/UI-kits/ActionButton'

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

const Order = () => {

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
    <div id='order'>
      <Container extraClasses={"py-5"} >
        <form 
            onSubmit={handleSubmit(submit)} 
            autoComplete="off"
            noValidate
            className="w-100 d-flex flex-wrap justify-content-between gap-5"
          >
            <div className="col-12 col-lg">
              <BillingAddress register={register} errors={errors} />
              <ShippingAddress register={register} errors={errors} />
              <Textarea 
                id={"note"}
                name={"note"}
                label={"Order notes (optional)"}
                placeholder={"Notes about your order, e.g. special notes for delivery."}
                register={{...register("note")}}
                errorMsg={errors?.note?.message}
              />
            </div>
            <div 
              className="col-12 col-lg"
              style={{maxWidth: "520px"}}
            >
              <div className="position-sticky top-0 start-0">
                <OrderCard
                  placeOrderButton={
                    <div className="col-12" style={{height: "55px"}}>
                      <ActionButton
                        type={"submit"}
                        text={"Place order"} 
                        isLoading={false} 
                        isDisabled={isDisapled()}
                        extraClasses={"text-muted fw-bold py-3"} 
                      />
                    </div>
                  }
                />
              </div>
            </div>
        </form>
      </Container>
    </div>
  )
}

export default Order