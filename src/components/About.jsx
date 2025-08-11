import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Award, Clock, Users } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Paixão pela Tradição',
      description: 'Cada receita carrega séculos de tradição italiana, preparada com amor e dedicação pelos nossos chefs especializados.'
    },
    {
      icon: Award,
      title: 'Ingredientes Premium',
      description: 'Importamos os melhores ingredientes diretamente da Itália para garantir autenticidade e qualidade em cada prato.'
    },
    {
      icon: Clock,
      title: 'Tradição Centenária',
      description: 'Nossas receitas são passadas de geração em geração, mantendo viva a essência da culinária italiana tradicional.'
    },
    {
      icon: Users,
      title: 'Experiência Familiar',
      description: 'Criamos um ambiente acolhedor onde cada cliente se sente em casa, vivenciando a hospitalidade italiana.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-red-50/30 to-orange-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 font-elegant">
            Nossa História
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No coração da cidade, o Testeeeeeee nasceu do sonho de trazer a autêntica 
            experiência gastronômica italiana para o Brasil, preservando tradições 
            milenares em cada prato servido.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Interior do Restaurante Testeeeeeee"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 font-elegant">
              Uma Jornada de Sabores Autênticos
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Fundado em 2015 por uma família apaixonada pela gastronomia italiana, 
              o Testeeeeeee representa mais que um restaurante - é uma ponte cultural 
              entre a Itália e o Brasil.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Nossos chefs, treinados nas melhores escolas culinárias da Itália, 
              trazem técnicas ancestrais combinadas com ingredientes frescos e 
              selecionados para criar experiências gastronômicas inesquecíveis.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 pt-4"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">8+</div>
                <div className="text-sm text-gray-600">Anos de Tradição</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50k+</div>
                <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-600">Ingredientes Italianos</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-wine rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300"
                >
                  <FeatureIcon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3 font-elegant">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-wine-700 to-wine-600 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-elegant">
            Viva la Dolce Vita Conosco
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Venha descobrir por que somos reconhecidos como o melhor restaurante 
            italiano da região. Cada visita é uma viagem gastronômica única.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="accent-button text-lg px-8 py-4 inline-flex items-center space-x-2"
          >
            <span>Faça Sua Reserva</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}