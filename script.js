// Mostra o ano atual no rodapé
(function(){
  var anoEl = document.getElementById('ano');
  if(anoEl){ anoEl.textContent = new Date().getFullYear(); }
})();

// Reveal on scroll - compatível e simples
(function(){
  function revealAll(){
    var items = document.querySelectorAll('.reveal');
    for(var i=0;i<items.length;i++){
      var el = items[i];
      var rect = el.getBoundingClientRect();
      if(rect.top < (window.innerHeight - 80)){
        el.classList.add('visible');
      }
    }
  }
  window.addEventListener('scroll', revealAll);
  window.addEventListener('resize', revealAll);
  window.addEventListener('load', function(){
    revealAll();
    // staggered entrance for main sections
    var seq = document.querySelectorAll('header, .service, .contact-panel, footer, #sobre');
    for(var j=0;j<seq.length;j++){
      (function(k){
        setTimeout(function(){ if(seq[k]) seq[k].classList.add('visible'); }, 120 * k);
      })(j);
    }
  });
})();
