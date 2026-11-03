'use strict';
// Each sequence starts when its section is visible; explicit pauses persist.
function createAutoSequence({root,total,interval,toggle,onChange}){
 let current=0,paused=matchMedia('(prefers-reduced-motion: reduce)').matches,inView=false,timer=null;
 const media=matchMedia('(prefers-reduced-motion: reduce)');
 const render=()=>{onChange(current,!paused);toggle.textContent=paused?'Reanudar':'Pausar';toggle.setAttribute('aria-label',`${paused?'Reanudar':'Pausar'} reproducción automática`);root.dataset.activeIndex=String(current);root.dataset.playing=String(!paused&&inView&&!document.hidden)};
 function schedule(){clearInterval(timer);timer=null;render();if(!paused&&inView&&!document.hidden)timer=setInterval(()=>{current=(current+1)%total;render()},interval)}
 function select(i){paused=true;current=(i+total)%total;schedule()}
 toggle.onclick=()=>{paused=!paused;schedule()};
 root.addEventListener('focusin',e=>{if(e.target!==toggle){paused=true;schedule()}});
 document.addEventListener('visibilitychange',schedule);
 media.addEventListener('change',()=>{paused=media.matches;schedule()});
 if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;schedule()},{threshold:.2});observer.observe(root)}else{inView=true}
 render();schedule();return {select,next:()=>select(current+1),prev:()=>select(current-1)};
}
const timelineSequence=createAutoSequence({root:document.querySelector('.timeline-experience'),total:milestones.length,interval:5000,toggle:document.querySelector('#timeline-toggle'),onChange:(i,automatic)=>{document.querySelector('#timeline-panel').setAttribute('aria-live',automatic?'off':'polite');if(document.querySelector('[data-year][aria-pressed="true"]')?.dataset.year!==String(i))selectYear(i)}});
document.querySelectorAll('[data-year]').forEach(b=>b.addEventListener('click',()=>timelineSequence.select(Number(b.dataset.year))));document.querySelector('#timeline-prev').onclick=timelineSequence.prev;document.querySelector('#timeline-next').onclick=timelineSequence.next;
const doctorPhotos=[
 {src:'assets/doctor-galeria-1.webp',alt:'Equipo médico durante un procedimiento en quirófano.'},
 {src:'assets/doctor-galeria-2.webp',alt:'El Dr. Humberto Cordero durante una consulta con una paciente.'},
 {src:'assets/doctor-galeria-3.webp',alt:'Profesionales de Gastro Total trabajando en quirófano.'},
 {src:'assets/doctor-galeria-4.webp',alt:'Retrato grupal del equipo médico de Gastro Total.'},
 {src:'assets/doctor-galeria-5.webp',alt:'Pieza de presentación del doctor con el título 2,000 decisiones.'},
 {src:'assets/doctor-galeria-6.webp',alt:'Pieza de presentación sobre certificaciones y fotografía del doctor en quirófano.'},
 {src:'assets/doctor-galeria-7.webp',alt:'Pieza de presentación sobre experiencia del doctor y su equipo.'}
];
const stage=document.querySelector('#doctor-gallery-stage');const photoDots=document.querySelector('#doctor-photo-dots');
stage.innerHTML=doctorPhotos.map((p,i)=>`<figure class="doctor-photo ${i===0?'active':''}" aria-hidden="${i!==0}"><img src="${p.src}" alt="${p.alt}" loading="lazy" width="1254" height="1254"></figure>`).join('');photoDots.innerHTML=doctorPhotos.map((_,i)=>`<button type="button" aria-label="Mostrar fotografía ${i+1}" aria-current="${i===0}"></button>`).join('');
const photoSequence=createAutoSequence({root:document.querySelector('.doctor-gallery'),total:doctorPhotos.length,interval:5000,toggle:document.querySelector('#doctor-photo-toggle'),onChange:(i)=>{stage.querySelectorAll('.doctor-photo').forEach((f,j)=>{f.classList.toggle('active',j===i);f.setAttribute('aria-hidden',String(j!==i))});[...photoDots.children].forEach((b,j)=>b.setAttribute('aria-current',String(j===i)));document.querySelector('#doctor-photo-count').textContent=`${i+1} / ${doctorPhotos.length}`}});
[...photoDots.children].forEach((b,i)=>b.onclick=()=>photoSequence.select(i));document.querySelector('#doctor-photo-prev').onclick=photoSequence.prev;document.querySelector('#doctor-photo-next').onclick=photoSequence.next;
let photoStart=null;stage.addEventListener('touchstart',e=>{photoStart=e.touches[0].clientX},{passive:true});stage.addEventListener('touchend',e=>{if(photoStart===null)return;const dx=e.changedTouches[0].clientX-photoStart;if(Math.abs(dx)>45)(dx<0?photoSequence.next:photoSequence.prev)();photoStart=null},{passive:true});
// Entries remain visible if scripts or animation APIs are unavailable.
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 const entranceObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('scroll-in');entranceObserver.unobserve(entry.target)}})},{threshold:.12});
 function observeEntries(){document.querySelectorAll('main h1,main h2,main h3,main p,.help-grid>a,.treatment-card,.consult-card,.digestive-visual,.profile-copy,.doctor-gallery,.wellness-grid>img,form').forEach((el,i)=>{if(el.dataset.entranceObserved)return;el.dataset.entranceObserved='1';el.style.setProperty('--entrance-delay',`${Math.min(i%3*70,140)}ms`);entranceObserver.observe(el)})}
 observeEntries();new MutationObserver(observeEntries).observe(document.querySelector('#treatment-grid'),{childList:true});
}

