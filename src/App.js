import Title from "./Components/Title";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import CopyTesla from "./Projects/CopyTesla";
import ToDoList from "./Projects/TodoList";
import FruitJuice from "./Projects/FruitJuice";
import JokesCenter from "./Projects/JokesCenter";
import Hack from "./Projects/Hack";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Title />
              <Projects />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/copytesla" element={<CopyTesla />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/fruitfactory" element={<FruitJuice />} />
        <Route path="/jokescenter" element={<JokesCenter />} />
        <Route path="/hack" element={<Hack />} />
      </Routes>
    </>
  );
}

export default App;
