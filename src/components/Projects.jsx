import React from 'react'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'

const Projects = () => {


  const projects = [
    {
        id: 1,
        title: 'Velociraptor Tech. Dispatch System',
        subtitle: 'Dispatch Management System',
        description: 'Full-stack dispatch system for sales agents and teams, offering real-time control for dispatchers and live updates for agents on customer status and daily tasks.',
        challenge: 'Lack of centralized reporting and real-time visibility hindered team dispatch tracking and sales insights, causing inefficiencies.',
        solution: 'MERN stack solution with Socket.IO for real-time updates and Cloudinary for media. Provides dispatchers with control and agents with personalized, live dashboards.',
        impact: {
          engagement: '+50%',
          taskCompletion: '+60%',
          supportTickets: '-35%'
        },
        technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Cloudinary', 'Material UI'],
        imageUrl: 'https://placehold.co/800x500/4F46E5/FFFFFF?text=Velociraptor+Dispatch+System',
        liveDemoUrl: '#',
        githubUrl: '#',
        featured: true
      },
    {
      id: 2,
      title: 'E-commerce Mobile Experience',
      subtitle: 'Streamlining the purchase journey',
      description: 'Designed and developed a mobile-first e-commerce experience with focus on conversion optimization.',
      challenge: 'High cart abandonment rates and complex checkout process were hurting conversion rates.',
      solution: 'Simplified the user journey, implemented one-click purchasing, and optimized for mobile performance.',
      impact: {
        conversion: '+25%',
        cartAbandonment: '-30%',
        mobileTraffic: '+50%'
      },
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: 'https://placehold.co/800x500/10B981/FFFFFF?text=Mobile+Commerce',
      liveDemoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Design System Library',
      subtitle: 'Scaling design across teams',
      description: 'Built a comprehensive design system that enabled consistent experiences across multiple product teams.',
      challenge: 'Inconsistent UI patterns across products were creating a fragmented user experience.',
      solution: 'Created a scalable design system with documentation, component library, and design tokens.',
      impact: {
        developmentSpeed: '+50%',
        consistency: '95%',
        teamAdoption: '100%'
      },
      technologies: ['Storybook', 'React', 'Design Tokens', 'Figma'],
      imageUrl: 'https://placehold.co/800x500/8B5CF6/FFFFFF?text=Design+System',
      liveDemoUrl: '#',
      githubUrl: '#'
    }
  ]

  return (
    <section id='projects' className='py-20 lg:py-32 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Section header */}
        <div className='text-center max-w-3xl mx-auto mb-20'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            My Projects
          </h2>
          <p className='text-xl text-gray-600'>
            Real projects, real impact. Here's how I've helped teams build better products.
          </p>
        </div>

        {/* Featured project */}
        <div className='mb-20'>
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.id} className='bg-white rounded-3xl shadow-xl overflow-hidden'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
                <div className='p-12 lg:p-16 flex flex-col justify-center'>
                  <div className='space-y-6'>
                    <div className='space-y-2'>
                      <p className='text-blue-600 font-medium text-sm uppercase tracking-wider'>Featured Project</p>
                      <h3 className='text-3xl lg:text-4xl font-bold text-gray-900'>{project.title}</h3>
                      <p className='text-xl text-gray-600'>{project.subtitle}</p>
                    </div>
                    
                    <p className='text-gray-700 leading-relaxed'>{project.description}</p>
                    
                    {/* Impact metrics */}
                    <div className='grid grid-cols-3 gap-4 py-6'>
                      {Object.entries(project.impact).map(([key, value]) => (
                        <div key={key} className='text-center'>
                          <div className='text-2xl font-bold text-blue-600'>{value}</div>
                          <div className='text-sm text-gray-500 capitalize'>{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className='flex space-x-4'>
                      <a href={project.liveDemoUrl} className='inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors'>
                        <span>View Project</span>
                        <ArrowUpRight className='w-4 h-4' />
                      </a>
                      <a href={project.githubUrl} className='inline-flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors'>
                        <Github className='w-4 h-4' />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='relative min-h-[400px] lg:min-h-[600px]'>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className='absolute inset-0 w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {projects.filter(p => !p.featured).map((project) => (
            <div key={project.id} className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'>
              <div className='aspect-w-16 aspect-h-9 relative overflow-hidden'>
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors' />
              </div>
              
              <div className='p-8'>
                <div className='space-y-4'>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>{project.title}</h3>
                    <p className='text-gray-600'>{project.description}</p>
                  </div>
                  
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                      <span key={tech} className='px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full'>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                    <div className='grid grid-cols-3 gap-4 text-center'>
                      {Object.entries(project.impact).map(([key, value]) => (
                        <div key={key}>
                          <div className='text-sm font-semibold text-blue-600'>{value}</div>
                          <div className='text-xs text-gray-500 capitalize'>{key}</div>
                        </div>
                      ))}
                    </div>
                    <div className='flex space-x-2'>
                      <a href={project.liveDemoUrl} className='p-2 text-gray-600 hover:text-blue-600 transition-colors'>
                        <ExternalLink className='w-4 h-4' />
                      </a>
                      <a href={project.githubUrl} className='p-2 text-gray-600 hover:text-gray-900 transition-colors'>
                        <Github className='w-4 h-4' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;