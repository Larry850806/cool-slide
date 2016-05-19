## cool-slide is a command line tool. It can be used to make a cool slide in very easy syntax. 

# Requirement

- `node >= 0.12.7`

# Install

```
npm install Larry850806/cool-slide -g
```
# Documentation

### new chapter
`---`
### new slide in the chapter
`----`
### text
```
# Hello
## Hello
### Hello
```
### picture
`![](http://path/to/image.jpg)`
### link
`[Click Me](url)`
### list
```
- item1
- item2
- item3
```
### code
```
(remove the comment)
// ```
// function(){
//     console.log('123');
// }
// ```
```
### Question
```
[Q] 1 + 1 = ?
[A] 1
[A#] 2
[A] 3
[A] 4
```

# Example

- step1: create a file 'test.md'

- step2: paste it to test.md

```markdown
## This is chapter 1 ##
----
### This is a slide in chapter 1

---

## This is chapter 2
----
### You can put image in your slide
![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png)
----
### You can also put some code and link
[click me](https://github.com/Larry850806)
----
### press ESC to see the slide structure
---

# 你好
## 你好
### 你好
- 你好
----
# END
```

- step3: `cool-slide test.md test.html`

- step4: open 'test.html' to see your slide

# UML Diagram
![](http://imgur.com/qXfy4lz.png)

# License

The MIT License (MIT)

Copyright (c) 2016 Larry Lu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
