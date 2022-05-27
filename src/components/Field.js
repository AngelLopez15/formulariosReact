const Field = (props) => {

  const {
    label,
    type,
    value,
    changeData
  } = props;

  return (
    <div>
      <label htmlFor={ type }>
        { label }
        <input 
          type={ type }
          name={ type }
          id={ type }
          defaultValue={ value }
          onChange={ changeData }
        />
      </label>
    </div>
  )
}

export default Field;