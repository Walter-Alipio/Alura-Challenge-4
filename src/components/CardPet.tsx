import {RiMessage2Line} from 'react-icons/ri'

interface Props{
    name: string;
    age: string;
    size: string;
    character: string;
    photo: string,

    address: {
        city: string;
        uf: string;
    };
}

export default function CardPet(
  {name,age,size,character,address,photo}: Props
  ){
  return (
    <div className="flex gap-2 bg-gray-light h-48 rounded-md">
      <div className="w-[45%] h-full p-3 flex flex-col justify-center">
        <img src={photo} alt={name} />
      </div>
      <section className="flex flex-col my-2">
        <header className="text-blue-logo font-semibold mb-2">{name}</header>
        <main className="flex flex-col text-gray-hard mb-4">
          <span>{age}</span>
          <span>{size}</span>
          <span>{character}</span>
        </main>
        <footer className="text-gray-hard flex flex-col gap-2">
            {`${address.city} (${address.uf})`}
          <div className='flex gap-2 items-center'>
            <button className='text-blue-logo'>
              <RiMessage2Line className='hover:text-blue-800'/>
            </button>
            <span className='text-xs'>Falar com responsável</span>
          </div>    
        </footer>
      </section>
    </div>
  )
}