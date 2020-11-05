import React from 'react';
import DataRow from './DataRow';
import Sankey from './Sankey';
import './style.css';

const IncomeExpenditure = ({ data }) => {
    if(data === null) {
        return null;
    }
    const sankeyData = []; 
    let sankeyParent;

    const leftContent = () => {
        for(let key in data) {
            if(key.toLowerCase() === 'income') {
                sankeyParent=data[key];
                sankeyData.push({ parent: '', child: data[key]})
                return(
                    <div className="leftContent">
                        <div>{key}:</div>
                        <div>{data[key]}</div>
                    </div>
                )
            } 
        }
    }

    const rightContent = () => {
        for(let key in data) {
            if(key.toLowerCase() === 'expenditure') {
                return (
                    <div className="rightContent">
                        {data[key].map((rowData) => {
                            sankeyDataManipuation(rowData);
                            return (
                                <DataRow rowData={rowData} />
                            )
                        })}
                    </div> 
                )
            }
        } 
    }

    const sankeyDataManipuation = (rowData) => {
        for(let key in rowData) {
            sankeyData.push({ parent: sankeyParent, child: rowData[key]});
        }
    }

    return (
        <div className="itemsData">
           <Sankey
             width={500}
             height={150}
             sankeyData={sankeyData}
           />
           <div className="contentWrapper">
                {leftContent()}
                {rightContent()}
            </div>
        </div>
    );
}

export default IncomeExpenditure;