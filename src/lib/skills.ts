import { FaServer, FaDatabase, FaReact, FaGitAlt, FaRecycle, FaHandshake } from "react-icons/fa";

export const skills = [
  {
    icon: FaServer,
    title: "Backend Development",
    description: ["REST Api", "Spring Framework", "OAuth, JWT", "Hibernate & JPA", "Caching (ehcache)", "Maven", "JUnit testing"]
  },
  {
    icon: FaReact,
    title: "Frontend Development",
    description: ["Typescript", "React.js", "Vue.js", "jQuery", "Responsive Design", "Tailwind.css"]
  },
  {
    icon:  FaDatabase,
    title: "Database",
    description: ["Database management & design", "Database migrations (Liquibase)", "MySQL", "SQL Server"]
  },
  {
    icon:  FaGitAlt,
    title: "Tools",
    description: ["Git Version control", "Agile Scrum"]
  },
  {
    icon: FaRecycle,
    title: "CI/CD",
    description: ["Jenkins", "Kubernetes", "AWS (EC2, RDS, S3)", "Docker", "Load balancing & autoscaling", "Nginx / Apache"]
  },
  {
    icon: FaHandshake,
    title: "Soft",
    description: ["Technical Documentation", "Experience with International teams", "Time management", "Problem-solving"]
  }
];
