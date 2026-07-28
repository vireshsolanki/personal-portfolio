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
  photo: "/photo.jpeg?v=20250728",

  social: {
    linkedin: "https://www.linkedin.com/in/viresh-solanki/",
    github: "https://github.com/vireshsolanki",
    medium: "https://medium.com/@vireshsolanki58",
    email: "mailto:vireshsolanki58@gmail.com"
  }
}

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "$5M+", label: "Transaction Volume Architected" },
  { value: "10K+", label: "Concurrent Users Served" },
  { value: "4", label: "Startups Advised" },
  { value: "7", label: "Enterprise Clients" }
]

// ============================================
// CERTIFICATIONS, SHOWN AS A LIVE CREDLY BADGE
// ============================================
export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    level: "Associate",
    issuer: "Amazon Web Services",
    issuedDate: "REPLACE_WITH_ISSUE_DATE", // TODO: e.g. "Jan 2025"
    badgeId: "b131b442-865e-4770-b6cd-33e4347c796b",
    badgeImage: "/aws-sa-badge.png",
    credlyUrl: "https://www.credly.com/badges/b131b442-865e-4770-b6cd-33e4347c796b"
  }
]

export const about = {
  lead: "Solutions Architect at Electromech Cloudtech Pvt. Ltd. with 2+ years designing cloud infrastructure on AWS. I work across the full stack of cloud, architecture, security, automation, and observability.",
  paragraphs: [
    "I specialize in transforming monolithic applications into microservices-based, containerized architectures on AWS. My work spans system design, disaster recovery automation, CI/CD pipelines, and security hardening, with a focus on building systems that are fault-tolerant and production-ready.",
    "Outside of my core role, I advise startups on cloud adoption and infrastructure strategy, helping early-stage teams build on AWS the right way from day one. I'm also the builder behind ExamWrap, a SaaS platform deployed on AWS, helping students prepare for exams smarter. Python (intermediate) and Go (learning) complement my infrastructure toolkit.",
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
      "Transformed monolithic applications into multi-tier, containerized infrastructures, improving both scalability and security posture",
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
    title: "ExamWrap, SaaS Product",
    description: "Built and launched ExamWrap (examwrap.vireshsaas.in), a SaaS platform helping students prepare for exams with smart study tools and practice tests. Full AWS infrastructure on ECS Fargate, RDS, CloudFront, and S3, with Terraform IaC and GitHub Actions CI/CD.",
    image: "/projects/examwrap.svg",
    tech: ["AWS ECS", "RDS", "CloudFront", "S3", "Python", "Terraform"],
    featured: true,
    link: "https://examwrap.vireshsaas.in",
    type: "product",
    personal: true
  },
  {
    title: "Startup Cloud Foundation",
    description: "Designed production-ready AWS cloud infrastructure for an early-stage startup from zero, multi-environment setup (dev/staging/prod), CI/CD pipeline, auto-scaling ECS services, RDS Multi-AZ, and cost guardrails. Infrastructure scaled from 100 to 50,000 users without rearchitecting.",
    image: "/projects/startup-cloud.svg",
    tech: ["AWS VPC", "ECS Fargate", "Terraform", "GitHub Actions", "CloudWatch", "WAF"],
    featured: true,
    type: "architecture"
  },
  {
    title: "Enterprise Security Hardening",
    description: "Audited and hardened AWS infrastructure for an enterprise client, multi-account AWS Organizations with SCPs, GuardDuty threat detection, WAF rule sets, Security Hub CIS benchmark remediation, and IAM least-privilege overhaul. Environment reached compliance-ready state in 6 weeks.",
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
  },
  {
    title: "Zero-Loss Database Migration, AWS DMS",
    description: "Migrated a live production database to a new environment with zero record loss using AWS Database Migration Service. Used continuous replication with change data capture (CDC) and a full row-for-row validation pass on every table before cutover, keeping the source system serving traffic the whole time.",
    image: "/projects/db-migration.svg",
    tech: ["AWS DMS", "RDS", "CDC", "CloudWatch", "Python"],
    featured: true,
    link: null, // TODO: add case study or repo link
    type: "data"
  },
  {
    title: "Multi-Tenant E-Commerce Platform",
    description: "Architected a multi-tenant, Shopify-like e-commerce platform from the ground up, tenant isolation at the data layer, a shared catalog/order service tier, and horizontally scalable compute, currently serving around 10,000 concurrent users without per-tenant infrastructure duplication.",
    image: "/projects/ecommerce.svg",
    tech: ["AWS ECS", "RDS Multi-AZ", "Redis", "API Gateway", "Terraform", "CloudFront"],
    featured: true,
    link: null, // TODO: add case study or demo link
    type: "architecture"
  },
  {
    title: "Fault-Tolerant Payment Gateway",
    description: "Architected a fault-tolerant, horizontally scalable payment gateway service built to sustain heavy concurrent transaction load, processing roughly $5M in overall transaction volume. Idempotent request handling, queue-based load leveling, and multi-AZ failover keep the system consistent and available through traffic spikes.",
    image: "/projects/payment-gateway.svg",
    tech: ["AWS ECS", "SQS", "RDS Multi-AZ", "ElastiCache", "API Gateway", "CloudWatch"],
    featured: true,
    link: null, // TODO: add case study link
    type: "architecture"
  },
  {
    title: "Multi-Agent Workflow System",
    description: "Built a multi-agent workflow system with human-in-the-loop checkpoints for high-stakes decisions, using the Saga pattern to keep distributed transactions consistent across agent steps. Added a todo-list-style memory layer on top of LangChain so agents track long-running tasks without re-feeding full context, cutting token usage on long sessions.",
    image: "/projects/multi-agent.svg",
    tech: ["LangChain", "Python", "Saga Pattern", "AWS Lambda", "SQS", "DynamoDB"],
    featured: true,
    link: null, // TODO: add repo or write-up link
    type: "ai"
  },
  {
    title: "AWS Pricing Calculator, MCP Server",
    description: "Built an AWS pricing calculator exposed as an MCP (Model Context Protocol) server, so AI agents and assistants can query live AWS cost estimates programmatically and generate shareable links for a given architecture's cost breakdown.",
    image: "/projects/mcp-pricing.svg",
    tech: ["MCP", "Python", "AWS Pricing API", "Lambda", "API Gateway"],
    featured: false,
    link: null, // TODO: add repo/demo link
    type: "ai"
  },
  {
    title: "Self-Hosted CA, IAM Roles Anywhere Alternative",
    description: "Designed a self-hosted certificate authority rooted in AWS KMS as a lower-cost alternative to AWS Private CA for IAM Roles Anywhere, issuing and rotating short-lived X.509 certificates so hybrid and on-premises workloads can assume IAM roles without paying for a fully managed private CA.",
    image: "/projects/self-hosted-ca.svg",
    tech: ["AWS KMS", "IAM Roles Anywhere", "X.509 PKI", "Python", "ACM"],
    featured: false,
    link: null, // TODO: add repo/write-up link
    type: "security"
  },
  {
    title: "Apache Doris Real-Time Analytics Platform",
    description: "Deployed and provisioned Apache Doris to handle around 5TB of data, powering real-time analytics dashboards over high-cardinality datasets that had previously bottlenecked the existing warehouse.",
    image: "/projects/apache-doris.svg",
    tech: ["Apache Doris", "AWS EC2", "Terraform", "Grafana", "Kafka"],
    featured: true,
    link: null, // TODO: add case study link
    type: "data"
  }
]
