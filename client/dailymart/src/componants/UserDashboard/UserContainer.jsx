import WelcomePage from "./WelcomePage"

const UserContainer = ({user}) => {
  return (
    <div>
        <div>
            <nav className="flex justify-between items-center p-2 bg-gray-100">
                <h4 className="text-xl font-semibold tracking-wide">Dashboard</h4>
                <button className="text-xl text-primary underline cursor-pointer hover:text-secondary  duration-300 transition-all">Logout</button>
            </nav>
            <div>
            <WelcomePage user={user} />
            
            </div>
        </div>
    </div>
  )
}

export default UserContainer