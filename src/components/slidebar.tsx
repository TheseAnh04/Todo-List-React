import React from 'react'

type Props = {}

const Slidebar = (props: Props) => {
  return (
    <div>
        <aside className="md:col-span-1 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Stats</h2>
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total</span>
                        <span className="font-bold text-gray-800">0</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Completed</span>
                        <span className="font-bold text-green-500">0</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Pending</span>
                        <span className="font-bold text-yellow-500">0</span>
                    </div>
                </div>
            </aside>
    </div>
  )
}

export default Slidebar