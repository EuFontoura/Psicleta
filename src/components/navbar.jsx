import React from 'react';
import logo from '../img/logo.png';

const Navbar = () => {
  return (
    <div className="flex flex-col items-start min-h-screen mx-20">
      <div className="flex items-center justify-between w-full">
        <img src={logo} alt="logo_psiciencia" className='m-3 h-13 w-30 cursor-pointer' />
        <button className='rounded-xl w-80 h-10 bg-cyan-400 mr-4 hover:bg-cyan-100 hover:scale-110 transition-transform font-dm-sans font-bold text-xl'>Agende sua Consulta</button>
      </div>
      <div className="mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-5 gap-7 text-2xl text-center m-8 font-dm-sans font-bold border-b-2 border-cyan-500">
          <li className='hover:text-white hover:scale-110 transition-transform cursor-pointer'>Sobre</li>
          <li className='hover:text-white hover:scale-110 transition-transform cursor-pointer'>Por que fazer</li>
          <li className='hover:text-white hover:scale-110 transition-transform cursor-pointer'>Profissionais</li>
          <li className='hover:text-white hover:scale-110 transition-transform cursor-pointer'>Avaliações</li>
          <li className='hover:text-white hover:scale-110 transition-transform cursor-pointer'>Contato</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
