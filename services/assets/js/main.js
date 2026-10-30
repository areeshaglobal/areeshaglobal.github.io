(function(){
  function init(){
    const pre=document.getElementById('preloader');
    if(pre){
      const hide=()=>setTimeout(()=>pre.classList.add('hide'),180);
      if(document.readyState==='complete') hide(); else window.addEventListener('load',hide,{once:true});
      setTimeout(()=>pre.classList.add('hide'),2200);
    }
    const top=document.getElementById('backToTop');
    const onScroll=()=>{if(top) top.classList.toggle('show',window.scrollY>450)};
    window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
    if(top) top.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
    document.querySelectorAll('[data-current]').forEach(a=>{const page=document.body.dataset.page;if(a.dataset.current===page)a.classList.add('active')});
    document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
    document.querySelectorAll('.enquiry-form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const alertBox=form.querySelector('.form-success');if(alertBox){alertBox.classList.remove('d-none');form.reset();setTimeout(()=>alertBox.classList.add('d-none'),5000)}}));
    document.querySelectorAll('[data-enquiry-product]').forEach(btn=>btn.addEventListener('click',()=>{const input=document.querySelector('#enquiryModal select[name="product"]');if(input) input.value=btn.dataset.enquiryProduct||''}));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();