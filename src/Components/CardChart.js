import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function CardCharts(props) {
    const Percentage = (props) => {
        const color = props.red ? 'text-red-500 text-sm font-semibold' : 'text-green-500 text-sm font-semibold';
        const arrow = props.red ? 'far fa-caret-square-down' : 'far fa-caret-square-up';
        return <p className={color}>{props.percentage}% <i className={arrow}></i></p>
    }
    return (
        <div className="flex-grow flex-shrink bg-white shadow-sm rounded border border-gray-200 p-8 h-56 w-60 xl:w-52 lg:w-36">
            <p className="text-gray-400 text-xs font-semibold">{props.title}</p>
            <p className="text-3xl font-semibold m-2">{props.count}</p>
            <Percentage red={props.red} percentage={props.percentage}></Percentage>
            <div className="font-semibold mt-4">
            <Sparklines data={props.sparklineData} margin={5}>
                <SparklinesLine color={props.sparklineColor} />
            </Sparklines>
            </div>
        </div>
    )
}
