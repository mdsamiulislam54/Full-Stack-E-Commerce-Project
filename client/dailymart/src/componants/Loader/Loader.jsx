import  './lodar.css'
const Loader = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-200 loader-wrapper">
      <div className='flex items-center justify-center gap-3 container'>
        <p className="item"></p>
        <p className="item"></p>
        <p className="item"></p>
        <p className="item"></p>
        <p className="item"></p>
        <p className="item"></p>
        <p className="item"></p>
      </div>
    </div>
  );
};

export default Loader;
