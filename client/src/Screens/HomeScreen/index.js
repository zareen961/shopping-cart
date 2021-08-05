import React,{useEffect} from 'react'
import Product from '../../components/Product'
import { useSelector, useDispatch } from "react-redux";

import { getProducts as listProducts } from "../../redux/actions/productActions";

import './HomeScreen.css'

function HomeScreen() {

    const dispatch = useDispatch()

    const getProducts = useSelector(state => state.getProducts)
    const {products, loading, error} = getProducts

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className='homeScreen'>
            <h2 className="homeScreen__title">
                Latest Products
            </h2>
            <div className="homeScreen__products">
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map((product) => (
                    <Product key={product._id} {...product}/>
                ))}
                
            </div>
        </div>
    )
}

export default HomeScreen
