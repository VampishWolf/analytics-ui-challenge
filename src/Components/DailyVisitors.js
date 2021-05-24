import React from 'react'
// import './DailyVisitors.scss'

export default function DailyVisitors() {
    return (
        <div className="bg-white shadow-sm divide-y rounded text-left border border-gray-200">
            <div className="font-semibold py-4 px-8">Daily Visitors
                <select name="year" id="year" className="flex-none pr-4 float-right border-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100">
                    <option value="2018">2018</option>
                </select>
                <select name="month" id="month" className="flex-none pr-4 mx-2 float-right border-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100">
                    <option value="December">December</option>
                </select>
            </div>
            <div className="font-semibold py-4 px-8">Chart will appear!</div>
        </div>
    )
}
