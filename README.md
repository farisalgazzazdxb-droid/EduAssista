# EduAssista: AI-Powered Study Assistant

## Overview

EduAssista is an education web application designed to help students study smarter using AI. The platform allows students to upload notes, which are then processed by AI to generate summaries, flashcards, and practice tests. It also features voice-based Q&A for hands-free studying and a study plan generator based on deadlines.

---

## Features

- **Note Upload:** Students can upload their study notes.
- **AI Summaries:** Automatically generate concise summaries from uploaded notes.
- **Flashcards:** Create interactive flashcards for revision.
- **Practice Tests:** Generate practice questions and tests from notes.
- **Voice Q&A:** Hands-free question and answer interface using voice.
- **Study Plan Generator:** Personalized study plans based on deadlines and goals.

---

## Provided Files & Structure

```
EduAssista/
├── src/
│   ├── components/           # React components for each feature
│   ├── pages/                # Main pages (Home, Dashboard, Login)
│   ├── services/             # API and AI service integrations
│   ├── types/                # TypeScript types
│   └── index.tsx             # App entry point
├── public/
│   └── index.html
├── package.json
├── tsconfig.json
├── .env.example              # Example environment variables
├── Dockerfile                # Containerization for deployment
├── docker-compose.yml        # Local multi-container setup
├── scripts/
│   └── deploy.sh             # EC2 deployment script
├── aws/
│   ├── ec2-user-data.sh      # EC2 instance bootstrap script
│   ├── alb-target-group.json # ALB target group config
│   ├── asg-launch-template.json # ASG launch template
│   ├── rds-setup.sql         # RDS database setup
│   ├── iam-role-policy.json  # IAM role policy for EC2
│   └── cloudwatch-alarms.json # CloudWatch alarm config
├── docs/
│   └── AWS_DEPLOYMENT_GUIDE.md # Step-by-step AWS deployment guide
└── README.md
```

---

## Architecture

### Application Architecture

- **Frontend:** React + TypeScript web application.
- **Backend (optional):** Can be extended with Node.js/Express or serverless functions for AI processing and database integration.

### AWS Deployment Architecture

- **EC2:** Hosts the Dockerized web application.
- **Application Load Balancer (ALB):** Distributes traffic across EC2 instances.
- **Auto Scaling Group (ASG):** Automatically scales EC2 instances based on demand.
- **Amazon RDS (Optional):** Managed MySQL/PostgreSQL database for persistent storage.
- **IAM:** Role-based access for secure resource management.
- **CloudWatch & SNS:** Monitoring, logging, and alerting.

---

## Deployment on AWS

### Prerequisites

- AWS account with permissions for EC2, ALB, ASG, RDS, IAM, CloudWatch, and SNS.
- Docker installed locally.
- AWS CLI configured.

### Steps

1. **Build and Push Docker Image**
   - Build your Docker image:
     ```
     docker build -t eduassista .
     ```
   - Tag and push to Amazon ECR (replace with your ECR repo):
     ```
     docker tag eduassista:latest <your-ecr-repo>:latest
     docker push <your-ecr-repo>:latest
     ```

2. **Provision RDS Database (Optional)**
   - Use `aws/rds-setup.sql` to initialize your database.

3. **Launch EC2 Instances**
   - Use `aws/ec2-user-data.sh` as the user data script to bootstrap Docker and run your app.

4. **Configure ALB and ASG**
   - Use `aws/alb-target-group.json` and `aws/asg-launch-template.json` to set up load balancing and auto scaling.

5. **Set Up IAM Roles**
   - Attach the policy in `aws/iam-role-policy.json` to your EC2 instances for secure access.

6. **Configure Monitoring**
   - Use `aws/cloudwatch-alarms.json` to set up CloudWatch alarms and SNS notifications.

7. **Deploy with CloudFormation (Optional)**
   - You can convert the provided JSON files into CloudFormation templates for automated deployment.

8. **Access Your Application**
   - Once deployed, access your app via the ALB DNS name.

---

## Local Development

1. **Install dependencies**
   ```
   npm install
   ```

2. **Start the development server**
   ```
   npm start
   ```

3. **Run with Docker Compose**
   ```
   docker-compose up --build
   ```

---

## Environment Variables

See `.env.example` for required environment variables (API URLs, DB credentials, etc.).

---

## Documentation

See `docs/AWS_DEPLOYMENT_GUIDE.md` for a detailed, step-by-step AWS deployment guide.

---

## License

MIT
