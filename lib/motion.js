function init(){
var d=document,$=function(s,c){return(c||d).querySelector(s)},$$=function(s,c){return[].slice.call((c||d).querySelectorAll(s))};
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches,sm=matchMedia('(max-width:820px)'),off=[],raf,T=[];
function on(t,e,f,o){t.addEventListener(e,f,o);off.push(function(){t.removeEventListener(e,f,o)})}
function later(f,ms){T.push(setTimeout(f,ms))}
if(fine)d.documentElement.classList.add('fine');
$$('[data-split]').forEach(function(el){var t=el.textContent;el.setAttribute('aria-label',t);el.innerHTML=t.split('').map(function(c,i){return c==' '?' ':'<span class="ch" aria-hidden="true"><i style="--i:'+i+'">'+c+'</i></span>'}).join('')});
/* opening sequence: name curtain lifts away, then a small welcome card appears and leaves by itself */
var hi=$('#hi'),intro=$('#intro'),h=+new Date().toLocaleString('en-GB',{timeZone:'Asia/Dubai',hour:'2-digit',hour12:false}),seen=0;
try{seen=sessionStorage.getItem('rr-hi')}catch(e){}
$('#hit').textContent=(h<12?'Good morning':h<17?'Good afternoon':'Good evening')+', welcome.';
function shut(){hi.classList.remove('on')}
function go(){if(d.body.classList.contains('go'))return;d.body.classList.add('go');d.body.classList.remove('lock');
later(function(){intro&&intro.remove()},rm?0:1300);
if(seen){hi.remove();return}
later(function(){hi.classList.add('on');try{sessionStorage.setItem('rr-hi','1')}catch(e){}},rm?300:1500);
later(shut,rm?5300:7000)}
d.body.classList.add('lock');later(go,rm?0:2900);intro&&on(intro,'click',go);
$$('[data-close]',hi).forEach(function(b){on(b,'click',shut)});on(d,'keydown',function(e){if(e.key==='Escape')shut()});
/* clock */
function clk(){var c=$('#clk');c&&(c.textContent=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Dubai',hour:'2-digit',minute:'2-digit'}))}clk();var ci=setInterval(clk,1000);
var T_=["<em>203</em> leads in 5 days","<em>₹9.43</em> per lead","<em>83</em> campaigns","<em>6.3M</em> impressions","team of <em>5</em>","<em>80+</em> video assets","Meta · Google · GA4 · SEO · AEO · GEO"],H="";for(var q=0;q<8;q++)T_.forEach(function(t){H+="<span>"+t+"</span>"});document.getElementById("tk").innerHTML=H;/* reveal */
function cnt(e){var n=parseFloat(e.dataset.n),p=e.dataset.p||'',s=e.dataset.s||'',dec=+(e.dataset.dec||0),t0=null;if(rm)return;(function f(t){t0=t0||t;var k=Math.min((t-t0)/1500,1),v=n*(1-Math.pow(1-k,3));e.textContent=p+v.toLocaleString('en-IN',{minimumFractionDigits:dec,maximumFractionDigits:dec})+s;if(k<1)requestAnimationFrame(f)})(performance.now())}
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(!x.isIntersecting)return;var e=x.target;e.style.setProperty('--d',e.dataset.d||0);e.classList.add('in');$$('[data-n]',e).concat(e.dataset.n?[e]:[]).forEach(cnt);io.unobserve(e)})},{threshold:.18});
$$('[data-rv],.trk-w').forEach(function(e){io.observe(e)});
/* reels: lazy autoplay in view, fallback card if the file is missing */
var vio=new IntersectionObserver(function(en){en.forEach(function(x){var v=x.target;if(x.isIntersecting){if(!v.src){v.src=v.dataset.src;v.onerror=function(){v.remove()}}v.play&&v.play().catch(function(){})}else v.pause&&v.pause()})},{threshold:.5});
$$('video[data-src]').forEach(function(v){vio.observe(v)});
$$('#rt button').forEach(function(b){on(b,'click',function(){$$('#rt button').forEach(function(x){x.classList.toggle('on',x===b)});$$('.reel').forEach(function(r){r.hidden=!(b.dataset.c==='All'||r.dataset.c===b.dataset.c)})})});
$$('#ft button').forEach(function(b){on(b,'click',function(){$$('#ft button').forEach(function(x){x.classList.toggle('on',x===b)});$$('.row').forEach(function(r){r.hidden=!(b.dataset.f==='all'||r.dataset.f===b.dataset.f)})})});
/* scroll engine */
var bar=$('#bar'),hero=$('.hero'),hin=$('#hin'),hs=$('.hs'),tr=$('.track'),hb=$('.hs-b i'),hc=$('#hc'),pars=$$('[data-par]'),secs=$$('main section[id]'),links=$$('.nav a');
function tick(){var y=scrollY,vh=innerHeight,m=Math.max(1,d.documentElement.scrollHeight-vh);
bar.style.transform='scaleX('+y/m+')';
if(!rm&&y<vh*1.2){var p=Math.min(y/vh,1);hin.style.transform='translateY('+(-p*14)+'vh) scale('+(1-p*.08)+')';hin.style.opacity=1-p*1.2}
pars.forEach(function(e){var r=e.getBoundingClientRect();if(r.bottom<-200||r.top>vh+200)return;e.style.setProperty('--sy',((r.top+r.height/2-vh/2)*-parseFloat(e.dataset.par)).toFixed(1))});
if(hs&&!sm.matches){var r=hs.getBoundingClientRect(),q=Math.min(Math.max(-r.top/(r.height-vh),0),1);tr.style.transform='translateX('+(-q*(tr.scrollWidth-innerWidth))+'px)';hb.style.transform='scaleX('+q+')';hc.textContent='0'+(Math.round(q*4)+1)+' / 05'}
var cur='';secs.forEach(function(s){var b=s.getBoundingClientRect();if(b.top<vh*.45&&b.bottom>vh*.45)cur=s.id});links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+cur)});
raf=requestAnimationFrame(tick)}
if(!rm)tick();else bar.style.display='none';
/* cursor: dot, ring, labels, spotlight, parallax, magnetic, tilt */
if(fine&&!rm){var lr,mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my,dot=$('#cd'),ring=$('#cr'),lb=$('span',ring),mv=$$('[data-mv]');
on(d,'pointermove',function(e){mx=e.clientX;my=e.clientY;var kx=mx/innerWidth-.5,ky=my/innerHeight-.5;
mv.forEach(function(el){var k=+el.dataset.mv;el.style.setProperty('--cx',(kx*k).toFixed(1));el.style.setProperty('--cy',(ky*k).toFixed(1))});
hero.style.setProperty('--mx',(mx/innerWidth*100)+'%');hero.style.setProperty('--my',(my/hero.offsetHeight*100)+'%');
var t=e.target.closest&&e.target.closest('[data-cur],a,button');ring.classList.toggle('hov',!!t);var c=e.target.closest&&e.target.closest('[data-cur]');ring.classList.toggle('big',!!c);lb.textContent=c?c.dataset.cur:''});
(function loop(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;dot.style.transform='translate('+mx+'px,'+my+'px)';ring.style.transform='translate('+rx+'px,'+ry+'px)';lr=requestAnimationFrame(loop)})();
$$('.mag').forEach(function(b){on(b,'pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.3+'px,'+(e.clientY-r.top-r.height/2)*.4+'px)'});on(b,'pointerleave',function(){b.style.transform=''})});
$$('[data-tilt]').forEach(function(b){on(b,'pointermove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;b.style.transform='perspective(900px) rotateY('+x*10+'deg) rotateX('+-y*10+'deg)'});on(b,'pointerleave',function(){b.style.transform=''})})}
return function(){off.forEach(function(f){f()});T.forEach(function(t){clearTimeout(t);cancelAnimationFrame(t)});cancelAnimationFrame(raf);cancelAnimationFrame(lr);clearInterval(ci);io.disconnect();vio.disconnect()}}

export default init;
