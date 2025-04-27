import React from 'react'
import SubmitBtn from '../form/SubmitBtn'

const OrderCard = ({placeOrderButton}) => {
    const renderedProducts = <>
        <div className="d-flex justify-content-between">
            <span>Apple iPad MiniG2356</span>
            <span>$99.00</span>
        </div>
        <div className="d-flex justify-content-between">
            <span>Beats Pill + Portable Speaker</span>
            <span>$100.00</span>
        </div>
    </>
  return (
    <div 
        className='card gap-4 p-4 text-start rounded-4'
    >
        <span className="d-block fs-5 fw-bold mb-4">Your Order</span>
        <div className='d-flex flex-column gap-4 text-muted mb-auto'>
            {renderedProducts}
        </div>
        <hr className='my-2' />
        <div className="d-flex justify-content-between fs-5">
            <span className='fw-500'>Total</span>
            <span>$1.999.00</span>
        </div>
        <div className="d-flex justify-content-between">
            <span className='fw-500'>Shipping</span>
            <div className="d-flex flex-column gap-2">
                <div className="form-check gap-3">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        id="flatRate" 
                        name="shipping" 
                        value="3.00"
                        checked
                        readOnly
                    />
                    <label 
                        className="form-check-label" 
                        htmlFor="flatRate"
                    >
                        Flat Rate: <span className='fw-bold'>$3.00</span>
                    </label>
                </div>
                <div className="form-check gap-3">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        id="freeShipping" 
                        name="shipping" 
                        value="0"
                    />
                    <label 
                        className="form-check-label" 
                        htmlFor="freeShipping"
                    >
                        freeShipping
                    </label>
                </div>
            </div>
        </div>
        <div className="d-flex flex-column gap-2">
            <div className="form-check gap-3">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    id="checkPayment" 
                    name="payment" 
                    value="checkPayment"
                    defaultChecked
                />
                <label 
                    className="form-check-label" 
                    htmlFor="checkPayment"
                >
                    Check Payments
                </label>
            </div>
            <div className="form-check gap-3">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    id="directBankTransfer" 
                    name="payment" 
                    value="directBankTransfer"
                />
                <label 
                    className="form-check-label" 
                    htmlFor="freeShipping"
                >
                    Direct Bank Transfer
                </label>
            </div>
            <div className="form-check gap-3">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    id="cash" 
                    name="payment" 
                    value="0"
                />
                <label 
                    className="form-check-label" 
                    htmlFor="cash"
                >
                    Cash on Delivery
                </label>
            </div>
            <div className="form-check gap-3">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    id="paypal" 
                    name="payment" 
                    value="paypal"
                />
                <label 
                    className="form-check-label" 
                    htmlFor="paypal"
                >
                    Paypal
                </label>
            </div>
        </div>
        {placeOrderButton}
    </div>
  )
}

export default OrderCard