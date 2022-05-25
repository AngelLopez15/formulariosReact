function App() {
  // En react existe el concepto de componente controlados y los componentes mantienene el estado por defecto
  // es por eso que si al input le ponemos el valor "value" no nos dejara editarlo 
  // para poder editarlo debemos usar "defaultValue"

  // En react para que los input funcionen siempre deben ir dentro de una etiqueta de "form"
  // y los atributos de las etiquetas se escriben con camelCase -> htmlFor <- esta en html normal es for
  // pero en react en jsx no puede ser for por que for es una palabra reservada de los ciclos por eso se le agrega el html

  // En react los textarea puden tener un defaultValue y con esto puede ser una etiqueta de auto cierre

  // Para los "select" si queremos darles un valor por default debemos ocupar tambien el defaultValue y no el selected como en html normal

  // -------------------------EVENTOS---------------------------------------------
  // En los formularios el evento mas importante ese el submit
  // En react los eventos se escriben con camelCase para el submit sera -> onSubmit
  // Para el chance sera -> onChange
  // Para el click -> onClick

  const submit = (e) => {
    // Con e.preventDefault hacemos que el comportamiento por defecto no sucesa
    // lo siguiente despues de esa linea podemos hacer lo que queramos
    e.preventDefault();
    // alert("Formulario enviado");
    // console.log(e); // de esta manera podemos entrar a a ver todas las propiedades del evento
    console.log(e.target);
  }

  return (
    <div>
      <form onSubmit={ submit }>
        <input type="email" defaultValue="angel@correo.com" />
        <input type="password" placeholder="Contraseña" required />
        <textarea name="about" id="about" cols="30" rows="10" defaultValue="Hola Mundo" />
        <select name="country" id="country" defaultValue="mx" required>
          <option value="">-Seleccionar-</option>
          <option value="mx">Mexico</option>
          <option value="pe">Perú</option>
          <option value="co">Colombia</option>
        </select>
        <label htmlFor="remember">Recordar</label>
        <input type="checkbox" name="remember" id="remember" defaultChecked />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default App;
