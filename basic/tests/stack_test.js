import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
    it('adds element to top of the stack', () => {
      const myStack = new Stack()
      expect(() => myStack.push('dim_sum'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })
  })

  context('pop()', () => {
    it('removes element from top of the stack', () => {
      const myStack = new Stack()
      myStack.push('zzs')
      myStack.push('noodz')
      myStack.push('dim_sum')
      myStack.push(5)
      expect(() => myStack.pop())
        .to.alter(() => myStack.length(), { from: 4, to: 3 })
      let thing = myStack.pop()
      expect(thing).to.equal('dim_sum')
    })
  })

  context('peek()', () => {
    it('peeks at the top element of the stack.', () => {
      const myStack = new Stack()
      myStack.push('first-thing')
      myStack.push('noodz')
      myStack.push('penultimate')
      myStack.push('top-item')
      let top = myStack.peek()
      expect(top).to.equal('top-item')
    })
  })

  context('isEmpty()', () => {
    it('checks to see if stack is empty', () => {
      const myStack = new Stack()
      let emptyStack = myStack.isEmpty()
      expect(emptyStack).to.deep.equal(true)
      myStack.push('noodz')
      let notEmptyStack = myStack.isEmpty()
      expect(notEmptyStack).to.eql(false)
    })
  })
})
