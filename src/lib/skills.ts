import { FaServer, FaDatabase, FaReact, FaGitAlt, FaRecycle, FaHandshake, FaCode } from "react-icons/fa";

export const skills = [
  {
    icon: FaCode,
    title: "Programming Languages",
    description: ["Java (Advanced)", "Javascript/Typescript (Advanced)", "Python (Intermediate)", "C# (beginner)", "SQL (Advanced)"]
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description: ["REST API", "Spring Framework", "OAuth, JWT", "Hibernate & JPA", "Caching (ehcache)", "Maven", "JUnit testing"]
  },
  {
    icon: FaReact,
    title: "Frontend Development",
    description: ["React.js", "Vue.js", "jQuery", "Responsive Design", "Tailwind.css"]
  },
  {
    icon:  FaDatabase,
    title: "Database",
    description: ["Database management & design", "Database migrations (Liquibase)", "MySQL", "SQL Server"]
  },
  {
    icon:  FaGitAlt,
    title: "Collaboration Tools",
    description: ["Git Version control", "Agile Scrum"]
  },
  {
    icon: FaRecycle,
    title: "CI/CD",
    description: ["Jenkins", "Kubernetes", "AWS (EC2, RDS, S3)", "Docker", "Nginx"]
  },
  {
    icon: FaHandshake,
    title: "Soft",
    description: ["Technical Documentation", "Experience with International teams", "Time management", "Problem-solving"]
  }
];
