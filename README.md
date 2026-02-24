1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 
i. getElementById() => ID দিয়ে ১টা element ke dhora jay and একটাই element return করে

ii. getElementsByClassName() => Class দিয়ে অনেক element ke dhora jay and একাধিক element return করে,Array-like list দেয়

iii. querySelector() => CSS selector দিয়ে ১টা element ke dhora jay and ID, class, tag — সব use করা যায় but শুধু first match return করে

iv. querySelectorAll() => CSS selector দিয়ে সব element ke dhora jay and অনেক element return করে aslo NodeList দেয়


2. How do you create and insert a new element into the DOM?

Answer:
আমি সাধারণত DOM-এ নতুন element যোগ করতে চাইলে আগে
document.createElement() দিয়ে element টা create করি।
তারপর দরকার হলে text, class বা attribute add করি।
এরপর appendChild() বা similar method ব্যবহার করে ওই element-টা DOM-এ insert করি।
সংক্ষেপে বললে — create করি → modify করি → তারপর DOM-এ attach করি।

3. What is Event Bubbling? And how does it work?

Answer:
Event bubbling হলো JavaScript-এর একটা behaviour, যেখানে কোনো element-এ event (যেমন click) ঘটলে সেটা শুধু ওই element-এ না থেকে ধাপে ধাপে তার parent element-গুলোর দিকে উপরে উঠতে থাকে।
মানে আমি একটা button-এ click করলাম —
প্রথমে button-এর event চলবে, তারপর তার parent div, তারপর body, এভাবে document পর্যন্ত যেতে পারে।

How it works:
Event নিচের element থেকে শুরু হয় → তারপর parent → তারপর আরও parent — এভাবে উপরের দিকে propagate করে।
চাইলে event.stopPropagation() ব্যবহার করে এই bubbling থামানো যায়।

4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event Delegation হলো এমন একটা technique যেখানে আমরা প্রতিটা child element-এ আলাদা করে event listener না বসিয়ে, তাদের parent element-এ একটা event listener বসাই।
কারণ JavaScript-এ event bubbling কাজ করে — তাই child element-এ event ঘটলে সেটা parent পর্যন্ত উঠে আসে। তখন parent থেকেই আমরা detect করতে পারি কোন child-এ event হয়েছে।

Why it is useful?
i.Performance ভালো হয় (কম event listener লাগে)
ii.Code cleaner হয়
iii.Dynamically added element-গুলোর জন্যও কাজ করে (পরে add করলেও listener কাজ করবে)
iv.এটা efficient এবং scalable।

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:
** preventDefault()
এটা ব্যবহার করলে browser-এর default behaviour বন্ধ হয়ে যায়।
যেমন:
form submit করলে page reload হয়
anchor tag (<a>) এ click করলে অন্য page-এ যায়
preventDefault() দিলে এই default কাজটা বন্ধ হয়।

** stopPropagation()
এটা event bubbling বন্ধ করে দেয়।
মানে event আর parent element-এ উঠবে না।
যেমন:
button-এ click করলে normally parent div-এও event যাবে।
stopPropagation() দিলে শুধু button-এই event চলবে, উপরে যাবে না।