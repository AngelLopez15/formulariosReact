// En las propiedades de los componentes siempre viene una propiedad que se llama children
// y children (hijos) son todos los componentes que van dentro del componente que se van creando
// al imprimir children todos los componentes o elementos que se inserten dentro de la estructura se van a imprimir
// en children
const Form = (props) => {
  const { children, submit } = props;

  return (
    <div>
      <form onSubmit={ submit }>
        { children }
      </form>
    </div>
  )
}

export default Form