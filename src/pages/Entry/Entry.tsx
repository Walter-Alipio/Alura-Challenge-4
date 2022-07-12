import { Link } from 'react-router-dom'
import logo from '../../assets/icons/Logo-completo-02.png'

export default function Entry(){

  return (
    <main className='h-full overflow-hidden'>

      <section 
        className='text-white bg-forma2 bg-right bg-no-repeat bg-blue-logo flex flex-col h-[calc(100vh-6rem)] pt-24 items-center'
      >

        <header className='m-auto'>
          <img src={logo} alt="Logo adopet" className='w-44 mt-4 mb-4'/>
        </header>
        <main className='text-center m-4 flex flex-col items-center'>
          <h1 className='font-semibold mb-4 text-2xl'>Boas-vindas!</h1>
          <p className='mt-4 w-60'>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
        </main>
        <nav className='flex flex-col w-80 '>
          <Link to="#" 
            className='font-semibold mb-4 text-base text-center bg-coral-normal hover:bg-coral-hover rounded-md py-3 shadow-md transition-colors'
            title='Logar'
          >
            Já tenho conta
          </Link>
          <Link to={'/register'}
           className='font-semibold mb-4 text-base text-center bg-coral-normal hover:bg-coral-hover rounded-md py-3 px-4 shadow-md transition-colors'
           title='Cadastrar'
          >
            Quero me cadastrar
          </Link>
        </nav>
       <div className='bg-catAndDog bg-contain bg-no-repeat w-48 h-56 mr-auto ml-16 -mb-4 mt-auto'></div>

      </section>
    </main>
  )
}