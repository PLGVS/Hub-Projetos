import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { IMC } from "../pages/IMC";
import { ToDoList } from "../pages/ToDoList";


export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/IMC' element={<IMC />}/>
            <Route path="/To-Do-List" element={<ToDoList />}/>
        </Routes>
    )
}