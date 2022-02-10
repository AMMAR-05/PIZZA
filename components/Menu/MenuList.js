import MenuProduct from './MenuProduct'
import React from 'react'
import MenuDrinks from './MenuDrinks';

function MenuList() {
    const info= [
        {id:1, img:'/images/Pizza1.jpg',  name:'Teriyaki Chicken ', details:'mit Hähnchenbrustfilet, Broccoli, Frühlingszwiebeln, Sesam und mit Teriyaki Sauce verfeinert.'},
        {id:2, img:'/images/Pizza2.jpg',  name:'Conchita ', details:'mit BBQ-Sauce1, Rinderhack19, Bacon, roten Zwiebeln und Mozzarella-Kugeln'},
        {id:3, img:'/images/Pizza3.jpg',  name:'Boston', details:'mit Sauce hollandaise, als Basissauce, Prosciutto Cotto, und Broccoli-Röschen.'},
        {id:4, img:'/images/Pizza4.jpg',  name:' Grüner Garten ', details:'mit Champignons, Blattspinat, Broccoli-Röschen, Paprika und Cherrytomaten.'},
        {id:5, img:'/images/Pizza5.jpg',  name:'Prosciutto cotto ', details:'mit zartem Prosciutto cotto'},
        {id:6, img:'/images/Pizza6.jpg',  name:' Caprese ', details:'mit frischen Tomaten, Mozzarella-Kugeln und Basilikum-Pesto (enthält Cashew-Kerne).'},
        {id:7, img:'/images/Pizza7.jpg',  name:'Funghi', details:'mit frischen Champignons, Basilikum-Pesto und extra Mozzarella. '},
        {id:8, img:'/images/Pizza8.jpg',  name:'Vegan BBQ ', details:'mit veganem Reibeschmelz, veganen Filetstücken Hähnchen-Style, Paprika, rote Zwiebeln.'},
        {id:9, img:'/images/Pizza9.jpg',  name:'Athena', details:'mit fein gewürztem Blattspinat und Hirtenkäse.'},
        {id:10, img:'/images/Pizza10.jpg' ,name:'CHEESE LOVE', details:'mit extra viel Mozzarella, mit Käse überbackenem Pizzarand und Knoblauch in Öl.'},
        {id:11, img:'/images/Pizza11.jpg' ,name:'KOREAN BEEF BBQ', details:'mit Korean BBQ Sauce1, Pulled Beef, Rindersteakstreifen, Champignons, roten Zwiebeln und Sesam.'},
        {id:12, img:'/images/Pizza12.jpg' ,name:'DUTCHMAN', details:'mit Prosciutto Cotto2,3,9,17, Tomaten, Broccoli-Röschen und Sauce hollandaise.'},
    ]
    const menuLists = info.map(function(menuList){
        return <MenuProduct
        key={menuList.id}
        name={menuList.name}
        details={menuList.details}
        img={menuList.img}
        />
    });

      const infoDrinks= [
     
        {id:13, img:'/images/Cocacola.jpg',  name:'Coca-Cola 1L (25ct Pfand)', details:'Koffeinhaltiges Erfrischungsgetränk mit Pflanzenextrakten 1L und 500ml (1L/€3,98), zzgl. 25ct Pfand.'},
        {id:14, img:'/images/Fanta.jpg',  name:'Fanta Orange 1L (25ct Pfand)', details:'Erfrischungsgetränk mit Orangengeschmack 1L und 500ml (1L/€3,98), zzgl. 25ct Pfand.'},
        {id:15, img:'/images/Sprite.jpg',  name:'Sprite 1L (25ct Pfand)', details:'Erfrischungsgetränk mit Zitronen- und Limettengeschmack. 1L und 500ml (1L/€3,98), zzgl. 25ct Pfand.'},
        {id:16, img:'/images/Redbull.jpg',  name:'RED BULL', details:'Red Bull Energydrink zzgl. 25ct Pfand (1L/€9,96).'},
        {id:17, img:'/images/Desperado.jpg',  name:'Desperado Bier', details:'Erfrischungsgetränk mit Zitronen- und Limettengeschmack. 1L und 500ml (1L/€3,98)'},
        {id:18, img:'/images/Moda.jpg',  name:'Moda', details:'ROTWEIN MONTEPULCIANO D’ABRUZZO 750ML, ALC. 13% VOL (1L/€10,65) (ALTGLAS).'},
    ]
    
    const menuListsDrinks = infoDrinks.map(function(menuListDrink){
        return <MenuDrinks
        key={menuListDrink.id}
        name={menuListDrink.name}
        details={menuListDrink.details}
        img={menuListDrink.img}
        />
    });
       return (
        <section>
            <h2 className="text-white font-bold bg-gray-800 text-center text-5xl p-5 border-t-2">Pizza Menu</h2>
            <div className="lg:grid lg:grid-rows-1 lg:grid-cols-2 2xl:grid-cols-3">
                {menuLists}
            </div>
            <h2 className="text-white font-bold bg-gray-800 text-center text-5xl p-5 border-t-2">Drinks Menu</h2>
            <div className="lg:grid lg:grid-rows-1 lg:grid-cols-2 2xl:grid-cols-3">
                {menuListsDrinks}
            </div>
        </section>
    )
}

export default MenuList





