// Escopo exclusivo do catálogo de Olarias. Sempre busca a versão atual online.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
  if(event.request.mode!=='navigate')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin||!/^\/olarias(?:\/|$)/.test(url.pathname))return;
  event.respondWith(fetch(event.request,{cache:'no-store'}).catch(()=>new Response(`<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Cílios de Boneca</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#faf5f3;color:#241a18;font:16px/1.6 system-ui}main{max-width:340px;padding:28px;text-align:center}button{border:0;border-radius:99px;padding:14px 22px;background:#a3483d;color:white;font:inherit;cursor:pointer}</style><main><h1>Cílios de Boneca</h1><p>Você está sem conexão. Conecte-se à internet para consultar os valores e agendar.</p><button onclick="location.reload()">Tentar novamente</button></main></html>`,{headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}})));
});
