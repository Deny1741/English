export let soundOff = 'sound-off';
export let soundOn = 'sound-on';

export const voice = (text) => {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-En';
    window.speechSynthesis.speak(speech);
};

$('#eng').click((e) => {
    console.log(document.getElementById(e.target.id).innerText);
    if (document.getElementById(soundOn).style.display === 'block') {
        voice(document.getElementById(e.target.id).innerText);
    }
});

document.getElementById(soundOff).onclick = () => {
    document.getElementById(soundOff).style.display = 'none';
    document.getElementById(soundOn).style.display = 'block';
};
document.getElementById(soundOn).onclick = () => {
    document.getElementById(soundOff).style.display = 'block';
    document.getElementById(soundOn).style.display = 'none';
};