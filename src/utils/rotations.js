const rotateArrayClockwise = (arr) => {
	const newArr = [];

	for (let j = 0; j < arr.length; j++) {
		const newRow = [];
		for (let i = 2; i >= 0; i--) {
			newRow.push(arr[i][j]);
		}
		newArr.push(newRow);
	}

	return newArr;
};

const rotateFaceClockwise = (cubeState, face) => {
	const copyCubeState = JSON.parse(JSON.stringify(cubeState));
	const faceArr = copyCubeState[face];

	return rotateArrayClockwise(faceArr);
};

//Stringify and Parse to prevent mutation of cubeState object from splice

//These functions insert all colour elements from one column/row of a face array into a column/row of a different face array and can reverse the order if needed

const columnToRow = (cubeState, faceOne, faceTwo, column, row, reverse) => {
	const copyCubeState = JSON.parse(JSON.stringify(cubeState));

	const columnArr = copyCubeState[faceOne];
	const rowArr = copyCubeState[faceTwo];
	let newRow = [];

	for (let i = 0; i < columnArr.length; i++) {
		const orderIndex = reverse ? i : columnArr.length - i - 1;

		newRow.push(columnArr[orderIndex][column]);
	}

	rowArr.splice(row, 1, newRow);

	return rowArr;
};

const rowToColumn = (cubeState, faceOne, faceTwo, row, column, reverse) => {
	const copyCubeState = JSON.parse(JSON.stringify(cubeState));

	const rowArr = copyCubeState[faceOne];
	const columnArr = copyCubeState[faceTwo];

	for (let i = 0; i < rowArr[row].length; i++) {
		const orderIndex = reverse ? rowArr.length - i - 1 : i;

		columnArr[i].splice(column, 1, rowArr[row][orderIndex]);
	}

	return columnArr;
};

const columnToColumn = (cubeState, faceOne, faceTwo, colOne, colTwo, reverse) => {
	const copyCubeState = JSON.parse(JSON.stringify(cubeState));

	const arrOne = copyCubeState[faceOne];
	const arrTwo = copyCubeState[faceTwo];

	for (let i = 0; i < arrOne.length; i++) {
		const orderIndex = reverse ? arrOne.length - i - 1 : i;

		arrTwo[i].splice(colTwo, 1, arrOne[orderIndex][colOne]);
	}

	return arrTwo;
};

const rowToRow = (cubeState, faceOne, faceTwo, rowOne, rowTwo) => {
	const copyCubeState = JSON.parse(JSON.stringify(cubeState));

	const arrOne = copyCubeState[faceOne];
	const arrTwo = copyCubeState[faceTwo];

	const newRow = [];

	for (let i = 0; i < arrOne[rowOne].length; i++) {
		newRow.push(arrOne[rowOne][i]);
	}

	arrTwo.splice(rowTwo, 1, newRow);

	return arrTwo;
};

//face properties are reassigned according to the row or column they get their new 3 squares from

//Each clockwise function contains a comment which is a shorthand for where each tile that changes goes to and comes from

const frontClockwise = (cubeState) => {
	//left column 2 -> up row 2 ->right column 0->down row 0

	const newCubeState = {
		...cubeState,

		front: rotateFaceClockwise(cubeState, "front"),

		right: rowToColumn(cubeState, "up", "right", 2, 0),
		up: columnToRow(cubeState, "left", "up", 2, 2),
		left: rowToColumn(cubeState, "down", "left", 0, 2),
		down: columnToRow(cubeState, "right", "down", 0, 0),
	};

	return newCubeState;
};

const rightClockwise = (cubeState) => {
	//front col 2 -> up col 2 -> back col 0 -> down col 2

	const newCubeState = {
		...cubeState,
		front: columnToColumn(cubeState, "down", "front", 2, 2),

		right: rotateFaceClockwise(cubeState, "right"),

		up: columnToColumn(cubeState, "front", "up", 2, 2),
		back: columnToColumn(cubeState, "up", "back", 2, 0, true),
		down: columnToColumn(cubeState, "back", "down", 0, 2, true),
	};

	return newCubeState;
};

const upClockwise = (cubeState) => {
	//front row 0 -> left row 0 -> back row 0 -> right row 0

	const newCubeState = {
		...cubeState,
		front: rowToRow(cubeState, "right", "front", 0, 0),
		right: rowToRow(cubeState, "back", "right", 0, 0),

		up: rotateFaceClockwise(cubeState, "up"),

		back: rowToRow(cubeState, "left", "back", 0, 0),
		left: rowToRow(cubeState, "front", "left", 0, 0),
	};

	return newCubeState;
};
const backClockwise = (cubeState) => {
	//right col 2 -> up row 0 -> left col 0 -> down row 2

	const newCubeState = {
		...cubeState,

		right: rowToColumn(cubeState, "down", "right", 2, 2, true),
		up: columnToRow(cubeState, "right", "up", 2, 0, true),

		back: rotateFaceClockwise(cubeState, "back"),

		left: rowToColumn(cubeState, "up", "left", 0, 0, true),
		down: columnToRow(cubeState, "left", "down", 0, 2, true),
	};

	return newCubeState;
};
const leftClockwise = (cubeState) => {
	//front col 0 -> down col 0 -> back col 2 -> up col 0

	const newCubeState = {
		...cubeState,
		front: columnToColumn(cubeState, "up", "front", 0, 0),
		up: columnToColumn(cubeState, "back", "up", 2, 0, true),
		back: columnToColumn(cubeState, "down", "back", 0, 2, true),

		left: rotateFaceClockwise(cubeState, "left"),

		down: columnToColumn(cubeState, "front", "down", 0, 0),
	};

	return newCubeState;
};

const downClockwise = (cubeState) => {
	//front row 2 ->right row 2-> back row 2-> left row 2
	const newCubeState = {
		...cubeState,
		front: rowToRow(cubeState, "left", "front", 2, 2),
		right: rowToRow(cubeState, "front", "right", 2, 2),
		back: rowToRow(cubeState, "right", "back", 2, 2),
		left: rowToRow(cubeState, "back", "left", 2, 2),

		down: rotateFaceClockwise(cubeState, "down"),
	};

	return newCubeState;
};

const frontAntiClockwise = (cubeState) => {
	return frontClockwise(frontClockwise(frontClockwise(cubeState)));
};
const rightAntiClockwise = (cubeState) => {
	return rightClockwise(rightClockwise(rightClockwise(cubeState)));
};
const upAntiClockwise = (cubeState) => {
	return upClockwise(upClockwise(upClockwise(cubeState)));
};
const backAntiClockwise = (cubeState) => {
	return backClockwise(backClockwise(backClockwise(cubeState)));
};
const leftAntiClockwise = (cubeState) => {
	return leftClockwise(leftClockwise(leftClockwise(cubeState)));
};
const downAntiClockwise = (cubeState) => {
	return downClockwise(downClockwise(downClockwise(cubeState)));
};

const rotationsObj = {
	front: frontClockwise,
	right: rightClockwise,
	up: upClockwise,
	back: backClockwise,
	left: leftClockwise,
	down: downClockwise,

	frontAnti: frontAntiClockwise,
	rightAnti: rightAntiClockwise,
	upAnti: upAntiClockwise,
	backAnti: backAntiClockwise,
	leftAnti: leftAntiClockwise,
	downAnti: downAntiClockwise,
};

export { rotationsObj };
