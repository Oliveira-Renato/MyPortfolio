export function toggleMenu(){
  const menuToggle = document.querySelector('.toggle');
  const sidebar = document.querySelector('.sidebar');

  menuToggle.classList.toggle('active')
  sidebar.classList.toggle('active')

}