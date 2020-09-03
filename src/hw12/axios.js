import * as axios from 'axios';
require("regenerator-runtime/runtime");

let instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

let charArr = [];
window.charArr = charArr;

export const getPlanets = (page = 2) => {
  return instance.get(`planets/?page=${page}`).then((response) => response.data);
};

const getList = (num = 4) => {
  return instance.get(`films/${num}/`).then((response) => response.data.characters);
};

const getCharactersInfo = (charLink) => {
  return axios.get(`${charLink}`).then((response) => response.data);
};

export const getCharacters = async (num) => {
  let temp = await getList(num);
  let result = Promise.all(temp.map((link) => getCharactersInfo(link.slice(5))));
  return result;
};
