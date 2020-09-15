class Stack {
    constructor(){
        this.arr = [];
        this.start = 0;
    }

    push(info) {
        this.arr[this.start] = info;
        this.start = this.start + 1;
    }

    peek() {
        return this.arr[this.start -1];
    }

    isEmpty() {
        return this.start === 0;
    }
}

class Queue {
    constructor(){
        this.wait = [];
    }

    enqueue(info) {
        this.wait.push(info);
    }

    dequeue() {
        this.wait.shift();
    }

    front() {
        return this.wait[0];
    }

    isEmpty() {
        return this.wait === 0;
    }

    printQueue() {
        return this.wait.join(', ');
    }

}