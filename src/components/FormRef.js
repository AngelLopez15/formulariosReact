function FormRef(props) {
  const { children, submit, formRef } = props;

  return (
    <div>
      <form onSubmit={ submit } ref={ formRef }>
        { children }
      </form>
    </div>
  )
}

export default FormRef;