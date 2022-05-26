import { useState } from "react"

const App2 = () => {

  // En este caso nuestro formulario es pequeño pero en los casos donde los formmularios tiene muchos campos
  // no es practico declarar un useState por input. Lo que se debe de hacer es armar un objeto con todos los campos

  const [data, setData] = useState({ email: "", password: "" })

  // si quieramos manejarcomo un componente no controlado entonces debemos usar referencias ref
  // const loginForm = useRef();
  // const data = { email: "", password: "" }

  // como necesitamos que la funcion se dinamica por que seria inpractico hacer una funcion por cada input
  // para cambiar el valor del input en especifico, entonces le decimos al evento que entre al target y a la propiedad name
  // debe de estar entre corchetes para que pueda acceder a las propiedades
  const changeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const submit = (e) => {
    e.preventDefault();
    // console.log(loginForm.current)
    alert("Bienvenido!")
  }

  return (
    <div>
      <form onSubmit={ submit }>
      {/* <form onSubmit={ submit } ref={ loginForm } > */}
        <div>
          <label htmlFor="email">
            Correo electrónico
            <input 
              type="email" 
              name="email" 
              value={ data.email } 
              onChange={ changeData } 
            />
            {/* <input 
              type="email" 
              name="email" 
              defaultValue={ data.email } 
            /> */}
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input 
              type="password" 
              name="password" 
              value={ data.password } 
              onChange={ changeData } 
            />
            {/* <input 
              type="password" 
              name="password" 
              defaultValue={ data.password } 
            /> */}
          </label>
        </div>
        <div>
          <input type="submit" value="ingresar" />
        </div>
      </form>
    </div>
  )
}

export default App2