
document.getElementById('color').addEventListener('change', function(event){
    const text = document.getElementById('textInput');
    text.style.color = event.target.value;
})