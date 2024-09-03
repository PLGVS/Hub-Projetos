import React, {useState} from 'react'
import Menu from '../../../assets/menu.svg'

export const ButtonMenu: React.FC = () => {

    const [alternarFuncao, setAlternarFuncao] = useState<boolean>(false)

    const ShowBar = () => {
        const sidebar = document.getElementById('sideBar')
        sidebar?.classList.remove('hide')
        setAlternarFuncao(true)
    }

    const HideBar = () => {
        const sidebar = document.getElementById('sideBar')
        sidebar?.classList.add('hide')
        setAlternarFuncao(false)
    }

    const funcaoAtual = alternarFuncao ? HideBar : ShowBar

    return (
        <button onClick={funcaoAtual}>
            <img src={Menu} alt=""></img>
        </button>
    )
}
