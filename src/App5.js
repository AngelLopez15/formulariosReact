import { useState } from "react"
import Field from "./components/Field"
import Form from "./components/Form"
import Select from "./components/Select"
import Submit from "./components/Submit"
import TextArea from "./components/TextArea"
import useForm from "./hooks/useForm"

const App5 = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: 0,
    ranking: 0,
    observation: "",
    country: "",
    active: false,
  })

  const changeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  // usando nuestro customHook para formularios
  const [datos, submit] = useForm(data)

  return (
    <Form submit={ submit }>
      <Field label="Nombre" name="fullName" type="text" value={ datos.name } changeData={ changeData } />
      <Field label="Correo electrónico" name="mail" type="email" value={ datos.email } changeData={ changeData } />
      <Field label="Edad" name="age" type="number" value={ datos.age } changeData={ changeData } />
      <Field label="Calificación" name="ranking" type="range" value={ datos.ranking } changeData={ changeData } />
      <TextArea label="Observaciones" name="observation" value={ datos.observation } changeData={ changeData } />
      <Select label="País" name="country" value={ datos.country } options={
        [
          {value: "mx", content: "México"},
          {value: "co", content: "Colombia"},
          {value: "pe", content: "Perú"},
          {value: "bo", content: "Bolivia"}
        ]
      } onChange={ changeData } />
      <Field label="Suscrito" name="active" type="checkbox" checked={ datos.active } changeData={ changeData } />
      <Submit value="Guardar" />
    </Form>
  )
}

export default App5