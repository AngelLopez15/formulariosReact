const TextAreaRef = (props) => {
  const {
    label,
    name,
    value,
  } = props;

  return (
    <div>
      <label htmlFor={ name }>
        { label }
        <textarea 
          name={ name }
          id={ name }
          defaultValue={ value }
        />
      </label>
    </div>
  )
}

export default TextAreaRef