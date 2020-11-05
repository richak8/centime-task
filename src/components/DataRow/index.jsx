import React from "react";
import './style.css';

const DataRow = ({ rowData: data }) => {
    if(data === null) {
        return null;
    }

    const renderData = () => {
        for(let key in data) {
            return(
                <>
                  <div>{key}:</div>
                  <div>{data[key]}</div>
                </>
            )
        }
    }

    return (
        <div className="itemsRow">
          {renderData()}
        </div>
    )
}

export default DataRow;