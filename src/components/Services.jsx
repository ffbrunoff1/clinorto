import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scissors, Activity, Shield, Clock, Calendar, ArrowRight, CheckCircle, Heart, Award } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'Cirurgia de Joelho',
      description: 'Procedimentos minimamente invasivos para lesões de ligamentos, cartilagens e meniscos com tecnologia de ponta.',
      features: ['Artroscopia avançada', 'Recuperação acelerada', 'Baixo risco cirúrgico', 'Resultados duradouros'],
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/cirurgia_joelho_1756418104308.png',
      link: '/produto/cirurgia-joelho'
    },
    {
      icon: Activity,
      title: 'Reabilitação Pós-Cirúrgica',
      description: 'Programa completo de fisioterapia e acompanhamento para garantir recuperação total da mobilidade.',
      features: ['Fisioterapia especializada', 'Acompanhamento 24h', 'Exercícios personalizados', 'Retorno às atividades'],
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/cirurgia_joelho_1756418104308.png',
      link: '/servicos'
    },
    {
      icon: Shield,
      title: 'Diagnóstico Avançado',
      description: 'Exames de imagem de alta precisão para diagnóstico preciso e planejamento cirúrgico detalhado.',
      features: ['Ressonância magnética', 'Tomografia computadorizada', 'Ultrassom articular', 'Análise biomecânica'],
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/cirurgia_joelho_1756418104308.png',
      link: '/servicos'
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Recuperação Rápida',
      description: 'Técnicas minimamente invasivas que reduzem significativamente o tempo de recuperação'
    },
    {
      icon: Heart,
      title: 'Cuidado Humanizado',
      description: 'Atendimento personalizado com foco no bem-estar e conforto do paciente'
    },
    {
      icon: Award,
      title: 'Resultados Comprovados',
      description: '98% de taxa de sucesso em cirurgias com mais de 2000 procedimentos realizados'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Protocolos rigorosos de segurança e utilização de tecnologia de última geração'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Avaliação completa do seu caso com exame físico detalhado e análise do histórico médico.'
    },
    {
      step: '02',
      title: 'Diagnóstico Preciso',
      description: 'Exames de imagem avançados para identificar exatamente o problema e planejar o tratamento.'
    },
    {
      step: '03',
      title: 'Planejamento Cirúrgico',
      description: 'Desenvolvimento de estratégia personalizada com explicação detalhada do procedimento.'
    },
    {
      step: '04',
      title: 'Cirurgia Minimamente Invasiva',
      description: 'Procedimento realizado com tecnologia de ponta para máxima precisão e menor trauma.'
    },
    {
      step: '05',
      title: 'Acompanhamento e Reabilitação',
      description: 'Programa completo de recuperação com fisioterapia e acompanhamento contínuo.'
    }
  ]

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos tratamentos completos em ortodologia com foco em cirurgia de joelho, 
            utilizando tecnologia de ponta e cuidado humanizado.
          </p>
        </motion.div>

        <div className="space-y-20 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg">
                    {React.createElement(service.icon, { className: 'h-8 w-8 text-white' })}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to={service.link} className="btn-primary">
                    Saiba Mais
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                  <Link to="/contato" className="btn-secondary">
                    <Calendar className="h-5 w-5 mr-2" />
                    Agendar Consulta
                  </Link>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <div className="relative z-10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl"
                  >
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-600">98%</p>
                      <p className="text-sm text-gray-600">Taxa de Sucesso</p>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-accent-500/10 rounded-2xl blur-xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que Escolher a Clinorto?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg w-fit mx-auto mb-4">
                  {React.createElement(benefit.icon, { className: 'h-6 w-6 text-white' })}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nosso Processo de Tratamento
          </h3>
          
          <div className="grid lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/contato" className="btn-primary text-lg px-8 py-4">
              <Calendar className="h-5 w-5 mr-2" />
              Iniciar Meu Tratamento
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}