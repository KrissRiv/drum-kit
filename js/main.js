const elemen = document.getElementById('drum');

elemen.onkeypress = (event) => {
    const audio = document.getElementsByName(event.code);
    if(audio) {
        let key = document.getElementById(event.code);
        key.classList.add('key-active');
        audio[0].play().then(()=>{
            audio[0].addEventListener('ended', () => {
                key.classList.remove('key-active');
            })
        });
    }
}
