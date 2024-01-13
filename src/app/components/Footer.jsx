import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer border border-t-[#ED7D31] border-l-transparent border-r-transparent text-white'>
        <div className='container p-8 md:flex items-center justify-between gap-4 text-sm'>
          <div>
             <span className='text-orange-500 font-bold md:text-2xl text-center'>DC-77</span>
          </div>
            
            <div>
            <p>Todos los derechos reservados</p>
            <p>Barranquilla - Colombia</p>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer