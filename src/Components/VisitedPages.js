import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

const content =[
    { index: 1, path: "/store/", visitors: "4,890", visits: "3,985", bounce: "81.56%", graph: "Graph!"},
    { index: 2, path: "/store/symbols-styleguides", visitors: "3,785", visits: "3,182", bounce: "62.56%", graph: "Graph!"},
    { index: 3, path: "/store/dashboard-ui-kit", visitors: "2,985", visits: "2,115", bounce: "58.76%", graph: "Graph!"},
    { index: 4, path: "/store/webflow-cards.html", visitors: "2,440", visits: "1,789", bounce: "39.59%", graph: "Graph!"},
]

export default function VisitedPages() {
    const arr = [20, 15, 21, 18, 12, 16, 11, 8, 14, 18, 17, 14, 20];
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
                    {content.map((content, index) => (
                        <div key={index} className="table-row table-auto mt-8 relative">
                            <div className="table-cell pt-6">{content.path}</div>
                            <div className="table-cell pt-6"><a href="#" className="outline-none"><i className='fas fa-external-link-alt text-gray-500 mr-2'></i></a></div>
                            <div className="table-cell pt-6">{content.visitors}</div>
                            <div className="table-cell pt-6">{content.visits}</div>
                            <div className="table-cell pt-6">{content.bounce}</div>
                            <div className="table-cell bottom-8 relative">
                                <p className="invisible">Lorem Ipsum</p>
                                <Sparklines data={arr.sort(() => Math.random() - 0.5)}>
                                    <SparklinesLine color="#367ADD" />
                                </Sparklines>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
