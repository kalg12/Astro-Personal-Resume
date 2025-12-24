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
  name: {
    es: string
    en: string
  }
  description: {
    es: string
    en: string
  }
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}
