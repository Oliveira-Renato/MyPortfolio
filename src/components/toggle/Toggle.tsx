export function toggleMenu(){
  const menuToggle: any = document.querySelector('.toggle');
  const sidebar: any = document.querySelector('.sidebar');

  menuToggle.classList.toggle('active');
  sidebar.classList.toggle('active');

}