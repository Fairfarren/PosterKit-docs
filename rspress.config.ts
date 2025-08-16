import * as path from 'node:path'
import { defineConfig } from 'rspress/config'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'PosterKit',
  icon: '/logo.png',
  logo: {
    light: '/logo-light.png',
    dark: '/logo-dark.png',
  },
  base: '/PosterKit-docs/',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/Fairfarren/PosterKit',
      },
    ],
  },
})
