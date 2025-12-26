// 开屏动画
// 使用DOMContentLoaded包装，等待DOM（文档对象模型）完全加载后再执行js
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        // 获取开屏动画元素
        const sp = document.getElementById("openAni");
        // 如果元素已经存在则删除
        if (sp) sp.remove();
    }, 10000);// 设置2.6秒的延时
});

// 自动轮播
var index = 0; // 当前显示的图片索引，初始化为0（第一张轮播图）
// 获取所有轮播图片元素
var imgSlide = document.getElementsByClassName("img-slide");
var len = imgSlide.length; // 获取图片数量
var lastIndex = 0; // 用来记录上一张图片的索引，初始化为0
imgSlide[index].style.display = 'block';
function slideShow(){
    // 计算下一张图片的索引，使用取模运算实现循环
    index = (index + 1) % len;
    imgSlide[lastIndex].style.display = 'none'; // 只隐藏上一张
    imgSlide[index].style.display = 'block'; // 显示当前图片
    lastIndex = index;// 更新lastIndex
}
setInterval(slideShow,1600); // 设置1.6秒执行一次slideShow函数

// 音乐卡片
document.querySelectorAll(".music-card").forEach(card => {
    let state = 0;
    const title = card.querySelector(".card-title");
    const lyric = card.querySelector(".card-lyric");

    card.addEventListener("click", () => {
        state = (state + 1) % 3;
        // 先隐藏歌名和歌词
        title.style.display = "none";
        lyric.style.display = "none";
        // 根据用户点击状态显示对应内容
        if (state === 1) title.style.display = "block";
        if (state === 2) lyric.style.display = "block";
    });
});

// 留言墙
document.addEventListener('DOMContentLoaded', function () {
    // 获取表单，输入框，留言墙元素
    const form = document.getElementById('msgForm');
    const input = document.getElementById('msgInput');
    const wall = document.getElementById('wall');
    // 为表单添加提交事件监听器
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // 阻止页面刷新
        // 获取输入内容并去除首尾空格
        const text = input.value.trim();
        // 如果输入内容为空则直接返回
        if (!text) return;
        // 创建每一条留言元素
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = text;
        // 将新留言添加到留言墙顶部（append则是添加到底部）
        wall.prepend(div);
        // 清空输入框
        input.value = '';
    });
});