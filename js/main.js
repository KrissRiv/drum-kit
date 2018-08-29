const elemen = document.getElementById('drum');

elemen.onkeypress = (event) => {
    const audio = document.querySelector(`audio[name="${event.code}"`); //Take from video tuto
    if(audio) {
        let key = document.getElementById(event.code);
        key.classList.add('key-active');
        if (!audio) return; //Take from video tuto
        audio.currentTime = 0; //Take from video tuto
        /* audio.play().then(()=>{
            audio.addEventListener('ended', () => {
                key.classList.remove('key-active');
            })
        }); */ 
        audio.play();
    }
}

// This function take from tuto
const removeClass = (event) => {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('key-active'); // Change to my context
    // this.classList.remove('key-active'); // Not function
}

// Take from tuto
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeClass));
