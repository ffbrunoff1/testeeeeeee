import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ChefHat, Clock, Star, Wine } from 'lucide-react'

export default function MenuCategory() {
  const { categoria } = useParams()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const menuData = {
    'entradas': {
      name: 'Entradas',
      description: 'Comece sua experiência italiana com nossas entradas deliciosas e autênticas.',
      icon: ChefHat,
      color: 'from-wine-600 to-wine-700',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      items: [
        {
          name: 'Carpaccio de Carne',
          price: 'R$ 29,90',
          description: 'Finas fatias de carne com rúcula, parmesão e molho cítrico. Um clássico da culinária italiana preparado na hora.',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          prepTime: '15 min',
          featured: true
        }
      ]
    },
    'pratos-principais': {
      name: 'Pratos Principais',
      description: 'Pratos principais que oferecem uma verdadeira viagem gastronômica à Itália.',
      icon: Star,
      color: 'from-accent-600 to-accent-700',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      items: [
        {
          name: 'Tagliatelle al Tartufo',
          price: 'R$ 55,90',
          description: 'Massa caseira servida com trufas negras e parmesão. Uma iguaria que representa o melhor da culinária italiana.',
          image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          prepTime: '25 min',
          featured: true
        },
        {
          name: 'Frango à Parmegiana',
          price: 'R$ 47,90',
          description: 'Peito de frango empanado coberto com molho de tomate e queijo gratinado. Servido com acompanhamentos.',
          image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          prepTime: '30 min',
          featured: false
        }
      ]
    },
    'sobremesas': {
      name: 'Sobremesas',
      description: 'Delicie-se com nossas sobremesas, perfeitas para encerrar sua refeição com chave de ouro.',
      icon: Wine,
      color: 'from-wine-500 to-accent-600',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      items: [
        {
          name: 'Tiramisu Tradicional',
          price: 'R$ 22,90',
          description: 'Sobremesa clássica com café e cacau. Preparada com mascarpone fresco e biscoitos savoiardi.',
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          prepTime: '10 min',
          featured: true
        }
      ]
    },
    'bebidas': {
      name: 'Bebidas',
      description: 'Complemente sua refeição com nossa seleção de bebidas italianas e internacionais.',
      icon: Wine,
      color: 'from-wine-700 to-wine-800',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      items: [
        {
          name: 'Vinho Chianti',
          price: 'R$ 89,90',
          description: 'Um vinho tinto italiano autêntico. Corpo médio com notas frutadas e taninos equilibrados.',
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          prepTime: '5 min',
          featured: true
        }
      ]
    }
  }

  const categoryData = menuData[categoria]

  if (!categoryData) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Categoria não encontrada</h1>
          <Link to="/cardapio" className="wine-button">
            Voltar ao Cardápio
          </Link>
        </div>
      </div>
    )
  }

  const CategoryIcon = categoryData.icon

  return (
    <div className="min-h-screen pt-20">
      <section 
        className="relative py-20 bg-gradient-to-br from-wine-900/90 to-accent-900/80"
        style={{
          backgroundImage: `url('${categoryData.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <Link
              to="/cardapio"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar ao Cardápio</span>
            </Link>
            
            <div className="mb-8">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <CategoryIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-elegant">
                {categoryData.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {categoryData.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-white via-red-50/30 to-orange-50/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {categoryData.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${categoryData.color} opacity-60`} />
                    
                    {item.featured && (
                      <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Destaque
                      </div>
                    )}
                    
                    <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-bold text-lg">
                      {item.price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 font-elegant">
                        {item.name}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.prepTime}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.a
                        href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer uma reserva no Testeeeeeee."
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="wine-button flex-1 text-center py-3"
                      >
                        Fazer Reserva
                      </motion.a>
                      <motion.a
                        href={`https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre ${item.name}.`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="outline-button flex-1 text-center py-3"
                      >
                        Mais Informações
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center bg-gradient-to-r from-wine-700 to-accent-600 rounded-2xl p-12 text-white"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-elegant">
              Pronto para uma Experiência Única?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Reserve sua mesa e desfrute dos melhores sabores da culinária italiana 
              em um ambiente acolhedor e sofisticado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservas"
                className="accent-button text-lg px-8 py-4"
              >
                Fazer Reserva Agora
              </Link>
              <Link
                to="/cardapio"
                className="outline-button text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-wine-700"
              >
                Ver Outras Categorias
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}