import Image from 'next/image'
import Button from '../Button'

function MenuDrinks(props) {
    return (
        
            <section className="bg-gray-800 text-white p-5">
                <article className="text-center">
                    <figure className="relative h-80 w-80 2xl:w-80 m-auto border-2 mb-3">
                        <Image src={props.img} layout="fill" objectFit="cover" alt="Pizza" />
                    </figure>
                    <h3 className="text-2xl">{props.name}</h3>
                    <p className="pb-5 pt-5">{props.details}</p>
                    <Button content="Bestellen" />
                </article>
            </section>
)
}

export default MenuDrinks



