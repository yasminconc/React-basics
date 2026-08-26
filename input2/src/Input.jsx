
const Input = ({ id, label, value, onChange, type = 'text', ...props }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>

      <label htmlFor={id} style={{ display: 'block', textTransform: 'capitalize' }}>
        {label}
      </label>

      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        {...props}
      />

    </div>  
  )
}

export default Input