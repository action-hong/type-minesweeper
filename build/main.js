// 用来生成一个扫雷游戏
// 随机生成一个游戏

const fs = require('fs')
const path = require('path')

// 最大最小范围内随机生成一个数字
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomArray(min, max, count) {
  const arr = []
  while (arr.length < count) {
    const num = getRandom(min, max)
    if (arr.indexOf(num) === -1) {
      arr.push(num)
    }
  }
  return arr
}

function getAround(index, mines, col, row) {
  let around = 0
  const x = index % col
  const y = Math.floor(index / col)
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const newX = x + i
      const newY = y + j
      if (newX >= 0 && newX < col && newY >= 0 && newY < row) {
        const newIndex = newX + newY * col
        if (mines.includes(newIndex)) {
          around++
        }
      }
    }
  }
  return around
}

function generateMine(col, row, mineNum) {
  const mines = getRandomArray(0, col * row - 1, mineNum)
  const res = []
  for (let i = 0; i < row; i++) {
    const arr = []
    for (let j = 0; j < col; j++) {
      const index = i * col + j
      if (mines.includes(index)) {
        // 地雷
        arr.push(-1)
      } else {
        const around = getAround(index, mines, col, row)
        arr.push(around)
      }
    }
    res.push(arr)
  }
  return res
}

function transformCount(num) {
  if (num === -1) {
    return '构造格子内容<炸弹>'
  } else if (num === 0) {
    return '构造格子内容<空白>'
  } else {
    return `构造格子内容<数字, ${num}>`
  }
}

function main() {
  const res = generateMine(9, 9, 9)
  const str = `
  import type {
    空白, 构造格子内容, 数字, 炸弹
  } from './index'
  export type 随机游戏 = [
    ${res.map(item => `[\n${item.map(transformCount).join(',\n')}\n]`).join(',\n')}
  ]`
  const filename = path.join(process.cwd(), 'src', 'game.ts')
  console.warn(filename)
  fs.writeFileSync(filename, str)
  
}

main()