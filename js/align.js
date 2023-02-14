
document.getElementById('align-left').addEventListener('click', function(){
    textAlignFunction ('textInput', 'left');

    // const target = document.getElementById('textInput');

    // target.style.textAlign = 'left';
})
document.getElementById('align-center').addEventListener('click', function(event){
    
    textAlignFunction ('textInput', 'center');
    event.target.classList.add('bg-lime-500');
  
    // const target = document.getElementById('textInput');
    // target.style.textAlign = 'center';
})
document.getElementById('align-right').addEventListener('click', function(){
    
    textAlignFunction ('textInput', 'right');
    // const target = document.getElementById('textInput');
    // target.style.textAlign = 'right';
    
})
document.getElementById('align-justify').addEventListener('click', function(){
    
    textAlignFunction ('textInput', 'justify');
    // const target = document.getElementById('textInput');
    // target.style.textAlign = 'justify';
})