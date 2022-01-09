import React from 'react'
import './Landing.scss'
import product from '../../assets/Product.png'
function Landing() {
    return (
        <div className='container'>
<img src={product} className="product"/>
<div className="light-side">s</div>
<div className="dark-side">d</div>
        </div>
    )
}

export default Landing
