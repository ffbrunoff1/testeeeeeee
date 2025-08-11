import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChefHat, Calendar, MapPin, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-wine-900/70 to-accent-900/60"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/testeeeeeee/testeeeeeee-logo-full-2025-08-11T22-02-03-802Z.svg"
              alt="Testeeeeeee"
              className="h-24 md:h-32 w-auto mx-auto filter invert brightness-0 contrast-100"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-elegant"
          >
            Descubra a Verdadeira
            <span className="block bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
              Essência Italiana
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
          >
            Uma explosão de sabores em cada prato, viva la dolce vita!
            <span className="block mt-2 text-lg text-accent-300">
              Ingredientes frescos, receitas tradicionais, momentos inesquecíveis
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/cardapio"
              className="wine-button text-lg px-8 py-4 flex items-center justify-center space-x-2 group"
            >
              <ChefHat className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Ver Cardápio</span>
            </Link>
            <Link
              to="/reservas"
              className="accent-button text-lg px-8 py-4 flex items-center justify-center space-x-2 group"
            >
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Fazer Reserva</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Qualidade Premium</h3>
              <p className="text-gray-300 text-sm">Ingredientes importados direto da Itália</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <ChefHat className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Chef Especialista</h3>
              <p className="text-gray-300 text-sm">Tradições culinárias autênticas</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <MapPin className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Localização Prime</h3>
              <p className="text-gray-300 text-sm">Ambiente aconchegante e sofisticado</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}