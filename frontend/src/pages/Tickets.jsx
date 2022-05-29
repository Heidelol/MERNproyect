import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import { useParams } from 'react-router-dom'
import {getTickets, reset} from '../features/ticket/ticketSlice'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

function Tickets() {
  const {ticket, isLoading, isSuccess, isError, message} = useSelector((state) => state.tickets)

  const params = useParams()
  const dispatch = useDispatch()
  const {ticketId} = useParams()

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    dispatch(getTickets(ticketId))
  },[isError, message, ticketId])

  if(isLoading){
    return <Spinner />
  }

  if(isError){
    return <h3>Something Went Wrong</h3>
  }

  return (
    <div className='ticket-page'>
      <header className="ticket-header">
        <BackButton ulr='/tickets' />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
      </header>
    </div>
  )
}

export default Tickets