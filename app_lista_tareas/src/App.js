import React, {useState} from 'react';
import './App.css';
import FormularioTareas from './componentes/FormularioTareas';
import Header from './componentes/Header'
import ListaTareas from './componentes/ListaTareas';

const App = () => {
  const [tareas, cambiarTareas] = useState(
     [
      {
        id: 1,
        texto: 'Laver la ropa',
        completada: false
      },
      {
        id: 2,
        texto: 'Grabar tutorial',
        completada: false
      }
    ]
  );

  console.log(tareas);

  return (
    <div className="contenedor">
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas={tareas} />
    </div>
  );
}

export default App;
