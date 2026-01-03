export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

export type Links = {
  TEXT: string
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]

export interface Project {
  id: string
  name: {
    es: string
    en: string
  }
  description: {
    es: string
    en: string
  }
  image: string
  images?: string[]
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  videoUrl?: string
  videoDescription?: {
    es: string
    en: string
  }
  longDescription: {
    es: string
    en: string
  }
  challenges: {
    es: string[]
    en: string[]
  }
  features: {
    es: string[]
    en: string[]
  }
  technologies: {
    frontend?: string[]
    backend?: string[]
    database?: string[]
    devops?: string[]
    other?: string[]
  }
  duration?: string
  teamSize?: string
  role?: {
    es: string
    en: string
  }
}
