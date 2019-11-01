import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Canonn Science'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
