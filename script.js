window.onload=function(){
    const saklar = document.getElementById('saklar');
    const cahaya = document.getElementById('cahaya');

    saklar.addEventListener('click', function(){
        if(cahaya.classList.contains('off')){
            cahaya.classList.replace('off','on');
            saklar.innerHTML = 'Turn Off';
        }
        else if(cahaya.classList.contains('on')){
            cahaya.classList.replace('on','off');
            saklar.innerHTML = 'Turn on';
        }
    });
}