import Home from "../../../assets/home-menu.png"
import GitHub from "../../../assets/github-menu.png"
import Calulator from '../../../assets/calculator-menu.png'
import List from '../../../assets/list-menu.png'

export function Sidebar() {
    return (
        <>
            <div id="sideBar" className='side-bar hide'>
                <ul>
                    <li><img src={Home} alt="" /> <a href="/">Home</a></li>
                    <li><img src={GitHub} alt="" /> <a href="https://github.com/PLGVS" target="blank">GitHub</a></li>
                    <li><img src={Calulator} alt="" /><a href="/IMC">Calculadora de IMC</a></li>
                    <li><img src={List} alt="" /><a href="/To-Do-List">To-Do List</a></li>
                </ul>
            </div>
        </>
    )
}