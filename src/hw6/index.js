import store from '../store'
//import getAverage from './functions';
import { getStudentsNames, getSubjects, getStudentInfo, getAverageMark, calculateWordLetters } from './functions'

const state = store.hw6;
const wordForCalcs = 'aaabcccc';

console.log('Students sorted:', getStudentsNames(state.students))

state.students.map((el) => {
    console.group(el.name)
    console.log(`subjects:  ${getSubjects(el)}`)
    console.log(...Object.entries(getStudentInfo(el)))
    console.log(`average:  ${getAverageMark(el)}`)
    console.groupEnd()
})

console.log('Letter counter:', ...Object.entries(calculateWordLetters(wordForCalcs)))