import React, { useState } from 'react'
import './Accordion.css'
const AccordionItem = ({
  title,
  content,
}: {
  title: string
  content: string
}) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion-item">
      <div className="accordion" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
      </div>
      {isActive && <div className="panel">{content}</div>}
    </div>
  )
}

export default AccordionItem
