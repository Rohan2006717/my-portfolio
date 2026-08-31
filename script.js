const cursorGlow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;

document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animateGlow() {

    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;

    cursorGlow.style.left = `${glowX}px`;
    cursorGlow.style.top = `${glowY}px`;

    requestAnimationFrame(animateGlow);
}

animateGlow();

const interactiveObjects = document.querySelectorAll(
  ".floating-object, .code-card"
);

const heroVisual = document.querySelector(".hero-visual");

heroVisual.addEventListener("mousemove", (event) => {

  const rect = heroVisual.getBoundingClientRect();

  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const moveX = (mouseX - centerX) / centerX;
  const moveY = (mouseY - centerY) / centerY;


  interactiveObjects.forEach((object) => {

      const depth = Number(object.dataset.depth);

      const x = moveX * 18 * depth;
      const y = moveY * 18 * depth;

      const rotateX = moveY * -5 * depth;
      const rotateY = moveX * 5 * depth;

      object.style.transform = `
          translate(${x}px, ${y}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
      `;

  });

});


heroVisual.addEventListener("mouseleave", () => {

  interactiveObjects.forEach((object) => {

      object.style.transform = "translate(0, 0) rotateX(0) rotateY(0)";

  });

});

const projectCard = document.querySelector(".project-card");
const browserWindow = document.querySelector(".browser-window");

projectCard.addEventListener("mousemove", (event) => {

    const rect = projectCard.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 45;
    const rotateY = (centerX - x) / 45;

    browserWindow.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
    `;
});

projectCard.addEventListener("mouseleave", () => {

    browserWindow.style.transform = `
        perspective(1000px)
        rotateY(-4deg)
    `;

});