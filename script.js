function baixarCurriculo() {
    const link = document.createElement('a');
    link.href = 'curriculoJuan.pdf';
    link.download = 'curriculoJuan.pdf';
    link.click();
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)';
});

