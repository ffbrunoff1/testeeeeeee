import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChefHat, Wine, Cake, Coffee, Star, ArrowRight } from 'lucide-react'

export default function Menu() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = [
    {
      id: 'entradas',
      name: 'Entradas',
      description: 'Comece sua experiência italiana com nossas entradas deliciosas e autênticas, preparadas com ingredientes frescos importados diretamente da Itália.',
      icon: ChefHat,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      items: 3,
      featured: 'Carpaccio de Carne',
      price: 'A partir de R$ 29,90',
      color: 'from-wine-600 to-wine-700'
    },
    {
      id: 'pratos-principais',
      name: 'Pratos Principais',
      description: 'Pratos principais que oferecem uma verdadeira viagem gastronômica à Itália, com massas artesanais e carnes selecionadas.',
      icon: Star,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      items: 8,
      featured: 'Tagliatelle al Tartufo',
      price: 'A partir de R$ 47,90',
      color: 'from-accent-600 to-accent-700'
    },
    {
      id: 'sobremesas',
      name: 'Sobremesas',
      description: 'Delicie-se com nossas sobremesas tradicionais italianas, perfeitas para encerrar sua refeição com chave de ouro.',
      icon: Cake,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      items: 5,
      featured: 'Tiramisu Tradicional',
      price: 'A partir de R$ 22,90',
      color: 'from-wine-500 to-accent-600'
    },
    {
      id: 'bebidas',
      name: 'Bebidas',
      description: 'Complemente sua refeição com nossa seleção de bebidas italianas e internacionais, incluindo vinhos premiados.',
      icon: Wine,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      items: 15,
      featured: 'Vinho Chianti Clássico',
      price: 'A partir de R$ 89,90',
      color: 'from-wine-700 to-wine-800'
    }
  ]

  const specialties = [
    {
      name: 'Massa Fresca Diária',
      description: 'Todas as nossas massas são feitas diariamente com ingredientes importados',
      icon: ChefHat
    },
    {
      name: 'Vinhos Premiados',
      description: 'Carta com mais de 100 rótulos de vinhos italianos selecionados',
      icon: Wine
    },
    {
      name: 'Menu Degustação',
      description: 'Experiência completa com pratos harmonizados pelo chef',
      icon: Star
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-gradient-to-br from-wine-50 via-white to-accent-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 font-elegant">
              Nosso Cardápio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra uma seleção cuidadosa de pratos autênticos da culinária italiana, 
              preparados com ingredientes frescos e técnicas tradicionais passadas de geração em geração.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {categories.map((category, index) => {
              const CategoryIcon = category.icon
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                    <div className="relative overflow-hidden h-64">
                      <motion.img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`} />
                      <div className="absolute inset-0 bg-black/20" />
                      
                      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <CategoryIcon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center justify-between">
                          <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            {category.items} itens disponíveis
                          </span>
                          <span className="text-lg font-bold">{category.price}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 font-elegant">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      
                      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-wine-700 mb-1">Destaque da Categoria:</h4>
                        <p className="text-gray-700">{category.featured}</p>
                      </div>
                      
                      <Link
                        to={`/cardapio/${category.id}`}
                        className="wine-button w-full text-center py-4 group-hover:scale-105 transition-transform duration-200 flex items-center justify-center space-x-2"
                      >
                        <span>Explorar {category.name}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {specialties.map((specialty, index) => {
              const SpecialtyIcon = specialty.icon
              return (
                <motion.div
                  key={specialty.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                  <p className="text-gray-600 leading-relaxed">
                    {specialty.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-gradient-to-r from-wine-700 to-accent-600 rounded-2xl p-12 text-white"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-elegant">
              Experiência Gastronômica Completa
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Reserve uma mesa e viva uma experiência autêntica da culinária italiana. 
              Cada prato conta uma história, cada sabor é uma viagem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservas"
                className="accent-button text-lg px-8 py-4"
              >
                Fazer Reserva
              </Link>
              <motion.a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de informações sobre o cardápio do Testeeeeeee."
                whileHover={{ scale: 1.05 }}
                className="outline-button text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-wine-700"
              >
                Fale Conosco
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}