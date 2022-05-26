import { useRef, useState } from "react";

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

  // usando los hooks en el formulario
  const [num, setNum] = useState(0);

  const countCharacter = (e) => {
    setNum(e.target.value.length);
  }

  const email = useRef();

  const submit = (e) => {
    // Con e.preventDefault hacemos que el comportamiento por defecto no sucesa
    // lo siguiente despues de esa linea podemos hacer lo que queramos
    e.preventDefault();
    // alert("Formulario enviado");
    // console.log(e); // de esta manera podemos entrar a a ver todas las propiedades del evento
    console.log('e.target: ', e.target);
    console.log('e.target: ', email.current.value);
  }

  // Componentes no controlados
  // Los componentes no controlados son aquellos que sus eventos no dependen del estado de react y ese evento se le
  // relega a que lo maneje el DOM.

  // Componentes controlados
  // Los componentes controlados son aquellos que sus eventos son manejados a traves de un estado de react

  // para capturar un elemento en react se hace atraves de referencias
  // para acceder al valor de un input hay que declarar un "ref"
  // const email = useRef();

  return (
    <div>
      <form onSubmit={ submit }>
        {/* Este input seria un componente no controlado por que es una referencia la que lo controla, delegamos el evento al DOM */}
        <input type="email" defaultValue="angel@correo.com" ref={ email } />
        {/* Este otro input es un componente controlado por que el evento es manejado por un estado de react el onChange que ejecuta una funcion (changeEmail) que meneja el estado*/}
        {/* este seria el estado que maneja el input -> const [mail, setMail] = useState("") */}
        {/* y esta seria la funcion -> const changeEmail = (e) => setMail(e.target.value) */}
        {/* <input type="email" value="mail" onChange={ changeEmail } /> */}
        <input type="password" placeholder="Contraseña" required onChange={ countCharacter} />
        {/* <textarea name="about" id="about" cols="30" rows="10" defaultValue="Hola Mundo" /> */}
        {/* <select name="country" id="country" defaultValue="mx" required>
          <option value="">-Seleccionar-</option>
          <option value="mx">Mexico</option>
          <option value="pe">Perú</option>
          <option value="co">Colombia</option>
        </select> */}
        {/* <label htmlFor="remember">Recordar</label>
        <input type="checkbox" name="remember" id="remember" defaultChecked /> */}
        <p>Usted ingreso { num } caracteres </p>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default App;
