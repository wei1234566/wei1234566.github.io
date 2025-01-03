// script.js

// 获取返回顶部按钮
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// 监听滚动事件
window.onscroll = function() {
  // 如果页面滚动到底部，显示按钮
  if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
    scrollToTopBtn.classList.add("show-btn");
  } else {
    scrollToTopBtn.classList.remove("show-btn");
  }
};

// 点击按钮时返回顶部
scrollToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


function handleSubmit(event) {
  // 阻止表单默认行为，避免跳转
  event.preventDefault();
  
  // 获取用户选择的结果
  var selectedValue = document.getElementById('homeplace').value;
  
  // 显示结果区域
  var resultContent = "你选择的结果是：" + selectedValue;
  document.getElementById('result').style.display = 'block';  // 显示结果区域
  document.getElementById('result-content').innerHTML = resultContent;  // 显示提交的内容
  
  // 清空表单（可选）
  document.getElementById('homeplaceForm').reset();
}

