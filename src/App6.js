import { useRef } from "react"
import FielRef from "./components/FielRef"
import FormRef from "./components/FormRef"
import SelectRef from "./components/SelectRef";
import Submit from "./components/Submit";
import TextAreaRef from "./components/TextAreaRef";

function App6() {
  const saveForm = useRef();

  const submit = (e) => {
    e.preventDefault()

    const formValue = saveForm.current;
    
    const data = {
      name: formValue.name.value,
      email: formValue.email.value,
      age: formValue.age.value,
      ranking: formValue.ranking.value,
      observation: formValue.observation.value,
      country: formValue.country.value,
      active: formValue.active.checked,
    }
    
    fetch("http://localhost:3050/leads", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(resp => resp.json())
    .then(response => {
      console.log(response)
    // Para resetear los campos del formulario
      formValue.reset();
    })
    .catch(error => console.error(error))
  }

  return (
    <FormRef submit={ submit } formRef={ saveForm } >
      <FielRef type="text" label="Nombre Completo" name="name" value="" />
      <FielRef type="email" label="Contraseña" name="email" value="" />
      <FielRef type="number" label="Edad" name="age" value="" />
      <FielRef type="range" label="Calificación" name="ranking" value="" />
      <TextAreaRef label="Observaciiones" name="observation" value="" />
      <SelectRef label="País" name="country" options={
        [
          {value: "mx", content: "México"},
          {value: "co", content: "Colombia"},
          {value: "bo", content: "Bolivia"},
        ]
      } />
      <FielRef type="checkbox" label="Activo" name="active" checked />
      <Submit value="Guardar" />
    </FormRef>
  )
}

export default App6