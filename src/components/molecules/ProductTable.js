import React from 'react';

// importing data
// import productDataObject from '../../data.json'

// importing styles
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// importing sub components
import ProductRow from '../atoms/ProductRow'


class ProductTable extends React.Component {

    render() {

        return (
            <div className="mb-3">
                <table className="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((product) => 
                        <ProductRow name={product.name} price={product.price} key={product.name} stocked={product.stocked}></ProductRow>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;