import React ,{ useState} from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import BackDrop from './components/BackDrop'
import SideDrawer from './components/SideDrawer'
import CartScreen from './Screens/CartScreen'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'

import './App.css'

function App() {
    const [sideToggle, setSideToggle] = useState(false)
    return (
        <Router>
            <Navbar handleShow={setSideToggle} />
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
            <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
            <main>
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route exact path='/product/:id' component={ProductScreen} />
                    <Route exact path='/cart' component={CartScreen}/>
                </Switch> 
            </main>
        </Router>
    )
}

export default App
