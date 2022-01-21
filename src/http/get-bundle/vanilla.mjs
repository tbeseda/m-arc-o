const PATH = './node_modules/@architect/views/hello.marko'
import { createServer as createViteServer } from 'vite';

export async function handler() {
  const vite = await createViteServer({
    server: { middlewareMode: true }
  });
  console.log('Vite server started')

  let html = 'foo'
  try {
    const template = (await vite.ssrLoadModule(PATH)).default
    console.log('template created', template)
    html = await template.render()
  } catch (error) {
    vite.ssrFixStacktrace(error)
    console.log('Vite error', error)
  }

  await vite.close()
  return { html }
}
