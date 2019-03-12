# SVG to Image

https://codepen.io/webgeeker/pen/WmZyLg?editors


```js

const {body} = document

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
canvas.width = canvas.height = 100

const tempImg = document.createElement('img')
tempImg.addEventListener('load', onTempImageLoad)
tempImg.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml"><style>em{color:red;}</style><em>I</em> lick <span>cheese</span></div></foreignObject></svg>')

const targetImg = document.createElement('img')
body.appendChild(targetImg)

function onTempImageLoad(e){
  ctx.drawImage(e.target, 0, 0)
  targetImg.src = canvas.toDataURL()
}

```
