import PizzaAktionen from "./PizzaAktionen";
import firstPizza from '../Images/Pizza1.jpg';
import secondPizza from '../Images/pizza2.jpg';
import thirdPizza from '../Images/pizza3.jpg';



function Aktionen() {
    return (
        <div>
            <PizzaAktionen
                img={firstPizza}
                name='Pizza Kap Verde (Vegan) '
                details='mit Tomaten, veganem Reibeschmelz Broccoli-Röschen und frischen Champignons.'
            />
            <PizzaAktionen
                img={secondPizza}
                name='Pizza Chilisalami'
                details='Lunch Pizza mit Chilisalami und Hirtenkäse.'
            />
            <PizzaAktionen
                img={thirdPizza}
                name='Pizza Bombay'
                details='mit Hähnchenbrustfilet, Ananas und Currysauce'
            />
        </div>
    )
}

export default Aktionen
