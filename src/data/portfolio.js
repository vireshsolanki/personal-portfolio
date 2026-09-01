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

  resume: {
    file: "/VireshSolanki.pdf",
    downloadName: "Viresh-Solanki-Resume.pdf",
    updated: "July 2026",
    thumb: "/resume/thumb.webp",
    // Page images are pre-rendered from the PDF so the preview opens instantly
    // on every device. Regenerate with: npm run resume:preview
    pages: ["/resume/page-1.webp", "/resume/page-2.webp"]
  },

  social: {
    linkedin: "https://www.linkedin.com/in/viresh-solanki/",
    github: "https://github.com/vireshsolanki",
    medium: "https://medium.com/@vireshsolanki58",
    email: "mailto:vireshsolanki58@gmail.com"
  }
}

export const stats = [
  { value: "2.5+", label: "Years Experience" },
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
    badgeId: "b131b442-865e-4770-b6cd-33e4347c796b",
    badgeImage: "/aws-sa-badge.png",
    credlyUrl: "https://www.credly.com/badges/b131b442-865e-4770-b6cd-33e4347c796b"
  }
]

export const about = {
  lead: "Solutions Architect at Electromech Cloudtech Pvt. Ltd. with 2.5+ years designing cloud infrastructure on AWS. I work across the full stack of cloud, architecture, security, automation, and observability.",
  paragraphs: [
    "I specialize in transforming monolithic applications into microservices-based, containerized architectures on AWS. My work spans system design, disaster recovery automation, CI/CD pipelines, and security hardening, with a focus on building systems that are fault-tolerant and production-ready.",
    "Outside of my core role, I advise startups on cloud adoption and infrastructure strategy, helping early-stage teams build on AWS the right way from day one. I'm also the builder behind ExamWarp, an AI-powered SaaS platform helping students prepare for exams smarter, shipped entirely on free-tier infrastructure. Python (intermediate) and Go (learning) complement my infrastructure toolkit.",
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
      "Architected a multi-tenant, Shopify-like commerce platform serving 10,000+ concurrent users, with data-layer tenant isolation that removed the need for per-tenant infrastructure",
      "Designed a fault-tolerant payment gateway processing $5M+ in transaction volume, using idempotent request handling, queue-based load leveling, and multi-AZ failover",
      "Led AWS DMS migrations of live production databases with zero record loss, using CDC replication and full row-level validation before cutover",
      "Deployed Apache Doris across roughly 5TB of data, powering real-time analytics dashboards over datasets that previously bottlenecked the warehouse",
      "Architected automated disaster recovery using Python Lambda functions orchestrated through Step Functions and AWS DRS, enabling one-click failover and failback",
      "Delivered the surrounding cloud foundation across client environments: monolith to containerized ECS Fargate modernization, Terraform and CloudFormation IaC, CI/CD automation, security hardening with WAF, IAM least-privilege and CIS benchmarks, and Grafana and Prometheus observability"
    ]
  }
]

