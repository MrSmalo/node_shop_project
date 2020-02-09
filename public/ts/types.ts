//arrays
let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

//tuple- fixed known number of elements and types.
let list3: [string, number];

list3 = ["string", 1];

//enum
enum Color {
  red,
  green,
  blue
}
let c: Color = Color.green;
