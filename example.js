"use strict";

const pf = require('./words_proximity');

console.log([], ['basket'], pf([], ['basket']));

console.log('-------');

const alpha = ['basket', 'usa'];
const beta = ['basket'];
console.log(beta, alpha, pf(beta, alpha));

console.log('-------');

const alpha1 = ['usa', 'basket'];
const beta1 = ['basket', 'usa'];
console.log(alpha1, beta1, pf(alpha1, beta1));

console.log('-------');

const alpha4 = ['basket', 'usa'];
const beta4 = ['basket', 'ball', 'usa'];
console.log(alpha4, beta4, pf(alpha4, beta4));

console.log('-------');

const alpha6 = ['usa', 'basket'];
const beta6 = ['basket', 'ball', 'usa'];
console.log(alpha6, beta6, pf(alpha6, beta6));

console.log('-------');

const alpha7 = ['le', 'basket'];
const beta7 = ['basket'];
console.log(alpha7, beta7, pf(alpha7, beta7));

console.log('-------');

const alpha8 = 'Tirage Ligue des Champions';
const beta8 = 'Ligue des Champions';
console.log(alpha8, beta8, pf(alpha8.split(' '), beta8.split(' ')));

console.log('-------');

const alpha9 = 'matchs de playoffs ce soir';
const beta9 = 'premiers matchs de playoffs ce soir';
console.log(alpha9, beta9, pf(alpha9.split(' '), beta9.split(' ')));

console.log('-------');

const alpha11 = 'matchs de playoffs ce soir';
const beta11 = 'matchs de playoffs débutent ce soir';
console.log(alpha11, beta11, pf(alpha11.split(' '), beta11.split(' ')));
