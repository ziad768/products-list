import React, {Component} from 'react';

class addItem extends Component {
    state = {
        product: '',
        price: '',
        quantity:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.add(this.state)
        this.setState({
            product: '',
            price: '',
            quantity:''
        })
    }

    render(){
        return(
            <div className="item">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.product} placeholder="Enter Product" id="product" onChange={this.handleChange} required/>
                    <input type="number" min={0} value={this.state.price} placeholder="Enter Price" id="price" onChange={this.handleChange} required/>
                    <input type="number" min={1} value={this.state.quantity} placeholder="Enter quantity " id="quantity" onChange={this.handleChange} required/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

export default addItem;