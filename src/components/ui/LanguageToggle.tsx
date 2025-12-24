import React, { useState, useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

interface LanguageToggleProps {
  lang: string
}

export function LanguageToggle({ lang }: LanguageToggleProps) {
  const [path, setPath] = useState('/')

  useEffect(() => {
    const currentPath = window.location.pathname
    const pathWithoutLang = currentPath.startsWith(`/${lang}`)
      ? currentPath.substring(`/${lang}`.length)
      : currentPath
    setPath(pathWithoutLang || '/')
  }, [lang])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <span className="uppercase">{lang}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <a href={`/es${path}`} className="w-full">
            🇪🇸 Español
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href={`/en${path}`} className="w-full">
            🇬🇧 English
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
