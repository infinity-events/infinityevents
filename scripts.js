// NAVBAR
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Close the menu on mobile after clicking a link
        if (window.innerWidth <= 768) {
          document.getElementById('menu').style.display = 'none';
          document.getElementById('menu-icon').classList.remove('change');
          document.getElementById('bar1').classList.remove('change');
          document.getElementById('bar2').classList.remove('change');
          document.getElementById('bar3').classList.remove('change');
        }
    });
});


//COUNTDOWN
// Set the date for the festival
const festivalDate = new Date("October 12, 2024 10:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
  const now = new Date().getTime();
  const timeLeft = festivalDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById("startEvent").style.display = "none";
    document.getElementById("postTimer").style.display = "block";
  }
}, 1000);


// HEADER
const header = document.querySelector("[data-header]");

window.addEventListener('scroll', function() {
  if (window.innerWidth > 768) { // verifica se è un dispositivo con schermo più largo di 768px
      if (window.scrollY > 150) {
          document.querySelector('header').classList.add('active');
      } else {
          document.querySelector('header').classList.remove('active');
      }
  }
});


document.getElementById('menu-icon').addEventListener('click', function() {
  this.classList.toggle('change');
  const menu = document.getElementById('menu');
  const bar1 = document.getElementById('bar1');
  const bar2 = document.getElementById('bar2');
  const bar3 = document.getElementById('bar3');
  bar1.classList.toggle('change');
  bar2.classList.toggle('change');
  bar3.classList.toggle('change');
  if (menu.style.display === 'block') {
      menu.style.display = 'none';
  } else {
      menu.style.display = 'block';
  }
  menu.style.animation = 'fadeInOut 0.5s ease-in-out';
});


// FAQ section toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const span = item.querySelector('span');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            span.style.transform = 'rotate(0deg)';
        } else {
            answer.style.display = 'block';
            span.style.transform = 'rotate(180deg)';
        }

        answer.style.animation = 'fadeInOut 0.5s ease-in-out';
    });
});

// Responsive table for the schedule section
const table = document.querySelector('table');
const tableWrapper = document.createElement('div');
tableWrapper.classList.add('table-wrapper');
table.parentNode.insertBefore(tableWrapper, table);
tableWrapper.appendChild(table);

// Adjust FAQ answer display on page load
document.addEventListener('DOMContentLoaded', () => {
    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');
        answer.style.display = 'none';
    });
});
