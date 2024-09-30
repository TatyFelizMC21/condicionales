let circleColor;
let circleX, circleY;
let speed = 80; // Velocidad del círculo

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  circleColor = color(255); // Color inicial blanco
  circleX = width / 2; // Posición inicial en el centro
  circleY = height / 2;
}

function draw() {
  background(0); // Para que se borre el fondo en cada frame
  fill(circleColor);
  noStroke();
  ellipse(circleX, circleY, 200, 200); // Círculo
}

// Función para detectar teclas presionadas
function keyTyped() {
  // Cambia el color según la tecla presionada
  if (key === "r" || key === "R") {
    circleColor = color(255, 0, 0); // Rojo
  } else if (key === "g" || key === "G") {
    circleColor = color(0, 255, 0); // Verde
  } else if (key === "b" || key === "B") {
    circleColor = color(0, 0, 255); // Azul
  } else if (key === "e" || key === "E") {
    circleColor = color(0); // Borra el círculo
  }
}

// Función para mover el círculo con las flechas del teclado
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    circleX -= speed; // Mueve a la izquierda
  } else if (keyCode === RIGHT_ARROW) {
    circleX += speed; // Mueve a la derecha
  } else if (keyCode === UP_ARROW) {
    circleY -= speed; // Mueve hacia arriba
  } else if (keyCode === DOWN_ARROW) {
    circleY += speed; // Mueve hacia abajo
  }
}
