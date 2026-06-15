var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
    Direction[Direction["f"] = 10] = "f";
})(Direction || (Direction = {}));
const move = Direction.Up;
// console.log(move);
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Blue"] = "Blue";
    Color["Green"] = "Green";
})(Color || (Color = {}));
const sea = Color.Blue;
// console.log(sea);
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Ok"] = 200] = "Ok";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["ServerError"] = 500] = "ServerError";
})(ResponseStatus || (ResponseStatus = {}));
const responseStatus = ResponseStatus.Ok;
// console.log(responseStatus);
var MixedEnum;
(function (MixedEnum) {
    MixedEnum[MixedEnum["No"] = 0] = "No";
    MixedEnum["Yes"] = "Yes";
})(MixedEnum || (MixedEnum = {}));
const mixedEnumNo = MixedEnum.No;
const mixedEnumYes = MixedEnum.Yes;
// console.log(mixedEnumNo);
// console.log(mixedEnumYes);
// console.log(Direction.f);
// console.log(Direction[Direction.f]);
// console.log(Color.Blue);
const wD = 0;
console.log(wD);
console.log(Direction[wD]);
export {};
