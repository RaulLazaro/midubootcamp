import './App.css';
import Mensaje from "./Mensaje";

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Hola mundo" />
      <Mensaje color="green" message="Hola mundo2" />
      <Mensaje color="blue" message="Hola mundo3" />
    </div>
  );
}

export default App;
