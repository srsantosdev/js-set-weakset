const assert = require('assert');

const user = { id: 123 }
const user2 = { id: 456 }

const weakSet = new WeakSet([user])
assert.deepStrictEqual(weakSet.has(user), true)

weakSet.add(user2)
assert.deepStrictEqual(weakSet.has(user2), true)

weakSet.delete(user)
assert.deepStrictEqual(weakSet.has(user), false)

weakSet.has(user2)
assert.deepStrictEqual(weakSet.has(user2), true)
