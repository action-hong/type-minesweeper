const 某局游戏 = 
  [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      2,
      1,
      1,
      0
    ],
    [
      0,
      0,
      0,
      1,
      -1,
      2,
      -1,
      3,
      2
    ],
    [
      0,
      0,
      1,
      2,
      2,
      2,
      2,
      -1,
      -1
    ],
    [
      1,
      1,
      2,
      -1,
      1,
      0,
      1,
      2,
      2
    ],
    [
      1,
      -1,
      2,
      1,
      1,
      0,
      1,
      2,
      2
    ],
    [
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      -1,
      -1
    ],
    [
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      2,
      2
    ],
    [
      1,
      -1,
      1,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  ]

let str = '某局游戏'
let count = 0
for (let i = 0; i < 某局游戏.length; i++) {
  let row = 某局游戏[i]
  for (let j = 0; j < row.length; j++) {
    let cell = row[j]
    if (cell !== -1) {
      str = `点击<${str}, ${j}, ${i}>`
      count++
    }
  }
}
console.log(count)
console.log(str)