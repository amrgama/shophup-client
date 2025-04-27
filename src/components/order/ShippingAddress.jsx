import React, { useState } from 'react'
import FormInput from '../form/FormInput'
import AddressTitle from './AddressTitle'
import Select from '../UI-kits/form/Select';

const ShippingAddress = ({register, errors}) => {
    const [show, setShow] = useState(false);

    function handleOnChange(e){
        setShow(e.currentTarget.checked);
    }

  return (
    <div className='text-start'>
        <div className="form-check form-switch py-4">
            <input 
                onChange={handleOnChange}
                className="form-check-input border me-3" 
                style={{width: "40px", height: "20px"}}
                type="checkbox" 
                role="switch" 
                id="addShippingAddress"
            />
            <label className="form-check-label fw-500 text-muted" htmlFor="addShippingAddress">Add different shipping address</label>
        </div>
        {
            show &&
            <>
                <AddressTitle text={"Shipping Address"} />
                <div 
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
                <div className="d-flex flex-wrap gap-4">
                    <FormInput
                        id={"email"}
                        name={"email"}
                        type={"email"}
                        label={"Email"}
                        placeholder={"Your email"}
                        register={{...register("email")}}
                        errorMsg={errors?.email?.message}
                    />
                    <FormInput
                        id={"phone"}
                        name={"phone"}
                        type={"phone"}
                        label={"Phone number"}
                        placeholder={"Your phone number"}
                        register={{...register("phone")}}
                        errorMsg={errors?.phone?.message}
                    />
                </div>
                <div className="d-flex flex-wrap gap-4">
                    <Select 
                        id={"country"}
                        name={"country"}
                        type={"text"}
                        label={"Country / Region"}
                        emptyOption={"Your country / region"}
                        register={{...register("country")}}
                        errorMsg={errors?.country?.message} 
                    />
                    <FormInput
                        id={"city"}
                        name={"city"}
                        type={"text"}
                        label={"Town / City"}
                        placeholder={"Your town / city"}
                        register={{...register("city")}}
                        errorMsg={errors?.city?.message}
                    />
                </div>
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
                </div>
            </>
        }
    </div>
  )
}

export default ShippingAddress