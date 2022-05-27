import { useState } from "react"
import Field from "./components/Field"
import Form from "./components/Form"
import Submit from "./components/Submit"

const App2 = () => {

  // Formulario usando componentes

  const [data, setData] = useState({ email: "", password: "" })

  const changeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const submit = (e) => {
    e.preventDefault();
    console.log('data', data);
    alert("Bienvenido!")
  }

  return (
    <Form submit={ submit }>
      <Field label="Correo electrónico" type="email" value={data.email} changeData={changeData} />
      <Field label="Contraseña" type="password" value={data.password} changeData={changeData} />
      <Submit value="Login" />
    </Form>
  )
}

export default App2