import { useEffect, useState } from 'react'
import { BiSun, BiSolidMoon } from 'react-icons/bi'

const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme')
    return storedTheme === 'dark'
  })

  function handleClick () {
    const htmlElement = document.documentElement
    htmlElement.classList.toggle('dark')

    if (htmlElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark')
      localStorage.setItem('icon', 'moon')
    } else {
      localStorage.setItem('theme', 'light')
      localStorage.setItem('icon', 'sun')
    }

    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const htmlElement = document.documentElement

    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'light') {
      htmlElement.classList.remove('dark')
      setDarkMode(false) 
    }
  }, [])

  return (
    <button className='grid content-center' onClick={handleClick}>
      {
        darkMode
          ? <BiSun />
          : <BiSolidMoon />
      }
    </button>
  )
}

export default ButtonDarkMode
