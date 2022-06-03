import { useState } from "react"
import Field from "./components/Field"
import Form from "./components/Form"
import Select from "./components/Select"
import Submit from "./components/Submit"
import TextArea from "./components/TextArea"
// import useForm from "./hooks/useForm"

const App5 = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    age: 0,
    ranking: 0,
    observation: "",
    country: "",
    active: false,
  })

  const changeData = (e) => {
    if (e.target.value) {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      })
    } else if (e.target.checked !== undefined) {
      setData({
        ...data,
        [e.target.name]: e.target.checked,
      })
    } 
  }

  const submit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3350/leads", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(resp => resp.json())
    .then(response => {
      console.log(response)
      setData({
        fullName: e.target[0].value="",
        email: e.target[1].value="",
        age: e.target[2].value=0,
        ranking: e.target[3].value=0,
        observation: e.target[4].value="",
        country: e.target[5].value="",
        active: e.target[6].checked=false,
      })
    })
    .catch(error => console.error(error))
  }

  // usando nuestro customHook para formularios
  // const [datos, submit] = useForm(data, setData);

  return (
    <Form submit={ submit }>
      <Field label="Nombre" name="fullName" type="text" value={ data.fullName } changeData={ changeData } />
      <Field label="Correo electrónico" name="email" type="email" value={ data.email } changeData={ changeData } />
      <Field label="Edad" name="age" type="number" value={ data.age } changeData={ changeData } />
      <Field label="Calificación" name="ranking" type="range" value={ data.ranking } changeData={ changeData } />
      <TextArea label="Observaciones" name="observation" value={ data.observation } changeData={ changeData } />
      <Select label="País" name="country" value={ data.country } options={
        [
          {value: "mx", content: "México"},
          {value: "co", content: "Colombia"},
          {value: "pe", content: "Perú"},
          {value: "bo", content: "Bolivia"}
        ]
      } changeData={ changeData } />
      <Field label="Suscrito" name="active" type="checkbox" checked={ data.active } changeData={ changeData } />
      <Submit value="Guardar" />
    </Form>
  )
}

export default App5