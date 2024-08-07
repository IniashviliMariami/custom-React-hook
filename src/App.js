import './App.css';
import ToggleThemeButtom from './components/ToggleThemeButton';
import {useLocalStorege} from './hooks/useLocalStorage'
import {useDetectDevice} from './hooks/useDetectDevice'
import {useWindowResize} from './hooks/useWindowResize'

function App() {
  const[lightMode,setLigthMode]=useLocalStorege("mode",true);
  const{width}=useWindowResize();
  const device = useDetectDevice()
  return (
    <div
    className='container'
    style={{
      backgroundColor:`${width>576 && !lightMode ? "blue": "green"}`,

    }}>
   <div>
    <h1>{device}</h1>
   </div>
   <ToggleThemeButtom setLightMode={setLigthMode}/>
    </div>
  );
}

export default App;
