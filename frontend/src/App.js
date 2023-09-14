import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ContextData from './Context/ContextData';
import RouterComp from './Routes/RouterComp';


function App() {
  return (
    <>
    <Header/>
    <ContextData>
    <RouterComp/>
    </ContextData>
    <Footer/>
    </>
  );
}

export default App;
