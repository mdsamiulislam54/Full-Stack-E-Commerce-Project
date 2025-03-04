import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdAssignmentReturn, MdPayment } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="sm:max-w-screen-xl mx-auto   my-4 px-4 sm:px-0 ">
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-2">
          <div className="flex justify-center items-center gap-2 bg-assent py-5 rounded-md ">
            <span className="border-r-2 border-light px-3">
              {" "}
              <FaShippingFast size={40} className="text-secondary" />
            </span>
            <span>
              <p className="sm:text-xl text-sm tracking-wide font-medium mb-1">
                Free shipping
              </p>
              <p className="text-sm text-gray-600">
                When you spend $100 or more{" "}
              </p>
            </span>
          </div>
          <div className="flex justify-center items-center gap-2 bg-assent rounded-md py-5 px-1">
            <span className="border-r-2 border-light px-3">
              {" "}
              <BiSupport size={50} className="text-secondary"/>
            </span>
            <span>
              <p className="sm:text-lg font-medium tracking-wide">We are available 24/7</p>
              <p className="text-sm text-gray-600">
                Need help? contact us anytime{" "}
              </p>
            </span>
          </div>
          <div className="flex justify-center items-center gap-2 bg-assent rounded-md py-5">
            <span className="border-r-2 border-light px-3">
              {" "}
              <MdAssignmentReturn size={50} className="text-secondary" />
            </span>
            <span>
              <p className="sm:text-lg font-medium tracking-wide">Satisfied or return</p>
              <p className="text-sm text-gray-600">
                Easy 30-day return policy{" "}
              </p>
            </span>
          </div>
          <div className="flex justify-center items-center gap-2 bg-assent rounded-md py-5">
            <span className="border-r-2 border-light px-3">
              {" "}
              <MdPayment size={50} className="text-secondary" />
            </span>
            <span>
              <p className="sm:text-lg font-medium tracking-wide">100% secure payments</p>
              <p className="text-sm text-gray-600">
                Visa, Mastercard, Stripe, PayPal
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
