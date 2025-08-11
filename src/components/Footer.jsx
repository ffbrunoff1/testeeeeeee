import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react'

export default function Footer() {
  const footerLinks = [
    {
      title: 'Navegação',
      links: [
        { name: 'Início', path: '/' },
        { name: 'Sobre Nós', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
        { name: 'Cardápio', path: '/cardapio' },
        { name: 'Reservas', path: '/reservas' },
        { name: 'Contato', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
      ]
    },
    {
      title: 'Cardápio',
      links: [
        { name: 'Entradas', path: '/cardapio/entradas' },
        { name: 'Pratos Principais', path: '/cardapio/pratos-principais' },
        { name: 'Sobremesas', path: '/cardapio/sobremesas' },
        { name: 'Bebidas', path: '/cardapio/bebidas' }
      ]
    }
  ]

  const contactInfo = [
    {
      icon: MapPin,
      text: 'Rua Exemplo, 123 - Centro, São Paulo, SP',
      action: () => window.open('https://maps.google.com/?q=Rua+Exemplo+123+Centro+São+Paulo', '_blank')
    },
    {
      icon: Phone,
      text: '(11) 99999-9999',
      action: () => window.open('https://wa.me/5511999999999', '_blank')
    },
    {
      icon: Mail,
      text: 'contato@testeeeeeee.com',
      action: () => window.location.href = 'mailto:contato@testeeeeeee.com'
    },
    {
      icon: Clock,
      text: 'Ter-Dom: 18h-23h | Seg: Fechado',
      action: null
    }
  ]

  const socialLinks = [
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    {
      icon: Facebook,
      href: '#',
      label: 'Facebook',
      color: 'hover:text-blue-500'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/5511999999999?text=Olá! Gostaria de fazer uma reserva no Testeeeeeee.',
      label: 'WhatsApp',
      color: 'hover:text-green-500'
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-wine-900 via-wine-800 to-wine-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-6">
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/testeeeeeee/testeeeeeee-logo-full-2025-08-11T22-02-03-802Z.svg"
                alt="Testeeeeeee"
                className="h-16 w-auto filter invert brightness-0 contrast-100"
                whileHover={{ scale: 1.05 }}
              />
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6">
              Autêntica culinária italiana no coração de São Paulo. 
              Cada prato é uma viagem gastronômica à Itália, preparado 
              com ingredientes frescos e muito amor.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-colors duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <SocialIcon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 font-elegant text-accent-300">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.path ? (
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-accent-300 transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-1 h-1 bg-accent-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300" />
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        onClick={link.action}
                        className="text-gray-300 hover:text-accent-300 transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-1 h-1 bg-accent-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300" />
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 font-elegant text-accent-300">
              Contato
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => {
                const InfoIcon = info.icon
                return (
                  <li key={index}>
                    <motion.div
                      className={`flex items-start space-x-3 text-gray-300 ${
                        info.action ? 'cursor-pointer hover:text-accent-300 transition-colors duration-300' : ''
                      }`}
                      onClick={info.action}
                      whileHover={info.action ? { x: 5 } : {}}
                    >
                      <InfoIcon className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent-400" />
                      <span className="text-sm leading-relaxed">{info.text}</span>
                    </motion.div>
                  </li>
                )
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-accent-600/20 to-wine-600/20 rounded-lg border border-accent-500/30"
            >
              <h5 className="font-semibold text-accent-300 mb-2 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Horário Especial
              </h5>
              <p className="text-sm text-gray-300">
                Reservas para grupos acima de 10 pessoas podem ser feitas em horários diferenciados. 
                Entre em contato!
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Testeeeeeee. Todos os direitos reservados.</p>
            </div>
            <div className="text-sm text-gray-400 flex items-center">
              <span>Criação de sites com qualidade e elegância pela equipe da </span>
              <motion.a
                href="https://papum.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold text-accent-400 hover:text-accent-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Papum
              </motion.a>
              <Heart className="w-4 h-4 ml-2 text-red-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}