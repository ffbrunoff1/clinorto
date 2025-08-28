import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Phone, Shield, Award, Users, Clock, Heart, Star } from 'lucide-react'

export default function Hero() {
  const features = [
    { icon: Shield, text: 'Tratamentos Seguros' },
    { icon: Award, text: 'Equipe Especializada' },
    { icon: Users, text: 'Atendimento Humanizado' },
    { icon: Clock, text: 'Horários Flexíveis' }
  ]

  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '2000+', label: 'Cirurgias Realizadas' },
    { number: '98%', label: 'Sucesso nos Tratamentos' },
    { number: '24h', label: 'Suporte Pós-Operatório' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-300 rounded-full blur-3xl" />
      </div>

      <div className="relative container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-2"
              >
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-400 fill-current" />
                  ))}
                </div>
                <span className="text-white/90 text-sm">Avaliação 5 estrelas</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                Especialistas em{' '}
                <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                  Ortodologia
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed max-w-lg"
              >
                Cirurgia de joelho com tecnologia de ponta e cuidado humanizado. 
                Recupere sua mobilidade e qualidade de vida com nossa equipe especializada.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contato" className="btn-accent">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Consulta
              </Link>
              <a href="tel:(55) 44991-0407" className="btn-secondary">
                <Phone className="h-5 w-5 mr-2" />
                Ligar Agora
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                >
                  {React.createElement(feature.icon, { className: 'h-5 w-5 text-accent-400' })}
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/cirurgia_joelho_1756418104308.png"
                alt="Cirurgia de Joelho - Especialistas em Ortodologia"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2000+</p>
                    <p className="text-sm text-gray-600">Pacientes Tratados</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-3xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}