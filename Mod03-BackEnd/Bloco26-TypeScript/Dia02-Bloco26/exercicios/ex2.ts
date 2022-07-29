enum Direction {
    FRONT='Go straight on',
    LEFT='Turn left',
    RIGHT='Turn Right',
    ARRIVED='to your destination',
    ROUNDABOUT='roundabout take the second exit on the right'
};

function keepDirection(km: number): string {
    return `Keep going for the next ${km} kilometers`;
};

function inNMeterDirection(m: number, d: Direction): string {
    return `In ${m} meters ${d}`;
};

// script //
console.log(Direction.FRONT);
console.log(inNMeterDirection(600, Direction.LEFT));
console.log(Direction.LEFT);
console.log(inNMeterDirection(200, Direction.ROUNDABOUT));
console.log(keepDirection(1.2));
console.log(inNMeterDirection(300, Direction.RIGHT));
console.log(Direction.RIGHT);
console.log(inNMeterDirection(400, Direction.ARRIVED));
console.log(`you arrived ${Direction.ARRIVED}`);

console.log(Direction.FRONT);
console.log(inNMeterDirection(300, Direction.RIGHT));
console.log(Direction.RIGHT);
console.log(keepDirection(2));
console.log(inNMeterDirection(200, Direction.LEFT));
console.log(Direction.LEFT);
console.log(inNMeterDirection(400, Direction.RIGHT));
console.log(Direction.RIGHT);
console.log(inNMeterDirection(100, Direction.ARRIVED));
console.log(`you arrived ${Direction.ARRIVED}`);