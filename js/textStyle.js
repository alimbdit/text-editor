document.getElementById('italic').addEventListener('click', function(event){
    // const text = getTextFromInput ('textInput');
    const target = document.getElementById('textInput');
    // document.getElementById('textInput').style.fontStyle = "italic";

    if(target.style.fontStyle !== 'italic'){
        target.style.fontStyle = "italic";
        event.target.classList.add('bg-lime-500');
    }
    else{
        target.style.fontStyle = "normal";
        event.target.classList.remove('bg-lime-500');
    }
})



document.getElementById('bold').addEventListener('click', function(event){
    // const target = document.getElementById('textInput');
    const target = document.getElementById('textInput');
    
    if(target.style.fontWeight !== 'bolder'){

        target.style.fontWeight = "bolder";
        event.target.classList.add('bg-lime-500');
    }
    else{
        target.style.fontWeight = 'normal';
        event.target.classList.remove('bg-lime-500');
    }
})

document.getElementById('underline').addEventListener('click', function(event){
    const target = document.getElementById('textInput');
    if(target.style.textDecoration !== 'underline'){
        target.style.textDecoration = "underline";
        event.target.classList.add('bg-lime-500');
    }
    else{
        target.style.textDecoration = 'none';
        event.target.classList.remove('bg-lime-500');
    }
})