import React from 'react'
// import './DailyVisitors.scss'

const data =[
    { index: 1, network: "Instagram", visitors: "3,550", graph: "Graph!"},
    { index: 2, network: "Facebook", visitors: "2,236", graph: "Graph!"},
    { index: 3, network: "Twitter", visitors: "1,795", graph: "Graph!"},
    { index: 4, network: "Linkedin", visitors: "62", graph: "Graph!"},
]

export default function SocialTraffic() {
    return (
        <div className="bg-white shadow-sm divide-y rounded text-left border border-gray-200 flex-grow">
            <div className="font-semibold py-4 px-8">Social Media Traffic</div>
            <div className="table w-full py-4 px-8">
                <div className="table-row-group divide-y">
                    <div className="table-row text-xs font-semibold text-gray-500">
                        <div className="table-cell">NETWORK</div>
                        <div className="table-cell">VISITORS</div>
                        <div className="table-cell"></div>
                    </div>
                    {data.map((data, index) => (
                        <div key={index} className="table-row">
                            <div className="table-cell py-4">{data.network}</div>
                            <div className="table-cell py-4">{data.visitors}</div>
                            <div className="table-cell py-4">{data.graph}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
