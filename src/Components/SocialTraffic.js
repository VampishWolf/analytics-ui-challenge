import React from 'react'
// import './DailyVisitors.scss'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });

const content =[
    { index: 1, network: "Instagram", visitors: "3,550", graph: "Graph!", barValue: "75"},
    { index: 2, network: "Facebook", visitors: "2,236", graph: "Graph!", barValue: "50"},
    { index: 3, network: "Twitter", visitors: "1,795", graph: "Graph!", barValue: "40"},
    { index: 4, network: "Linkedin", visitors: "62", graph: "Graph!", barValue: "10"},
]

export default function SocialTraffic() {
    return (
        <div className="bg-white shadow-sm divide-y rounded text-left border border-gray-200 flex-grow">
            <div className="font-semibold py-4 px-8">Social Media Traffic</div>
            <div className="table w-full py-4 px-8">
                <div className="table-row-group">
                    <div className="table-row text-xs font-semibold text-gray-500 ">
                        <div className="table-cell">NETWORK</div>
                        <div className="table-cell">VISITORS</div>
                        <div className="table-cell"></div>
                    </div>
                    {content.map((content, index) => (
                        <div key={index} className="table-row table-auto mt-6 relative">
                            <div className="table-cell py-6">{content.network}</div>
                            <div className="table-cell py-6">{content.visitors}</div>
                            <div className="table-cell py-6 bottom-3 relative ">
                                <p className="invisible">Lorem Ipsum</p>
                                <LinearProgress variant="determinate" value={content.barValue} className="rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
