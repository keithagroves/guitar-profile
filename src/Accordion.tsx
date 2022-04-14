import React, { Component, useEffect, useState } from 'react'
import AccordionItem from './AccordianItem'
import './Accordion.css'

interface Item {
  title: string
  content: string
}
const Accordion = () => {
  const items: Item[] = [
    {
      title: 'In Home and Remote Classes',
      content:
        'Lessons can take place in-person or online! Online lessons are a great option if students are outside the San Diego area!',
    },
    {
      title: 'Expertise',
      content:
        'John William has been studying the art of guitar playing for over 30 years and graduated from Musicians Institute (MI). John has since stayed involved in the industry on multiple levels working at places like Gibson and serving as the Vice President of Tronical USA.',
    },
    {
      title: 'Styles',
      content:
        'Because John Williams has an eclectic taste and has skills in multiple genres, students can choose from any style that their heart desires, and John will be your dedicated teacher.',
    },
    {
      title: 'Age/level',
      content:
        'Lessons are recommended for students ages 5 and up. Whether you are a brand new beginner or an expert seeking to hone your craft, regular lessons are a great option. Anyone can start and learn this wonderful skill. Sign up today!.',
    },
    {
      title: 'Pricing',
      content: 'First lesson is FREE! Guitar $40 for 30 min lesson, $80 for a 1 hour lesson, Ukulele $35 for 30 min lesson, $70 fo a 1 hour lesson',
    },
  ]
  return (
    <div className="accordion-modal">
      {items.map((item, key) => (
        <AccordionItem key={key} title={item.title} content={item.content} />
      ))}
    </div>
  )
}

export default Accordion
