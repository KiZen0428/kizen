class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = 'active';
    this.handleClick = this.handleClick.bind(this);
  }
  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }
  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }
  addClickEvent() {
    this.navList.addEventListener("click", this.handleClick);
    this.mobileMenu.addEventListener("click", this.handleClick);
  }
  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  '.mobile-menu',
  '.nav-list',
  '.nav-list li'
);
mobileNavbar.init();













// animation

var windowwidth =
  window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768) {
  var responsiveImage = [
    {
      src: "https://github.com/KiZen0428/kizen/blob/main/images/ie.jpg?raw=true",
    },
    {
      src: "https://github.com/KiZen0428/kizen/blob/main/images/image3.jpg?raw=true",
    },
    {
      src: "https://images.unsplash.com/photo-1575487426366-079595af2247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];
} else {
  var responsiveImage = [
    {
      src: "https://github.com/KiZen0428/kizen/blob/main/images/ie.jpg?raw=true",
    },
    {
      src: "https://github.com/KiZen0428/kizen/blob/main/images/image3.jpg?raw=true",
    },
    {
      src: "https://images.unsplash.com/photo-1575487426366-079595af2247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];
}

$('#slider').vegas({
  overlay: true,
  transition: 'fade2',
  transitionDuration: 2000,
  delay: 5000,
  animationDuration: 20000,
  animation: 'random',
  slides: responsiveImage,
});










// new hidding navi start

var beforePos = 0;

function ScrollAnime() {
  var elemTop = $("#line-up").offset().top; 
  var scroll = $(window).scrollTop();
  
  if (scroll == beforePos) {
   
  } else if (elemTop > scroll || 0 > scroll - beforePos) {
    
    $("#header").removeClass("UpMove"); 
    $("#header").addClass("DownMove"); 
  } else {
    
    $("#header").removeClass("DownMove"); 
    $("#header").addClass("UpMove");
  }

  beforePos = scroll; 
}


$(window).scroll(function () {
  ScrollAnime();
});


$(window).on("load", function () {
  ScrollAnime();
});


var headerH = $("#header").outerHeight(true);
$("#nav-list li a").click(function () {
  var elmHash = $(this).attr("href");
  var pos = $(elmHash).offset().top - headerH;
  $("body,html").animate({ scrollTop: pos }, 1000);
  return false;
});