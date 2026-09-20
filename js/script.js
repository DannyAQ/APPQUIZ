const questions = [
  {
    question: '1. ¿Qué es el modelo Cliente-Servidor?',
    options: {
      A: 'Una arquitectura donde todos los dispositivos funcionan únicamente como servidores.',
      B: 'Una arquitectura donde los clientes solicitan servicios y los servidores proporcionan esos servicios.',
      C: 'Una red donde no existe comunicación entre dispositivos.',
      D: 'Un sistema donde solamente un cliente puede conectarse al servidor.'
    },
    answer: 'B'
  },
  {
    question: '2. ¿Cuál es el ciclo de comunicación del modelo Cliente-Servidor?',
    options: {
      A: 'Conexión → Descarga → Cierre',
      B: 'Petición → Procesamiento → Respuesta',
      C: 'Inicio → Transferencia → Eliminación',
      D: 'Solicitud → Almacenamiento → Reinicio'
    },
    answer: 'B'
  },
  {
    question: '3. ¿Qué es el escalado vertical?',
    options: {
      A: 'Agregar varios servidores para distribuir el tráfico.',
      B: 'Dividir un servidor en varios nodos independientes.',
      C: 'Mejorar un mismo servidor agregando más RAM, una mejor CPU o almacenamiento más rápido.',
      D: 'Reducir los recursos de un servidor para disminuir costos.'
    },
    answer: 'C'
  },
  {
    question: '4. ¿Qué es el escalado horizontal?',
    options: {
      A: 'Mejorar la CPU y RAM de un único servidor.',
      B: 'Agregar varios servidores y distribuir el tráfico mediante un balanceador de carga.',
      C: 'Reducir la cantidad de servidores de una red.',
      D: 'Aumentar únicamente el almacenamiento de un servidor.'
    },
    answer: 'B'
  },
  {
    question: '5. ¿Cuál es una desventaja del modelo Cliente-Servidor?',
    options: {
      A: 'No permite que los clientes soliciten servicios.',
      B: 'Siempre requiere varios servidores funcionando al mismo tiempo.',
      C: 'Puede existir un punto único de fallo: si el servidor falla, los clientes pueden quedar sin servicio.',
      D: 'No permite realizar procesamiento de información.'
    },
    answer: 'C'
  },
  {
    question: '6. ¿Qué es una red P2P?',
    options: {
      A: 'Una red donde existe un único servidor central.',
      B: 'Una red donde cada dispositivo puede actuar simultáneamente como cliente y servidor.',
      C: 'Una red donde los dispositivos únicamente reciben información.',
      D: 'Una red utilizada exclusivamente para servicios de correo.'
    },
    answer: 'B'
  },
  {
    question: '7. ¿Qué característica principal diferencia a P2P del modelo Cliente-Servidor?',
    options: {
      A: 'P2P depende completamente de un servidor central.',
      B: 'P2P utiliza únicamente un servidor para compartir archivos.',
      C: 'P2P es descentralizado, por lo que no depende de un servidor central para funcionar.',
      D: 'P2P no permite la comunicación entre dispositivos.'
    },
    answer: 'C'
  },
  {
    question: '8. ¿Qué es la fragmentación de archivos en P2P?',
    options: {
      A: 'Eliminar partes de un archivo antes de compartirlo.',
      B: 'Dividir archivos grandes en pequeñas piezas que pueden descargarse desde diferentes nodos.',
      C: 'Almacenar todos los archivos en un servidor central.',
      D: 'Comprimir un archivo para evitar que sea compartido.'
    },
    answer: 'B'
  },
  {
    question: '9. ¿Qué es el problema del Freerider o polizón?',
    options: {
      A: 'Ocurre cuando un usuario comparte demasiados archivos con la red.',
      B: 'Ocurre cuando un servidor central deja de funcionar.',
      C: 'Ocurre cuando usuarios descargan contenido pero no comparten archivos con la red.',
      D: 'Ocurre cuando los archivos se dividen en varias piezas.'
    },
    answer: 'C'
  },
  {
    question: '10. ¿En qué tecnología actual se utiliza la arquitectura P2P?',
    options: {
      A: 'Únicamente en redes de correo electrónico.',
      B: 'En tecnologías como Bitcoin y Blockchain, donde diferentes computadoras validan transacciones y mantienen copias del registro.',
      C: 'Exclusivamente en servidores de páginas web.',
      D: 'Solamente en redes locales empresariales.'
    },
    answer: 'B'
  },
  {
    question: '11. ¿Cómo se le llama a cada máquina individual que forma parte de un sistema distribuido?',
    options: {
      A: 'Servidor de origen',
      B: 'Nodo',
      C: 'Proxy',
      D: 'Cliente central'
    },
    answer: 'B'
  },
  {
    question: '12. ¿Qué característica permite ocultar la complejidad interna del sistema para que el usuario interactúe con él como si fuera uno solo?',
    options: {
      A: 'Concurrencia',
      B: 'Heterogeneidad',
      C: 'Unificación',
      D: 'Replicación'
    },
    answer: 'C'
  },
  {
    question: '13. ¿Qué proceso se utiliza para lograr la tolerancia a fallas almacenando copias de datos en múltiples nodos?',
    options: {
      A: 'Replicación',
      B: 'Sincronización',
      C: 'Interoperabilidad',
      D: 'Fragmentación'
    },
    answer: 'A'
  },
  {
    question: '14. ¿Qué característica permite gestionar un mayor número de usuarios simplemente incorporando más máquinas?',
    options: {
      A: 'Disponibilidad',
      B: 'Escalabilidad',
      C: 'Uso compartido de recursos',
      D: 'Heterogeneidad'
    },
    answer: 'B'
  },
  {
    question: '15. ¿Qué ejemplo de sistema distribuido permite que la señal de un dispositivo pase de una torre a otra sin que el usuario lo note?',
    options: {
      A: 'Redes de celulares',
      B: 'Redes de entregas de contenido (CDN)',
      C: 'Servicios de transmisión',
      D: 'Redes P2P'
    },
    answer: 'A'
  }
];

