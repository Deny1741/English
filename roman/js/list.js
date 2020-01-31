import { voice } from "./voice.js";

export const createList = (listRus, listEng) => {
    for (let i = 0; i < listRus.length; i++) {
        document.getElementById('rus').innerHTML += '<li>' + listRus[i] + '</li>';
        document.getElementById('eng').innerHTML += '<li id="item">' + listEng[i] + '</li>';
        document.getElementById('item').id = i.toString();
    }
};

