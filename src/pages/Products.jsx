import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Scissors, Activity, Shield, Clock, Calendar, CheckCircle, Award, Heart } from 'lucide-react'

export default function Products() {
  const products = [
    {
      id: 'cirurgia-joelho',
      title: 'Cirurgia de Joelho',
      description: 'A cirurgia de joelho é uma solução eficiente para diversas condições que afetam essa articulação crucial. Com o avanço da medicina, procedimentos minimamente invasivos se tornaram cada vez mais comuns, permitindo uma recuperação mais rápida e menos dor ao paciente.',
      icon: Scissors,
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/cirurgia_joelho_1756418104308.png',
      features: [
        'Procedimentos minimamente invasivos',
        'Recuperação mais rápida',
        'Menor dor pós-operatória',
        'Técnicas de última geração',
        'Acompanhamento especializado',
        'Reabilitação completa'
      ],
      benefits: [
        'Retorno às atividades cotidianas',
        'Melhora significativa da qualidade de vida',
        'Redução da dor e inflamação',
        'Restauração da função do joelho'
      ],
      category: 'Cirurgia Ortopédica',
      duration: '1-2 horas',
      recovery: '4-6 semanas'
    }
  ]

  const categories = [
    {
      name: 'Todas as Categorias',
      count: products.length,
      active: true
    },
    {
      name: 'Cirurgia Ortopédica',
      count: 1,
      active: false
    }
  ]

  const stats = [
    {
      icon: Award,
      number: '2000+',
      label: 'Cirurgias Realizadas'
    },
    {
      icon: Heart,
      number: '98%',
      label: 'Taxa de Sucesso'
    },
    {
      icon: Clock,
      number: '15+',
      label: 'Anos de Experiência'
    },
    {
      icon: Shield,
      number: '24h',
      label: 'Suporte Pós-Op'
    }
  ]

  return (
    <main className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nossos <span className="text-accent-400">Produtos</span> e Serviços
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Conheça nossos tratamentos especializados em ortodologia e cirurgia de joelho, 
              desenvolvidos para proporcionar a melhor recuperação possível.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                      {React.createElement(product.icon, { className: 'h-6 w-6 text-primary-600' })}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description.substring(0, 150)}...</p>

                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary-600" />
                        <span className="text-gray-600">Duração: {product.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Activity className="h-4 w-4 text-primary-600" />
                        <span className="text-gray-600">Recuperação: {product.recovery}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Principais Benefícios:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      to={`/produto/${product.id}`}
                      className="flex-1 btn-primary text-center"
                    >
                      Saiba Mais
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                    <Link
                      to="/contato"
                      className="btn-secondary"
                    >
                      <Calendar className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Por que Escolher Nossos Tratamentos?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nossos números comprovam a excelência e confiabilidade dos nossos serviços
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="p-4 bg-white rounded-2xl shadow-lg mb-4 w-fit mx-auto">
                    {React.createElement(stat.icon, { className: 'h-8 w-8 text-primary-600' })}
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link to="/contato" className="btn-primary text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Minha Consulta
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}