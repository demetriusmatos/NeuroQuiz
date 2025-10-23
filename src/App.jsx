import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import StatsCards from '@/components/StatsCards';
import TabNavigation from '@/components/TabNavigation';
import QuizDaily from '@/components/QuizDaily';
import Shop from '@/components/Shop';
import Ranking from '@/components/Ranking';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [activeTab, setActiveTab] = useState('quiz');
  const [userData, setUserData] = useState({
    name: 'Usuário',
    totalPoints: 150,
    streak: 7,
    quizzesCompleted: 12,
    monthPoints: 85
  });

  useEffect(() => {
    const savedData = localStorage.getItem('neuroquiz-user');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('neuroquiz-user', JSON.stringify(userData));
  }, [userData]);

  const updateUserPoints = (points) => {
    setUserData(prev => ({
      ...prev,
      totalPoints: prev.totalPoints + points,
      monthPoints: prev.monthPoints + points
    }));
  };

  return (
    <>
      <Helmet>
        <title>NeuroQuiz - Quizzes Diários Gamificados</title>
        <meta name="description" content="Participe de quizzes diários, ganhe pontos e troque por recompensas incríveis no NeuroQuiz!" />
      </Helmet>
      
      <div className="min-h-screen pb-12">
        <Header userData={userData} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <StatsCards userData={userData} />
          
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'quiz' && <QuizDaily updateUserPoints={updateUserPoints} />}
              {activeTab === 'shop' && <Shop userPoints={userData.totalPoints} />}
              {activeTab === 'ranking' && <Ranking />}
            </motion.div>
          </AnimatePresence>
        </main>
        
        <Toaster />
      </div>
    </>
  );
}

export default App;