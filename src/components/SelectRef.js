function SelectRef(props) {
  const {
    label,
    name,
    value="",
    options,
  } = props;

  return (
    <label htmlFor={ name }>
      { label }
      <select
        name={ name }
        id={ name }
        defaultValue={ value }
      >
        <option value="">--Seleccionar--</option>
        {
          options.map(optionItem => (
            <option key={optionItem.value} value={optionItem.value}>{optionItem.content}</option>
          ))
        }
      </select>
    </label>
  )
}

export default SelectRef