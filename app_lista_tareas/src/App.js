import './App.css';
import FormularioTareas from './componentes/FormularioTareas';
import Header from './componentes/Header'

const App = () => {
  return (
    <div className="contenedor">
      <Header />
      <FormularioTareas />
    </div>
  );
}

export default App;
