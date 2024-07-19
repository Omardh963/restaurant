import React, { useState } from 'react';
import { Data } from './Data';
import './Food.css';
import Card from './Card';

function Food() {
    const showdata = Data.map((el) => <Card img={el.img} title={el.title} desc={el.desc} price={el.price} />)
    const [omar, setomar] = useState(true);
    return (
        <div>
            <div className='imgfood' id='fast food'>
                {showdata}
            </div>
        </div>
    )
}

export default Food
