import React from 'react'
import { Lightbulb, Users, Code, Rocket } from 'lucide-react'

const Aboutme = () => {
  const designProcess = [
    {
      icon: Lightbulb,
      title: 'Research & Discovery',
      description: 'I start by deeply understanding user needs, business goals, and technical constraints through research and stakeholder interviews.'
    },
    {
      icon: Users,
      title: 'User-Centered Design',
      description: 'Every decision is validated against user needs. I create personas, user journeys, and test assumptions early and often.'
    },
    {
      icon: Code,
      title: 'Design Systems',
      description: 'I build scalable, consistent design systems that bridge design and development, ensuring seamless collaboration.'
    },
    {
      icon: Rocket,
      title: 'Impact & Iteration',
      description: 'I measure success through user metrics and business KPIs, continuously iterating to maximize product impact.'
    }
  ]

  const skills = [
    { category: 'Design', items: ['User Research', 'Prototyping', 'Design Systems', 'Information Architecture', 'User Testing'] },
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Material UI'] },
    { category: 'Tools', items: ['Figma', 'Framer', 'Linear', 'Analytics', 'Jira'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'MySQL'] }
  ]

  return (
    <section id='about' className='py-20 lg:py-32 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Section header */}
        <div className='text-center max-w-3xl mx-auto mb-20'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Design thinking meets technical execution
          </h2>
          <p className='text-xl text-gray-600 leading-relaxed'>
            I'm passionate about creating digital products that solve real problems. 
            My background in both design and development allows me to bridge the gap 
            between beautiful interfaces and robust functionality.
          </p>
        </div>

        {/* Design process */}
        <div className='mb-20'>
          <h3 className='text-2xl font-bold text-gray-900 text-center mb-12'>My Design Process</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {designProcess.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className='relative'>
                <div className='text-center group cursor-pointer'>
                  <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-1 transition-all duration-200'>
                    <Icon className='w-8 h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold text-gray-900 mb-3'>{title}</h4>
                  <p className='text-gray-600 text-sm leading-relaxed'>{description}</p>
                </div>
                {index < designProcess.length - 1 && (
                  <div className='hidden lg:block absolute top-8 -right-4 w-8 h-px bg-gray-300' />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid - Changed to 4 columns on large screens */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'> {/* Updated lg:grid-cols-3 to lg:grid-cols-4 */}
          {skills.map(({ category, items }) => (
            <div key={category} className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200'>
              <h4 className='text-lg font-semibold text-gray-900 mb-4'>{category}</h4>
              <div className='space-y-2'>
                {items.map((skill) => (
                  <div key={skill} className='flex items-center space-x-2'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full' />
                    <span className='text-gray-700'>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Aboutme;
