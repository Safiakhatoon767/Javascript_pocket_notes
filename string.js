### 🔹 What is a String?

📘 A sequence of characters written inside quotes.

let name = "Safia";
```

---

### 🔸 Ways to Declare String


let a = "hello";      // double quotes
let b = 'world';      // single quotes
let c = `hi ${a}`;    // template literals
```

---

### 🔸 String Length


let name = "Safia";
console.log(name.length);  // 5
```

---

### 🔸 Accessing Characters


let str = "hello";
console.log(str[0]);  // h
```

---

### 🔸 Escape Characters


let quote = "She said, \"Hello!\"";
```

---

## ✂️ String Methods (Most Used)

---

### 🔹 `toUpperCase()` & `toLowerCase()`


"hello".toUpperCase(); // "HELLO"
"WORLD".toLowerCase(); // "world"
```

---

### 🔹 `trim()`

📘 Removes spaces from start & end


"  hello  ".trim(); // "hello"
```

---

### 🔹 `includes()`

📘 Checks if substring exists (true/false)


"hello".includes("ll"); // true
```

---

### 🔹 `indexOf()` & `lastIndexOf()`


"hello".indexOf("l");      // 2
"hello".lastIndexOf("l");  // 3
```

---

### 🔹 `slice(start, end)`

📘 Extract part of string


"hello".slice(1, 4); // "ell"
```

---

### 🔹 `substring(start, end)`

📘 Similar to slice but no negative index


"hello".substring(1, 4); // "ell"
```

---

### 🔹 `substr(start, length)` (🚫 old method)

"hello".substr(1, 3); // "ell"
```

---

### 🔹 `replace(old, new)`


"hi there".replace("hi", "hello"); // "hello there"
```

📌 Use `/g` flag for all matches:


"ha ha ha".replace(/ha/g, "ho"); // "ho ho ho"
```

---

### 🔹 `charAt(index)`


"hello".charAt(1); // "e"
```

---

### 🔹 `split(separator)`

📘 Converts string to array


"apple,banana,grape".split(",");  
// ["apple", "banana", "grape"]
```

---

### 🔹 `concat()`


"hi".concat(" ", "there"); // "hi there"
```

---

### 🔹 `startsWith()` & `endsWith()`


"hello".startsWith("he"); // true  
"hello".endsWith("lo");   // true
```

---

### 🔹 `repeat(n)`

"ha".repeat(3); // "hahaha"
```

---

### 🔹 `padStart()` & `padEnd()`

📘 Adds padding


"5".padStart(3, "0"); // "005"
"5".padEnd(3, "0");   // "500"
```

---

### 🔹 Template Literals (Backticks \`\`)

let name = "Safia";
let msg = `Hello, ${name}!`;
```

---

## ✅ Quick Summary Table

| Method          | Use                     |
| --------------- | ----------------------- |
| `toUpperCase()` | Convert to UPPERCASE    |
| `trim()`        | Remove spaces           |
| `includes()`    | Check if exists         |
| `slice()`       | Cut part of string      |
| `replace()`     | Replace text            |
| `split()`       | Convert to array        |
| `startsWith()`  | Begins with?            |
| `padStart()`    | Add characters to front |

