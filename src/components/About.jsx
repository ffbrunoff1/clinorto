import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, Users, Heart, CheckCircle, Star, Clock, Stethoscope } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Cuidado Humanizado',
      description: 'Tratamento personalizado com foco no bem-estar e conforto do paciente durante todo o processo de recuperação.'
    },
    {
      icon: Award,
      title: 'Excelência Médica',
      description: 'Equipe altamente qualificada com especialização em ortodologia e cirurgia ortopédica de última geração.'
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Protocolos rigorosos de segurança e utilização de tecnologia de ponta para resultados excepcionais.'
    },
    {
      icon: Users,
      title: 'Equipe Multidisciplinar',
      description: 'Profissionais especializados trabalhando em conjunto para oferecer o melhor tratamento possível.'
    }
  ]

  const achievements = [
    { icon: CheckCircle, text: '15+ anos de experiência em ortodologia' },
    { icon: CheckCircle, text: 'Mais de 2000 cirurgias realizadas com sucesso' },
    { icon: CheckCircle, text: 'Tecnologia minimamente invasiva' },
    { icon: CheckCircle, text: 'Reabilitação completa e acompanhamento' },
    { icon: CheckCircle, text: 'Atendimento humanizado e personalizado' },
    { icon: CheckCircle, text: 'Equipe médica especializada e certificada' }
  ]

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Paciente',
      comment: 'Excelente atendimento e profissionais muito qualificados. Minha cirurgia de joelho foi um sucesso completo.',
      rating: 5
    },
    {
      name: 'João Santos',
      role: 'Paciente',
      comment: 'Recuperação muito mais rápida do que esperava. A equipe me acompanhou em todo o processo.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Paciente',
      comment: 'Voltei a praticar esportes graças ao excelente trabalho da Clinorto. Recomendo para todos.',
      rating: 5
    }
  ]

  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Sobre a <span className="gradient-text">Clinorto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos uma clínica especializada em ortodologia, dedicada a proporcionar 
            tratamentos de excelência com tecnologia de ponta e cuidado humanizado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Missão e Compromisso
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Na Clinorto, nossa missão é devolver qualidade de vida aos nossos pacientes 
                através de tratamentos ortodônticos avançados, especialmente cirurgias de joelho 
                minimamente invasivas que garantem recuperação mais rápida e resultados duradouros.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Combinamos experiência clínica com tecnologia de última geração para oferecer 
                o que há de mais moderno em ortodologia, sempre priorizando o bem-estar e a 
                segurança dos nossos pacientes.
              </p>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  {React.createElement(achievement.icon, { className: 'h-5 w-5 text-primary-600 flex-shrink-0' })}
                  <span className="text-gray-700">{achievement.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/cirurgia_joelho_1756418104308.png"
                alt="Clinorto - Especialistas em Ortodologia"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-gray-900">98%</p>
                  <p className="text-sm text-gray-600">Taxa de Sucesso</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-primary-600 rounded-xl p-6 shadow-xl"
              >
                <div className="flex items-center space-x-4">
                  <Clock className="h-8 w-8 text-white" />
                  <div>
                    <p className="text-xl font-bold text-white">24h</p>
                    <p className="text-sm text-primary-100">Suporte Pós-Op</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-accent-500/10 rounded-2xl blur-xl" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos Valores e Diferenciais
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg w-fit mb-4">
                  {React.createElement(value.icon, { className: 'h-6 w-6 text-white' })}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Depoimentos dos Pacientes
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}