#!/usr/bin/env node

const { adjectives, nouns } = require("./words");

const title = () => {
	let randAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
	let randNoun = nouns[Math.floor(Math.random() * nouns.length)];
	randNum = 1000 + Math.floor(Math.random() * 8999);
	return `${randAdj}-${randNoun}-${randNum}`;
};

console.log(title());
