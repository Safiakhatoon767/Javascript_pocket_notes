### 🔹 DOM Kya Hai?

📘 DOM = Webpage ka **structure** + JavaScript ka **remote control**

> HTML ko JavaScript se **dekhna, badalna, add/delete** karna = DOM

🧱 Example:

```html
<body>
  <h1 id="title">Hello</h1>
  <button>Click me</button>
</body>
```

---

## 🔍 **DOM Select Karne Wale Tarike**

---

### ✅ `getElementById("id")`


let title = document.getElementById("title");
console.log(title);
```

---

### ✅ `getElementsByClassName("class")`


let items = document.getElementsByClassName("list-item");
```

---

### ✅ `getElementsByTagName("tag")`


let allPara = document.getElementsByTagName("p");
```

---

### ✅ `querySelector("css-selector")`

📌 Returns **1st match only**


document.querySelector("h1");         // by tag
document.querySelector(".className"); // by class
document.querySelector("#id");        // by ID
```

---

### ✅ `querySelectorAll("css-selector")`

📌 Returns **all matches (NodeList)**


document.querySelectorAll("p"); 
```

---

## ✏️ **Content Change Karna (Text/HTML)**

---

### 🔸 `innerText` → only visible text


title.innerText = "Namaste Duniya!";
```

---

### 🔸 `innerHTML` → text + tags


title.innerHTML = "<i>Hello</i>";
```

---

## 🛠️ **Style Change Karna**


title.style.color = "red";
title.style.fontSize = "30px";
```

---

## 🆕 **Element Banana + Add Karna**

---

### 🔸 Create


let newPara = document.createElement("p");
newPara.innerText = "Mai naya hun!";
```

### 🔸 Append to body


document.body.appendChild(newPara);
```

---

## ❌ **Element Hatana**


element.remove();
```

---

## 🧨 **Events (Button Click, Mouse, etc.)**

---

### 🔸 Syntax


element.addEventListener("event", callback);
```

---

### ✅ Example: Button Click

```html
<button id="btn">Click me</button>
```


let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  alert("Button dab gaya bhai!");
});
```

---

## 🔁 Loop se Style Change (Multiple Elements)


let allItems = document.querySelectorAll("li");

for (let item of allItems) {
  item.style.color = "blue";
}
```

---

## ✅ Most Important Events

| Event Name    | Use                  |
| ------------- | -------------------- |
| `"click"`     | Jab koi click kare   |
| `"mouseover"` | Mouse le jaaye tab   |
| `"mouseout"`  | Mouse hataye tab     |
| `"keydown"`   | Keyboard dabaye tab  |
| `"submit"`    | Form submit hone par |

---

## 🧠 Super Summary

| Task                 | Use This                            |
| -------------------- | ----------------------------------- |
| Select element by ID | `getElementById("id")`              |
| Change text          | `innerText = "..."`                 |
| Change style         | `element.style.color = "..."`       |
| Add element          | `createElement()` + `appendChild()` |
| Handle events        | `addEventListener("click", fn)`     |



## 🧠 **JavaScript DOM Pocket Notes – Part 2**

---

### 🔹 `setAttribute(name, value)`

📌 Kisi element me attribute set karna


let btn = document.querySelector("button");
btn.setAttribute("id", "myBtn");
```

---

### 🔹 `getAttribute(name)`

📌 Kisi element ka attribute value lena


let val = btn.getAttribute("id");
console.log(val); // "myBtn"
```

---

### 🔹 `document.body`

📌 Pure body element ko access karne ke liye


console.log(document.body);
```

---

### 🔹 `document.body.appendChild(element)`

📌 Body me koi element add karna

let p = document.createElement("p");
p.innerText = "Hello Safia!";
document.body.appendChild(p);
```

---

### 🔹 `textContent`

📌 Sirf text change karne ke liye (tags ignore)


p.textContent = "Updated Text";
```

---

### 🔹 Remove a particular item


let h1 = document.querySelector("h1");
h1.remove();
```

---

### 🔹 Add Class


btn.classList.add("active");
```

---

### 🔹 Remove Class


btn.classList.remove("active");
```

---

### 🔹 Toggle Class (Add if not there, else remove)


btn.classList.toggle("active");
```

---

### 🔹 Replace Class


btn.classList.replace("old", "new");
```

---

## 🔥 Event Concepts (Very Easy)

---

### 🔹 Add Event Listener


btn.addEventListener("click", () => {
  alert("Clicked!");
});
```

---

### 🔹 Mouse Events

| Event         | Use               |
| ------------- | ----------------- |
| `"click"`     | Mouse click       |
| `"mouseover"` | Mouse upar le jao |
| `"mouseout"`  | Mouse hatao       |

---

## 🔄 **Event Bubbling vs Capturing**

### 🔹 Bubbling (default):

📌 Event **andar se bahar** jata hai


parent.addEventListener("click", () => {}, false);
```

---

### 🔹 Capturing:

📌 Event **bahar se andar** jata hai


parent.addEventListener("click", () => {}, true);
```

---

## 🔗 **Event Delegation**

📘 Parent element se child events ko handle karna


document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("You clicked:", e.target.textContent);
  }
});
```

---

## ✅ Summary Table

| Task                 | Code Example                        |
| -------------------- | ----------------------------------- |
| Set attribute        | `el.setAttribute("id", "val")`      |
| Get attribute        | `el.getAttribute("id")`             |
| Append to body       | `body.appendChild(el)`              |
| Change text          | `el.textContent = "Hello"`          |
| Remove element       | `el.remove()`                       |
| Add/Remove class     | `classList.add/remove("x")`         |
| Toggle/Replace class | `classList.toggle/replace()`        |
| Bubbling/Capturing   | `addEventListener(..., true/false)` |
| Event Delegation     | Handle child from parent            |

