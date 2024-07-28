import React from 'react'
import Header from '../components/header'
import Slidebar from '../components/slidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

type Props = {}

const Dashbroad = (props: Props) => {
  return (
    <>
      <div className='bg-gray-200 min-h-screen'>
        <div className='container mx-auto p-8 min-h-screen'>
          <Header/>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <Slidebar/>
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Dashbroad