const PATH = './node_modules/@architect/views/hello.marko'
import { createPageRenderer } from 'vite-plugin-ssr'

const isProduction = false
const root = PATH
const renderPage = createPageRenderer({ isProduction, root })

export async function handler() {
  const pageContext = await renderPage({ url: '/bundle' })
  const { httpResponse } = pageContext
  return httpResponse
}
