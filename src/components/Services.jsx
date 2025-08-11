import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChefHat, Wine, Cake, Coffee, Star, Clock } from 'lucide-react'

export default function Services() {
  const menuCategories = [
    {
      id: 'entradas',
      name: 'Entradas',
      description: 'Comece sua experiência italiana com nossas entradas deliciosas e autênticas.',
      icon: ChefHat,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlight: 'Carpaccio de Carne - R$ 29,90',
      color: 'from-wine-600 to-wine-700'
    },
    {
      id: 'pratos-principais',
      name: 'Pratos Principais',
      description: 'Pratos principais que oferecem uma verdadeira viagem gastronômica à Itália.',
      icon: Star,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlight: 'Tagliatelle al Tartufo - R$ 55,90',
      color: 'from-accent-600 to-accent-700'
    },
    {
      id: 'sobremesas',
      name: 'Sobremesas',
      description: 'Delicie-se com nossas sobremesas, perfeitas para encerrar sua refeição com chave de ouro.',
      icon: Cake,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlight: 'Tiramisu Tradicional - R$ 22,90',
      color: 'from-wine-500 to-accent-600'
    },
    {
      id: 'bebidas',
      name: 'Bebidas',
      description: 'Complemente sua refeição com nossa seleção de bebidas italianas e internacionais.',
      icon: Wine,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlight: 'Vinho Chianti - R$ 89,90',
      color: 'from-wine-700 to-wine-800'
    }
  ]

  const specialties = [
    {
      name: 'Massas Artesanais',
      description: 'Feitas diariamente com técnicas tradicionais italianas',
      icon: ChefHat
    },
    {
      name: 'Vinhos Selecionados',
      description: 'Carta com mais de 100 rótulos italianos premium',
      icon: Wine
    },
    {
      name: 'Ambiente Romântico',
      description: 'Perfeito para jantares especiais e ocasiões memoráveis',
      icon: Coffee
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-red-50/20 to-orange-50/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 font-elegant">
            Nosso Cardápio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra a autêntica culinária italiana através de nossos pratos 
            cuidadosamente preparados com ingredientes frescos e técnicas tradicionais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {menuCategories.map((category, index) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`} />
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 font-elegant">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                      {category.description}
                    </p>
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-semibold text-wine-700">
                        Destaque: {category.highlight}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        to={`/cardapio/${category.id}`}
                        className="wine-button w-full text-center py-3 group-hover:scale-105 transition-transform duration-200"
                      >
                        Ver Categoria
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {specialties.map((specialty, index) => {
            const SpecialtyIcon = specialty.icon
            return (
              <motion.div
                key={specialty.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 bg-gradient-wine rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <SpecialtyIcon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3 font-elegant">
                  {specialty.name}
                </h4>
                <p className="text-gray-600">
                  {specialty.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-wine-700 to-accent-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-elegant">
            Horários de Funcionamento
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6 text-accent-300" />
              <div>
                <p className="font-semibold">Terça a Domingo</p>
                <p className="text-accent-200">18:00 - 23:00</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6 text-accent-300" />
              <div>
                <p className="font-semibold">Segunda-feira</p>
                <p className="text-accent-200">Fechado</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cardapio"
              className="accent-button text-lg px-8 py-4"
            >
              Ver Cardápio Completo
            </Link>
            <Link
              to="/reservas"
              className="outline-button text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-wine-700"
            >
              Fazer Reserva
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}