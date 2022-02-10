import Image from 'next/image'
import Button from '../Button'

function PizzaAktionen(props) {
    return (
        <section className=" bg-gray-800 text-white items-center">
            <article className=" relative p-5 max-w-2xl m-auto">
                <div className="bg-red-600 text-white font-bold p-2 w-32 absolute right-5 top-5 z-10 text-center">Aktionen</div>
                <figure className="border-2">
                <Image src={props.img} alt="Pizza Image" />
                </figure>
                <h3 className="mt-5 max-w-2xl m-auto">{props.name}</h3>
                <p className="my-5 max-w-2xl m-auto">{props.details}</p> 
                <Button content="Bestellen" />
            </article>
        </section>
    )
}

export default PizzaAktionen
