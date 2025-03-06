import { Link } from "react-router-dom"




const BandLogo = () => {
  return (
    <div>
        <Link to={'/'}>
            <div >
                <div className="">
                  
                  
                    <div>
                        <p className="sm:text-3xl font-medium tracking-wider font-dm-snas text-md "><span
                        className="sm:bg-primary bg-secondary sm:text-light px-2 rounded-sm shadow-sm mr-l"
                        >D</span>
                        
                        DailyMart</p>
                        {/* <p className="text-sm sm:tracking-[.3rem]">EASY SOLUTION</p> */}
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default BandLogo