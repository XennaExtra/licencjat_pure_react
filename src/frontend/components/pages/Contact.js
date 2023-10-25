import React from 'react'
import { ContactForm } from '../ContactForm'
import './page_css/contact.scss'

export function Contact() {
  return (
    <>
      <main className='contactBlock'>
        <ContactForm/>
      </main>
    </>
  )
}
