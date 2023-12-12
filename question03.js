function quickestPath(board) {
    const maxPosition = 100;
    const visited = new Set();
    const queue = [[1, []]]; // [position, path]
    while (queue.length > 0) {
        const [position, path] = queue.shift();
        if (position === maxPosition) {
            return path;
        }
        for (let i = 6; i >= 1; i--) {
            const nextPosition = position + i;
            if (!visited.has(nextPosition) && nextPosition <= maxPosition) {
                visited.add(nextPosition);
                // Check for ladders and snakes
                const ladder = board.ladders.find(([start, end]) => start === nextPosition);
                const snake = board.snakes.find(([start, end]) => start === nextPosition);
                const newPosition = ladder ? ladder[1] : snake ? snake[1] : nextPosition;
                queue.push([newPosition, [...path, i]]);
            }
        }
    }
    return []; // If no valid path is found
}
// Example usage:
const inputBoard = {
    ladders: [[3, 39], [14, 35], [31, 70], [44, 65], [47, 86], [63, 83], [71, 93]],
    snakes: [[21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66]],
};
const result = quickestPath(inputBoard);
//console.log(result); 
