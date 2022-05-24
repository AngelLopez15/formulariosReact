function App() {
  // En react existe el concepto de componente controlados y los componentes mantienene el estado por defecto
  // es por eso que si al input le ponemos el valor "value" no nos dejara editarlo 
  // para poder editarlo debemos usar "defaultValue"

  // En react para que los input funcionen siempre deben ir dentro de una etiqueta de "form"
  // y los atributos de las etiquetas se escriben con camelCase -> htmlFor <- esta en html normal es for
  // pero en react en jsx no puede ser for por que for es una palabra reservada de los ciclos por eso se le agrega el html

  // En react los textarea puden tener un defaultValue y con esto puede ser una etiqueta de auto cierre

  // Para los "select" si queremos darles un valor por default debemos ocupar tambien el defaultValue y no el selected como en html normal

  return (
    <div>
      <form>
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
