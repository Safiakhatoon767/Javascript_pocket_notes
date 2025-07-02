### 🔹 What is Array?

📘 A collection of multiple data items stored in a single variable.

let l = [10, 20, 30, 40];  
console.log(l[3]);  // 40
```

---

### 🔹 Ways to Declare Array

let a = [10, 20]; // Normal

let b = Array("hello", 23); // Using Array()

let c = new Array("hi", "bye"); // Using new keyword
```

---

### 🔹 Multidimensional Array


let arr = [1, 2, [3, 4]];
console.log(arr[2][1]); // 4
```

---

### 🔹 Looping Through Arrays

#### 👉 `for` loop:


for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}
```

#### 👉 Reverse loop:


for (let i = arr.length - 1; i >= 0; i--) {
  console.log(i, arr[i]);
}
```

#### 👉 `for...of` → values:


for (let val of arr) {
  console.log(val);
}
```

#### 👉 `for...in` → index:


for (let i in arr) {
  console.log(i, arr[i]);
}
```

---

## ⚙️ **Array Methods – Short Notes**

---

### 🔸 `push()` – Add at end


arr.push(100);
```

### 🔸 `unshift()` – Add at start


arr.unshift(100);
```

### 🔸 `pop()` – Remove from end


arr.pop(); // Returns deleted value
```

### 🔸 `shift()` – Remove from start


arr.shift(); // Returns deleted value
```

---

### 🔸 `toString()` – Convert array to string


arr.toString();
```

### 🔸 `join()` – Join with separator


arr.join("|"); // "a|b|c"
```

### 🔸 `includes()` – Check value exists


arr.includes(50); // true/false
```

---

### 🔸 `concat()` – Merge arrays


arr1.concat(arr2);
```

### 🔸 `splice(start, deleteCount, ...add)` – Add/Delete


arr.splice(2, 2); // delete 2 from index 2  
arr.splice(2, 0, 99); // insert 99 at index 2  
```

### 🔸 `slice(start, end)` – Copy part (end not included)


arr.slice(1, 4);
```

---

### 🔸 `flat()` – Flatten nested arrays

let a = [1, [2, 3]];
a.flat(); // [1, 2, 3]
```

---

### 🔸 Update Array Element


arr[2] = 999; // Replace value at index 2
```

---

## ✅ Summary

* Use `push/pop` → End
* Use `unshift/shift` → Start
* Use `splice/slice` → Middle
* Use `for/for...of/for...in` → Loop
* Use `includes/concat/flat/join` for more tricks

