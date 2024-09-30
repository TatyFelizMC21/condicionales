let circleColor;
let circleX, circleY;
let speed = 5; // Velocidad inicial
let shapes = ["circle", "triangle", "square"]; // Formas que van a cambiar
let currentShape = "circle"; // Forma inicial

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleX = width / 2;
  circleY = height / 2;
  circleColor = color(255); // Color inicial blanco
}

function draw() {
  background(0); // Para que se borre el fondo en cada frame
  fill(circleColor);
  noStroke();

  // Forma actual
  if (currentShape === "circle") {
    ellipse(circleX, circleY, 200, 200); // Dibuja un círculo
  } else if (currentShape === "triangle") {
    triangle(
      circleX,
      circleY - 100,
      circleX - 100,
      circleY + 100,
      circleX + 100,
      circleY + 100
    ); // Dibuja un triángulo
  } else if (currentShape === "square") {
    rect(circleX - 100, circleY - 100, 200, 200); // Dibuja un cuadrado
  }

  // Mostrar la velocidad actual
  fill(255);
  textSize(32);
  text("Velocidad: " + speed, 10, 30);
}

// Función para detectar teclas de flechas
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    circleX -= speed;
  } else if (keyCode === RIGHT_ARROW) {
    circleX += speed;
  } else if (keyCode === UP_ARROW) {
    circleY -= speed;
  } else if (keyCode === DOWN_ARROW) {
    circleY += speed;
  }

  // Incrementar la velocidad
  speed += 0.5;

  // Cambiar de forma según la velocidad
  if (speed >= 25 && speed < 50) {
    currentShape = random(shapes.slice(1)); // Cambia a triángulo o cuadrado
  } else if (speed >= 50) {
    currentShape = random(shapes); // Cambia a círculo, triángulo o cuadrado
  }
}

// Función para detectar teclas (cambio de color)
function keyTyped() {
  if (key === "r" || key === "R") {
    circleColor = color(255, 0, 0); // Rojo
  } else if (key === "g" || key === "G") {
    circleColor = color(0, 255, 0); // Verde
  } else if (key === "b" || key === "B") {
    circleColor = color(0, 0, 255); // Azul
  } else if (key === "e" || key === "E") {
    circleColor = color(255); // Borra el círculo
  }
}
