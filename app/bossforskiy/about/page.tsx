import About from '@/components/Sections/About'
import BackstageShowcase from '@/components/Sections/BackstageShowcase'
import BreadCrumb from '@/components/Sections/BreadCrumb'
import CallToAction from '@/components/Sections/CallToAction'
import React from 'react'

const page = () => {
  return (
    <>
        <BreadCrumb />
        <About />
        <BackstageShowcase />
        <CallToAction />
    </>
  )
}

export default page