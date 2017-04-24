import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue.js'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'
  it ('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds element to last position of the queue', () => {
      const myQueue = new Queue()
      expect(() => myQueue.enqueue('box'))
        .to.alter(() => myQueue.length(), { from: 0, to: 1})
    })
  })

  context('dequeue()', () => {
    it('removes first element from the queueu', () => {
      const myQueue = new Queue()
      let removedItem = myQueue.dequeue()
      expect(removedItem).to.equal(null)
      myQueue.enqueue('noodz')
      myQueue.enqueue('dim-sum')
      myQueue.enqueue('zeze')
      let notNull = myQueue.dequeue()
      expect(notNull).to.eql('noodz')
    })
  })

  context('front()', () => {
    it('returns the front element of the queue or null if empty.', () => {
      const myQueue = new Queue()
      expect(myQueue.front()).to.equal(null)
      myQueue.enqueue('noodz')
      myQueue.enqueue('dim-sum')
      myQueue.enqueue('zeze')
      expect(myQueue.front()).to.equal('noodz')
    })
  })
  context('back()', () => {
    it('returns the back element of the queue or null if empty.', () => {
      const myQueue = new Queue()
      expect(myQueue.back()).to.equal(null)
      myQueue.enqueue('noodz')
      myQueue.enqueue('dim-sum')
      myQueue.enqueue('zeze')
      expect(myQueue.back()).to.equal('zeze')
    })
  })
  context('isEmpty()', () => {
    it('returns true if queue is empty or false if it is not', () => {
      const isEmptyQueue = new Queue()
      expect(isEmptyQueue.isEmpty()).to.equal(true)
      isEmptyQueue.enqueue('puppies')
      expect(isEmptyQueue.isEmpty()).to.equal(false)
    })
  })
})
