import React from 'react';
import logo from '../img/logo.jpg';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

import '../App.css';

const Navbar = () => {
  return (
    <div className="flex flex-col items-start mx-20">
      <div className="flex items-center justify-between w-full">
        <img src={logo} alt="logo_psicleta" className='m-3 h-13 w-40 cursor-pointer' />

        <div className="flex items-center">
        <FaWhatsapp className='text-3xl text-green1 cursor-pointer hover:text-cyan-300 mt-6 mr-4 hover:text-4xl'/>
        <FaInstagram className='text-3xl text-green1 cursor-pointer hover:text-cyan-300 mt-6 mr-4 hover:text-4xl'/>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScUvO28l6hyaI73-Ju_VVcTtgec1gmG2iwbjOo2XOG2Zjmilw/viewform?usp=sf_link'>
  <button className='rounded-xl w-80 h-10 
                  bg-green1
                  hover:bg-cyan-100 hover:scale-110 hover:text-black
                  transition-transform 
                  font-dm-sans font-bold 
                  text-xl text-white
                  mx-auto mt-6'>
    Agendar Sessão
  </button>
</a>
        </div>
      </div>
      <div className="mx-auto">

        <ul className="grid grid-cols-1 
                        md:grid-cols-5 
                        text-stone-300
                        gap-7 text-2xl 
                        text-center m-8 
                        font-dm-sans font-bold 
                        border-b-2 border-green1">

          <li className='hover:text-white 
                            hover:scale-110 
                            transition-transform 
                            cursor-pointer'>
                               <a href="#">Sobre</a>
                              </li>

          <li className='hover:text-white 
                            hover:scale-110 
                            transition-transform 
                            cursor-pointer'>
                              <a href="#">Por que fazer</a>
                              </li>

          <li className='hover:text-white 
                            hover:scale-110 
                            transition-transform 
                            cursor-pointer'>
                              <a href="#">Profissionais</a>
                              </li>

          <li className='hover:text-white 
                            hover:scale-110 
                            transition-transform 
                            cursor-pointer'>
                              <a href="#">Avaliações</a>
                              </li>

          <li className='hover:text-white 
                            hover:scale-110 
                            transition-transform 
                            cursor-pointer'>
                              <a href="#">Contato</a>
                              </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
