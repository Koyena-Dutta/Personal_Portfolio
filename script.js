function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");


    
    

} 
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  document.getElementById("blog-button").addEventListener("click", function () {
    location.href = 'https://medium.com/@koyena2004/challenges-i-faced-while-building-a-website-18a8464ed392';
});
