import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { techStack } from '../data/portfolio'
import { 
  SiAmazonwebservices, 
  SiDocker, 
  SiKubernetes, 
  SiTerraform, 
  SiPython, 
  SiAnsible, 
  SiLinux, 
  SiGitlab, 
  SiGit, 
  SiArgo,
  SiJenkins
} from 'react-icons/si'
import { VscGitPullRequest } from 'react-icons/vsc'
import './Skills.css'

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)
  
  // Map tech names to their icons
  const iconMap = {
    'AWS CLOUD': SiAmazonwebservices,
    'KUBERNETES': SiKubernetes,
    'TERRAFORM': SiTerraform,
    'PYTHON': SiPython,
    'DOCKER': SiDocker,
    'ANSIBLE': SiAnsible,
    'LINUX': SiLinux,
    'CI/CD': VscGitPullRequest,
    'ARGOCD': SiArgo,
    'JENKINS': SiJenkins,
    'GIT': SiGit,
    'GITLAB': SiGitlab
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className={`skills-header ${isVisible ? 'animate-in' : ''}`}>
        <h2 className="section-title">Technologies I work with</h2>
        <p className="section-subtitle">
          Building scalable cloud infrastructure with modern DevOps tools and practices
        </p>
      </div>
      <div className="tech-grid">
        {techStack.map((tech, index) => {
          const Icon = iconMap[tech.name]
          return (
            <div 
              key={index} 
              className={`tech-item ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tech-icon">
                {Icon && <Icon size={40} />}
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
