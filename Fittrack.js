const sidebar = document.getElementById('sidebar');

// expande quando entra com o mouse
sidebar.addEventListener('mouseenter', () => {
  sidebar.classList.add('expanded');
});

// recolhe quando sai com o mouse
sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.remove('expanded');
});