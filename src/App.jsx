import './App.css';
import froid from './img/froid.png';

export default function App() {
  return (
    <div className="grid grid-cols-2 mx-20">
      <div className="col-span-1 m-3 text-2xl p-9 font-grape-nuts text-black-300 flex flex-col items-center justify-center">
        <p className="text-6xl mb-16 font-semibold text-shadow text-stone-50">Terapia On-line</p>
        <p>Bem-vindo ao Projeto Psiciência! Estamos comprometidos em promover a saúde mental e o 
          bem-estar emocional, oferecendo apoio psicológico à comunidade. Em Psiciência, acreditamos 
          que a ciência da mente pode iluminar caminhos para uma vida mais equilibrada e significativa.</p>
        <p className="m-6 font-semibold font-poppins">Missão:</p>
        <p>Nossa missão é proporcionar um ambiente acolhedor e inclusivo, 
          onde a psicologia se encontra com a compaixão. Buscamos criar 
          oportunidades para que todos possam acessar recursos psicológicos 
          e desenvolver habilidades para enfrentar os desafios da vida.</p>
        <p className='my-10 font-semibold'>É preciso ressignificar situações que lhe trazem dor, e quebrar ciclos repetitivos.</p>
        <a href="#" className='underline text-center block hover:text-stone-50'>Conheça nossa equipe!</a>

        <p className='italic mt-10'>Para as coisas mudarem, você precisa falar sobre elas!</p>
        <button className='rounded-xl w-80 h-10 
                        bg-cyan-400
                        hover:bg-cyan-100 hover:scale-110 
                        transition-transform 
                        font-dm-sans font-bold 
                        text-xl text-white
                        mx-auto mt-6'>Agendar Sessão</button>
      </div>
    <div className="col-span-1">
      <img src={froid} alt="" className='m-10 ml-40 h-100 w-100'/>

    </div>
    </div>
  );
}
