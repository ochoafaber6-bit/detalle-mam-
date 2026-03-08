const btn = document.getElementById('action-btn');
const msgDisplay = document.getElementById('message');
const music = document.getElementById('bg-music');

const frases = [
    "Mamá, gracias por tu amor infinito. 🌹❤️",
    "Mamá, tu amor refleja el amor de Dios en mi vida. ✨🙏",
    "Eres el corazón de nuestra familia. 💖🌷",
    "Gracias por enseñarme el camino del bien y de la fe. 📖🙌",
    "Mamá, tu abrazo siempre es mi lugar favorito. 🤗🌸",
    "Mamá, eres una bendición enviada por Dios. 👼💝",
    "Eres la persona más importante de mi vida. 👑❣️",
    "Tu amor paciente me recuerda el amor de Dios. 🕊️🌺",
    "Tu amor es mi mayor bendición. 🌻🌈",
    "Dios te puso en mi vida para guiarme y cuidarme. 🛡️✨",
    "Mamá, eres mi guía y mi luz. 🕯️💖",
    "Tu fe es una inspiración para mi vida. 🌟🙏",
    "Tu amor me acompaña a donde vaya. 🌍💓",
    "Mamá, tu corazón está lleno de bondad y de fe. ❤️🍃",
    "Eres la mejor mamá del mundo. 🏆🌹",
    "Gracias por enseñarme a confiar en Dios. 🙌💖",
    "Tu cariño es el tesoro más grande que tengo. 💎🌸",
    "Tu amor es un reflejo de la gracia de Dios. ⛪✨",
    "Mamá, gracias por nunca rendirte conmigo. 💪💗",
    "Dios bendiga siempre tu vida, mamá. 🌹🙏",
    "Tu amor es eterno e incondicional. ♾️❤️",
    "Gracias por orar siempre por mí. 🤲📿",
    "Mamá, siempre serás mi mayor orgullo. 💖👩‍👦",
    "Mamá, tu fe fortalece a toda nuestra familia. 🛡️🏠",
    "Mamá, gracias por ser una mujer de fe y amor. ✨🌻",
    "FELIZ DIA DE LA MUJER 💐✨"
];

let indice = 0;

btn.addEventListener('click', () => {
    // Reproducir Prince Royce
    music.play().catch(e => console.log("Audio activado tras clic"));

    msgDisplay.style.opacity = 0;
    msgDisplay.style.transform = "translateY(10px)";
    
    setTimeout(() => {
        msgDisplay.innerText = frases[indice];
        
        // Estilo especial para el cierre
        if (frases[indice] === "FELIZ DIA DE LA MUJER 💐✨") {
            msgDisplay.style.color = "#ffeb3b"; // Dorado
            msgDisplay.style.fontWeight = "bold";
            msgDisplay.style.fontSize = "1.8rem";
        } else {
            msgDisplay.style.color = "white";
            msgDisplay.style.fontWeight = "normal";
            msgDisplay.style.fontSize = "1.3rem";
        }

        msgDisplay.style.opacity = 1;
        msgDisplay.style.transform = "translateY(0)";
        
        indice++;
        
        if (indice >= frases.length) {
            btn.innerText = "Reiniciar Detalle";
            indice = 0;
        } else {
            btn.innerText = "Siguiente Frase";
        }
    }, 500);
});