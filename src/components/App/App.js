import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Header from '../Header/Header.js'
import './App.css';
import ProductList from '../ProductList/ProductList.js';
import ProductForm from '../ProductForm/ProductForm.js';


function App() {
    const [productList, setProductList] = useState([]);

    // GET request to retrieve the products in our database.
    const getProducts = () => {
        console.log('In axios GET');
        axios.get('/products')
        .then(response => {
            console.log(response.data);
            setProductList(response.data);
        })
        .catch(err => {
            console.log('error in axios GET',err);
        });
    }

    console.log(productList);

    // call getProducts once on load.
    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div className="App">
            <Header />
            <ProductForm getProducts={getProducts}/>
            <ProductList productList={productList} getProducts={getProducts}/>
        </div>
    );
}

export default App;
