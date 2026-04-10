// ============================================
// PORTFOLIO DATA
// ============================================

export const personalInfo = {
  name: "Viresh Solanki",
  title: "Solutions Architect",
  titleAlt: "AWS Cloud Engineer",
  tagline: "Building Resilient Systems on AWS",
  description: "Solutions Architect specializing in AWS cloud infrastructure, microservices architecture, and DevOps automation. I design systems that are secure, scalable, and built to last.",
  location: "Ahmedabad, Gujarat, India",
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
  { value: "10+", label: "Projects Delivered" },
  { value: "4", label: "Startups Advised" },
  { value: "7", label: "Enterprise Clients" }
]

export const about = {
  lead: "Solutions Architect at Electromech Cloudtech Pvt. Ltd. with 2+ years designing cloud infrastructure on AWS. I work across the full stack of cloud — architecture, security, automation, and observability.",
  paragraphs: [
    "I specialize in transforming monolithic applications into microservices-based, containerized architectures on AWS. My work spans system design, disaster recovery automation, CI/CD pipelines, and security hardening — with a focus on building systems that are fault-tolerant and production-ready.",
    "Outside of my core role, I advise startups on cloud adoption and infrastructure strategy, helping early-stage teams build on AWS the right way from day one. I'm also the builder behind ExamWrap — a SaaS platform deployed on AWS, helping students prepare for exams smarter. Python (intermediate) and Go (learning) complement my infrastructure toolkit.",
  ]
}

// ============================================
// TECH STACK
// ============================================
export const techStack = [
  { name: 'AWS CLOUD' },
  { name: 'TERRAFORM' },
  { name: 'KUBERNETES' },
  { name: 'DOCKER' },
  { name: 'PYTHON' },
  { name: 'GO' },
  { name: 'ANSIBLE' },
  { name: 'LINUX' },
  { name: 'CI/CD' },
  { name: 'ARGOCD' },
  { name: 'JENKINS' },
  { name: 'GITLAB' }
]

export const skills = [
  {
    category: "Cloud & Infrastructure",
    items: ["AWS (Lambda, ECS, EC2, RDS, S3, Route53, VPC)", "CloudFormation", "Terraform", "Serverless Architecture", "Multi-AZ & DR Design", "Cost Optimization"]
  },
  {
    category: "DevOps & Automation",
    items: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "AWS CodePipeline", "Shell Scripting", "Python (Intermediate)", "Go (Learning)"]
  },
  {
    category: "Containers & Orchestration",
    items: ["Docker", "Kubernetes", "ECS Fargate", "Microservices", "ArgoCD", "Helm"]
  },
  {
    category: "Security & Monitoring",
    items: ["IAM", "WAF", "GuardDuty", "CIS Benchmarks", "DDoS Mitigation", "CloudWatch", "Grafana", "Prometheus"]
  }
]

// ============================================
// EXPERIENCE
// ============================================
export const experience = [
  {
    title: "Solutions Architect",
    company: "Electromech Cloudtech Pvt. Ltd.",
    period: "Jan 2024 – Present",
    location: "Ahmedabad, Gujarat, India · Hybrid",
    description: "Designing and delivering cloud-native infrastructure and architecture solutions for enterprise and startup clients on AWS.",
    achievements: [
      "Engineered microservices-based architectures and contributed to system design decisions for scalable, fault-tolerant applications",
      "Automated disaster recovery failover/failback and cloud migrations using AWS CloudFormation and Python, significantly cutting downtime",
      "Transformed monolithic applications into multi-tier, containerized infrastructures — improving both scalability and security posture",
      "Built Grafana and Prometheus monitoring stacks with Slack alerting for proactive incident detection across client environments",
      "Enhanced cloud security posture by implementing WAF, IAM best practices, CIS benchmarks, and DDoS mitigation strategies"
    ]
  }
]

