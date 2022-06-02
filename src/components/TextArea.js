const TextArea = (props) => {
  const {
    label,
    value,
    changeData,
    name,
  } = props;

  return (
    <div>
      <label htmlFor={ name }>
        { label }
        <textarea 
          name={ name }
          id={ name }
          defaultValue={ value }
          onChange={ changeData }
        />
      </label>
    </div>
  )
}

export default TextArea