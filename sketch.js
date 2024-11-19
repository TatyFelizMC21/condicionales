let mood = ""; // Variable para almacenar el estado de ánimo
let buttons = []; // Arreglo para los botones

function setup() {
  createCanvas(windowWidth, windowHeight); // Ocupa toda la pantalla
  textAlign(CENTER, CENTER);
  textSize(20);

  // Botones para las emociones
  createButtons();
  drawInstructions();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  positionButtons();
}

function createButtons() {
  buttons.push(
    createButton("😄 Feliz").mousePressed(() => changeMood("happy"))
  );
  buttons.push(createButton("😢 Triste").mousePressed(() => changeMood("sad")));
  buttons.push(
    createButton("😡 Enojado").mousePressed(() => changeMood("angry"))
  );
  buttons.push(
    createButton("😌 Relajado").mousePressed(() => changeMood("relaxed"))
  );

  // Estilo de los botones
  buttons.forEach((btn) => {
    btn.style("padding", "12px 25px");
    btn.style("font-size", "18px");
    btn.style("font-family", "Arial, sans-serif");
    btn.style("border-radius", "30px");
    btn.style("border", "2px solid #fff");
    btn.style("cursor", "pointer");
    btn.style("background-color", "#3b3b3b");
    btn.style("color", "#fff");
    btn.mouseOver(() => btn.style("background-color", "#646464"));
    btn.mouseOut(() => btn.style("background-color", "#3b3b3b"));
  });

  positionButtons();
}

function positionButtons() {
  // Posicionar botones en la parte inferior de la pantalla
  const buttonY = height - 100;
  const spacing = width / 5; // Espacio entre botones

  buttons.forEach((btn, index) => {
    btn.position(spacing * (index + 1) - btn.width / 2, buttonY);
  });
}

function drawInstructions() {
  background("#1c1c1c"); // Fondo oscuro
  fill("#fff");
  textSize(32);
  textFont("Trebuchet MS");
  text("🎮 MOOD SELECTOR 🎮", width / 2, 50); // Título del juego
  textSize(20);
  textFont("Arial");
  text(
    "Haz clic en un botón o presiona: A (Feliz), S (Triste), D (Enojado), F (Relajado)",
    width / 2,
    100
  ); // Instrucciones
}

function draw() {
  // Mantener las instrucciones visibles todo el tiempo
  drawInstructions();

  // Cambiar el diseño según el estado de ánimo seleccionado
  if (mood === "happy") {
    drawMood("¡Feliz!", [255, 223, 0], "smile");
  } else if (mood === "sad") {
    drawMood("Triste", [100, 150, 255], "sad");
  } else if (mood === "angry") {
    drawMood("¡Enojado!", [255, 100, 100], "angry");
  } else if (mood === "relaxed") {
    drawMood("Relajado", [100, 255, 150], "relaxed");
  }
}

function keyPressed() {
  if (key === "A" || key === "a") {
    mood = "happy";
  } else if (key === "S" || key === "s") {
    mood = "sad";
  } else if (key === "D" || key === "d") {
    mood = "angry";
  } else if (key === "F" || key === "f") {
    mood = "relaxed";
  }
}

function changeMood(newMood) {
  mood = newMood;
}

function drawMood(title, bgColor, expression) {
  // Fondo de color correspondiente
  background(bgColor[0], bgColor[1], bgColor[2]);

  // Mostrar el título de la emoción con tipografía moderna
  fill("#1c1c1c");
  textSize(50);
  textFont("Verdana");
  text(title, width / 2, height / 2 + 200);

  // Dibujar la cara según la emoción
  drawFace(expression);
}

function drawFace(expression) {
  fill(255);
  ellipse(width / 2, height / 2, 200, 200); // Cara

  // Ojos
  fill(0);
  ellipse(width / 2 - 50, height / 2 - 40, 20, 20); // Ojo izquierdo
  ellipse(width / 2 + 50, height / 2 - 40, 20, 20); // Ojo derecho

  // Boca y detalles según la expresión
  noFill();
  stroke(0);
  strokeWeight(4);

  if (expression === "smile") {
    arc(width / 2, height / 2 + 40, 120, 60, 0, PI); // Sonrisa
  } else if (expression === "sad") {
    arc(width / 2, height / 2 + 70, 120, 60, PI, 0); // Boca triste
  } else if (expression === "angry") {
    line(width / 2 - 50, height / 2 - 60, width / 2 - 20, height / 2 - 40); // Ceja izq
    line(width / 2 + 50, height / 2 - 60, width / 2 + 20, height / 2 - 40); // Ceja der
    line(width / 2 - 40, height / 2 + 40, width / 2 + 40, height / 2 + 40); // Boca seria
  } else if (expression === "relaxed") {
    arc(width / 2, height / 2 + 40, 120, 60, 0, PI); // Sonrisa leve
    arc(width / 2 - 50, height / 2 - 40, 30, 15, PI, 0); // Ojo izq relajado
    arc(width / 2 + 50, height / 2 - 40, 30, 15, PI, 0); // Ojo der relajado
  }
}
