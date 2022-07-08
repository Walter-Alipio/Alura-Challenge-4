import logo from '../../../assets/icons/Logo-completo.png'
import Login from './Login'
import Register from './Register'


export default function Main(){

  const register = false

  return (
    <main className="flex-grow">
      <span></span>
      <section className='flex flex-col items-center my-4'>
          <header>
          <img src={logo} alt="Logo adopet" className='w-44 mt-6 mb-4'/>
        </header>
        {register ? <Register />: <Login />}
        
      </section>
    </main>
  )
}