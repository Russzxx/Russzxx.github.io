
  const cursor=document.getElementById('cursor'),ring=document.getElementById('cursorRing');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx-5+'px';cursor.style.top=my-5+'px'});
  function animateRing(){rx+=(mx-rx-18)*.12;ry+=(my-ry-18)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animateRing)}
  animateRing();
  document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>{cursor.style.transform='scale(2.5)';ring.style.transform='scale(1.4)'});el.addEventListener('mouseleave',()=>{cursor.style.transform='scale(1)';ring.style.transform='scale(1)'})});
  const hamburger=document.getElementById('hamburger'),navLinks=document.getElementById('navLinks');
  hamburger.addEventListener('click',()=>navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(l=>l.addEventListener('click',()=>navLinks.classList.remove('open')));
  const reveals=document.querySelectorAll('.reveal');
  new IntersectionObserver((entries)=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*80);}})},{threshold:.1}).observe(document.body);
  const obs=new IntersectionObserver(entries=>entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*80);obs.unobserve(e.target)}})  ,{threshold:.08});
  reveals.forEach(el=>obs.observe(el));
  function filterProjects(cat,btn){
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.project-card').forEach(card=>{
      if(cat==='all'||card.dataset.cat===cat){card.classList.remove('hidden')}else{card.classList.add('hidden')}
    });
  }
  function handleSubmit(e){
    e.preventDefault();
    const btn=document.getElementById('sendBtn');
    btn.textContent='Sending...';btn.disabled=true;
    setTimeout(()=>{btn.textContent='✓ Message Sent!';btn.style.background='#1d9e75';
    setTimeout(()=>{btn.textContent='Send Message →';btn.style.background='';btn.disabled=false;e.target.reset()},3000)},1200);
  }
  const sections=document.querySelectorAll('section[id]');
  window.addEventListener('scroll',()=>{
    const y=window.scrollY+100;
    sections.forEach(sec=>{
      const link=document.querySelector('.nav-links a[href="#'+sec.id+'"]');
      if(!link)return;
      if(y>=sec.offsetTop&&y<sec.offsetTop+sec.offsetHeight){link.style.color='var(--accent)'}else{link.style.color=''}
    });
  });
