import CardPet from '../../components/CardPet';
import pets from './pets.json'

export default function Pets(){
  return (
    <ul className='h-screen px-4 flex flex-col gap-4 mb-4 md:px-8 md:flex-row md:flex-wrap items-start justify-between lg:max-w-6xl lg:h-fit'>
      {
        pets.map(pet=>(
          <li  
            className=''
            key={pet.id}
          >
            <CardPet
              name={pet.name}
              age={pet.age}
              size={pet.size}
              character={pet.character}
              photo={pet.photo}
              address={pet.address}
            />
          </li>
        ))
      }
    </ul>
  )
}