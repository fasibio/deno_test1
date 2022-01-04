import {serve} from 'http/server.ts'
console.log('http://localhost:8000')
serve((req) => {
  return new Response("Hello")
},{
  port: 8000
})