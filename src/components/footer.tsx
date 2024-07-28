import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Designed by <a href="https://www.facebook.com/ntheanh1311" className="text-blue-400 hover:underline">nthees_anh</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer