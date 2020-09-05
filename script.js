const toggle = document.getElementById('toggle');
const slide = document.getElementById('slide');

toggle.addEventListener('change', e => {
    slide.classList.toggle('show-monthly');
});
