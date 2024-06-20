import logo from "../assets/logo.jpg";
const Header = () =>{
    return(
        <div className="w-full h-[100px]  px-6 bg-white shadow-lg sticky top-0 flex justify-between items-center">
      <img src={logo} alt="logo" 
        className=" h-[78px]"
      />
      <div className="flex items-center">
        <h1 className="font-bold text-3xl tracking-wide text-indigo-800">
            Automata
        </h1>
      </div>
      {/* <div className="flex items-center">
      {user && (
          <button className="flex text-xl mr-5 font-semibold text-gray-500 items-center border-none shadow-none"
          onClick={logOut}>
            <IoIosLogOut className="mr-1" size={30}/>
            LogOut
          </button>
        )} 
        <h1 className="font-bold text-xl tracking-wide text-indigo-800">
            {user ? (
              <span>
                <span className="text-indigo-800">Welcome, </span>
                <span className="text-green-500">{user.displayName}</span>
              </span>
            ) : (
              'Automata'
            )}
        </h1>
       
      </div> */}
    </div>
    );
}
export default Header;