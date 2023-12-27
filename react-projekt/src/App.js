import './App.css';
import NavBar from "./components/NavBar";
import NavHeader from "./components/NavHeader";
import Logo from "./components/Logo";
import FirstBlockHomePage from "./components/FirstBlockHomePage";
import SecondBlockHomePage from "./components/SecondBlockHomePage";
import Temporary from "./components/Temporary";
import ThirdBlockHomePage from "./components/ThirdBlockHomePage";
import NiceBackgroudImage from "./components/NiceBackgroudImage";

function App() {
  return (
    <div className="App">
        <NavHeader>
            <Logo/>
            <NavBar/>
        </NavHeader>
        <Temporary/>
        <FirstBlockHomePage/>
        <SecondBlockHomePage/>
        <NiceBackgroudImage/>
        <ThirdBlockHomePage/>
    </div>
  );
}

export default App;
