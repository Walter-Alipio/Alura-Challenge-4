
interface Props {
  children: React.ReactNode
}

export default function Button({children}:Props){
  return (
    <button className="w-36 h-10 bg-coral-normal hover:bg-coral-hover rounded-md shadow-md mt-3 text-white transition-colors">{children}</button>
  )
}