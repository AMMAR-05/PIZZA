// import Image from 'next/image'
import Button from './Button'

function Start() {
    return (
      <div className="border-b-2">
        <div className="h-screen w-full" style={{  
            backgroundImage: 'url("https://images.unsplash.com/photo-1589906493606-a6ca2a06078b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")',
            backgroundPosition: '70%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>

          <div className="h-64 relative top-10 flex flex-col justify-around items-center p-8">
            <h1 className="text-white text-4xl">WELT DER PIZZA</h1>
            <h5 className="text-white text-xl ">MENSCHEN ZUSAMMENBRINGEN</h5>
            <Button content="Bestellen" />
          </div>
          <div className=" py-5 flex flex-col justify-center items-center">
              <h2 className="text-white text-center py-5">Hole das neueste Angebot</h2>
              <input className="text-center mb-5 p-1" type="text" placeholder="E-mail Adress" />
              {/* <Button content="Senden" /> */}
          </div>
        </div>
      </div>
    )
}

export default Start;
