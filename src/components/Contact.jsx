import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Phone, Mail, MapPin, Clock, Calendar, Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
    preferredTime: ''
  })
  const [status, setStatus] = useState({ message: '', isError: false })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        service: formData.service,
        preferredTime: formData.preferredTime,
        recipientEmail: "ffbrunoff@yahoo.com.br",
        token: token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', isError: false })
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          service: '',
          preferredTime: ''
        })
      } else {
        throw new Error('Falha ao enviar mensagem')
      }
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    } finally {
      setIsSubmitting(false)
      recaptchaRef.current.reset()
      setTimeout(() => setStatus({ message: '', isError: false }), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(55) 44991-0407',
      action: 'tel:(55) 44991-0407',
      actionText: 'Ligar Agora'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'ffbrunoff@yahoo.com.br',
      action: 'mailto:ffbrunoff@yahoo.com.br',
      actionText: 'Enviar Email'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'Padre Lebret 801 G05 Bloco 03',
      action: 'https://maps.google.com/?q=Padre+Lebret+801+G05+Bloco+03',
      actionText: 'Ver no Mapa'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      info: 'Segunda a Sexta: 8h às 18h',
      secondary: 'Sábado: 8h às 12h',
      action: '/contato',
      actionText: 'Agendar Consulta'
    }
  ]

  const serviceOptions = [
    'Cirurgia de Joelho',
    'Reabilitação Pós-Cirúrgica',
    'Diagnóstico Avançado',
    'Consulta de Avaliação',
    'Fisioterapia Especializada',
    'Outro'
  ]

  const timeOptions = [
    'Manhã (8h às 12h)',
    'Tarde (13h às 17h)',
    'Final da Tarde (17h às 18h)',
    'Qualquer horário'
  ]

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ajudar você a recuperar sua qualidade de vida. 
            Agende sua consulta e inicie seu tratamento conosco.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex-shrink-0">
                      {React.createElement(contact.icon, { className: 'h-6 w-6 text-white' })}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
                      <p className="text-gray-600 mb-1">{contact.info}</p>
                      {contact.secondary && (
                        <p className="text-gray-600 mb-2">{contact.secondary}</p>
                      )}
                      <a
                        href={contact.action}
                        target={contact.title === 'Localização' ? '_blank' : '_self'}
                        rel={contact.title === 'Localização' ? 'noopener noreferrer' : ''}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                      >
                        {contact.actionText}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="h-8 w-8 text-primary-200" />
                <h3 className="text-2xl font-bold">Atendimento Personalizado</h3>
              </div>
              <p className="text-primary-100 mb-6 leading-relaxed">
                Nossa equipe está preparada para esclarecer todas suas dúvidas e orientar 
                sobre o melhor tratamento para seu caso. Entre em contato conosco!
              </p>
              <div className="flex space-x-4">
                <a href="tel:(55) 44991-0407" className="btn-accent">
                  <Phone className="h-5 w-5 mr-2" />
                  Ligar Agora
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Agende sua Consulta</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selecione um serviço</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Horário Preferido
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selecione um horário</option>
                      {timeOptions.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Descreva seus sintomas ou dúvidas..."
                  />
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center space-x-2 p-4 rounded-lg ${
                      status.isError 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}
                  >
                    {status.isError ? (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{status.message}</p>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
          size="invisible"
        />
      </div>
    </section>
  )
}