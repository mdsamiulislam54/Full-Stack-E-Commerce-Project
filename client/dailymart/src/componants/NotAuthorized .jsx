

const NotAuthorized  = () => {
    return (
        <div className=" py-50 flex items-center justify-center bg-red-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
            <p className="text-gray-600 mt-2">Please login to view the dashboard.</p>
          </div>
        </div>
      );
}

export default NotAuthorized 