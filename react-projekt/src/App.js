import './App.css';
import NavBar from "./components/NavBar";
import NavHeader from "./components/NavHeader";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
        <NavHeader>
            <Logo/>
            <NavBar/>
        </NavHeader>

    </div>
  );
}

export default App;
