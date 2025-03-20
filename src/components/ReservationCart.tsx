'use client'
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch, UseDispatch } from "react-redux"
import { removeReservation } from "@/redux/features/cartSlice"

export default function ReservationCart() {

    const carItems = useAppSelector( (state)=> state.cartSlice.carItems )
    const dispatch = useDispatch<AppDispatch>()

    return(
        <>
        {   
            carItems.map((reservationItems)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                    key={reservationItems.carId}>
                        <div className="text-xl">{reservationItems.carModel}</div>
                        <div className="text-sm">Pick-up {reservationItems.pickupDate}
                            from {reservationItems.pickupLocation}
                        </div>
                        <div className="text-sm">Return {reservationItems.returnDate}
                            to {reservationItems.returnLocation}
                        </div>
                        <div className="text-md">Duration: {reservationItems.numofDays}</div>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                        onClick={()=>{dispatch(removeReservation(reservationItems))}}>
                            Remove from Cart
                        </button>
                </div>
            ))
        }
        </>
    )
}