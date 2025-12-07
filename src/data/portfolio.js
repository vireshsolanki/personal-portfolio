                                                                                                                                                                                                                                                                                                                                                                                                                        // ============================================
// PORTFOLIO DATA - EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
// ============================================

export const personalInfo = {
  name: "Viresh Solanki",
  title: "AWS Cloud & DevOps Engineer",
  tagline: "Currently working on Designing Resilient Systems on Cloud",
  description: "Transforming businesses with scalable cloud solutions and DevOps automation. I help companies deploy 70% faster while reducing infrastructure costs by 40%.",
  location: "Surat, Gujarat, India",
  email: "vireshsolanki58@gmail.com",
  phone: "+91 7043256368",
  photo: "/photo.jpeg",
  
  social: {
    linkedin: "https://www.linkedin.com/in/viresh-solanki/",
    github: "https://github.com/vireshsolanki",
    medium: "https://medium.com/@vireshsolanki58",
    email: "mailto:vireshsolanki58@gmail.com"
  }
}

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "70%", label: "Efficiency Boost" },
  { value: "50+", label: "Projects Done" }
]

export const about = {
  lead: "Passionate AWS Cloud & DevOps Engineer with 2+ years of experience helping businesses migrate to the cloud, automate deployments, and scale efficiently.",
  paragraphs: [
    "I specialize in AWS cloud architecture, CI/CD automation, containerization, and infrastructure as code. My approach focuses on reducing deployment time, improving system reliability, and cutting infrastructure costs—helping businesses achieve up to 70% faster deployments and 40% cost savings.",
    "Whether you're looking to migrate to AWS, implement DevOps practices, or optimize your existing infrastructure, I bring hands-on expertise in Lambda, ECS, EC2, RDS, Terraform, Docker, Kubernetes, and modern CI/CD pipelines. I turn complex infrastructure challenges into simple, automated solutions that scale with your business."
  ]
}

// ============================================
// SKILLS/TECHNOLOGIES - EDIT YOUR TECH STACK
// ============================================
// These will be displayed with icons in the Technologies section
export const techStack = [
  { name: 'AWS CLOUD' },
  { name: 'KUBERNETES' },
  { name: 'TERRAFORM' },
  { name: 'PYTHON' },
  { name: 'DOCKER' },
  { name: 'ANSIBLE' },
  { name: 'LINUX' },
  { name: 'CI/CD' },
  { name: 'ARGOCD' },
  { name: 'JENKINS' },
  { name: 'GIT' },
  { name: 'GITLAB' }
]

export const skills = [
  {
    category: "Cloud & Infrastructure",
    items: ["AWS (Lambda, ECS, EC2, RDS, S3, DRS)", "CloudFormation", "Terraform", "Serverless Architecture"]
  },
  {
    category: "DevOps & Automation",
    items: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "AWS CodePipeline", "Shell Scripting", "Python"]
  },
  {
    category: "Containers & Orchestration",
    items: ["Docker", "ECS Fargate", "Microservices", "Container Optimization"]
  },
  {
    category: "Security & Monitoring",
    items: ["IAM", "WAF", "GuardDuty", "CloudWatch", "Grafana", "Prometheus"]
  }
]

// ============================================
// PROJECTS - ADD YOUR PROJECTS WITH IMAGES
// ============================================
// Place project images in public/projects/ folder
// ============================================
// EXPERIENCE - ADD YOUR WORK EXPERIENCE
// ============================================
export const experience = [
  {
    title: "AWS Cloud & DevOps Engineer",
    company: "Freelance",
    period: "2022 - Present",
    description: "Building scalable cloud infrastructure and automating deployments for various clients.",
    achievements: [
      "Improved deployment efficiency by 70% through CI/CD automation",
      "Migrated 10+ applications to AWS cloud infrastructure",
      "Implemented disaster recovery solutions with zero downtime",
      "Reduced infrastructure costs by 40% through optimization"
    ]
  },
  {
    title: "Cloud Engineer",
    company: "Tech Company",
    period: "2021 - 2022",
    description: "Managed AWS infrastructure and implemented DevOps best practices.",
    achievements: [
      "Deployed microservices architecture on ECS Fargate",
      "Automated infrastructure provisioning with Terraform",
      "Set up monitoring and alerting with CloudWatch and Grafana"
    ]
  }
]

export const projects = [
  {
    title: "Serverless Geofence API Development",
    description: "Designed and deployed serverless geofence-based APIs on AWS using Lambda and API Gateway with GraphQL integration for location-aware functionality. Implemented efficient query mechanisms and real-time location tracking capabilities with high scalability and low latency.",
    image: "/projects/geofence-api.svg",
    tech: ["AWS Lambda", "API Gateway", "GraphQL", "DynamoDB", "CloudWatch"],
    featured: true
  },
  {
    title: "Architecture Modernization",
    description: "Transformed monolithic application hosting to a multi-tier, containerized architecture with private infrastructure and CloudFront-based static content delivery. Improved scalability, performance, and reduced deployment complexity while maintaining high availability.",
    image: "/projects/architecture.svg",
    tech: ["ECS Fargate", "CloudFront", "Docker", "Terraform", "ALB"],
    featured: true
  },
  {
    title: "AI/ML RAG Model Exploration",
    description: "Developed and experimented with multi-agent Retrieval-Augmented Generation (RAG) models at beginner level. Gained hands-on experience in prompt engineering, vector databases, and agent orchestration patterns for intelligent document processing and query systems.",
    image: "/projects/ai-rag.svg",
    tech: ["Python", "LangChain", "Vector DB", "OpenAI", "RAG"],
    featured: true
  },
  {
    title: "Monitoring & Alerting Infrastructure",
    description: "Deployed Grafana and Prometheus for advanced monitoring and observability. Integrated Slack alerts for critical incidents to meet customer requirements. Implemented custom dashboards for real-time infrastructure health monitoring and proactive issue detection.",
    image: "/projects/monitoring.svg",
    tech: ["Grafana", "Prometheus", "Slack API", "CloudWatch", "Alertmanager"],
    featured: false
  }
]

export const reviews = [
  {
    name: "Rajesh Patel",
    role: "CTO, TechVentures India",
    review: "Viresh's expertise in AWS infrastructure was exactly what we needed. He migrated our entire application to a containerized architecture with zero downtime. His attention to detail and proactive communication made the project seamless. Highly recommend for any cloud infrastructure work!",
    rating: 5,
    avatar: "RP"
  },
  {
    name: "Amit Kumar",
    role: "Engineering Lead, CloudSolutions Ltd",
    review: "Working with Viresh on our serverless API project was fantastic. He delivered a scalable geofence solution that handles thousands of requests efficiently. His knowledge of AWS Lambda and API Gateway is impressive. Would definitely work with him again on future projects.",
    rating: 5,
    avatar: "AK"
  },
  {
    name: "Neha Desai",
    role: "Product Manager, DataTech Systems",
    review: "Viresh set up our monitoring infrastructure with Grafana and Prometheus, and it's been a game-changer. We now have complete visibility into our systems with instant Slack alerts. His troubleshooting skills are exceptional - he quickly resolved several critical issues that had been plaguing us for weeks.",
    rating: 5,
    avatar: "ND"
  }
]
