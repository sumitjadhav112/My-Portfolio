export interface Profile {
    name: string;
    location: string;
    email: string;
    phone: string;
    summary: string;
    skills: string[];
    education: Education[];
    workExperience: WorkExperience[];
    projects: Project[];
  }
  
  export interface Education {
    degree: string;
    institution: string;
    year: number;
    cgpa: number;
  }
  
  export interface WorkExperience {
    company: string;
    position: string;
    duration: string;
    responsibilities: string[];
  }
  
  export interface Project {
    name: string;
    technologies: string[];
    description: string;
    githubLink?: string;
  }