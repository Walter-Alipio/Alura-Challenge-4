import { Link } from 'react-router-dom'
import logo from '../../assets/icons/Logo-completo-02.png'

export default function Entry(){

  return (
    <main className='h-full overflow-hidden'>

      <section 
        className='bg-forma2 bg-right bg-no-repeat bg-blue-logo flex flex-col h-full pt-24 md:pt-40 lg:pt-24 items-center text-white scrollbar-hide'
      >

        <header className='mt-16 nb:mt-8'>
          <img src={logo} alt="Logo adopet" className='w-44 md:w-64 mt-4 mb-4'/>
        </header>
        <main className='text-center m-4 flex flex-col items-center'>
          <h1 className='font-semibold mb-4 text-2xl md:text-3xl'>Boas-vindas!</h1>
          <p className='mt-4 w-60 md:hidden'>Que tal buscar seu novo melhor amigo hoje?
Vem com a gente!</p>
          <p className='hidden w-[21.5rem] text-lg md:block'>Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje?
Vem com a gente!</p>
        </main>
        <nav className='flex flex-col w-80 md:w-[21.5rem] px-10 md:px-0'>
          <Link to={'/login'} 
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
       <div className='bg-catAndDog bg-contain md:bg-cover nb:bg-contain lg:bg-cover bg-no-repeat w-48 md:w-80 h-56 md:h-[26.375rem] nb:h-[19.8rem] lg:h-[26.375rem] mr-auto ml-16 md:ml-auto -mb-6 mt-auto'></div>

      </section>
    </main>
  )
}