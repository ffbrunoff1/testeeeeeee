import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Calendar, Clock, Users, Phone, Mail, User, MessageCircle, CheckCircle, MapPin } from 'lucide-react'

export default function Reservations() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
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
          recipientEmail: '',
          subject: 'Nova Reserva - Restaurante Testeeeeeee'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          message: ''
        })
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

  const timeSlots = [
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'
  ]

  const guestOptions = [
    { value: '1', label: '1 pessoa' },
    { value: '2', label: '2 pessoas' },
    { value: '3', label: '3 pessoas' },
    { value: '4', label: '4 pessoas' },
    { value: '5', label: '5 pessoas' },
    { value: '6', label: '6 pessoas' },
    { value: '7', label: '7 pessoas' },
    { value: '8', label: '8 pessoas' },
    { value: '9+', label: '9+ pessoas (Grupo)' }
  ]

  const reservationBenefits = [
    {
      icon: CheckCircle,
      title: 'Mesa Garantida',
      description: 'Sua mesa estará reservada e preparada especialmente para você'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Nossa equipe estará preparada para oferecer o melhor atendimento'
    },
    {
      icon: Calendar,
      title: 'Flexibilidade',
      description: 'Altere ou cancele sua reserva até 2 horas antes do horário'
    }
  ]

  const today = new Date().toISOString().split('T')[0]

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
              Faça sua Reserva
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reserve sua mesa no Testeeeeeee e desfrute de uma experiência gastronômica 
              inesquecível com o melhor da culinária italiana.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 font-elegant flex items-center">
                <Calendar className="w-8 h-8 text-wine-600 mr-3" />
                Dados da Reserva
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Reserva Enviada com Sucesso!
                  </h3>
                  <p className="text-green-700">
                    Entraremos em contato em até 2 horas para confirmar sua reserva.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
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
                      <Phone className="w-4 h-4 inline mr-2" />
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
                    <Mail className="w-4 h-4 inline mr-2" />
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

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Data *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      min={today}
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Horário *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500 transition-colors"
                    >
                      <option value="">Selecione</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Pessoas *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500 transition-colors"
                    >
                      {guestOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Observações
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500 transition-colors resize-none"
                    placeholder="Aniversário, preferências alimentares, solicitações especiais..."
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
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 text-lg ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'wine-button'
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Confirmar Reserva'}
                </motion.button>

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700"
                  >
                    Erro ao enviar reserva. Tente novamente ou entre em contato por telefone.
                  </motion.div>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-elegant">
                  Vantagens da Reserva
                </h3>
                <div className="space-y-6">
                  {reservationBenefits.map((benefit, index) => {
                    const BenefitIcon = benefit.icon
                    return (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-12 h-12 bg-gradient-wine rounded-full flex items-center justify-center flex-shrink-0">
                          <BenefitIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              <div className="bg-gradient-wine rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 font-elegant">
                  Informações Importantes
                </h3>
                <div className="space-y-4 text-white/90">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-accent-300" />
                    <div>
                      <p className="font-semibold">Horário de Funcionamento</p>
                      <p>Terça a Domingo: 18:00 - 23:00</p>
                      <p>Segunda-feira: Fechado</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-accent-300" />
                    <div>
                      <p className="font-semibold">Localização</p>
                      <p>Rua Exemplo, 123 - Centro</p>
                      <p>São Paulo, SP - CEP: 01234-567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-accent-300" />
                    <div>
                      <p className="font-semibold">Contato Direto</p>
                      <p>(11) 99999-9999</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-elegant">
                  Prefere Falar Conosco?
                </h3>
                <p className="text-gray-600 mb-6">
                  Entre em contato diretamente pelo WhatsApp para reservas imediatas
                </p>
                <motion.a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer uma reserva no Testeeeeeee."
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="accent-button w-full py-4 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Reservar via WhatsApp</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}