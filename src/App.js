import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer, SideBar,
   ThemeSettings } from './components'
import { Ecommerce, Orders, Calendar, Employees, 
  Stacked, Pyramid, Customers, Kanban, Line, Area, 
  Bar, Pie, Financial, ColorPicker, ColorMapping, 
  Editor } from './pages';
import './App.css'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'
import { useStateContext } from './contexts/ContextProvider';
// import { Sidebar } from 'semantic-ui-react'

const App = () => {

  const {activeMenu, themeSettings, setthemeSettings, 
    currentColor, currentMode} = useStateContext()
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
          <div className='flex relative dark:bg-main-dark-bg'>
            <div className='fixed right-4 bottom-4' style={{zindex: '1000'}}>
              <TooltipComponent content="Settings" position="Top">
                <button type='button'
                        className='text-3xl p-3
                        hover:drop-shadow-xl
                        hover:gb-light-grey text-white'
                        style={{background: currentColor, borderRadius: '50%'}}
                        onClick={()=> setthemeSettings(true)}>
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>

            {activeMenu? 
            (<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <SideBar />
            </div> )
            : (<div className='w-0 dark:bg-secondary-bg'>
                <SideBar />
              </div>  ) }

              <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
                            ${activeMenu? 'md:ml-72': 'flex-2'}  `}>
                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                  <Navbar/>
                </div>
                <div>
                  {themeSettings && <ThemeSettings /> }

                  <Routes>
                    {/* dashboard */}
                    <Route path='/' element={<Ecommerce/>} />
                    <Route path='/ecommerce' element={<Ecommerce/>} />

                    {/* pages */}
                    <Route path='/orders' element={<Orders/>} />
                    <Route path='/employees' element={<Employees/>} />
                    <Route path='/customers' element={<Customers/>} />

                    {/* apps */}
                    <Route path='/kanban' element={<Kanban/>} />
                    <Route path='/editor' element={<Editor/>} />
                    <Route path='/calendar' element={<Calendar/>} />
                    <Route path='/color-picker' element={<ColorPicker/>} />

                    {/* charts */}
                    <Route path='/line' element={<Line/>} />
                    <Route path='/bar' element={<Bar/>} />
                    <Route path='/area' element={<Area/>} />
                    <Route path='/pie' element={<Pie/>} />
                    <Route path='/financial' element={<Financial/>} />
                    <Route path='/color-mapping' element={<ColorMapping/>}/>
                    <Route path='/pyramid' element={<Pyramid/>} />
                    <Route path='/stacked' element={<Stacked/>} />
                  </Routes>
                </div>
              </div>
          </div>
      </BrowserRouter>
    </div>
  )
}

export default App
