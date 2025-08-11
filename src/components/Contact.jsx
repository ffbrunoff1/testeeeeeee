import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const recaptchaRef = useRef(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          token,
          recipientEmail: ''
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      recaptchaRef.current.reset()
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Rua Exemplo, 123 - Centro',
      subContent: 'São Paulo, SP - CEP: 01234-567',
      action: () => window.open('https://maps.google.com/?q=Rua+Exemplo+123+Centro+São+Paulo', '_blank')
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 99999-9999',
      subContent: 'WhatsApp disponível',
      action: () => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de fazer uma reserva no Testeeeeeee.', '_blank')
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@testeeeeeee.com',
      subContent: 'Respondemos em até 24h',
      action: () => window.location.href = 'mailto:contato@testeeeeeee.com'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Ter-Dom: 18h-23h',
      subContent: 'Segunda: Fechado',
      action: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-wine-50 via-white to-accent-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 font-elegant">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para tornar sua experiência gastronômica única. 
            Entre em contato conosco para reservas, eventos ou qualquer dúvida.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const InfoIcon = info.icon
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                      info.action ? 'cursor-pointer hover:scale-105 transform transition-transform' : ''
                    }`}
                    onClick={info.action}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-wine rounded-full flex items-center justify-center flex-shrink-0">
                        <InfoIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                        <p className="text-wine-700 font-medium">{info.content}</p>
                        <p className="text-gray-500 text-sm">{info.subContent}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-wine-600 mr-2" />
                Nossa Localização
              </h4>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974!2d-46.6339!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt!2sbr!4v1692830000000!5m2!1spt!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Restaurante Testeeeeeee"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-wine rounded-xl p-6 text-white"
            >
              <h4 className="font-semibold mb-4">Siga-nos nas Redes Sociais</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer uma reserva no Testeeeeeee."
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-elegant">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500 transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500 transition-colors resize-none"
                  placeholder="Deixe sua mensagem, dúvida ou solicitação de reserva..."
                />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'wine-button'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700"
                >
                  Mensagem enviada com sucesso! Retornaremos em breve.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700"
                >
                  Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}