import { wordsRus1, wordsEng1, wordsRus2, wordsEng2, wordsRus3, wordsEng3, wordsRus4, wordsEng4 } from "./words.js";
import { createList } from "./list.js";
import { voice } from "./voice.js";

window.onload = () => {
    if (!location.href.includes('#')) {
        createList(arrWordsRus[0], arrWordsEng[0]);
        $('#h1').text(`Количество слов: ${arrWordsRus[0].length}`);
        $('#day-1').parent().addClass('active');
        loadWordsList('day-1');
    }

    arrDays.forEach((item, i) => {
        if (location.href.includes(item)) {
            $('#rus').html("");
            $('#eng').html("");
            createList(arrWordsRus[i], arrWordsEng[i]);
            $('#h1').text(`Количество слов: ${arrWordsRus[0].length}`);
            $('.nav-item').removeClass('active');
            $(`#${item}`).parent().addClass('active');
        }
    });

    window.scrollBy(0, -90);
};

let arrWordsRus = [wordsRus1, wordsRus2, wordsRus3, wordsRus4];
let arrWordsEng = [wordsEng1, wordsEng2, wordsEng3, wordsEng4];
let dayCount = 7; // общее количество дней
let arrDays = [];

for (let i = 1; i <= dayCount; i++) {
    arrDays.push(('day-' + i).toString());
}

let $nav = $('#nav');

$('#nav-practice').append('<li class="nav-item width100"><a href="./practice.html" class="nav-link" >Практика</a></li>');

for (let i = 1; i <= 7; i++) {
    $nav.append(`<li class="nav-item" ><a class="nav-link" href="#day-${i}" id="day-${i}">День ${i}</a></li>`);
    if (i > 1) $(`#day-${i}`).parent().addClass('not-ready'); // количество готовых занятий
}

$nav.append('  <li>\n' +
    '            <img id="sound-off" height="30" src="./images/sound-off.png" alt="">\n' +
    '            <img id="sound-on" style="display: none" height="30" src="./images/sound-on.png" alt="">\n' +
    '        </li>');

$nav.click((e) => loadWordsList(e));

const loadWordsList = (e) => {
    arrDays.forEach((item, i) => {
        if (item === e.target.id) {
            $('#rus').html("");
            $('#eng').html("");
            createList(arrWordsRus[i], arrWordsEng[i]);
            $('#h1').text(`Количество слов: ${arrWordsRus[i].length}`);
            $('.nav-item').removeClass('active');
            $(`#${item}`).parent().addClass('active');
        }
    });
};

$('#sound-off').click(() => {
    $('#sound-off').hide();
    $('#sound-on').show();
});

$('#sound-on').click(() => {
    $('#sound-off').show();
    $('#sound-on').hide();
});

$('a[href^="#"]').on('click', function() {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top - 90
    });
});