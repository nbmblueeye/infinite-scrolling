type Props ={
    text: string
  }

const TextFormat = ({text}:Props) => {
  const textFormated = text.length > 50 ? text.substring(0, 50) + "[...]" : text;
  return (
    <p className="card-text">
        {textFormated}
    </p>
  )
}

export default TextFormat
