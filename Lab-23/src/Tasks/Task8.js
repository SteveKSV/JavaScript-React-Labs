import React, {Component} from 'react'

class Table extends Component {
	render() {
		return <div>
			<table>
      <thead>
        <tr>
          <th>Ім'я продукту</th>
          <th>Ціна</th>
          <th>Кількість</th>
          
        </tr>
      </thead>
      <tbody>
        {this.props.products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
		</div>;
	}
}

class AddingProduct extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            price: '',
            quantity: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, price, quantity } = this.state;
        const newProduct = {
            name: name,
            price: price,
            quantity: quantity
          };
        this.setState({
            name: '',
            price: '',
            quantity: '',
        })

        this.props.onAddProduct(newProduct);
      };

    render() {

		const { name, price, quantity } = this.state;

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </label><br/><br/>
                    <label>
                        Price:
                        <input type="number" value={price} onChange={(e) => this.setState({ price: e.target.value })} />
                    </label><br/><br/>
                    <label>
                        Quantity:
                        <input type="number" value={quantity} onChange={(e) => this.setState({ quantity: e.target.value })} />
                    </label><br/><br/>
                    <button type="submit">Add Product</button>
                </form>
			</div>
		);
	}
}
class Task8 extends Component {
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

    handleAddProduct = (newProduct) => {
        this.setState({ 
          products: [...this.state.products, newProduct] 
        });
      }

	render() {
		return <div>
            <AddingProduct onAddProduct={this.handleAddProduct} />
			<Table products={this.state.products} />
		</div>;
	}
}
 export default Task8;