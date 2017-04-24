'use strict'

export default class Stack {
  constructor(){
    this.stack = []
  }
  push(element) {
    this.stack[this.stack.length] = element
  }
  pop() {
    return this.stack.splice(-1, 1)[0]
  }
  peek() {
    return this.stack[this.stack.length-1]
  }
  length() {
    return this.stack.length
  }
  isEmpty() {
    return this.stack.length === 0
  }
}
