document.addEventListener('DOMContentLoaded', function() {

  let isBgChanged = false;
  let switchImg = document.getElementById('switch');
  let mainContainer = document.querySelector('.main-container');

  switchImg.addEventListener('click', function() {

    // 点击动画（保持）
    this.style.transition = 'transform 0.25s ease';
    this.style.transform = 'translateY(16px)';
    setTimeout(() => {
      this.style.transform = 'translateY(0)';
    }, 250);

    // 用 CSS 变量切换主题（推荐方式）
    document.documentElement.toggleAttribute('data-theme', 'light');

  });
});
