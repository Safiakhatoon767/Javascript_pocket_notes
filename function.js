### 🔹 What is a Function?

📘 Reusable block of code for a specific task.


function sayHi() {
  console.log("Hi!");
}
sayHi();
```

---

### 🔹 Function Types:

#### ✅ **1. Normal Function**


function greet() {
  console.log("Welcome!");
}
```

#### ✅ **2. With Parameters**


function add(a, b) {
  console.log(a + b);
}
add(10, 20);
```

#### ✅ **3. With Return**


function sub(a, b) {
  return a - b;
}
let result = sub(20, 5);
```

---

### 🔹 Arrow Functions

#### ✅ Basic Arrow


let greet = () => console.log("Hello!");
```

#### ✅ With Parameters

let mul = (a, b) => a * b;
```

#### ✅ With Return

let add = (a, b) => {
  return a + b;
};
```

---

### 🔹 Default Parameter

let sum = (a, b, c = 10) => a + b + c;

sum(5, 5);     // 5 + 5 + 10 = 20  
sum(5, 5, 5);  // 5 + 5 + 5 = 15
```

---

### 🔹 `this` in Functions

| Function Type   | `this` Refers To       |
| --------------- | ---------------------- |
| Normal Function | Object calling it      |
| Arrow Function  | Global (window) object |


let obj = {
  name: "safia",
  say: function () {
    console.log(this.name); // safia
  }
};

let obj2 = {
  name: "safia",
  say: () => {
    console.log(this.name); // undefined (global)
  }
};
```

---

### 🔹 Callback Function

📘 Function passed as an argument to another function.


function show(res) {
  return res;
}

function sum(a, b, callback) {
  return callback(a + b);
}

sum(10, 20, show); // 30
```

---

## 🔄 Array Function Methods

---

### 🔸 `forEach()` → Modify original array, no return


arr.forEach((v, i) => console.log(v, i));
```

---

### 🔸 `map()` → Returns new array

let res = arr.map((v) => v + 5);
```

---

### 🔸 `filter()` → Returns new array with condition true


let even = arr.filter((v) => v % 2 === 0);
```

---

### 🔸 `reduce()` → Reduces to single value


let total = arr.reduce((sum, v) => sum + v);
```

---

## ✅ Summary:

* `function` = reusable code block
* Arrow functions = short syntax
* `this` behaves differently in arrow vs normal
* Use `map`, `filter`, `reduce` for array transformation
* `callback` = function inside function