// Approved bariatric introduction: copy left, original educational pieces right.
const bariatricPhotos=[
 {src:'assets/bariatrica-1.webp',alt:'Pieza explicativa proporcionada sobre cómo funciona el bypass gástrico.'},
 {src:'assets/bariatrica-2.webp',alt:'Pieza proporcionada sobre manga gástrica; las cifras corresponden al material original y no garantizan resultados individuales.'},
 {src:'assets/bariatrica-3.webp',alt:'Pieza proporcionada sobre el balón intragástrico y el seguimiento.'},
 {src:'assets/bariatrica-4.webp',alt:'Pieza explicativa proporcionada sobre qué es el balón intragástrico.'}
];
const bariatricStage=document.querySelector('#bariatric-stage'),bariatricDots=document.querySelector('#bariatric-dots');
bariatricStage.innerHTML=bariatricPhotos.map((p,i)=>`<figure class="doctor-photo ${i===0?'active':''}" aria-hidden="${i!==0}"><img src="${p.src}" alt="${p.alt}" loading="lazy" width="1254" height="1254"></figure>`).join('');
bariatricDots.innerHTML=bariatricPhotos.map((_,i)=>`<button type="button" aria-label="Mostrar imagen bariátrica ${i+1}" aria-current="${i===0}"></button>`).join('');
const bariatricSequence=createAutoSequence({root:document.querySelector('.bariatric-gallery'),total:bariatricPhotos.length,interval:5000,toggle:document.querySelector('#bariatric-toggle'),onChange:i=>{bariatricStage.querySelectorAll('.doctor-photo').forEach((f,j)=>{f.classList.toggle('active',j===i);f.setAttribute('aria-hidden',String(j!==i))});[...bariatricDots.children].forEach((b,j)=>b.setAttribute('aria-current',String(j===i)));document.querySelector('#bariatric-count').textContent=`${i+1} / ${bariatricPhotos.length}`}});
[...bariatricDots.children].forEach((b,i)=>b.onclick=()=>bariatricSequence.select(i));document.querySelector('#bariatric-prev').onclick=bariatricSequence.prev;document.querySelector('#bariatric-next').onclick=bariatricSequence.next;
let bariatricTouch=null;bariatricStage.addEventListener('touchstart',e=>{bariatricTouch=e.touches[0].clientX},{passive:true});bariatricStage.addEventListener('touchend',e=>{if(bariatricTouch===null)return;const dx=e.changedTouches[0].clientX-bariatricTouch;if(Math.abs(dx)>45)(dx<0?bariatricSequence.next:bariatricSequence.prev)();bariatricTouch=null},{passive:true});