// ============================================
// PROJECTS
// ============================================
export const projects = [
  {
    title: "ExamWarp, SaaS Product",
    description: "Built and launched ExamWarp (examwarp.vireshsaas.in), a SaaS platform helping students prepare for exams with smart study tools and practice tests. Shipped end to end on free-tier infrastructure, frontend on Vercel and backend on Render, with a Gemini 2.5 Flash key fallback chain that keeps generation running when a key hits its rate limit.",
    tech: ["Vercel", "Render", "Gemini 2.5 Flash", "Key Fallback"],
    featured: true,
    link: "https://examwarp.vireshsaas.in",
    type: "product",
    personal: true
  },
  {
    title: "Startup Cloud Foundation",
    description: "Designed production-ready AWS cloud infrastructure for an early-stage startup from zero, multi-environment setup (dev/staging/prod), CI/CD pipeline, auto-scaling ECS services, RDS Multi-AZ, and cost guardrails. Infrastructure scaled from 100 to 50,000 users without rearchitecting.",
    tech: ["AWS VPC", "ECS Fargate", "Terraform", "GitHub Actions", "CloudWatch", "WAF"],
    featured: true,
    type: "architecture"
  },
  {
    title: "Enterprise Security Hardening",
    description: "Audited and hardened AWS infrastructure for an enterprise client, multi-account AWS Organizations with SCPs, GuardDuty threat detection, WAF rule sets, Security Hub CIS benchmark remediation, and IAM least-privilege overhaul. Environment reached compliance-ready state in 6 weeks.",
    tech: ["AWS Organizations", "GuardDuty", "WAF", "Security Hub", "IAM", "Config Rules"],
    featured: true,
    type: "security"
  },
  {
    title: "Serverless Geofence API",
    description: "Designed and deployed serverless geofence APIs on AWS using Lambda and API Gateway with GraphQL integration for real-time location tracking. Handles thousands of location events per second at sub-50ms P99 latency with zero infrastructure management overhead.",
    tech: ["AWS Lambda", "API Gateway", "GraphQL", "DynamoDB", "CloudWatch"],
    featured: true,
    type: "architecture"
  },
  {
    title: "Architecture Modernization",
    description: "Transformed a monolithic application to a multi-tier containerized architecture with private subnets and CloudFront-based content delivery. Achieved 99.9% uptime SLA, 70% faster deployments via rolling updates, and 40% infrastructure cost reduction through right-sizing and reserved capacity.",
    tech: ["ECS Fargate", "CloudFront", "Docker", "Terraform", "ALB"],
    featured: false,
    type: "architecture"
  },
  {
    title: "Observability Platform",
    description: "Built a full-stack observability platform with Grafana and Prometheus covering infrastructure, application, and business metrics. Integrated Slack and PagerDuty alerting with severity-based routing. Reduced mean time to detection (MTTD) from hours to under 5 minutes.",
    tech: ["Grafana", "Prometheus", "Alertmanager", "CloudWatch", "Slack API"],
    featured: false,
    type: "devops"
  },
  {
    title: "Zero-Loss Database Migration, AWS DMS",
    description: "Migrated a live production database to AWS with zero record loss, using DMS continuous replication (CDC) and a full row-level validation pass before cutover, with no downtime for the source system.",
    tech: ["AWS DMS", "RDS", "CDC", "CloudWatch", "Python"],
    featured: true,
    link: null, // TODO: add case study or repo link
    type: "data"
  },
  {
    title: "Multi-Tenant E-Commerce Platform",
    description: "Architected a multi-tenant, Shopify-like e-commerce platform with data-layer tenant isolation and horizontally scalable compute, now serving around 10,000 concurrent users without per-tenant infrastructure duplication.",
    tech: ["AWS ECS", "RDS Multi-AZ", "Redis", "API Gateway", "Terraform", "CloudFront"],
    featured: true,
    link: null, // TODO: add case study or demo link
    type: "architecture"
  },
  {
    title: "Fault-Tolerant Payment Gateway",
    description: "Architected a fault-tolerant, horizontally scalable payment gateway handling roughly $5M in transaction volume under heavy concurrent load, using idempotent request handling, queue-based load leveling, and multi-AZ failover.",
    tech: ["AWS ECS", "SQS", "RDS Multi-AZ", "ElastiCache", "API Gateway", "CloudWatch"],
    featured: true,
    link: null, // TODO: add case study link
    type: "architecture"
  },
  {
    title: "Multi-Agent Workflow System",
    description: "Built a multi-agent workflow system with human-in-the-loop checkpoints, using the Saga pattern for transaction consistency and a LangChain-based memory layer to cut token usage on long-running agent sessions.",
    tech: ["LangChain", "Python", "Saga Pattern", "AWS Lambda", "SQS", "DynamoDB"],
    featured: true,
    link: null,
    repo: null, // TODO: set the GitHub repo URL
    type: "ai",
    personal: true
  },
  {
    title: "AWS Pricing Calculator, MCP Server",
    description: "Built an AWS pricing calculator as an MCP (Model Context Protocol) server, letting AI agents query live AWS cost estimates and generate shareable cost-breakdown links.",
    tech: ["MCP", "Python", "AWS Pricing API", "Lambda", "API Gateway"],
    featured: false,
    link: null,
    repo: "https://github.com/vireshsolanki/aws-calculator-mcp", // TODO: set the GitHub repo URL
    type: "ai",
    personal: true
  },
  {
    title: "Self-Hosted CA, IAM Roles Anywhere Alternative",
    description: "Designed a self-hosted certificate authority in AWS KMS as a lower-cost alternative to AWS Private CA for IAM Roles Anywhere, issuing short-lived X.509 certificates for hybrid workload identity.",
    tech: ["AWS KMS", "IAM Roles Anywhere", "X.509 PKI", "Python", "ACM"],
    featured: false,
    link: null,
    repo: "https://github.com/vireshsolanki/iam-roles-anywhere-automation", // TODO: set the GitHub repo URL
    type: "security",
    personal: true
  },
  {
    title: "Apache Doris Real-Time Analytics Platform",
    description: "Deployed and provisioned Apache Doris to handle around 5TB of data, powering real-time analytics dashboards over high-cardinality datasets that had previously bottlenecked the existing warehouse.",
    tech: ["Apache Doris", "AWS EC2", "Terraform", "Grafana", "Kafka"],
    featured: true,
    link: null, // TODO: add case study link
    type: "data"
  }
]
