const Select = (props) => {
  const {
    label,
    value = "",
    name,
    options = [],
    changeData,
  } = props;

  return (
    <div>
      <label htmlFor={ name }>
        { label }
        <select name={ name } id={ name } defaultValue={ value } onChange={ changeData }>
          <option value="">-Seleccionar-</option>
          {
            options.map(optionItem => (
              <option key={ optionItem.value } value={ optionItem.value }>{ optionItem.content }</option>
            ))
          }
        </select>
      </label>
    </div>
  )
}

export default Select