import React, {Component} from 'react'

class Table extends Component {
	render() {
		return <div>
			<table>
                <thead>
                    <th>Назва</th>
                    <th>Ціна</th>
                    <th>Кількість</th>
                    <th>Тотальна ціна: </th>
                    <th>Кнопка</th>
                </thead>
                <tbody>
                    <td>{this.props.name}</td>
                    <td>{this.props.price}</td>
                    <td>{this.props.quantity}</td>
                    <td>
                        {this.props.price * this.props.quantity}
                    </td>
                    <td>
                        <button onClick={this.props.deleteProduct.bind(null, this.props.index)}>
				            Видалити
			            </button>
                    </td>
                </tbody>
            </table>
		</div>;
	}
}

class Task7 extends Component {
	constructor() {
		super();
		this.state = {
			products: [
				{name: 'Product 1', price: 1000, quantity: 15},
				{name: 'Product 2', price: 1500, quantity: 19},
				{name: 'Product 3', price: 3540, quantity: 21},
			]
		};
	}
	
    deleteProduct(index){
        this.state.products.splice(index, 1);
		this.setState({products: this.state.products});

    }
	render() {
		
		const products = this.state.products.map((item, index) => {
			return <Table
				key={index}
				name={item.name}
				price={item.price}
				quantity={item.quantity}
                deleteProduct={this.deleteProduct.bind(this)}
			/>;
		});
		return <div>
			{products}
		</div>;
	}
}
 export default Task7;