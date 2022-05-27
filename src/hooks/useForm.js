const useForm = (datos={}) => {
  const submit = (e) => {
    e.preventDefault();
    console.log('data', datos);
    alert("Bienvenido!")
  }

  return [datos, submit]
}

export default useForm