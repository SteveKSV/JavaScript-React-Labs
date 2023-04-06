import React, {Component} from 'react'

class Table extends Component {
	render() {
        const { products, onCheckboxChange } = this.props;

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
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>
                            <Checkbox checked={product.selected} onChange={() => onCheckboxChange(index)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
		</div>;
	}
}

class Checkbox extends Component {
    
    render(){
        const { checked, onChange } = this.props;
        return (
            <input type="checkbox" checked={checked} onChange={onChange} />
        );
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

class Total extends Component {
    render(){
        return (
            <div>
                Total: ${this.props.total}
            </div>
        );
    }
}

class Task10 extends Component {
	constructor() {
		super();
		this.state = {
			products: [
				{name: 'Product 1', price: 1000, quantity: 15, selected: true},
				{name: 'Product 2', price: 1500, quantity: 19, selected: true},
				{name: 'Product 3', price: 3540, quantity: 21, selected: true},
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

    handleCheckboxChange = (index) => {
        const newProducts = [...this.state.products];
        newProducts[index].selected = !newProducts[index].selected;
        this.setState({products: newProducts});
    };
	render() {
        
    const total = this.state.products.reduce((accumulator, product) =>
    {
        return product.selected ? accumulator + product.price * product.quantity : accumulator;
    }, 0);

		return <div>
            <AddingProduct onAddProduct={this.handleAddProduct} />
			<Table products={this.state.products} onCheckboxChange={this.handleCheckboxChange.bind(this)}/>
            <Total total={total} />
		</div>;
	}
}
 export default Task10;