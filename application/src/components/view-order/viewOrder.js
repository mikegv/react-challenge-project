
import React, { Component } from 'react';
import { Template } from '../../components';
import { SERVER_IP } from '../../private';


 class ViewOrder extends Component {

    state = {
        order: {},
        order_item: "",
        quantity: "1"
    }
    componentDidMount(){
        
        fetch(`${SERVER_IP}/api/vieworder/` + this.props.match.params.id)
        .then(response => response.json())
        .then(response => {
            if(response.success) {
                this.setState({ order: response.targetOrder,
                                order_item: response.targetOrder.order_item,
                                quantity: response.targetOrder.quantity });
                console.log('success');
            } else {
                console.log('Error getting orders');
            }
        });
    
    }


    menuItemChosen(event) {
        this.setState({ order_item: event.target.value });
    }

    menuQuantityChosen(event) {
        this.setState({ quantity: event.target.value });
    }


    changeOrder(event) {          
        event.preventDefault();
        if (this.state.order_item === "") return;
        fetch(`${SERVER_IP}/api/edit-order/`, {
            method: 'POST',
            body: JSON.stringify({
                id: this.state.order._id,
                order_item: this.state.order_item,
                quantity: this.state.quantity,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => console.log("Success", JSON.stringify(response)))
        .catch(error => console.error(error));
        
    }


    render() {
        return (
            <Template>
                
                <div className="form-wrapper">
                    <form>
                        <label className="form-label">I'd like to change...</label><br />
                        <select 
                            value={this.state.order_item} 
                            onChange={(event) => this.menuItemChosen(event)}
                            className="menu-select"
                        >
                            <option value="" defaultValue disabled hidden>Lunch menu</option>
                            <option value="Soup of the Day">Soup of the Day</option>
                            <option value="Linguini With White Wine Sauce">Linguini With White Wine Sauce</option>
                            <option value="Eggplant and Mushroom Panini">Eggplant and Mushroom Panini</option>
                            <option value="Chili Con Carne">Chili Con Carne</option>
                        </select><br />
                        <label className="qty-label">Qty:</label>
                        <select value={this.state.quantity} onChange={(event) => this.menuQuantityChosen(event)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <button type="button" className="order-btn" onClick={(event) => this.changeOrder(event)}>Change It!</button>
                    </form>
                </div>

            </Template>
        );
    }
}

export default ViewOrder;

