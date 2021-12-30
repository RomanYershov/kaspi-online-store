import React, { Component } from "react";
import { Table, Button } from 'react-bootstrap'


export class Orders extends Component {

    constructor(props) {
        super(props)
        this.state = { orders: [] }


        fetch('https://localhost:5001/api/order/GetAll')
            .then(response => response.json())
            .then(data => {
                this.setState({ orders: data })
            })
    }


    updateOrderStatus(order) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: order.id, address: order.address, cardNumber: order.cardNumber, createdAt: order.createdAt, state: 3 })
        }


        fetch('https://localhost:5001/api/Order/OrderUpdateStatus', requestOptions)
            .then(response => {
                if (response.ok) {
                    fetch('https://localhost:5001/api/order/GetAll')
                        .then(response => response.json())
                        .then(data => {
                            this.setState({ orders: data })
                        })
                }
            })


    }

    stl =
        {
            backgroundColor: { backgroundColor: 'green' }
        }


    render() {
        return (
            <div>
                <h3>Orders page</h3>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Дата заказа</th>
                            <th>Адрес</th>
                            <th>Номер карты</th>
                            <th>Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map(order => (
                            <tr key={order.id} >
                                <td>{order.createdAt}</td>
                                <td>{order.address}</td>
                                <td>{order.cardNumber}</td>
                                <td>{order.state === 2 ? 'Оплачен' : order.state === 3 ? 'Выполнен' : 'Сформирован'}</td>
                                <td><button onClick={() => this.updateOrderStatus(order)}>Выполнен</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        )
    }

}