const FielRef = (props) => {
  const {
    label,
    type,
    name,
    value,
    checked,
  } = props;

  return (
    <div>
      <label htmlFor={ name }>
        { label }
        <input 
          type={ type }
          name={ name }
          id={ name }
          defaultValue={ value }
          defaultChecked={ checked }
        />
      </label>
    </div>
  )
}

export default FielRef;