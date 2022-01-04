import {serve} from './lib.ts'
const port = 8001

console.log(`http://localhost:${port}`)
serve((req) => {
  return new Response("Hello")
},{
  port,
})