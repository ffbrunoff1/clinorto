import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Stethoscope, Calendar, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Contato', href: '/contato' }
  ]

  const services = [
    { name: 'Cirurgia de Joelho', href: '/produto/cirurgia-joelho' },
    { name: 'Reabilitação Pós-Cirúrgica', href: '/servicos' },
    { name: 'Diagnóstico Avançado', href: '/servicos' },
    { name: 'Fisioterapia Especializada', href: '/servicos' }
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '(55) 44991-0407',
      href: 'tel:(55) 44991-0407'
    },
    {
      icon: Mail,
      text: 'ffbrunoff@yahoo.com.br',
      href: 'mailto:ffbrunoff@yahoo.com.br'
    },
    {
      icon: MapPin,
      text: 'Padre Lebret 801 G05 Bloco 03',
      href: 'https://maps.google.com/?q=Padre+Lebret+801+G05+Bloco+03'
    },
    {
      icon: Clock,
      text: 'Seg-Sex: 8h às 18h | Sáb: 8h às 12h',
      href: null
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-secondary-800 via-secondary-900 to-primary-900 text-white pb-20">
      <div className="container-max">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Clinorto</h3>
                  <p className="text-sm text-gray-300">Ortodologia</p>
                </div>
              </Link>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Especialistas em ortodologia e cirurgia de joelho, oferecendo tratamentos 
                modernos e minimamente invasivos para sua recuperação completa.
              </p>

              <Link to="/contato" className="btn-accent">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Consulta
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    {React.createElement(contact.icon, { className: 'h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5' })}
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.icon === MapPin ? '_blank' : '_self'}
                        rel={contact.icon === MapPin ? 'noopener noreferrer' : ''}
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span className="text-gray-300">{contact.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 py-8 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                © {currentYear} Clinorto. Todos os direitos reservados.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">Papum</a></em>
              </p>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-5 w-5 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}