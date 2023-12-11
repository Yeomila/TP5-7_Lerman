import Formulario from "./componentes/Formulario";
import React,{useState} from "react";
import Citas from "./componentes/Citas";

function App() {

  const [citas, setCitas] = useState([]);

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  const handleAddCita = (nuevaCita) => {
    nuevaCita.id = Date.now();
    setCitas([...citas, nuevaCita]);
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
              <p></p>
              <div class="containerCitas">
              {citas.length === 0 ? (<p>No hay citas</p>):
      (
        citas.map((cita) => (
          <div key={cita.id} className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>
            <button className="button eliminar" onClick={() => eliminarCita(cita.id)}> Eliminar Cita</button>
          </div>
        ))
      )}
              </div>
          </div>
      </header>
    </div>
  );
}


export default App;