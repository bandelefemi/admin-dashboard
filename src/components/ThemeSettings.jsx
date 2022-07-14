import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { themeColors } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const ThemeSettings = () => {

  const {setColor, setMode, currentMode, currentColor, setthemeSettings } = 
  useStateContext()
  return (
    <div className='bg-half-transparent w-screen 
    fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 
      bg-white dark:[#484B52] w-400'>

        <div className='justify-between ml-4 p-4 flex items-center'>
          <p className='font-semibold text-xl'>
            Settings
          </p>
          <button 
           type='button'
           onClick={()=> setthemeSettings(false)}
           style={{color: '(153, 171, 180)', borderRadius: '50%'}}
           className='text-2xl hover:bg-light-gray 
           hover:drop-shadow-xl' >
            <MdOutlineCancel />
          </button>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>
            Theme Options
          </p>
          <div className='mt-4'>
            <input 
              type='radio'
              id='light'
              name='theme'
              value='Light'
              onChange={setMode}
              checked={currentMode === 'Light'}
              className='cursor-pointer' />
              <label htmlFor='light' 
              className='ml-2 text-md cursor-pointer'>
                Light
              </label>
          </div>
          <div className='mt-4'>
            <input 
              type='radio'
              id='dark'
              name='theme'
              value='Dark'
              onChange={setMode}
              checked={currentMode=== 'Dark'}
              className='cursor-pointer' />
              <label htmlFor='dark' 
                     className='ml-2 text-md cursor-pointer'>
                Dark
              </label>
          </div>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>
            Theme Colors
          </p>
          <div className='flex gap-3'>
            {themeColors.map((item, index)=> (
              <TooltipComponent 
              key={index} 
              content={item.name} 
              position='TopCenter'>
                <div className='relative 
                mt-2 
                cursor-pointer 
                flex gap-5 items-center'>
                  <button type='button' 
                  className='h-10 w-10 rounded-full cursor-pointer'
                  style={{backgroundColor: item.color}}
                  onClick={()=> setColor(item.color)}>
                    <BsCheck className={`ml-2 text-2xl text-white 
                    ${item.color === currentColor ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>  
      </div>
    </div>
  )
}

export default ThemeSettings
