const randomInRange = (max, min) => Math.floor(Math.random() * (max - min)) + min;

const createDroplet = () => {
  const droplet = document.createElement("div");
  droplet.className = "droplet";

  const pos = randomInRange(100.5, 0);
  droplet.style.left = `${pos}%`;

  const height = randomInRange(12, 4);
  droplet.style.height = droplet.style.width = `${height}px`;

  const opacity = randomInRange(1, 0.8);
  TweenMax.set(droplet, { opacity });

  const delay = randomInRange(10, 0);
  const speed = randomInRange(17, 12);
  const blurVal = randomInRange(4, 1);
  const path = () => [
    { x: randomInRange(150, -150), y: randomInRange(150, -150) },
    { x: randomInRange(150, -150), y: randomInRange(150, -150) },
    { x: randomInRange(150, -150), y: randomInRange(150, -150) },
    { x: randomInRange(150, -150), y: randomInRange(150, -150) }
  ];

  TweenMax.to(droplet, speed, {
    y: 1520,
    delay,
    top: -300,
    filter: `blur(${blurVal}px)`,
    repeat: -1,
    bezier: {
      type: "soft",
      values: path(),
      autoRotate: true
    },
    ease: Power1.easeInOut
  });

  return droplet;
};

const dropletContainer = document.getElementById("container");

for (let i = 0; i < 200; i++) {
  const droplet = createDroplet();
  dropletContainer.appendChild(droplet);
}
