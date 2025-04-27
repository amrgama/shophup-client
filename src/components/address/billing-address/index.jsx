import React from 'react'
import AddressHeader from '../AddressHeader'
import BillingAddressForm from './BillingAddressForm'

const BillingAddress = () => {
  return (
    <div className='w-100 d-flex flex-column gap-4'>
        <AddressHeader text={"Billing Address"} link={"/my-account/address"} />
        <BillingAddressForm />
    </div>
  )
}

export default BillingAddress