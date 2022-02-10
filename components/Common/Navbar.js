import React from "react";
import Link from "next/link";
import Image from 'next/image'
import Logo from '../Images/logonav.svg'


class Navbar extends React.Component {
  state = {first: "block", second: "hidden", menu: "hidden"};

  onClickNav = () => {
    if(this.state.first === "block") {
      this.setState({first: "hidden", second: "block", menu: "block"});
    } else {
      this.setState({first: "block", second: "hidden", menu: "hidden"});
    };
  }

  render(){
    return (
      <nav className="bg-black text-white sticky top-0 z-50 border-b-2">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between h-16">
              <figure className="mt-5">
              <Image src={Logo} alt="Logo" />
              </figure>
              <div className="hidden sm:block sm:ml-6  2xl:uppercase">
                  <div className="flex space-x-4">
                      <Link href="/">
                          <a className="text-white hover:bg-red-600 px-3 rounded-md font-medium p-2" aria-current="page">Start</a>
                      </Link>
                      <Link  href="/Aktionen">
                          <a className="text-white hover:bg-red-600 px-3 py-2 rounded-md font-medium">Aktionen</a>
                      </Link>
                      <Link href="/Menu">
                          <a className="text-white hover:bg-red-600 px-3 py-2 rounded-md font-medium">Menu</a>
                      </Link>
                      <Link href="/Deals">
                          <a className="text-white hover:bg-red-600 px-3 py-2 rounded-md font-medium">Angebote</a>
                      </Link>
                  </div>
              </div>
              {/* Nav Menu Mobile Screen */}
              <div className= {this.state.menu + " sm:hidden sm:ml-6"}>
                  <div className="bg-red-600 absolute right-0 top-16 w-full flex justify-around  items-center p-3 ">
                      <Link href="/">
                          <a className=" text-white hover:bg-black block px-3 py-2 rounded font-medium" aria-current="page">Home</a>
                      </Link>
                      <Link href="/">
                          <a className="text-white hover:bg-black  block px-3 py-2 rounded font-medium">Aktionen</a>
                      </Link>
                      <Link href="/">
                          <a className="text-white hover:bg-black  block px-3 py-2 rounded font-medium">Menu</a>
                      </Link>
                      <Link href="/">
                          <a className="text-white hover:bg-black  block px-3 py-2 rounded font-medium">Angebote</a>
                      </Link>
                  </div>
              </div>
              {/* Mobile Menu Button */}
              <button type="button" className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  {/* <span className="sr-only">Open main menu</span> */}
                  {/* Closed Menu Icon */}
                  <svg onClick={this.onClickNav} className={this.state.first + " h-6 w-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {/* Opened Menu Icon */}
                  <svg onClick={this.onClickNav} className={this.state.second + " h-6 w-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
          </div>
      </nav>
    );
  }
}
export default Navbar;