import React from 'react'
import AddressHeader from '../AddressHeader'
import ShippingAddressForm from './ShippingAddressForm'

const ShippingAddress = () => {
  return (
    <div className='w-100 d-flex flex-column gap-4'>
        <AddressHeader text={"Shipping Address"} link={"/my-account/address"} />
        <ShippingAddressForm />
    </div>
  )
}

export default ShippingAddress