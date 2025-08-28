import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, CheckCircle, Clock, Activity, Shield, Award, Phone, Mail } from 'lucide-react'

export default function ProductDetail() {
  const { slug } = useParams()

  const productData = {
    'cirurgia-joelho': {
      title: 'Cirurgia de Joelho',
      subtitle: 'Tratamento avançado para lesões e problemas articulares',
      description: 'A cirurgia de joelho é uma solução eficiente para diversas condições que afetam essa articulação crucial. Com o avanço da medicina, procedimentos minimamente invasivos se tornaram cada vez mais comuns, permitindo uma recuperação mais rápida e menos dor ao paciente. Entre as indicações mais frequentes estão lesões nos ligamentos, desgaste das cartilagens e problemas nas meniscos. O sucesso da cirurgia depende de uma avaliação detalhada e do planejamento individualizado, levando em consideração a idade, atividade física e a gravidade da lesão. Após o procedimento, é fundamental seguir um programa de reabilitação que inclua fisioterapia, pois isso contribui significativamente para a recuperação e a restauração da função do joelho. A cirurgia de joelho pode devolver qualidade de vida ao paciente, permitindo a retomada de atividades cotidianas e esportivas. Consulte um especialista para entender as opções disponíveis e encontrar a solução mais adequada para sua condição.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/cirurgia_joelho_1756418104308.png',
      category: 'Cirurgia Ortopédica',
      duration: '1-2 horas',
      recovery: '4-6 semanas',
      successRate: '98%',
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
        'Restauração da função do joelho',
        'Prevenção de lesões futuras',
        'Melhora da mobilidade e flexibilidade'
      ],
      indications: [
        'Lesões nos ligamentos (LCA, LCP)',
        'Desgaste das cartilagens',
        'Problemas nos meniscos',
        'Artrose avançada',
        'Instabilidade articular',
        'Dor crônica no joelho'
      ],
      process: [
        {
          step: '01',
          title: 'Avaliação Inicial',
          description: 'Consulta detalhada com análise do histórico médico e exame físico completo.'
        },
        {
          step: '02',
          title: 'Exames Diagnósticos',
          description: 'Realização de exames de imagem (ressonância, tomografia) para diagnóstico preciso.'
        },
        {
          step: '03',
          title: 'Planejamento Cirúrgico',
          description: 'Desenvolvimento de estratégia personalizada considerando suas necessidades específicas.'
        },
        {
          step: '04',
          title: 'Procedimento Cirúrgico',
          description: 'Cirurgia minimamente invasiva realizada com tecnologia de última geração.'
        },
        {
          step: '05',
          title: 'Reabilitação',
          description: 'Programa completo de fisioterapia e acompanhamento para recuperação total.'
        }
      ]
    }
  }

  const product = productData[slug]

  if (!product) {
    return (
      <main className="pt-20 section-padding">
        <div className="container-max text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Produto não encontrado</h1>
          <Link to="/produtos" className="btn-primary">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar aos Produtos
          </Link>
        </div>
      </main>
    )
  }

  const stats = [
    { icon: Award, label: 'Taxa de Sucesso', value: product.successRate },
    { icon: Clock, label: 'Duração', value: product.duration },
    { icon: Activity, label: 'Recuperação', value: product.recovery },
    { icon: Shield, label: 'Categoria', value: product.category }
  ]

  return (
    <main className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/produtos" 
              className="inline-flex items-center text-primary-200 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar aos Produtos
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-accent-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
                  {product.category}
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">{product.title}</h1>
                <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                  {product.subtitle}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link to="/contato" className="btn-accent">
                    <Calendar className="h-5 w-5 mr-2" />
                    Agendar Consulta
                  </Link>
                  <a href="tel:(55) 44991-0407" className="btn-secondary">
                    <Phone className="h-5 w-5 mr-2" />
                    Ligar Agora
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 rounded-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg"
              >
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg w-fit mx-auto mb-4">
                  {React.createElement(stat.icon, { className: 'h-6 w-6 text-white' })}
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre o Tratamento</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                {product.description.split('. ').map((sentence, index) => (
                  <p key={index} className="mb-4">
                    {sentence}{index < product.description.split('. ').length - 1 ? '.' : ''}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Principais Indicações</h3>
                <div className="space-y-3">
                  {product.indications.map((indication, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">{indication}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Características do Procedimento</h3>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-accent-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Nosso Processo de Tratamento
            </h2>
            
            <div className="grid lg:grid-cols-5 gap-6">
              {product.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  
                  {index < product.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-primary-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pronto para Recuperar sua Qualidade de Vida?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para ajudar você a superar seus problemas 
              no joelho e retomar suas atividades com segurança e confiança.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contato" className="btn-primary text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Consulta
              </Link>
              <a href="tel:(55) 44991-0407" className="btn-secondary text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Ligar Agora
              </a>
              <a href="mailto:ffbrunoff@yahoo.com.br" className="btn-accent text-lg px-8 py-4">
                <Mail className="h-5 w-5 mr-2" />
                Enviar Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}