import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <header className="mb-8">
            <h1 className="text-4xl font-bold text-center text-gray-800">My Todo Dashboard</h1>
        </header>
    </div>
  )
}

export default Header