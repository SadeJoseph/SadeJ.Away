
interface buttonProps {
  text: string
  onClick?: () => void
}


const Button = ({text, onClick}: buttonProps) => {
  return (
      <button className="bg-tertiary py-1 px-4 rounded-lg hover:bg-primary/80 duration-500 
      inline-block text-light "
      onClick={onClick}>
          {text}
      </button>
  )
};

export default Button;