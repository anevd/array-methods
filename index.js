let candidates = [
	{
		name: "Василий Петров",
		age: 60,
		score: 98,
		serviceRecord: 36,
	},
	{
		name: "Екатерина Фёдорова",
		age: 35,
		score: 90,
		serviceRecord: 7,
	},
	{
		name: "Иван Иванов",
		age: 29,
		score: 67,
		serviceRecord: 2,
	},
	{
		name: "Зинаида Абрамова",
		age: 45,
		score: 78,
		serviceRecord: 14,
	},
	{
		name: "Виктор Олегов",
		age: 54,
		score: 85,
		serviceRecord: 21,
	},
];

const filterByAge = (el) => {
	return el.age < 50;
};

const filterByScore = (el) => {
	return el.score >= 75;
};

const filterByServiceRecord = (el) => {
	return el.serviceRecord >= 5;
};

const sortByScore = (arr) => {
	let arrSorted = [...arr];
	return arrSorted.sort((a, b) => {
		return b.score - a.score;
	});
};

const getMeanAge = (arr) => {
	let ageArray = [];
	arr.map((item) => {
		ageArray.push(item.age);
	});
	let sum = 0;
	for (let i = 0; i < ageArray.length; i++) {
		sum += ageArray[i];
	}
	return sum / ageArray.length;
};

const getMeanAgeReduce = (arr) => {
	let ageArray = [];
	arr.map((item) => {
		ageArray.push(item.age);
	});
	let meanAge = ageArray.reduce((acc, cur) => acc + cur) / ageArray.length;
	return meanAge;
};

const getNamesOnly = (arr) => {
	return arr.name;
};

module.exports = {
	filterByAge,
	filterByScore,
	filterByServiceRecord,
	sortByScore,
	getMeanAge,
	getMeanAgeReduce,
	getNamesOnly,
};
