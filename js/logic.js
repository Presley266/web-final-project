// 开屏动画
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const sp = document.getElementById("openAni");
        if (sp) sp.remove();
    }, 2600);
});

// 自动轮播
var index = 0 , len;
var imgBox = document.getElementsByClassName("img-slide");
var lastIndex = 0; // 用来记录上一张图片的索引
len = imgBox.length;
imgBox[index].style.display = 'block';
function slideShow(){
    index = (index + 1) % len;
    // 只隐藏上一张，显示当前张
    imgBox[lastIndex].style.display = 'none';
    imgBox[index].style.display = 'block';
    // 更新lastIndex
    lastIndex = index;
}
setInterval(slideShow,1600);

// 音乐卡片
document.querySelectorAll(".music-card").forEach(card => {
    let state = 0;
    const title = card.querySelector(".card-title");
    const lyric = card.querySelector(".card-lyric");

    card.addEventListener("click", () => {
        state = (state + 1) % 3;

        title.style.display = "none";
        lyric.style.display = "none";

        if (state === 1) title.style.display = "block";
        if (state === 2) lyric.style.display = "block";
    });
});

// 留言墙
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('msgForm');
    const input = document.getElementById('msgInput');
    const wall = document.getElementById('wall');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // 阻止页面刷新（核心）
        const text = input.value.trim();
        if (!text) return;
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = text;
        wall.prepend(div);
        input.value = '';
    });
});