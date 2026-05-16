const HeroImage = document.querySelector("#Hero img");

function setHeroImageProperties() {
  if (window.innerWidth / window.innerHeight >= 0.72892) {
    HeroImage.style.setProperty("width", "100%");
    HeroImage.style.setProperty("height", "auto");
    HeroImage.style.setProperty("animation", "600ms ease-out 1s 1 forwards image-fade-in, scroll auto linear");
    HeroImage.style.setProperty("animation-timeline", "auto, scroll(root)");
    HeroImage.style.setProperty("left", "0");
  }
  else {
    HeroImage.style.setProperty("height", "95vh");
    HeroImage.style.setProperty("width", "auto");
    HeroImage.style.setProperty("left", `-${(HeroImage.width - window.innerWidth) / 2}px`);
    HeroImage.style.setProperty("animation", "600ms ease-out 1s 1 forwards image-fade-in");
    HeroImage.style.setProperty("animation-timeline", "auto");
  }
}

window.onload = setHeroImageProperties;
window.addEventListener("resize", setHeroImageProperties);  
