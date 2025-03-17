import { Link } from 'react-router-dom';
import BannerImages from '../../assets/product-banner.jpg'

export const AllProducts = () => {
  return (
    <div className='bg-cover h-64 bg-center w-full relative' style={{backgroundImage: `url(${BannerImages})`}}>
      <div className='absolute top-0 left-0 w-full h-full bg-[#00000090]'>
       <div className='flex flex-col justify-center items-center mt-4'>
       <h1 className='sm:text-4xl text-3xl text-light mb-4 font-semibold tracking-wider'>All Products</h1>
       <p className='sm:text-xl text-sm text-light mb-4 tracking-wider'>Discover our wide range of products</p>
       <div className='flex gap-5 items-center text-light'>
       <Link to={'/'} className='hover:text-gray-300 duration-300 transition-all text-sm sm:text-md'>Home {'>'}</Link>
       <Link to={'/blog'} className='hover:text-gray-300 duration-300 transition-all text-sm sm:text-md'>blog {'>'}</Link>
       <Link to={'/offer'} className='hover:text-gray-300 duration-300 transition-all text-sm sm:text-md'>Offer {'>'}</Link>
       </div>
       </div>
        
      </div>
      <div className="w-11/12 mx-auto">
      
      </div>
    </div>
  );
};
