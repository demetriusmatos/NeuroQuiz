import React from 'react';
import { motion } from 'framer-motion';
import { Crown, LogOut, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Header = ({ userData }) => {
  const handleLogout = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "A função de logout será implementada em breve!",
    });
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl gradient-purple flex items-center justify-center shadow-lg">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                NeuroQuiz
              </h1>
              <p className="text-sm text-gray-600 font-medium">
                Olá, {userData.name}! 👋
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.div 
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 px-5 py-2.5 rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Crown className="w-5 h-5 text-white" />
              <span className="font-bold text-white text-lg">{userData.totalPoints}</span>
            </motion.div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleLogout}
              className="rounded-full border-purple-200 hover:bg-purple-50 hover:border-purple-300 transition-all"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;