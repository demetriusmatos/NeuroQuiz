import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const QuizDaily = ({ updateUserPoints }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(53);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

 const questions = [
  {
    question: 'A principal função dos neurônios é:',
    options: ['Produzir hormônios', 'Transmitir impulsos nervosos', 'Armazenar nutrientes', 'Formar tecidos musculares'],
    correct: 1,
    difficulty: 'fácil'
  },
  {
    question: 'A comunicação entre dois neurônios ocorre na:',
    options: ['Fenda sináptica', 'Membrana celular', 'Mitocôndria', 'Bainha de mielina'],
    correct: 0,
    difficulty: 'fácil'
  },
  {
    question: 'O que é sinapse?',
    options: [
      'Espaço entre neurônios onde ocorre a transmissão de impulsos',
      'Estrutura que produz energia celular',
      'Tipo de célula da glia',
      'Camada protetora do cérebro'
    ],
    correct: 0,
    difficulty: 'fácil'
  },
  {
    question: 'Qual substância é liberada na sinapse para transmitir informações?',
    options: ['DNA', 'Enzima digestiva', 'Neurotransmissor', 'Lipídio'],
    correct: 2,
    difficulty: 'fácil'
  },
  {
    question: 'A dopamina está relacionada principalmente com:',
    options: ['Sono e digestão', 'Motivação e prazer', 'Estresse e ansiedade', 'Fome e sede'],
    correct: 1,
    difficulty: 'fácil'
  },
  {
    question: 'A serotonina influencia diretamente:',
    options: ['Memória de longo prazo', 'Regulação do humor e sono', 'Coordenação motora', 'Crescimento muscular'],
    correct: 1,
    difficulty: 'fácil'
  },
  {
    question: 'A região do cérebro responsável pela formação da memória é o:',
    options: ['Córtex pré-frontal', 'Hipotálamo', 'Hipocampo', 'Cerebelo'],
    correct: 2,
    difficulty: 'médio'
  },
  {
    question: 'A mielina tem a função de:',
    options: ['Proteger os órgãos internos', 'Aumentar a velocidade do impulso nervoso', 'Produzir neurotransmissores', 'Regular a temperatura corporal'],
    correct: 1,
    difficulty: 'médio'
  },
  {
    question: 'Neuroplasticidade é:',
    options: ['Capacidade do cérebro de mudar e se adaptar', 'Falta de conexão entre neurônios', 'Diminuição da memória com a idade', 'Morte das células cerebrais'],
    correct: 0,
    difficulty: 'médio'
  },
  {
    question: 'Qual parte do neurônio recebe os estímulos de outros neurônios?',
    options: ['Axônio', 'Dendrito', 'Núcleo', 'Corpo celular'],
    correct: 1,
    difficulty: 'médio'
  },
  {
    question: 'As células da glia têm como principal função:',
    options: ['Transmitir impulsos elétricos', 'Dar suporte e proteção aos neurônios', 'Produzir energia muscular', 'Controlar a digestão'],
    correct: 1,
    difficulty: 'médio'
  },
  {
    question: 'Memória de curto prazo é responsável por:',
    options: ['Guardar informações por poucos segundos ou minutos', 'Manter lembranças da infância', 'Registrar habilidades motoras', 'Processar emoções'],
    correct: 0,
    difficulty: 'médio'
  },
  {
    question: 'Memória de longo prazo envolve:',
    options: ['Processos rápidos e automáticos', 'Armazenamento duradouro de informações', 'Ações reflexas simples', 'Coordenação motora'],
    correct: 1,
    difficulty: 'médio'
  },
  {
    question: 'A acetilcolina está relacionada com:',
    options: ['Movimento muscular e aprendizado', 'Controle do apetite', 'Produção de adrenalina', 'Sono profundo'],
    correct: 0,
    difficulty: 'médio'
  },
  {
    question: 'O córtex pré-frontal está envolvido em:',
    options: ['Emoções básicas e instintos', 'Tomada de decisões e raciocínio', 'Controle da respiração', 'Equilíbrio corporal'],
    correct: 1,
    difficulty: 'difícil'
  },
  {
    question: 'O sistema nervoso central é composto por:',
    options: ['Cérebro e medula espinhal', 'Coração e pulmões', 'Nervos e músculos', 'Cérebro e ossos cranianos'],
    correct: 0,
    difficulty: 'fácil'
  },
  {
    question: 'A aprendizagem ocorre principalmente por meio de:',
    options: ['Formação de novas sinapses', 'Aumento do fluxo sanguíneo', 'Produção de hormônios', 'Crescimento dos músculos'],
    correct: 0,
    difficulty: 'médio'
  },
  {
    question: 'Quando aprendemos algo novo, o cérebro:',
    options: ['Perde conexões antigas', 'Cria e fortalece novas conexões neurais', 'Reduz a plasticidade', 'Diminui a atividade elétrica'],
    correct: 1,
    difficulty: 'médio'
  },
  {
    question: 'A emoção influencia a memória porque:',
    options: [
      'Ocorre liberação de hormônios que reforçam o registro da informação',
      'Diminui a atenção',
      'Bloqueia o hipocampo',
      'Interrompe as sinapses'
    ],
    correct: 0,
    difficulty: 'difícil'
  },
  {
    question: 'Durante o sono, o cérebro:',
    options: [
      'Entra em repouso completo',
      'Elimina sinapses',
      'Consolida memórias e organiza informações',
      'Para de produzir neurotransmissores'
    ],
    correct: 2,
    difficulty: 'difícil'
  }
];


  useEffect(() => {
    if (timer > 0 && !isAnswered) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, isAnswered]);

  const handleAnswer = (index) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);

    if (index === questions[currentQuestion].correct) {
      updateUserPoints(3);
      toast({
        title: "🎉 Resposta Correta!",
        description: "Você ganhou 3 pontos!",
      });
      
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setSelectedAnswer(null);
          setIsAnswered(false);
          setTimer(53);
        } else {
          toast({
            title: "🏆 Quiz Completo!",
            description: "Parabéns! Você completou o quiz diário!",
          });
        }
      }, 1500);
    } else {
      toast({
        title: "❌ Resposta Incorreta",
        description: "Tente novamente amanhã!",
        variant: "destructive"
      });
    }
  };

  const question = questions[currentQuestion];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="gradient-purple p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold text-lg">{timer}s</span>
            </div>
            <div className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">
              {question.difficulty}
            </div>
            <div className="text-sm font-semibold">
              {currentQuestion + 1}/{questions.length}
            </div>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={isAnswered}
                whileHover={{ scale: isAnswered ? 1 : 1.02 }}
                whileTap={{ scale: isAnswered ? 1 : 0.98 }}
                className={`w-full p-5 rounded-2xl border-2 text-left font-semibold transition-all ${
                  isAnswered && index === question.correct
                    ? 'bg-green-50 border-green-500 text-green-700'
                    : isAnswered && index === selectedAnswer
                    ? 'bg-red-50 border-red-500 text-red-700'
                    : selectedAnswer === index
                    ? 'bg-purple-50 border-purple-500 text-purple-700'
                    : 'bg-gray-50 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white border-2 border-current flex items-center justify-center text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                  </div>
                  {isAnswered && index === question.correct && (
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-purple-600">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">3 pontos por resposta correta</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizDaily;