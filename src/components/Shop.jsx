import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Droplet, Coffee, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Shop = ({ userPoints }) => {
  const products = [
    {
      id: 1,
      name: 'Garrafa Esportiva',
      description: 'Garrafa térmica de 500ml com logo NeuroQuiz',
      points: 40,
      icon: Droplet,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 2,
      name: 'Caneca Premium Quiz Acessórias',
      description: 'Caneca de cerâmica premium personalizada',
      points: 50,
      icon: Coffee,
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 3,
      name: 'Kit Caneca + Camiseta',
      description: 'Kit completo com caneca e camiseta exclusiva',
      points: 110,
      icon: Package,
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  const handleRedeem = (product) => {
    if (userPoints >= product.points) {
      toast({
        title: "🚧 Funcionalidade em desenvolvimento",
        description: "O sistema de resgate será implementado em breve!",
      });
    } else {
      toast({
        title: "❌ Pontos Insuficientes",
        description: `Você precisa de ${product.points - userPoints} pontos a mais!`,
        variant: "destructive"
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
        <div className="gradient-purple p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Shop de Recompensas</h2>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Pontos disponíveis</p>
              <p className="text-3xl font-bold">{userPoints}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 mb-6">
            <p className="text-green-700 font-semibold text-center">
              ✨ Você pode resgatar 1 item este mês
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 shadow-md"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 min-h-[40px]">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-600">
                    {product.points} pts
                  </span>
                </div>

                <Button
                  onClick={() => handleRedeem(product)}
                  disabled={userPoints < product.points}
                  className={`w-full rounded-xl font-semibold ${
                    userPoints >= product.points
                      ? 'gradient-purple text-white hover:opacity-90'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {userPoints >= product.points ? 'Resgatar' : 'Pontos Insuficientes'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Shop;