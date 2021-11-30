import { firebaseConfig } from "./firebaseConfig";
import Cuerpo from './component/main/Cuerpo';
import './css/styles.css'


firebaseConfig();


function App() {
  return (
    <div className="App">
      <Cuerpo></Cuerpo>
    </div>
  );
}

export default App;
