const hartButtons = document.querySelectorAll('#btn-heart');
for (let i = 0; i < hartButtons.length; i++) {
  hartButtons[i].addEventListener('click', function() {
    const hartCounter = document.getElementById('heart-number');
    hartCounter.innerText = parseInt(hartCounter.innerText) + 1;
  });
}

const copyButton = document.querySelectorAll('#btn-copy');
for(let i = 0; i<copyButton.length; i++){
    copyButton[i].addEventListener('click', function(){
        const copyCount = document.getElementById('copy-num');
        copyCount.innerText = parseInt(copyCount.innerText) + 1;
        const cart = this.closest('#card');
        const numberText = cart.querySelector('#number').innerText.trim();
        navigator.clipboard.writeText(numberText).then(()=>{
            console.log('Copied: ' + numberText);
        })

    })
}



