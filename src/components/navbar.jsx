import React, { useState, useEffect } from 'react';
import logo from '../img/logo.png';
import '../App.css';
import  'boxicons'

const Navbar = () => {

  return (
    <div className='flex flex-col items-start'>
      <div className='flex items-center md:justify-normal justify-between w-full fixed bg-mainColor border-b-2 border-black md:border-none z-50'>
        <div className='md:hidden'><box-icon name='menu' size='lg'></box-icon></div>
        <img src={logo} alt="logo_psicleta" className='mr-10 mt-6 mb-6 h-20 w-20 md:h-13 md:w-20 cursor-pointer flex md:mx-32'/>
        <div className="hidden md:block ">
          <ul className="flex justify-between text-stone-300 text-2xl font-dm-sans font-bold border-b-2 border-green1 ml-300 w-full">
            <li className='hover:text-hover hover:scale-110 transition-transform cursor-pointer'>
              <a href="#sobre">Sobre</a>
            </li>
            <li className='hover:text-hover hover:scale-110 transition-transform cursor-pointer'>
              <a href="#porquefazer">Por que fazer</a>
            </li>
            <li className='hover:text-hover hover:scale-110 transition-transform cursor-pointer'>
              <a href="#">Profissionais</a>
            </li>
            <li className='hover:text-hover hover:scale-110 transition-transform cursor-pointer'>
              <a href="#">Avaliações</a>
            </li>
            <li className='hover:text-hover hover:scale-110 transition-transform cursor-pointer'>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
