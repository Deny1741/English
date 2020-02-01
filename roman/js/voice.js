export const voice = (text) => {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-En';
    window.speechSynthesis.speak(speech);
};

$('#eng').click((e) => {
    let $targetId = $(`#${e.target.id}`);
    console.log($targetId.text());
    if ($('#sound-on').is(':visible')) {
        voice($targetId.text());
    }
});

$('#sound-off').click(() => {
    $('#sound-off').hide();
    $('#sound-on').show();
});

$('#sound-on').click(() => {
    $('#sound-off').show();
    $('#sound-on').hide();
});