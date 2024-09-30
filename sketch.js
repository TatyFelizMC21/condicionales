let circleColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  circleColor = color(255); // Color inicial blanco
}

function draw() {
  background(0); // Para que se borre el fondo en cada frame
  fill(circleColor);
  noStroke();
  ellipse(width / 2, height / 2, 200, 200); // Dibuja el círculo
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
