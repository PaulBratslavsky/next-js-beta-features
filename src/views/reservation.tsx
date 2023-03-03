import ReservationForm from '@/components/ReservationForm'
import ReservationHeader from '@/components/ReservationHeader'
import React, { Fragment } from 'react'

export default function Reservation() {
  return (
    <Fragment>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <ReservationHeader />
          <ReservationForm />
        </div>
      </div>
    </Fragment>
  )
} 