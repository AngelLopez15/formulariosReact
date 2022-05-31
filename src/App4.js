import { useForm } from "react-hook-form"

const App4 = () => {

  // ocupando la libreria react-hook-form para manejar formularios
  // importando el hook useForm
  // la funcion register nos va a ayudar a registrar los campos del formulario
  // El register se debe de poner en el input dentro de llaves y con el spred operator
  // La funcion handleSubmit nos ayudara a manipular el evento submit del formulario
  // handleSubmit recibe como parametro otra funcion.
  const { register, handleSubmit } = useForm()

  const submit = () => {
    console.log('Hola mundo');
  } 

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">
            Correo eléctronico
            <input
              { ...register("email") }
              type="email"
              name="email" 
              id="email"
              defaultValue=""
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Contraseña
            <input
              { ...register("password") }
              type="password"
              name="password" 
              id="password"
              defaultValue=""
            />
          </label>
        </div>
        <div></div>
      </form>
    </div>
  )
}

export default App4