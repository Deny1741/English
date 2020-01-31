export const voice = (text) => {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-En';
    window.speechSynthesis.speak(speech);
};

document.getElementById('eng').onclick = (e) => {
    console.log(document.getElementById(e.target.id).innerText);
    //  window.speechSynthesis.speak(document.getElementById(e.target.id).innerText);
    if (document.getElementById('sound-on').style.display === 'block') {
        voice(document.getElementById(e.target.id).innerText);
    }
};

document.getElementById('sound-off').onclick = () => {
    document.getElementById('sound-off').style.display = 'none';
    document.getElementById('sound-on').style.display = 'block';
};
document.getElementById('sound-on').onclick = () => {
    document.getElementById('sound-off').style.display = 'block';
    document.getElementById('sound-on').style.display = 'none';
};