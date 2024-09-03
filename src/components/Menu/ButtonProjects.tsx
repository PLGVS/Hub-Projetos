import React, {useState} from 'react'
import Projects from "../assets/projects-menu.png"

export const ButtonProjects: React.FC = () => {

    const [alternarFuncao, setAlternarFuncao] = useState<boolean>(false)

    const ShowBar = () => {
        const projetos = document.getElementById('projetos')
        projetos?.classList.remove('hide')
        setAlternarFuncao(true)
    }

    const HideBar = () => {
        const projetos = document.getElementById('projetos')
        projetos?.classList.add('hide')
        setAlternarFuncao(false)
    }

    const funcaoAtual = alternarFuncao ? HideBar : ShowBar

    return (
        <button onClick={funcaoAtual}><img src={Projects} alt="" /> Projetos</button>
    )
}
