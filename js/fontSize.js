document.getElementById('number').addEventListener('change', function(event){
    const text = document.getElementById('textInput');

    text.style.fontSize = event.target.value + 'px';
    
})