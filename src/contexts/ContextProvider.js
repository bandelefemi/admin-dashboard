import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({children}) => {

    const [activeMenu, setActiveMenu] = useState(true)
    const [clicked, setClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setcurrentColor] = useState('#03C9D7')
    const [currentMode, setcurrentMode] = useState('Light')
    const [themeSettings, setthemeSettings] = useState(false)

    const setMode =(e)=> {
        setcurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)

        setthemeSettings(false)
    }

    const setColor =(color)=> {
        setcurrentColor(color)

        localStorage.setItem('themeColor', color)

        setthemeSettings(false)
    }
    
    const handleClick=(click)=> {
        setClicked({...initialState, [click]: true})
    }
    return (
        <StateContext.Provider 
        value={{activeMenu, 
                setActiveMenu,
                clicked,
                setClicked,
                handleClick,
                screenSize,
                setScreenSize,
                setColor,
                setMode,
                currentColor, setcurrentColor,
                currentMode,
                themeSettings, setthemeSettings}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=> useContext(StateContext)