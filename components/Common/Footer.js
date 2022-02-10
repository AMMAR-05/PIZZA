import {faFacebookSquare, faTwitterSquare, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Footer() {
    return (
          <footer className="bg-black text-white w-full h-34 p-5 border-t-2">
                <section className="flex justify-center mb-2 text-lg">
                    <div className="mr-10">
                         <Link href="/Produkte">
                            <a className="block hover:text-red-700 cursor-pointer font-bold">Produkte</a>
                        </Link>
                        <Link href="/Kontakt">
                            <a className="block hover:text-red-700 cursor-pointer font-bold">Kontakt</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <a className="block hover:text-red-700 cursor-pointer font-bold">Karriere</a>
                        </Link>
                        <Link href="/Uns">
                            <a className="block hover:text-red-700 cursor-pointer font-bold">Über uns</a>
                        </Link>
                    </div>
                </section>
                <section className="flex justify-between text-sm">
                    <h4 className="font-bold">&copy; AMMAR 2021</h4>
                    <div className="flex">
                    <FontAwesomeIcon 
                        className="mr-1 w-4 sm:w-6 hover:text-blue-700 hover:cursor-pointer" 
                        icon={faFacebookSquare} />
                    <FontAwesomeIcon 
                        className="mr-1 w-4 sm:w-6 hover:text-red-400 hover:cursor-pointer" 
                        icon={faInstagramSquare} />
                    <FontAwesomeIcon 
                        className="w-4 sm:w-6 hover:text-blue-500 hover:cursor-pointer" 
                        icon={faTwitterSquare} />
                    </div>
                </section>
            </footer>
    )
}

export default Footer
