enum Direction {
    Up,
    Down,
    Left,
    Right,
    f = 10,
}

const move = Direction.Up;

// console.log(move);


enum Color {
    Red = "RED",
    Blue = "Blue",
    Green = "Green",
}

const sea = Color.Blue;

// console.log(sea);


enum ResponseStatus {
    Ok = 200,
    NotFound = 404,
    ServerError = 500,
}

const responseStatus = ResponseStatus.Ok;
// console.log(responseStatus);


enum MixedEnum {
    No = 0,
    Yes = "Yes",
}
const mixedEnumNo: MixedEnum = MixedEnum.No;
const mixedEnumYes: MixedEnum = MixedEnum.Yes;
// console.log(mixedEnumNo);
// console.log(mixedEnumYes);

// console.log(Direction.f);
// console.log(Direction[Direction.f]);

// console.log(Color.Blue);

const wD: Direction = 0;
console.log(wD)
console.log(Direction[wD])