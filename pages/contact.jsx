import React, { useState } from 'react'
import { ValidationError, useForm } from '@formspree/react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'

const header = {
  title: 'Contact',
  img: "url('/gec_banner_bg.jpg')",
}

const contact = () => {
  const [state, handleSubmit] = useForm('myyokbyj')
  if (state.succeeded) {
    return (
      <>
        <Navbar />
        <div className="w-screen h-screen grid grid-cols-1 place-content-center text-center">
          <p className="font-Montserrat text-5xl border-2 px-4 py-2">
            Message sent!
          </p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <PageTitle data={header} />
      <div className="flex items-center min-h-screen bg-white font-Roboto">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm  border-2 border-solid border-dark">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-blue">Get in Touch</h1>
              <p className="text-dark ">
                Fill up the form below to send us a message.
              </p>
            </div>
            <div className="m-7">
              <form
                onSubmit={handleSubmit}
                action="https://api.web3forms.com/submit"
                method="POST"
                id="form"
              >
                <div className="mb-6">
                  <label for="name" className="block mb-2 text-sm text-dark">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-dark rounded-md focus:outline-none focus:ring focus:ring-orange focus:border-dark"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-6">
                  <label for="email" className="block mb-2 text-sm text-dark">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-dark rounded-md focus:outline-none focus:ring focus:ring-orange focus:border-dark"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-6">
                  <label for="phone" className="text-sm text-dark">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+1 (555) 1234-567"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-dark rounded-md focus:outline-none focus:ring focus:ring-orange focus:border-dark"
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-6">
                  <label for="message" className="block mb-2 text-sm text-dark">
                    Your Message
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-dark rounded-md focus:outline-none focus:ring focus:ring-orange focus:border-dark"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white text-xl bg-green rounded-md border-solid border-4 border-green hover:border-orange focus:bg-green-focus focus:outline-none"
                  >
                    Send Message
                  </button>
                </div>
                <p className="text-base text-center text-gray-400" id="result"></p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default contact
