import {Link} from 'react-router-dom'
const BannerSection = () => {
  return (
    <div className="grid grid-cols-6 gap-2 ">
        <div className='col-span-2'>
            <h3 className='sm:text-2xl font-medium tracking-wide mb-4 '>🔥 Trending & Best-selling Items:</h3>
            <ul className='ml-2 flex flex-col gap-2'>
                <li className='shadow-md p-1 rounded cursor-pointer hover:ml-4 transition-all duration-500 ease-in-out hover:text-primary font-medium tracking-wide'><Link>🔹 Smartwatch (Latest model)</Link></li>
                <li className='shadow-md p-1 rounded cursor-pointer hover:ml-4 transition-all duration-500 ease-in-out hover:text-primary font-medium tracking-wide'><Link>🔹 Wireless Earbuds</Link></li>
                <li className='shadow-md p-1 rounded cursor-pointer hover:ml-4 transition-all duration-500 ease-in-out hover:text-primary font-medium tracking-wide'><Link>🔹 Sunglasses (Retro & Modern)</Link></li>
                <li className='shadow-md p-1 rounded cursor-pointer hover:ml-4 transition-all duration-500 ease-in-out hover:text-primary font-medium tracking-wide'><Link>🔹 Sneakers (Nike, Adidas, Yeezy)</Link></li>
                <li className='shadow-md p-1 rounded cursor-pointer hover:ml-4 transition-all duration-500 ease-in-out hover:text-primary font-medium tracking-wide'><Link>🔸 Smart Home Devices (Alexa, Google Nest)</Link></li>
                <li className='shadow-md p-1 rounded cursor-pointer hover:ml-4 transition-all duration-500 ease-in-out hover:text-primary font-medium tracking-wide'><Link>🔸 Instant Coffee Brands</Link></li>
                <li className='shadow-md p-1 rounded cursor-pointer hover:ml-4 transition-all duration-500 ease-in-out hover:text-primary font-medium tracking-wide'><Link>🔹 Latest Fiction & Bestsellers</Link></li>
                <li className='shadow-md p-1 rounded cursor-pointer hover:ml-4 transition-all duration-500 ease-in-out hover:text-primary font-medium tracking-wide'><Link>🔹 Oversized T-Shirts</Link></li>
            </ul>
        </div>
        <div className='col-span-4'>
            <img className='w-full h-[370px]' src="https://img.lazcdn.com/us/domino/d65f9b70-a9fb-45cc-810a-76f9aeb14686_BD-1976-688.jpg_2200x2200q80.jpg" alt="" />
        </div>
    </div>
  )
}

export default BannerSection