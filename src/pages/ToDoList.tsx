import { Navbar } from "../components/Menu/Navbar/Navbar";
import { Sidebar } from "../components/Menu/Sidebar/Sidebar";


export function ToDoList(){
    return (
        <>
            <Navbar />
            <div className="container">
                <Sidebar />
                <div className="app">
                    <h1>To-Do List <img src="images/list-solid.svg" alt="" /> </h1>
                    <br/>
                    <br/>
                    
                </div>
            </div>
        </>
    )
}