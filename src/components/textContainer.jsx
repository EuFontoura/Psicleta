import React from 'react'
import psicleta from '../img/Psicleta.jpg';

const textContainer = () => {
  return (
    <div  id='sobre' className="grid grid-cols-2 mx-20">
      <div className="col-span-1 m-3 text-2xl p-9 font-grape-nuts flex flex-col items-center justify-center ">
        <p className="text-6xl mb-16 font-semibold text-shadow ">Terapia On-line</p>
        <p className='m-3'>Venha conhecer e participar do projeto PsiCLETA! Um programa que tem como objetivo 
        facilitar o acesso ao serviço de psicologia para a comunidade, disponibilizando 
        atendimentos a preços sociais.</p>
        <p className='m-3'>A terapia é uma ferramenta poderosa e transformadora, capaz de promover o equilíbrio 
        emocional, melhorar os relacionamentos interpessoais e auxiliar na resolução de problemas 
        diversos. Com a correria do dia a dia e os desafios que enfrentamos, muitas vezes nos vemos 
        sem espaço para cuidar de nós mesmos. O projeto PsiCLETA busca mudar essa realidade, disponibilizando 
        atendimentos acessíveis a todos que desejam investir na própria saúde mental.</p>

        <p className='m-3'>Se você se interessou em participar do projeto PsiCLETA, basta preencher nosso formulário 
        de interesse, disponível no link abaixo. Estamos abertos para receber todas as pessoas que 
        desejam investir em sua saúde mental e emocional.</p>
        <a href="#" className='underline text-center block hover:text-stone-50'>Conheça nossa equipe!</a>

        <p className='italic mt-10'>Para as coisas mudarem, você precisa falar sobre elas!</p>
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
    <div className="col-span-1">
      <img src={psicleta} alt="psicleta" className='m-10 ml-20 h-100 w-100'/>
    </div>
    </div>
  )
}

export default textContainer;