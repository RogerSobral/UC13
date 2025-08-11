import "./Textfield.css"

export const TextField = ({tipo,placeholder}) => {
  return (
    <input type={tipo} placeholder={placeholder} />
  )
}