let tabSwitchCount = 0;
let quizStarted = false;
let lastExitTimestamp = 0;

const state = {
  studentName: '',
  currentIndex: 0,
  answers: Array(questions.length).fill(null)
};

const elements = {
  welcomeScreen: document.getElementById('welcomeScreen'),
  quizScreen: document.getElementById('quizScreen'),
  resultScreen: document.getElementById('resultScreen'),
  studentName: document.getElementById('studentName'),
  nameError: document.getElementById('nameError'),
  startBtn: document.getElementById('startBtn'),
  questionCounter: document.getElementById('questionCounter'),
  progressBar: document.getElementById('progressBar'),
  exitCounter: document.getElementById('exitCounter'),
  questionText: document.getElementById('questionText'),
  optionsList: document.getElementById('optionsList'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  resultName: document.getElementById('resultName'),
  resultCorrect: document.getElementById('resultCorrect'),
  resultIncorrect: document.getElementById('resultIncorrect'),
  resultDate: document.getElementById('resultDate'),
  resultScore: document.getElementById('resultScore'),
  resultStatus: document.getElementById('resultStatus'),
  resultExitCounter: document.getElementById('resultExitCounter'),
  downloadPdfBtn: document.getElementById('downloadPdfBtn'),
  downloadImageBtn: document.getElementById('downloadImageBtn'),
  retryBtn: document.getElementById('retryBtn')
};

function updateExitCounter() {
  const counterText = `Salidas de la página: ${tabSwitchCount}`;

  if (elements.exitCounter) {
    elements.exitCounter.textContent = counterText;
  }

  if (elements.resultExitCounter) {
    elements.resultExitCounter.textContent = counterText;
  }
}

function handlePageExit() {
  if (!quizStarted) {
    return;
  }

  const now = Date.now();
  if (now - lastExitTimestamp < 500) {
    return;
  }

  tabSwitchCount += 1;
  lastExitTimestamp = now;
  updateExitCounter();
}

function showScreen(screen) {
  elements.welcomeScreen.classList.remove('active');
  elements.quizScreen.classList.remove('active');
  elements.resultScreen.classList.remove('active');
  screen.classList.add('active');
}

function validateName() {
  const name = elements.studentName.value.trim();
  if (!name) {
    elements.nameError.textContent = 'Debes ingresar tu nombre antes de comenzar.';
    elements.studentName.focus();
    return false;
  }

  elements.nameError.textContent = '';
  return true;
}

function renderQuestion() {
  const currentQuestion = questions[state.currentIndex];
  const selectedAnswer = state.answers[state.currentIndex];
  const progress = ((state.currentIndex + 1) / questions.length) * 100;

  elements.questionCounter.textContent = `Pregunta ${state.currentIndex + 1} de ${questions.length}`;
  elements.progressBar.style.width = `${progress}%`;
  elements.questionText.textContent = currentQuestion.question;

  const optionsMarkup = Object.entries(currentQuestion.options)
    .map(([key, value]) => {
      const isSelected = selectedAnswer === key;
      return `
        <button
          class="option ${isSelected ? 'selected' : ''}"
          type="button"
          data-option="${key}"
          aria-pressed="${isSelected}"
        >
          <span class="letter">${key}</span>
          <span class="option-text">${value}</span>
        </button>
      `;
    })
    .join('');

  elements.optionsList.innerHTML = optionsMarkup;
  elements.prevBtn.disabled = state.currentIndex === 0;
  elements.prevBtn.style.opacity = state.currentIndex === 0 ? '0.55' : '1';

  const isLastQuestion = state.currentIndex === questions.length - 1;
  elements.nextBtn.textContent = isLastQuestion ? 'Finalizar quiz' : 'Siguiente';

  document.querySelectorAll('.option').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedOption = button.dataset.option;
      state.answers[state.currentIndex] = selectedOption;
      renderQuestion();
    });
  });
}

