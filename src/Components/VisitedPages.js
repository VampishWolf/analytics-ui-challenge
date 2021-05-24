import React from 'react'
// import './DailyVisitors.scss'

const data =[
    { index: 1, path: "/store/", visitors: "4,890", visits: "3,985", bounce: "81.56%", graph: "Graph!"},
    { index: 2, path: "/store/symbols-styleguides", visitors: "3,785", visits: "3,182", bounce: "62.56%", graph: "Graph!"},
    { index: 3, path: "/store/dashboard-ui-kit", visitors: "2,985", visits: "2,115", bounce: "58.76%", graph: "Graph!"},
    { index: 4, path: "/store/webflow-cards.html", visitors: "2,440", visits: "1,789", bounce: "39.59%", graph: "Graph!"},
]

export default function VisitedPages() {
    return (
        <div className="bg-white shadow-sm divide-y rounded text-left border border-gray-200 flex-grow">
            <div className="font-semibold py-4 px-8">Most Visited Pages</div>
            <div className="table w-full py-4 px-8">
                <div className="table-row-group divide-y">
                    <div className="table-row text-xs font-semibold text-gray-500">
                        <div className="table-cell">PAGE NAME</div>
                        <div className="table-cell"></div>
                        <div className="table-cell">VISITORS</div>
                        <div className="table-cell">UNIQUE PAGE VISITS</div>
                        <div className="table-cell">BOUNCE RATE</div>
                        <div className="table-cell"></div>
                    </div>
                    {data.map((data, index) => (
                        <div key={index} className="table-row">
                            <div className="table-cell py-4 w-min">{data.path}</div>
                            <div className="table-cell py-4"><a href="#" className="outline-none"><i className='fas fa-external-link-alt text-gray-500 mr-2'></i></a></div>
                            <div className="table-cell py-4">{data.visitors}</div>
                            <div className="table-cell py-4">{data.visits}</div>
                            <div className="table-cell py-4">{data.bounce}</div>
                            <div className="table-cell py-4">{data.graph}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
