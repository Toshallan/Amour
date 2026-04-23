const btnNon = document.getElementById('btn-non');
const btnOui = document.getElementById('btn-oui');
const question = document.getElementById('question');

let fontSizeOui = 18;

// Fonction pour déplacer le bouton "Non"
btnNon.addEventListener('mouseover', () => {
    // Calcul de positions aléatoires dans la fenêtre
    const x = Math.random() * (window.innerWidth - btnNon.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNon.offsetHeight);
    
    btnNon.style.left = `${x}px`;
    btnNon.style.top = `${y}px`;

    // Agrandir le bouton "Oui" à chaque tentative sur "Non"
    fontSizeOui += 10;
    btnOui.style.fontSize = `${fontSizeOui}px`;
    btnOui.style.padding = `${fontSizeOui / 1.2}px ${fontSizeOui * 1.5}px`;
});

// Action quand elle finit par cliquer sur "Oui"
btnOui.addEventListener('click', () => {
    question.innerHTML = "Je le savais !❤️";
    document.querySelector('.buttons').style.display = 'none';
});