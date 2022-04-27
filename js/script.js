

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }
  animateLinks() {
    this.navLinks.forEach((link,index) => {
      link.style.animation
        ? (link.style.animation = "")
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
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();


// animation



var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [
				{ src: '../images/ie.jpg'},
				{ src: '../images/image3.jpg'},
				{ src: '../images/tea.jpg'}
			];
		} else {
			var responsiveImage = [
				{ src: '../images/ie.jpg' },
				{ src: '../images/image3.jpg' },
				{ src: '../images/tea.jpg' }
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