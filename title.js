#!/usr/bin/env node
const { adjectives } = require("./adjectives");
const { nouns } = require("./nouns");

const title = () => {
	let randAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
	let randNoun = nouns[Math.floor(Math.random() * nouns.length)];
	randNum = 1000 + Math.floor(Math.random() * 8999);
	return `${randAdj}-${randNoun}-${randNum}`;
};
for (let i = 0; i < 9; i++) {
	console.log(title());
}
