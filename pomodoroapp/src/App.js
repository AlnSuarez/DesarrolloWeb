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

            <div>
                <footer>
                    <p>Hecho con <i class="bi bi-suit-heart"></i> por:</p>
                    <nav>
                        <a href="https://github.com/AlnSuarez" target='_blank'><i class="bi bi-github"></i> AlnSuarez</a> | 
                        <a href="https://github.com/MauroAlatristeA" target='_blank'><i class="bi bi-github"></i> MauroAlatristeA</a> | 
                        <a href="https://github.com/anthonyibrail" target='_blank'><i class="bi bi-github"></i> anthonyibrail</a>
                    </nav>
                </footer>
            </div>
            
        </div>
    );
}

export default App;
