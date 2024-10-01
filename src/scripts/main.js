import '../assets/styles/styles.css';
import javascriptLogo from '../../javascript.svg';
import viteLogo from '/vite.svg'
import { setupCounter } from '../../counter.js'

document.querySelector(".login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Login realizado com sucesso!");
});

