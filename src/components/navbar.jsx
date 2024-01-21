import React from 'react';
import logo from '../img/logo.png';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex flex-col items-start mx-20">
      <div className="flex items-center justify-between w-full">
        <img src={logo} alt="logo_psiciencia" className='m-3 h-13 w-30 cursor-pointer' />

        <div className="flex items-center">
        <FaWhatsapp className='text-3xl text-cyan-500 cursor-pointer hover:text-cyan-300 mr-4 hover:text-4xl'/>
        <FaInstagram className='text-3xl text-cyan-500 cursor-pointer hover:text-cyan-300 mr-4 hover:text-4xl'/>
        <button className='rounded-xl w-80 h-10 
                        bg-cyan-400 mr-4 
                        hover:bg-cyan-100 hover:scale-110 
                        transition-transform 
                        font-dm-sans font-bold 
                        text-xl'>Agendar Sessão</button>
        </div>
      </div>
      <div className="mx-auto">

        <ul className="grid grid-cols-1 
                        md:grid-cols-5 
                        gap-7 text-2xl 
                        text-center m-8 
                        font-dm-sans font-bold 
                        border-b-2 border-cyan-500">

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
