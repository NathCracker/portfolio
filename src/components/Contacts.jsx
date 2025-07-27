import React, { useState } from 'react'
import { Mail, MessageCircle, Calendar, CheckCircle, ArrowRight } from 'lucide-react'

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      description: 'For detailed project discussions',
      action: 'faa.v.nathaniel@gmail.com',
      color: 'bg-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'Quick Chat',
      description: 'Questions about my process',
      action: 'Start conversation',
      color: 'bg-green-500'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: '30-min strategy session',
      action: 'Book a time',
      color: 'bg-purple-500'
    }
  ]

  const projectTypes = ['Web Application', 'Mobile App', 'Design System', 'Consultation', 'Other']
  const budgetRanges = ['< $5K', '$5K - $15K', '$15K - $50K', '$50K+', 'Let\'s discuss']

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id='contacts' className='py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50'>
        <div className='max-w-2xl mx-auto px-6 text-center'>
          <div className='w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6'>
            <CheckCircle className='w-10 h-10 text-white' />
          </div>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>Message Sent!</h2>
          <p className='text-gray-600 mb-8'>
            Thanks for reaching out. I'll get back to you within 24 hours to discuss your project.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className='px-6 py-3 text-blue-600 font-semibold hover:text-blue-700 transition-colors'
          >
            Send Another Message
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id='contacts' className='py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Let's build something amazing together
          </h2>
          <p className='text-xl text-gray-600'>
            Ready to turn your ideas into reality? I'd love to hear about your project 
            and explore how we can create exceptional user experiences.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          {/* Contact methods */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Get in Touch</h3>
              <div className='space-y-4'>
                {contactMethods.map(({ icon: Icon, title, description, action, color }) => (
                  <div key={title} className='flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group'>
                    <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className='w-6 h-6 text-white' />
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-semibold text-gray-900'>{title}</h4>
                      <p className='text-gray-600 text-sm'>{description}</p>
                      <p className='text-blue-600 text-sm font-medium'>{action}</p>
                    </div>
                    <ArrowRight className='w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all' />
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial or social proof */}
            <div className='bg-white rounded-xl p-6 shadow-sm'>
              <div className='flex items-center space-x-4 mb-4'>
                <img 
                  src='https://placehold.co/48x48/E5E7EB/6B7280?text=MC' 
                  alt='Client testimonial'
                  className='w-12 h-12 rounded-full'
                />
                <div>
                  <p className='font-semibold text-gray-900'>Marlex C. M</p>
                  <p className='text-gray-600 text-sm'>Product Manager, Velociraptor Technologies</p>
                </div>
              </div>
              <p className='text-gray-700 italic'>
                "Nathaniel transformed our user experience completely. The new design 
                increased our conversion rate by 40% and user satisfaction scores by 60%."
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className='bg-white rounded-2xl shadow-xl p-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-2'>
                    First Name *
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                    placeholder='John'
                  />
                </div>
                <div>
                  <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-2'>
                    Last Name *
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                    placeholder='Doe'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                  Email Address *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                  placeholder='john@company.com'
                />
              </div>

              <div>
                <label htmlFor='company' className='block text-sm font-medium text-gray-700 mb-2'>
                  Company
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  value={formData.company}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                  placeholder='Your Company'
                />
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='projectType' className='block text-sm font-medium text-gray-700 mb-2'>
                    Project Type
                  </label>
                  <select
                    id='projectType'
                    name='projectType'
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                  >
                    <option value=''>Select type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor='budget' className='block text-sm font-medium text-gray-700 mb-2'>
                    Budget Range
                  </label>
                  <select
                    id='budget'
                    name='budget'
                    value={formData.budget}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                  >
                    <option value=''>Select range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                  Project Details *
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none'
                  placeholder='Tell me about your project goals, timeline, and any specific requirements...'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl'
              >
                <span className='flex items-center justify-center space-x-2'>
                  <span>Send Message</span>
                  <ArrowRight className='w-5 h-5' />
                </span>
              </button>

              <p className='text-gray-500 text-sm text-center'>
                I typically respond within 24 hours. All conversations are confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts