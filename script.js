const scrollTopBtn = document.getElementById("scrollTopBtn");


scrollTopBtn.addEventListener("click", function() {

    scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



    const g = document.getElementById('greeting');
    const btn = document.getElementById('askName');

    function showGreeting(name) {
      g.textContent = name
        ? `Привет, ${name}!`
        : 'Добро пожаловать!';
    }

    function askName() {
      const name = prompt('Как тебя зовут?');
      if (name) {
        localStorage.setItem('visitorName', name);
      } else {
        localStorage.removeItem('visitorName');
      }
      showGreeting(localStorage.getItem('visitorName'));
    }

    btn.addEventListener('click', askName);

    showGreeting(localStorage.getItem('visitorName'));