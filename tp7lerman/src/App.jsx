import Formulario from "./Funciones/Formulario";
import React,{useState} from "react";
import Citas from "./Funciones/Citas";

function App() {

  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    nuevaCita.id = Date.now();
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  const handleAddCita = (nuevaCita) => {
    console.log('Nueva Cita:', nuevaCita);
  };

  return (
    
    <div className="App">
      <header>

        <h1>ADMINISTRADOR DE PACIENTES</h1>
          <div class="conatiner">
              <div>
                <h2>Crear mi Cita</h2>
                <form>
                  <Formulario onAddCita={handleAddCita}/>
                </form>
              </div>
              <div class="one-half column">
              <Citas citas={citas} eliminarCita={eliminarCita}/>
              </div>
          </div>
      </header>
    </div>
  );
}


export default App;