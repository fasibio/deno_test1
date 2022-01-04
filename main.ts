import {serve} from './lib.ts'
const port = 8001

console.log(`http://localhost:${port}`)
serve(async (request) => {
  const { pathname } = new URL(request.url);
  
  // This is how the server works:
  // 1. A request comes in for a specific asset.
  // 2. We read the asset from the file system.
  // 3. We send the asset back to the client.
  
  // Check if the request is for style.css.
  if (pathname.startsWith("/style.css")) {
    const file =await  Deno.readFile("./assets/style.css");
    return new Response( file, {
      headers: {
        "content-type": "text/css",
      },
    });
  }

  return new Response(
    `<html>
      <head>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );

},{
  port,
})