function baixarCurriculo() {
    const link = document.createElement('a');
    link.href = 'curriculoJuan.pdf';
    link.download = 'curriculoJuan.pdf';
    link.click();
}
