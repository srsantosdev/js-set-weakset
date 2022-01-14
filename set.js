const assert = require('assert');

const arr1 = ['1', '2', '3']
const arr2 = ['2', '0', '3']

const arr3 = arr1.concat(arr2)

assert.deepStrictEqual(arr3.sort(), ['0', '1', '2', '2', '3', '3'])

const set = new Set()
arr1.map(item => set.add(item))
arr2.map(item => set.add(item))

// assert.deepStrictEqual(Array.from(set), ['1', '2', '3', '0'])
assert.deepStrictEqual(Array.from(new Set([...arr1, ...arr2])), ['1', '2', '3', '0'])

// console.log('set.keys', set.keys())
// console.log('set.values', set.values())

assert.deepStrictEqual(Array.from(set.keys()), ['1', '2', '3', '0'])
assert.deepStrictEqual(Array.from(set.values()), ['1', '2', '3', '0']) // So existe por conta do MAP

assert.ok(set.has('3'))

/**
 * Mesma teoria do Map, mas sempre trabalha com a lista dota
 * nao tem get, entao pode saber se o item esta ou nao no array
 */

const users01 = new Set([
  'samuel',
  'kamila',
  'mara',
])

const users02 = new Set([
  'samuel',
  'ruth',
  'francisco'
])

const intersection = new Set([...users01].filter(user => users02.has(user)))
assert.deepStrictEqual(Array.from(intersection), ['samuel'])

const difference = new Set([...users01].filter(user => !users02.has(user)))
assert.deepStrictEqual(Array.from(difference), ['kamila', 'mara'])