const useForm = (datos={}) => {
  const submit = (e) => {
    e.preventDefault();
    console.log('data', datos);
    fetch("http://localhost:3350/leads", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(datos),
    })
    .then(resp => resp.json())
    .then(response => {
      console.log(response)
      console.log('limpiar formulario')
    })
    .catch(error => console.error(error))
  }

  return [datos, submit]
}

export default useForm