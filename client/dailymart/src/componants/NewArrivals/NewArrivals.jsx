import {Link} from 'react-router-dom'
import { MdKeyboardArrowLeft ,MdKeyboardArrowRight} from "react-icons/md";

const NewArrivals = () => {
  return (
    <div className='my-10'>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-0">
          <div className='grid grid-cols-6'>
            <div className='col-span-4 border-b pb-5'>
              <div className='flex justify-between items-center'>
                <h3>New Arrivals</h3>
                <Link className='flex items-center'>View All <MdKeyboardArrowRight/> </Link>
              </div>
              <div></div>
              <div></div>
            </div>
            <div className='col-span-2'>
              <div></div>
              <div></div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default NewArrivals;
