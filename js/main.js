const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
// theme
const root=document.documentElement, tbtn=$('#theme');
const saved=localStorage.getItem('theme'); if(saved){root.dataset.theme=saved;}
const sync=()=>tbtn.textContent=root.dataset.theme==='dark'?'🌙':'☀️'; sync();
tbtn.onclick=()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('theme',root.dataset.theme);sync()};
// progress + parallax + active link
const prog=$('#progress'), bg=$('#heroBg'), links=$$('nav a.link'), secs=links.map(a=>$(a.getAttribute('href')));
addEventListener('scroll',()=>{
  const h=document.documentElement; prog.style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+'%';
  if(scrollY<innerHeight) bg.style.translate='0 '+(scrollY*.25)+'px';
  let cur=0; secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=i});
  links.forEach((a,i)=>a.classList.toggle('active',i===cur));
},{passive:true});
// reveal + counters + bars
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return; e.target.classList.add('in'); io.unobserve(e.target);
  const c=$('[data-count]',e.target); if(c) count(c);
  $$('.bar i',e.target).forEach(b=>b.style.width=b.dataset.w+'%');
}),{threshold:.2});
$$('.reveal').forEach(el=>io.observe(el));
function count(el){
  const to=+el.dataset.count,suf=el.dataset.suffix||'',t0=performance.now(),d=1600;
  (function f(t){const p=Math.min((t-t0)/d,1),v=Math.floor(to*(1-Math.pow(1-p,3)));
    el.textContent=v.toLocaleString('id-ID')+suf; if(p<1)requestAnimationFrame(f)})(t0);
}
// spotlight cards
$$('.card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}));
// copy phone
$('#copyTel').onclick=async e=>{
  try{await navigator.clipboard.writeText(e.currentTarget.dataset.copy)}catch(_){}
  const t=$('#toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800);
};
