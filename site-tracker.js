/* Cílios de Boneca — minimal, pseudonymous site analytics. No IP, name or city collected. */
(()=>{'use strict';const site=location.pathname.startsWith('/olarias')?'olarias':'principal';
const endpoint='https://ldrlutmcicrazizgthcg.supabase.co/rest/v1/site_events';
const key='sb_publishable_3kUR_WHT-Yc6Q3H9_odQGQ_RnTA5zEF';
let id;try{id=localStorage.getItem('cb_analytics_visitor');if(!id||id.length<10){id=crypto.randomUUID();localStorage.setItem('cb_analytics_visitor',id)}}catch(_){id=crypto.randomUUID()}
const device=/iPad|Tablet/i.test(navigator.userAgent)?'tablet':/Mobi|Android|iPhone/i.test(navigator.userAgent)?'mobile':'desktop';
function send(event_type){const body=JSON.stringify({site,event_type,visitor_id:id,path:location.pathname.slice(0,500),device});fetch(endpoint,{method:'POST',headers:{'apikey':key,'Content-Type':'application/json','Prefer':'return=minimal'},body,keepalive:true}).catch(()=>{})}
send('page_view');document.addEventListener('click',e=>{const a=e.target.closest?.('a[href]');if(a&&/^(https?:\/\/)?(api\.)?(wa\.me|whatsapp\.com)/i.test(a.href.replace(/^https?:\/\//,'')))send('whatsapp_click')},true);
})();