import React from 'react';

const Citas = ({ citas, eliminarCita }) => {
  return (
    <div className="lista-citas">
      <h2>Lista de Citas</h2>
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
  );
};

export default Citas;
