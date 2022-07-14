import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' 
    onClick={customFunc} 
    style={{color}} 
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{background: dotColor}} 
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
        {icon}
      
    </button>
  </TooltipComponent>
)

const Navbar = () => {

  const {activeMenu, setActiveMenu, 
    clicked, setClicked, handleClick, 
    screenSize, setScreenSize, currentColor} = useStateContext()

  useEffect(()=> {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return ()=> window.removeEventListener('resize', handleResize)
  }, []) 

  useEffect(()=> {
    if (screenSize < 900) {
      setActiveMenu(false)
    } else {setActiveMenu(true)}
  }, [screenSize])


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' 
      customFunc={()=> setActiveMenu(!activeMenu)} 
      color={currentColor} icon={<AiOutlineMenu/>}/>

      <div className='flex'>
        <NavButton title='Cart' 
          customFunc={()=> handleClick()} 
          color={currentColor} icon={<FiShoppingCart/>}
        />

        <NavButton title='Chat' 
          customFunc={()=> {}} dotColor='#03c9d7'
          color={currentColor} icon={<BsChatLeft/>}
        />

        <NavButton title='Notification' 
          customFunc={()=> {}} dotColor='#03c9d7'
          color={currentColor} icon={<RiNotification3Line/>}
        />
        <TooltipComponent content={'profile'} position='BottomCenter'>
          <div className='flex items-center 
          gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'>
            <img src={avatar} alt=''
            className='w-8 h-8 rounded-full'
            />
            <p>
              <span className='text-gray-400 text-14'>
                Hi,
              </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>
                Dave
              </span>
            </p>
          </div>
        </TooltipComponent>

        {clicked.Cart && <Cart />}
        {clicked.Chat && <Chat />}
        {clicked.userProfile && <UserProfile />}
        {clicked.notification && <Notification />}

      </div>
      
    </div>
  )
}

export default Navbar
