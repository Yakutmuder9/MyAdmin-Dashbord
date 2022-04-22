const navbarTop = document.getElementById("navbar_top")
const sideToggler = document.getElementById("side_toggler")
const navLinkText = document.querySelector("navlikn_text")

  window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        navbarTop.classList.add('bg-dark');
          console.log("scroll20 and more")
      } else {
        navbarTop.classList.remove('bg-dark');
        console.log("scroll20 and less")
      } 
  });

sideToggler.addEventListener('click', function() {
  document.getElementById('sidenav-main').style.width='5vw';
  document.getElementById('navlikn_text').style.display="none!important";
})
