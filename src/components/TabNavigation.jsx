import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ShoppingBag, BarChart3 } from 'lucide-react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'quiz', label: 'Quiz Diário', icon: Trophy },
    { id: 'shop', label: 'Shop', icon: ShoppingBag },
    { id: 'ranking', label: 'Ranking', icon: BarChart3 }
  ];

  return (
    <div className="flex gap-3 mb-8 bg-white rounded-2xl p-2 shadow-md">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all ${
            activeTab === tab.id
              ? 'gradient-purple text-white shadow-lg'
              : 'text-gray-600 hover:bg-purple-50'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <tab.icon className="w-5 h-5" />
          <span className="hidden sm:inline">{tab.label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default TabNavigation;