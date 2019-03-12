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


## canvas.toDataURL & svg

https://github.com/sampumon/SVG.toDataURL

https://stackoverflow.com/questions/3173048/is-there-an-equivalent-of-canvass-todataurl-method-for-svg

不能使用SVG图像元素作为drawImage方法的源的原因很简单，但很痛苦

https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/110935/

https://stackoverflow.com/questions/33972254/svgpng-from-canvas-todataurl-throws-dom-exception-18-security-error-in-safari-9


