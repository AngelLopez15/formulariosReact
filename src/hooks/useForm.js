const useForm = (datos={}) => {
  const submit = (e) => {
    e.preventDefault();
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
    })
    .catch(error => console.error(error))
  }

  return [datos, submit]
}

export default useForm