function calculateResult() {
  const correctAnswers = questions.reduce((count, question, index) => {
    return count + (state.answers[index] === question.answer ? 1 : 0);
  }, 0);

  const incorrectAnswers = questions.length - correctAnswers;
  const score = (correctAnswers / questions.length) * 5;
  const status = score >= 3 ? 'APROBADO' : 'NO APROBADO';

  return {
    correctAnswers,
    incorrectAnswers,
    score: Number(score.toFixed(1)),
    status
  };
}

function renderResult() {
  const { correctAnswers, incorrectAnswers, score, status } = calculateResult();
  const formattedDate = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  elements.resultName.textContent = state.studentName;
  elements.resultCorrect.textContent = `${correctAnswers} / ${questions.length}`;
  elements.resultIncorrect.textContent = `${incorrectAnswers}`;
  elements.resultDate.textContent = formattedDate;
  elements.resultScore.textContent = `${score.toFixed(1)} / 5.0`;
  elements.resultStatus.textContent = status;
  elements.resultStatus.classList.toggle('aprobado', status === 'APROBADO');
  elements.resultStatus.classList.toggle('no-aprobado', status === 'NO APROBADO');
  updateExitCounter();

  showScreen(elements.resultScreen);
}

function nextQuestion() {
  if (state.currentIndex < questions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
    return;
  }

  renderResult();
}

function previousQuestion() {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
}

function resetQuiz() {
  tabSwitchCount = 0;
  quizStarted = false;
  lastExitTimestamp = 0;
  state.studentName = '';
  state.currentIndex = 0;
  state.answers = Array(questions.length).fill(null);
  elements.studentName.value = '';
  elements.nameError.textContent = '';
  updateExitCounter();
  showScreen(elements.welcomeScreen);
}

function exportAsImage() {
  const resultCard = document.getElementById('resultCard');
  updateExitCounter();

  html2canvas(resultCard, {
    backgroundColor: '#091120',
    scale: 2,
    useCORS: true
  }).then((canvas) => {
    const link = document.createElement('a');
    link.download = `resultado-quiz-${state.studentName.replace(/\s+/g, '-').toLowerCase()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

function exportAsPdf() {
  const resultCard = document.getElementById('resultCard');
  updateExitCounter();

  html2canvas(resultCard, {
    backgroundColor: '#091120',
    scale: 2,
    useCORS: true
  }).then((canvas) => {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 12;
    const imgWidth = pageWidth - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, Math.min(imgHeight, pageHeight - margin * 2));
    pdf.save(`resultado-quiz-${state.studentName.replace(/\s+/g, '-').toLowerCase()}.pdf`);
  });
}

function startQuiz() {
  if (!validateName()) {
    return;
  }

  tabSwitchCount = 0;
  quizStarted = true;
  lastExitTimestamp = 0;
  state.studentName = elements.studentName.value.trim();
  state.currentIndex = 0;
  state.answers = Array(questions.length).fill(null);
  updateExitCounter();
  showScreen(elements.quizScreen);
  renderQuestion();
}

function attachEvents() {
  elements.startBtn.addEventListener('click', startQuiz);
  elements.studentName.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      startQuiz();
    }
  });

  elements.prevBtn.addEventListener('click', previousQuestion);
  elements.nextBtn.addEventListener('click', nextQuestion);
  elements.downloadPdfBtn.addEventListener('click', exportAsPdf);
  elements.downloadImageBtn.addEventListener('click', exportAsImage);
  elements.retryBtn.addEventListener('click', resetQuiz);
}

document.addEventListener('visibilitychange', () => {
  if (quizStarted && document.visibilityState === 'hidden') {
    handlePageExit();
  }
});

window.addEventListener('blur', () => {
  if (quizStarted) {
    handlePageExit();
  }
});

window.addEventListener('focus', () => {
  lastExitTimestamp = 0;
});

attachEvents();
updateExitCounter();
showScreen(elements.welcomeScreen);
