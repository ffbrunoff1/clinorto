import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin, Calendar, Stethoscope } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navigationLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Contato', href: '/contato' }
  ]

  const HeaderContent = () => (
    <>
      <div className="flex items-center justify-between h-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3"
        >
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-2xl font-bold group-hover:text-primary-700 transition-colors ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
                Clinorto
              </h1>
              <p className={`text-xs -mt-1 ${isScrolled ? 'text-gray-500' : 'text-primary-100'}`}>Ortodologia</p>
            </div>
          </Link>
        </motion.div>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-primary-600 group ${
                    location.pathname === link.href
                      ? 'text-primary-600'
                      : isScrolled 
                        ? 'text-gray-700' 
                        : 'text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex items-center space-x-4"
        >
          <a 
            href="tel:(55) 44991-0407"
            className="flex items-center space-x-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>(55) 44991-0407</span>
          </a>
          <Link
            to="/contato"
            className="btn-primary text-sm"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Agendar Consulta
          </Link>
        </motion.div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-white/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="px-3 py-4 border-t border-white/20"
            >
              <a 
                href="tel:(55) 44991-0407"
                className="flex items-center space-x-2 text-white hover:text-accent-300 transition-colors mb-3"
              >
                <Phone className="h-4 w-4" />
                <span>(55) 44991-0407</span>
              </a>
              <Link
                to="/contato"
                className="btn-accent w-full text-center"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Agendar Consulta
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  )

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-gradient-to-r from-primary-600/90 to-primary-700/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-max">
        <HeaderContent />
      </div>
    </motion.header>
  )
}