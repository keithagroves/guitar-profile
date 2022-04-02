import React, { Component, useEffect, useState } from 'react'
import './Testimonial.css'

const Testimonial = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(1)
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  const data = ['john is the best', 'all other teachers suck!']
  const [timer, setTimer] = useState(0)
  return (
    <div className="container-fluid testimonial slideOutLeft fadeIn">
      <p>{data[timer]}</p>
    </div>
  )
}

export default Testimonial
