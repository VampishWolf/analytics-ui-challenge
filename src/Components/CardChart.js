import React from 'react'

export default function CardCharts(props) {
    const Percentage = (props) => {
        const color = props.red ? 'text-red-500 text-sm font-semibold' : 'text-green-500 text-sm font-semibold';
        const arrow = props.red ? 'far fa-caret-square-down' : 'far fa-caret-square-up';
        return <p className={color}>+{props.percentage}% <i className={arrow}></i></p>
    }
    return (
        <div className="flex-grow bg-white shadow-sm rounded border border-gray-200 p-8 h-56 w-60">
            <p className="text-gray-400 text-xs font-semibold">{props.title}</p>
            <p className="text-3xl font-semibold m-2">{props.count}</p>
            <Percentage red={props.red} percentage={props.percentage}></Percentage>
            <div className="font-semibold mt-8">Charts will appear!</div>
        </div>
    )
}
