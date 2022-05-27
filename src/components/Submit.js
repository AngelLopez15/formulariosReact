const Submit = (props) => {
  const { value } = props;

  return (
    <div>
      <input type="submit" value={ value } />
    </div>
  )
}

export default Submit;