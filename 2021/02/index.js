const { inputs } = require("./input");

const move = (inputs) => {
    if (!inputs || !Array.isArray(inputs) || !inputs.length) {
        return 0;
    }

    let forward = 0;
    let depth = 0;
    let aim = 0;

    inputs.forEach((input) => {
        const parts = input.split(' ');

        if (!['forward', 'up', 'down'].includes(parts[0])) {
            throw new Error(`Invalid action ${parts[0]}`);
        }

        switch (parts[0]) {
            case 'forward':
                forward += parseInt(parts[1], 10);
                depth += parseInt(parts[1], 10) * aim;
                break;
            case 'down':
                aim += parseInt(parts[1], 10);
                break;
            case 'up':
                aim -= parseInt(parts[1], 10);
                break;
        }

        if (depth < 0) {
            throw new Error(`Invalid depth`);
        }
    })

    return forward * depth;
}

console.log('result : ',  move(inputs));

exports.move = move