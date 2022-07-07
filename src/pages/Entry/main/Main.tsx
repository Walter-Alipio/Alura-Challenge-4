import logo from '../../../assets/icons/Logo-completo-02.png';

export default function Main(){
  return (
    <main className='h-[85%] overflow-hidden'>
      <section className='text-white flex flex-col items-center mt-4 h-full'>
        <header>
          <img src={logo} alt="Logo adopet" className='w-44 mt-4 mb-4'/>
        </header>
        <main className='text-center m-4'>
          <h1 className='font-semibold mb-4 text-2xl'>Boas-vinda!</h1>
          <p className='mt-4 w-60'>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
        </main>
        <nav className='flex flex-col'>
          <a href="#" 
            className='font-semibold mb-4 text-base text-center bg-coral-normal hover:bg-coral-hover rounded-md py-3 shadow-md transition-colors'
            title='Logar'
          >
            Já tenho conta
          </a>
          <a href="#" 
           className='font-semibold mb-4 text-base text-center bg-coral-normal hover:bg-coral-hover rounded-md py-3 px-4 shadow-md transition-colors'
           title='Cadastrar'
          >
            Quero me cadastrar
          </a>
        </nav>
      <div className='bg-catAndDog bg-contain bg-no-repeat w-48 h-56 mr-auto ml-16 mb-o mt-auto'></div>
      </section>
    </main>
  )
}