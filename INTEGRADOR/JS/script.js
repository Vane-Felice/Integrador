window.addEventListener('load', function() {
  const logo = document.getElementById('logo');
  const h1 = document.querySelector('h1');

  // Animación del logo
  logo.style.opacity = '0';
  logo.style.transform = 'translateY(-20px)';
  logo.style.transition = 'opacity 1s, transform 1s';
  setTimeout(function() {
    logo.style.opacity = '1';
    logo.style.transform = 'translateY(0)';
  }, 500);

  // Animación del h1
  h1.style.opacity = '0';
  h1.style.transform = 'translateY(-20px)';
  h1.style.transition = 'opacity 1s, transform 1s';
  setTimeout(function() {
    h1.style.opacity = '1';
    h1.style.transform = 'translateY(0)';
  }, 1000);
});



function animation() {
  let textoAnimacion = [
      ["l", "a", " ", "N", "a", "t", "u", "r", "a", "l", "e", "z", "a","!"],
      ["l", "o", "s", " ", "I", "n", "s", "e", "c", "t", "o", "s","!"],
      ["l", "a", "s", " ", "P", "l", "a", "n", "t", "a", "s","!"],
      ["l", "a", " ", "V", "i", "d", "a","!"]
  ];

  let letraContador = -1;
  let nivelArray = 0;

  const contenedorAnimacion = document.querySelector(".contenedor__texto__animacion");

  function pintarTexto() {
      letraContador++;
      contenedorAnimacion.textContent += textoAnimacion[nivelArray][letraContador];

      if (letraContador === textoAnimacion[nivelArray].length - 1) {
          clearInterval(intervalo);

          setTimeout(() => {

              intervalo = setInterval(() => {
                  contenedorAnimacion.textContent = "";
                  letraContador--;
                  textoAnimacion[nivelArray].pop();

                  textoAnimacion[nivelArray].forEach((elemento) => {
                      contenedorAnimacion.textContent += elemento;
                  });

                  if (letraContador < 0) {
                      clearInterval(intervalo);
                      nivelArray++;
                      intervalo = setInterval(pintarTexto, 150);

                      if (nivelArray > textoAnimacion.length - 1) {
                          clearInterval(intervalo);
                          nivelArray = 0;
                          animation();
                      }
                  }

              }, 150);
          }, 1000);
      }
  }
  let intervalo = setInterval(pintarTexto, 25);
}
window.addEventListener("load", animation);