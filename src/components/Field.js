const Field = (props) => {
  const {
    label,
    type,
    value,
    changeData,
    name,
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
          onChange={ changeData }
        />
      </label>
    </div>
  )
}

export default Field;