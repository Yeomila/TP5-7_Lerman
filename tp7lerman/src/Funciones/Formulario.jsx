import { useState } from 'react';
import './estilosform.css';

  const Formulario = ({ onAddCita }) => {
    const [data, setFormData] = useState({
      mascota: '',
      dueño: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...data, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddCita(data);
      setFormData({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: '',
      });
    };

  return (
    <div className="containerwA">

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre Mascota</label>
          <input
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
            value={data.mascota}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Nombre Dueño</label>
          <input
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre dueño de la mascota"
            value={data.propietario}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha</label>
          <input
            type="date"
            name="fecha"
            className="u-full-width"
            value={data.fecha}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Hora</label>
          <input
            type="time"
            name="hora"
            className="u-full-width"
            value={data.hora}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Síntomas</label>
          <textarea
            name="sintomas"
            className="u-full-width"
            value={data.sintomas}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <button onClick={handleSubmit} className="u-full-width button-primary">
            Agregar Cita
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
