String2Emoji
============

A string to emoji translator. A highly inefficient synchronous module that
analyzes your string for emoji keywords and suggests all the matches it finds.


```
s2e = require('string2emoji');

string = "heart rain";
emojified = s2e(string);

console.log(emojified); //=> 😍😘😻💑🌂💛💙💜💚❤️💔💖💘☔💝💟

```
