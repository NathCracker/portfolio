import React from 'react'
import { ArrowDown, Mail, Github, Linkedin, Twitter, ChevronDown } from 'lucide-react'
import myAvatar from '../Avatar.png'

const Head = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://www.twitter.com/Nthdsntxst', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nathaniel-faa-874a02211/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Github, href: 'https://github.com/NathCracker', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email', color: 'hover:text-green-600' }
  ]


  const scrollToNext = () => {
    const nextSection = document.querySelector('#about, #projects, #work') // Adjust selector based on your next section ID
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Fallback: scroll down by viewport height
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects'); // Select the element with id 'projects'
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the projects section
    }
    // You could add a fallback here if the #projects section is not found,
    // for example, scrolling down by a certain amount:
    // else {
    //   window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    // }
  };

  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative overflow-hidden pt-20'>
      {/* Subtle background pattern */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50' />
      <div className='absolute inset-0 opacity-5' style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }} />
      
      <div className='max-w-6xl mx-auto px-6 lg:px-8 relative z-10'>
        <div className='text-center space-y-8'>
          {/* Avatar with better visual treatment */}
          <div className='relative inline-block'>
            <div className='w-32 h-32 lg:w-40 lg:h-40 mx-auto relative'>
              <img 
                src={myAvatar} 
                alt="Nathaniel Faa" 
                className='w-full h-full object-cover rounded-full shadow-xl ring-4 ring-white'
              />
              <div className='absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20' />
              {/* Online indicator */}
              <div className='absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center'>
                <div className='w-2 h-2 bg-white rounded-full animate-pulse' />
              </div>
            </div>
          </div>

          {/* Enhanced typography hierarchy */}
          <div className='space-y-6'>
            <div className='space-y-2'>
              <p className='text-sm font-medium text-blue-600 uppercase tracking-wider'>
                Product Designer & Developer
              </p>
              <h1 className='text-4xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                I craft digital experiences that{' '}
                <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent'>
                  users love
                </span>
              </h1>
              <p className='text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                Combining design thinking with technical expertise to build 
                SaaS products that solve real problems and scale beautifully.
              </p>
            </div>

            {/* Value metrics */}
            <div className='flex justify-center items-center space-x-8 text-sm text-gray-500'>
              <div className='text-center'>
                <div className='font-semibold text-gray-900'>15+</div>
                <div>Projects</div>
              </div>
              <div className='w-px h-8 bg-gray-300' />
              <div className='text-center'>
                <div className='font-semibold text-gray-900'>3+</div>
                <div>Years Experience</div>
              </div>
              <div className='w-px h-8 bg-gray-300' />
              <div className='text-center'>
                <div className='font-semibold text-gray-900'>99%</div>
                <div>Client Satisfaction</div>
              </div>
            </div>

            {/* Call to action */}
            <div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4'>
              <button 
                onClick={scrollToProjects}
                className='group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200'
              >
                <span className='flex items-center space-x-2'>
                  <span>View My Projects</span>
                  <ArrowDown className='w-4 h-4 group-hover:translate-y-0.5 transition-transform' />
                </span>
              </button>
              <button className='px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200'>
                Download Resume
              </button>
            </div>
          </div>

          {/* Social links with better interaction design */}
          <div className='flex justify-center items-center space-x-6 pt-8 pb-16'>
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className={`p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 text-gray-600 ${color}`}
                aria-label={label}
              >
                <Icon className='w-5 h-5' />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Improved scroll indicator */}
      <button
        onClick={scrollToNext}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full p-2 z-20'
        aria-label="Scroll to next section"
      >
        <div className='flex flex-col items-center space-y-2 animate-bounce'>
          {/* Mouse scroll indicator */}
          <div className='w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative overflow-hidden bg-white/50 backdrop-blur-sm'>
            <div className='w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse' />
          </div>
          {/* Arrow indicator */}
          <ChevronDown className='w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors duration-200' />
          {/* Text hint */}
          <span className='text-xs text-gray-400 font-medium uppercase tracking-wider opacity-75 group-hover:opacity-100 transition-opacity duration-200'>
            Scroll
          </span>
        </div>
      </button>
    </section>
  )
}

export default Head