function MyCircularQueue(k) {
    this.queue = new Array(k);
    this.size = k;
    this.frontIndex = 0;
    this.rearIndex = -1;
    this.count = 0;
}

MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;

    this.rearIndex = (this.rearIndex + 1) % this.size;
    this.queue[this.rearIndex] = value;
    this.count++;

    return true;
};

MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;

    this.frontIndex = (this.frontIndex + 1) % this.size;
    this.count--;

    return true;
};

MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1;
    return this.queue[this.frontIndex];
};

MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1;
    return this.queue[this.rearIndex];
};

MyCircularQueue.prototype.isEmpty = function() {
    return this.count === 0;
};

MyCircularQueue.prototype.isFull = function() {
    return this.count === this.size;
};


const q = new MyCircularQueue(3);

q.enQueue(10);
q.enQueue(20);
q.enQueue(30);

console.log(q.queue); // [10, 20, 30]

q.deQueue();
q.deQueue();

q.enQueue(40);
q.enQueue(50);

console.log(q.queue);
console.log(q.Front());
console.log(q.Rear());
console.log(q.isFull());




/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */