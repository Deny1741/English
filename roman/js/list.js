import { voice } from "./voice.js";

export const createList = (listRus, listEng) => {
    for (let i = 0; i < listRus.length; i++) {
        $('#rus').append('<li>' + listRus[i] + '</li>');
        $('#eng').append('<li id="item">' + listEng[i] + '</li>');
        $('#item').prop('id', i.toString());
    }
};

