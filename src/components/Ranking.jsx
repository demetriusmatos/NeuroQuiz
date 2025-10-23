import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp } from 'lucide-react';

const Ranking = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="gradient-purple p-6 text-white">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Ranking Mensal — Outubro 2025</h2>
          </div>
        </div>

        <div className="p-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
              <Trophy className="w-16 h-16 text-purple-400" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ranking Vazio
            </h3>
            
            <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
              Seja o primeiro a fazer um quiz este mês e apareça no ranking! 🚀
            </p>
            
            <motion.div
              className="mt-8 inline-block px-6 py-3 bg-purple-50 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-purple-600 font-semibold">
                Complete quizzes para subir no ranking!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Ranking;