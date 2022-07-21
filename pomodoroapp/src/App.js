import "./styles/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PomodoroPage from "./components/pomodoroPage";
import Profile from "./components/Profile";
import About from "./components/About";

/* 
TODO: primero vamos a hacer la versión de celular.
*/

function App() {
    return (
        <div className="App">
            {/* aqui abajo va el nav y la hamburguesa */}
            <Navbar />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PomodoroPage/>} />
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter>

            
        </div>
    );
}

export default App;
