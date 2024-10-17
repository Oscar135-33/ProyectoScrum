function verificar() {
    const inputs = document.querySelectorAll('#crucigrama input');
    inputs.forEach(input => {
      const letraCorrecta = input.dataset.letter;
      if (input.value.toUpperCase() === letraCorrecta) {
        input.style.backgroundColor = "lightgreen"; // Correcto
      } else {
        input.style.backgroundColor = "lightcoral"; // Incorrecto
      }
    });
  }

  function redirigirinicio() {
    window.location = "index.html";
  }