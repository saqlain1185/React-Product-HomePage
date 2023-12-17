import React from 'react'
import shoes from '../images/shoes.png'
import flipkart from '../images/flipkart.png'
import amaz from '../images/amazon.png'

const Hero = () => {
    return (
        <div className='flex justify-around gap-3 mt-20'>
            <div className=' ml-20 '>
                <h1 className='font-bold text-8xl font-serif '>
                 YOUR <span className='text-red-600'>FEET</span> DESERVE THE BEST
                </h1>
                <p className='text-base font-base'>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className='flex flex-row mt-10 '>
                    <button className='bg-red-600 p-2 text-white text-lg '>Shop Now</button>
                    <button className='border-black border-2 ml-5 p-2 text-lg'>Category</button>
                </div>
                <div>
                    <p className='mt-8'>Also Available On</p>
                    <div className='flex flex-row m-5'>
                        <img className='mr-5' src={flipkart} alt="flipkart" />
                        <img src={amaz} alt="amazon" />
                    </div>
                </div>
            </div>
            <div className='ml-20'>
                <img src={shoes} alt="ShoesImage" />
            </div>
        </div>
    )
}

export default Hero
