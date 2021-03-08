const theme = document.querySelector(':root');
const btn = document.querySelectorAll('.btn');

btn.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const color = e.currentTarget.classList;

    if (color.contains('btn1')) {
      theme.style.setProperty('--theme-color', '#ffa822');
    }
    else if(color.contains('btn2')) {
      theme.style.setProperty('--theme-color', '#134e6f');
    }
    else if(color.contains('btn3')) {
      theme.style.setProperty('--theme-color', '#ff6150');
    }
    else if(color.contains('btn4')) {
      theme.style.setProperty('--theme-color', '#309975');
    }
    else {
      theme.style.setProperty('--theme-color', '#1ac0c6');
    }

  });
});