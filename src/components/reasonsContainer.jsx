import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';


const ReasonsContainer = () => {
  const reasons = [
    {
      title: 'Autoconhecimento',
      content:
        'Descubra mais sobre você mesmo, suas emoções e pensamentos, ganhando clareza sobre suas escolhas e comportamentos. O autoconhecimento é a chave para uma vida mais autêntica e satisfatória, permitindo que você tome decisões alinhadas com seus valores e objetivos.',
    },
    {
      title: 'Equilíbrio Emocional',
      content:
        'A terapia proporciona ferramentas para lidar com desafios emocionais, ajudando a manter o equilíbrio em diferentes situações. Desenvolva habilidades para reconhecer e gerenciar suas emoções, promovendo uma vida mais estável e saudável emocionalmente.',
    },
    {
      title: 'Relacionamentos Saudáveis',
      content:
        'Aprenda a estabelecer e manter relacionamentos saudáveis, melhorando a comunicação e resolvendo conflitos de forma construtiva. A terapia oferece um espaço seguro para explorar dinâmicas interpessoais, promovendo relações mais gratificantes e significativas.',
    },
    {
      title: 'Gestão do Estresse',
      content:
        'Desenvolva habilidades para lidar com o estresse diário, promovendo uma vida mais tranquila e focada. A terapia pode fornecer estratégias eficazes para reduzir o estresse, melhorar a resiliência e manter um equilíbrio saudável na vida cotidiana.',
    },
    {
      title: 'Crescimento Pessoal',
      content:
        'A terapia é uma jornada de crescimento, proporcionando oportunidades para evoluir como pessoa e atingir seu potencial máximo. Explore novas perspectivas, supere desafios e descubra recursos internos que impulsionarão seu desenvolvimento pessoal.',
    },
    {
      title: 'Autoestima e Confiança',
      content:
        'Trabalhe o fortalecimento da autoestima e confiança, desenvolvendo uma visão positiva de si mesmo. A terapia pode ajudar a identificar e desafiar padrões de pensamento negativos, promovendo uma autoimagem mais saudável e positiva.',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = containerRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75; // Ajuste aqui para controlar quando os cards ficarão visíveis
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className='mx-20 my-10'>
      <h1 className='text-4xl font-bold mb-6 text-center underline'>Como posso te ajudar</h1>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }} transition={{ duration: 1 }}>
        <div className='grid grid-cols-3 gap-10'>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className='col-span-1 bg-green2 p-6 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'
            >
              <h1 className='text-2xl font-bold mb-4 text-center'>{reason.title}</h1>
              <p className='text-gray-900'>{reason.content}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ReasonsContainer;