function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect

let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter



<section class="services">
<div class="services-container">
      <div class="service-box">
          <i class="fas fa-laptop-code service-icon""></i> <h3 class="service-heading">web design</h3>
          <p class="service-description">I design Apps that not only look beautiful but also offer exceptional functionality.</p>
      </div>

      <div class="service-box">
        <i class="fa-brands fa-java"></i>
        <h3 class="service-heading">Java</h3>
        <p class="service-description">I design websites that not only look beautiful but also offer exceptional functionality.</p>
    </div>
    

      <div class="service-box">
          <i class="fa-brand fa-python"></i> <h3 class="service-heading">Graphics Design</h3>
          <p class="service-description">I design graphics that not only look beautiful but also convey deep meaning and purpose.</p>
      </div>
      <div class="service-box">
          <i class=" fa-solid fa-c"></i>
          <h3 class="service-heading">Web Development</h3>
          <p class="service-description">I develop Website that not only look beautiful but also offer exceptional functionality</p>
      </div>
      <div class="service-box">
          <i class="fas fa-video service-icon"></i>
          <h3 class="service-heading">Video Editor</h3>
          <p class="service-description">I edit videos that not only look beautiful but also engage and captivate audiences.</p>
      </div>
      <div class="service-box">
          <i class="fas fa-desktop service-icon"></i>
          <h3 class="service-heading">UI/UX Design</h3>
          <p class="service-description">I design UI/UX that not only looks beautiful but also understands user requirements and behavior.</p>
      </div>
  </div>
</section>
