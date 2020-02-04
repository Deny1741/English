import { wordsRus1, wordsEng1, wordsRus2, wordsEng2, wordsRus3, wordsEng3, wordsRus4, wordsEng4 } from "./words.js";

let wordsRus = [];
let wordsEng = [];

let wordIndex = '';
let counter = '';

window.onload = () => {
    $('#word').text("Нажмите 'Загадать'");
    $('#day1').prop('checked', true);
    $('#day2').prop('checked', true);
    $('#day3').prop('checked', true);
    $('#day4').prop('checked', true);

    wordsRus = [...wordsRus, ...wordsRus1, ...wordsRus2, ...wordsRus3, ...wordsRus4];
    wordsEng = [...wordsEng, ...wordsEng1, ...wordsEng2, ...wordsEng3, ...wordsEng4];

    $('#rightCounter').text("Осталось: " + wordsRus.length);
};

const start = () => {
    $('#input').val("").focus();

    wordIndex = Math.floor(Math.random()*wordsRus.length);

    $('#word').text(wordsRus[wordIndex]);

  //  console.log(wordsEng[wordIndex]);
    console.log('ENG: ' + wordsEng.length);
    console.log('RUS: ' + wordsRus.length);

};

const check = () => {
    let $input = $('#input');

    if ($input.val().toLowerCase().replace(/\s+/g,'') === wordsEng[wordIndex].replace(/\s+/g,'')) {
        $('#word').text("ВЕРНО!");
        $input.val("");
        counter++;

        //  $input.blur();

        wordsRus.splice(wordIndex, 1);
        wordsEng.splice(wordIndex, 1);

        $('#rightCounter').text("Осталось: " + wordsRus.length);
        console.log(wordsRus.length);
        if (wordsRus.length !== 0) setTimeout(start, 1000);
    }

    if (wordsRus.length === 0) {
        $('#word').text('ПОЗДРАВЛЯЕМ!!');
        $input.prop('disabled', true);
        $('#answer').prop('disabled', true);
        $('#start').prop('disabled', true);

        $('#day1').prop('checked', false);
        $('#day2').prop('checked', false);
        $('#day3').prop('checked', false);
        $('#day4').prop('checked', false);
    }
    $input.focus();
};

$('#start').click(() => start());
$('#input').change(() => check());
$('#answer').click(() => check());

const useWords = (e) => {
    let arrDays = [];
    for (let i = 1; i <=7; i++) {
        arrDays.push('day' + i)
    }
    let arrWordsRus = [wordsRus1, wordsRus2, wordsRus3, wordsRus4];
    let arrWordsEng = [wordsEng1, wordsEng2, wordsEng3, wordsEng4];

    let $targetId = $(`#${e.target.id}`);

    if ($targetId.prop('checked') === true) {
        for (let i = 0; i < arrDays.length; i++) {
            if (e.target.id === arrDays[i]) {
                wordsRus = [...wordsRus, ...arrWordsRus[i]];
                wordsEng = [...wordsEng, ...arrWordsEng[i]];
            }
        }
    }

    if ($targetId.prop('checked') === false) {
        for (let i = 0; i < arrDays.length; i++) {
            if (e.target.id === arrDays[i]) {
                for (let j = 0; j < arrWordsRus[i].length; j++) {
                    wordsRus = wordsRus.filter(item => item !== arrWordsRus[i][j]);
                    wordsEng = wordsEng.filter(item => item !== arrWordsEng[i][j]);
                }
            }
        }
    }

    $('#rightCounter').text("Осталось: " + wordsRus.length);
    $('#input').prop('disabled', false);
    $('#answer').prop('disabled', false);
    $('#start').prop('disabled', false);
};

for (let i = 1; i <= 7; i++) {
    $('#nav').append(` <li>
        <div class="nav-item" id="day-${i}"><a href="day.html#day-${i}"   class="nav-link" >День ${i}</a></div>
        <div class="checkBox"><input class="option-input" type="checkbox" id="day${i}" value="${i}"/></div>
    </li>`);
    let $dayCircle = $(`#${'day' + i}`);
    $dayCircle.click((e) => useWords(e));

    if (i > 4) {
        $dayCircle.css('background', '#cccccc').css('pointer-events', 'none');
        $(`#${'day-' + i}`).css('background', '#cccccc').css('pointer-events', 'none');
    }
}