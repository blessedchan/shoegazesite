document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-mode");
  const body = document.body;

  if (!toggleButton) return;

  // Função para atualizar o texto do botão
  function updateButtonText() {
    if (body.classList.contains("dark-mode")) {
      toggleButton.textContent = "☀️ Modo Claro";
    } else {
      toggleButton.textContent = "🌙 Modo Escuro";
    }
  }

  // Recupera tema salvo (se existir)
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }
  updateButtonText();

  // Alterna o tema ao clicar
  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Salva a preferência
    const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);

    updateButtonText();
  });
});
