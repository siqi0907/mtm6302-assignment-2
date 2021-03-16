
const data = [
    'https://hblyan.oss-cn-beijing.aliyuncs.com/gqtx/IMG_3894(20200323-083633).JPG',
    'https://hblyan.oss-cn-beijing.aliyuncs.com/gqtx/IMG_3895(20200323-083634).JPG',
    'https://hblyan.oss-cn-beijing.aliyuncs.com/gqtx/IMG_3896(20200323-083636).JPG',
    'https://hblyan.oss-cn-beijing.aliyuncs.com/gqtx/IMG_3897(20200323-083638).JPG',
    'https://hblyan.oss-cn-beijing.aliyuncs.com/gqtx/IMG_3898(20200323-083640).JPG',
    'https://hblyan.oss-cn-beijing.aliyuncs.com/gqtx/IMG_3899(20200323-083641).JPG',
    'https://hblyan.oss-cn-beijing.aliyuncs.com/gqtx/IMG_3900(20200323-083643).JPG',
    'https://hblyan.oss-cn-beijing.aliyuncs.com/gqtx/IMG_3901(20200323-083644).JPG',
    'https://hblyan.oss-cn-beijing.aliyuncs.com/gqtx/IMG_3902(20200323-083646).JPG',
    'https://raw.githubusercontent.com/1315007322/picture/master/blog/641',
    'https://raw.githubusercontent.com/1315007322/picture/master/blog/20210309232053.png',
    'https://raw.githubusercontent.com/1315007322/picture/master/blog/20210309232112.png'
]

let oBox = document.getElementById('box');
let imgs = oBox.getElementsByTagName('img')
let showImg = document.getElementById('showImg')
let show = document.getElementsByClassName('show')[0]
let oclose = document.getElementsByClassName("close")[0]
let oleft = document.getElementById('left')
let oright = document.getElementById('right')
let current = 0

data.map(items => {
    oBox.innerHTML += `
    <img src=${items} class="rounded col-md-3 p-3 col-6" alt="this is a picture">
    `
})

for(let i = 0;i<imgs.length;i++){
    imgs[i].onclick = function (){
        show.style.display = 'block'
        showImg.src = data[i]
        current = i
        console.log(current)
    }
}

oleft.onclick = function(){
    if(current > 0){
        current--
        showImg.src = data[current]
        console.log(current)
    }
}
oright.onclick = function(){
    if(current < imgs.length -1){
        current++
        showImg.src = data[current]
        console.log(current)
    }
  
}



oclose.onclick = function(){
    show.style.display = 'none'
}