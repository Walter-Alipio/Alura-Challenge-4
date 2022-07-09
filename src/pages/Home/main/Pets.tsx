import CardPet from '../../../components/CardPet';
import pets from './pets.json'

export default function Pets(){
  return (
    <ul className='w-full px-4 flex flex-col gap-4'>
      {
        pets.map(pet=>(
          <li  key={pet.id}>
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