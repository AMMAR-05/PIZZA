import React from 'react'
import Image from 'next/image'
import Eat from '../public/images/eat.jpg'
function Kontakt() {
    return (
        <section className="">
            <div className="h-screen w-full " style={{  
            backgroundImage: 'url("https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80")',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>

            { <div className="h-96 flex justify-center items-center flex-col text-white">
                <p className="mb-8 text-4xl">Wie können wir Ihnen helfen?</p>
                <form action="" className="flex flex-col">
                    <input className="mb-5 border-black text-black border-2" type="text" id="email" name="email" placeholder=" Ihre E-Mail Adresse" required></input>
                    <select className="text-black mb-5 border-black border-2" id="fragen" name="fragen" required>
                        <option className=" bg-black text-white" value="">Wähle eine frage</option>
                        <option className=" bg-black text-white" value="besuchFragen">Fragen zum Restaurantbesuch</option>
                        <option className=" bg-black text-white"value="menuFragen">Fragen zum unsere Menu</option>
                        <option className=" bg-black text-white"value="AndereFragen">Andere Fragen</option>
                    </select>
                    <input className="w-24 m-auto cursor-pointer border-white border-2 bg-transparent hover:bg-red-600 hover:font-bold p-1" type="submit"></input>
                </form>
            </div> }
            </div>
          
            
           
        </section>
    )
}

export default Kontakt
