import { Calculo } from "../components/Calculo";
import { Navbar } from "../components/Menu/Navbar/Navbar";
import { Sidebar } from "../components/Menu/Sidebar/Sidebar";

export function IMC() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Sidebar />
                <div className='app'>
                    <div className='area-input'>
                        <Calculo />
                    </div>
                </div>
            </div>
        </>
    )
}