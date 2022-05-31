import { useForm } from "react-hook-form"

const App4 = () => {

  // ocupando la libreria react-hook-form para manejar formularios
  // importando el hook useForm
  // la funcion register nos va a ayudar a registrar los campos del formulario
  // El register se debe de poner en el input dentro de llaves y con el spred operator
  // La funcion handleSubmit nos ayudara a manipular el evento submit del formulario
  // handleSubmit recibe como parametro otra funcion.
  // La watch es un observador que estara vigilando los cambios del formulario. 
  // El watch solo puede vigilar algo que este registrado
  // recibe como parametro el campo registrado que queremos vigilar watch("email")
  // formState hace referencia al estado del formulario y tiene como valor un objeto
  // dentro del objeto hay un atributo que se llama errors
  // en errors se pueden almacenar todos los errores que el formulario genere
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: {
      errors,
    },
  } = useForm()

  const submit = (data) => {
    console.log('Hola mundo');
  }

  console.log('errors', errors);

  // En el register como segundo parametro van todas las validaciones que queremos que tenga
  // ese campo. y se ponen dentro de un objeto
  // { required: true} si queremos que en el error mande un mensaje. En lugar de true podemos poner
  // un string con el mensaje

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">
            Correo eléctronico
            <input
              { ...register("email", { required: "El correo es obligatorio"}) }
              type="email"
              name="email" 
              id="email"
              defaultValue=""
            />
          </label>
          {
            // usando el operador conditional chaining para validar las propiedades del objeto
            errors?.email && errors?.email?.message
          }
        </div>
        <div>
          <label htmlFor="password">
            Contraseña
            <input
              { ...register("password", {
                required: "La contraseña es obligatoria",
                minLength: 8,
                maxLength: 10,
                pattern: /^[A-Za-z]+$/i,
                validate: dato => {
                  console.log('Este es el dato del validate', dato);
                },
              }) }
              type="password"
              name="password" 
              id="password"
              defaultValue=""
            />
          </label>
          {
            errors?.password &&
            <span>
              { errors?.password?.message }
            </span>
          }
        </div>
        <div>
          <input type="submit" value="ingresar" />
        </div>
      </form>
    </div>
  )
}

export default App4