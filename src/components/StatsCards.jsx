import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, Target, Calendar } from 'lucide-react';

const StatsCards = ({ userData }) => {
  const stats = [
    {
      icon: Trophy,
      label: 'Pontos Totais',
      value: userData.totalPoints,
      gradient: 'gradient-yellow',
      iconColor: 'text-amber-600'
    },
    {
      icon: Flame,
      label: 'Sequência de dias',
      value: `${userData.streak} dias`,
      gradient: 'gradient-orange',
      iconColor: 'text-orange-600'
    },
    {
      icon: Target,
      label: 'Quizzes Feitos',
      value: userData.quizzesCompleted,
      gradient: 'gradient-lilac',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Calendar,
      label: 'Pontos do Mês',
      value: userData.monthPoints,
      gradient: 'gradient-purple',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className={`${stat.gradient} rounded-2xl p-6 shadow-lg`}
        >
          <div className="flex items-center justify-between mb-3">
            <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
          </div>
          <p className="text-sm font-medium text-gray-700 mb-1">{stat.label}</p>
          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCards;