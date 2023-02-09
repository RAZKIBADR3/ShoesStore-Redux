import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Result from "./Result";

export default function Orders(){
    const items = useSelector(store=>store.items)
    const total = useSelector(store=>store.total)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:'total'})
    })
    return(
        <>
            <Header/>
            <div className="shopCart">
                    <div className="left">
                    <h2 className='my-2'>Orders</h2>
                    <hr className='my-4 text-light'/>
                        <div className="carts">
                            {
                                items.length>0
                                ?<Result/>
                                :<p className='emprty'>No Shoes Order Yet</p>
                            }
                        </div>
                    </div>
                    <div className="right p-4">
                        <h4 className='my-3 ps-2'>Order Summary</h4>
                        <hr className='my-3' />

                        <form>
                            <p className='m-0'>Payment method</p>
                            <select className="form-select" aria-label="Default select example">
                                <option value="1">Cash on delivery</option>
                                <option value="2" disabled>credit card payment('not available for now')</option>
                            </select>
                            <p className='m-0 mt-2'>Full Name</p>
                            <input type='text' name='name' className='form-control' placeholder='user' />
                            <p className='m-0 mt-2'>Email</p>
                            <input type='email' name='email' className='form-control' placeholder='user@email.com' />
                            <p className='m-0 mt-2'>Adresse</p>
                            <input type='text' name='AdressePostal' className='form-control' placeholder='adresse' />
                            <p className='m-0 mt-2'>Phone Number</p>
                            <input type='text' name='phone' className='form-control' placeholder='+1 00...' />
                            <p className='my-4 fw-semibold'>Total : ${total}.00</p>
                            <input type='button' value='Order'/>
                        </form>
                    </div>
                </div>
        </>
    )
}