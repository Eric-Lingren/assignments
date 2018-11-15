import React from 'react'
import meme1 from './css/images/meme1.jpg'
import meme2 from './css/images/meme2.jpg'
import meme3 from './css/images/meme3.PNG'
import meme4 from './css/images/meme4.jpg'
import meme5 from './css/images/meme5.jpg'
import meme6 from './css/images/meme6.jpg'

const Products = () => {
    return (
        <div className='productContainer'>
            <div className='product'>
                <h3 className='itemTitle'> The Grandma:</h3>
                <img src={meme1} alt=''/>
                <p className='price'>$15</p>
            </div>
            <div className='product'>
                <h3 className='itemTitle'>This Internet: </h3>
                <img src={meme2} alt=''/>
                <p className='price'>$10</p>
            </div>
            <div className='product'>
                <h3 className='itemTitle'>The Boss: </h3>
                <img src={meme3} alt=''/>
                <p className='price'>$5</p>
            </div>
            <div className='product'>
                <h3 className='itemTitle'>The Professional Boss: </h3>
                <img src={meme4} alt=''/>
                <p className='price'>$20</p>
            </div>
            <div className='product'>
                <h3 className='itemTitle'>The Office Worker: </h3>
                <img src={meme5} alt=''/>
                <p className='price'>$10</p>
            </div>
            <div className='product'>
                <h3 className='itemTitle'>The Hair: </h3>
                <img src={meme6} alt=''/>
                <p className='price'>$5</p>
            </div>
        </div>
    )
}

export default Products