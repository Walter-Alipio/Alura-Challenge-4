import logo from '../../../assets/icons/Logo-completo.png'
import Register from './Register'


export default function Main(){
  return (
    <main>
      <span></span>
      <section className='flex flex-col items-center mt-4'>
          <header>
          <img src={logo} alt="Logo adopet" className='w-44 m-4'/>
        </header>
        <Register />
      </section>
    </main>
  )
}