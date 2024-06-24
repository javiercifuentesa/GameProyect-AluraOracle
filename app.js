alert('!Bienvenido a tu 1er juego!');
maxNumberPossible = 10;
let numeroSecreto = Math.floor(Math.random() * maxNumberPossible) + 1;
let numeroUsuario=0;
let intentos=1;
let maxAttempts =3;

console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Ingresa un numero entre 1 y ${maxNumberPossible}, tienes hasta ${maxAttempts} intentos:`));
    console.log(numeroUsuario);
    
    if (numeroUsuario == numeroSecreto) {
        alert(`¡Felicidades, acertaste! 
El numero secreto es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos==1?'intento!, ¡eres un adivino!':'intentos.'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('el numero secreto es menor');
        } else {
            alert('el numero secreto es mayor');
        }
        intentos++;
        if (intentos > maxAttempts) {
            alert(`¡Lo siento, has superado el numero máximo de ${maxAttempts} intentos permitidos!`);
            document.getElementById('test').innerHTML = '<h1><span class="container__texto-azul">¡Incorrecto!</span></h1><h2>Lo siento, no descubriste el numero secreto.</h2>';
            break;
        }
    }
}