// ============================================
// PROJECTS
// ============================================
// ============================================
// CLIENT STATS
// ============================================
export const clientStats = {
  startups: {
    count: "4+",
    label: "Startups Advised",
    headline: "Helped early-stage teams build on AWS the right way from day one",
    highlights: [
      "Zero-to-prod cloud infrastructure in under 2 weeks",
      "Multi-environment setup: dev / staging / prod with IaC",
      "Scaled from 0 to 50,000 users without rearchitecting",
      "Cost guardrails and budget alerting from the start"
    ]
  },
  enterprise: {
    count: "7+",
    label: "Enterprise Clients",
    headline: "Delivered security hardening, modernization, and observability at scale",
    highlights: [
      "CIS benchmark compliance in 6 weeks",
      "Monolith-to-microservices migrations with zero downtime",
      "Grafana + Prometheus stacks with MTTD under 5 min",
      "AWS Organizations, SCPs, and GuardDuty across multi-account setups"
    ]
  }
}

export const projects = [
  {
    title: "ExamWrap — SaaS Product",
    description: "Built and launched ExamWrap (examwrap.vireshsaas.in) — a SaaS platform helping students prepare for exams with smart study tools and practice tests. Designed and deployed the full AWS infrastructure: ECS Fargate, RDS, CloudFront, S3, with Terraform IaC and a GitHub Actions CI/CD pipeline.",
    image: "/projects/examwrap.svg",
    tech: ["AWS ECS", "RDS", "CloudFront", "S3", "Python", "Terraform"],
    featured: true,
    link: "https://examwrap.vireshsaas.in",
    type: "product"
  },
  {
    title: "Startup Cloud Foundation",
    description: "Designed production-ready AWS cloud infrastructure for an early-stage startup from zero — multi-environment setup (dev/staging/prod), CI/CD pipeline, auto-scaling ECS services, RDS Multi-AZ, and cost guardrails. Infrastructure scaled from 100 to 50,000 users without rearchitecting.",
    image: "/projects/startup-cloud.svg",
    tech: ["AWS VPC", "ECS Fargate", "Terraform", "GitHub Actions", "CloudWatch", "WAF"],
    featured: true,
    type: "architecture"
  },
  {
    title: "Enterprise Security Hardening",
    description: "Audited and hardened AWS infrastructure for an enterprise client — multi-account AWS Organizations with SCPs, GuardDuty threat detection, WAF rule sets, Security Hub CIS benchmark remediation, and IAM least-privilege overhaul. Environment reached compliance-ready state in 6 weeks.",
    image: "/projects/security.svg",
    tech: ["AWS Organizations", "GuardDuty", "WAF", "Security Hub", "IAM", "Config Rules"],
    featured: true,
    type: "security"
  },
  {
    title: "Serverless Geofence API",
    description: "Designed and deployed serverless geofence APIs on AWS using Lambda and API Gateway with GraphQL integration for real-time location tracking. Handles thousands of location events per second at sub-50ms P99 latency with zero infrastructure management overhead.",
    image: "/projects/geofence-api.svg",
    tech: ["AWS Lambda", "API Gateway", "GraphQL", "DynamoDB", "CloudWatch"],
    featured: true,
    type: "architecture"
  },
  {
    title: "Architecture Modernization",
    description: "Transformed a monolithic application to a multi-tier containerized architecture with private subnets and CloudFront-based content delivery. Achieved 99.9% uptime SLA, 70% faster deployments via rolling updates, and 40% infrastructure cost reduction through right-sizing and reserved capacity.",
    image: "/projects/architecture.svg",
    tech: ["ECS Fargate", "CloudFront", "Docker", "Terraform", "ALB"],
    featured: false,
    type: "architecture"
  },
  {
    title: "Observability Platform",
    description: "Built a full-stack observability platform with Grafana and Prometheus covering infrastructure, application, and business metrics. Integrated Slack and PagerDuty alerting with severity-based routing. Reduced mean time to detection (MTTD) from hours to under 5 minutes.",
    image: "/projects/monitoring.svg",
    tech: ["Grafana", "Prometheus", "Alertmanager", "CloudWatch", "Slack API"],
    featured: false,
    type: "devops"
  }
]
