document.addEventListener('DOMContentLoaded', () => {
    const sliders = Array.from(document.querySelectorAll('.tablecompare__col--slider'));
    let globalScroll = 0;
    
    sliders.forEach(slider => {
      slider.addEventListener('scroll', (e) => {
        globalScroll = e.target.scrollLeft;
      });
    });
    
    function syncScroll() {
      sliders.forEach(slider => {
        if (Math.abs(slider.scrollLeft - globalScroll) > 1) {
          slider.scrollLeft = globalScroll;
        }
      });
      requestAnimationFrame(syncScroll);
    }
    
    requestAnimationFrame(syncScroll);
  });
  