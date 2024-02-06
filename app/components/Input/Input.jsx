import "../../globals.css"

const Input = ({ type, placeholder }) => {

  const handleOnChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div
     
    >
      <input
        className="input-field"
        // onChange={handleOnChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input