const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})
searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});

  // Bar Chart
    const ctxBar = document.getElementById('barChart').getContext('2d');
    new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
          label: 'Expenses',
          data: [300, 350, 400, 530, 420, 390, 450, 470],
          backgroundColor: '#f9a825'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });

    // Pie Chart
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    new Chart(ctxPie, {
      type: 'doughnut',
      data: {
        labels: ['Protein', 'Grains', 'Fruits', 'Veggies', 'Dairy', 'Others'],
        datasets: [{
          data: [30, 25, 20, 15, 5, 5],
          backgroundColor: ['#66bb6a','#fbc02d','#ff7043','#29b6f6','#ab47bc','#8d6e63']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });