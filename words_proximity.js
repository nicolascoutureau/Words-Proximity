"use strict";
const stopwords = require('./stopwords');

module.exports = (alpha, beta) => {
	let score = 1;
	const badWordPositionPenality = 0.3;

	//Remove stop words
	alpha = removeStopWords(alpha);
	beta = removeStopWords(beta);

	//Swap position: biggest first
	if (alpha.length < beta.length) { let _beta = alpha; alpha = beta; beta = _beta; }
	const longest_array = alpha.length;

	let index_after_remove = 0;
	alpha.forEach((word, index) => {
		//Word is also in second array
		if (beta.indexOf(word) !== -1) {
			//Word is at a different position
			if (Math.abs(index_after_remove - beta.indexOf(word)) > 0)
				score -= badWordPositionPenality / longest_array;

		//Word is not in second array
		} else {
			index_after_remove--;
			score -= 1 / longest_array;
		}

		index_after_remove++;
	});

	return Math.round(score * 100) / 100;
};

var removeStopWords = (array) => {
	return array.filter((word) => {
		return stopwords.indexOf(word) === -1;
	})
};