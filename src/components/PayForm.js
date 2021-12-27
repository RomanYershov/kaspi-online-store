import React from "react";


export default function PayForm(props){
    return(
        <div className="block col-1">
            <h2>Форма оплаты</h2>
            <div style={{paddingBottom: '15px'}}>
                Адрес:
                <input title="test"></input>
            </div>
            <div>
                Карта:
                <input title="test"></input>
            </div>
        </div>
    )
}