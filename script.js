// --- Translations Dictionary ---
const translations = {
    en: {
        "filter.all": "ALL",
        "label.intro": "Introduction",
        "btn.view": "View Detail",
        "nav.contact": "CONTACT",
        "nav.video": "VIDEOS",
        "nav.cv": "CV",
        "nav.other": "OTHERS",
        "default.title": "Select Target",
        "default.time": "UNKNOWN",
        "default.intro": "No data packet selected."
    },
    zh: {
        "filter.all": "全部",
        "label.intro": "简介",
        "btn.view": "查看详情",
        "nav.contact": "联系方式",
        "nav.video": "视频展示",
        "nav.cv": "简历",
        "nav.other": "其他",
        "default.title": "选择目标",
        "default.time": "未知",
        "default.intro": "未选择数据包。"
    }
};

// --- Project Data (Bilingual) ---
const projectData = [
    { 
        id: 1, year: 2024, 
        title_en: "Simulation & Dreams - Video Game", title_zh: "模拟与梦境 - 视频游戏", 
        time: "2024.05", 
        intro_en: "Drawing on the theories about simulation, I designed a first person video game.", 
        intro_zh: "基于传播学的驯化理论，我做了个第一人称游戏。",
        small_img: "https://i.postimg.cc/4NrXypSd/Final_1.jpg", 
        large_img: "https://i.postimg.cc/QxRjCcyV/Final_4.jpg" ,
        link: "DetailPages/SDGameVideo.html"
    },
    { 
        id: 2, year: 2024, 
        title_en: "Simulation & Dreams - Dream Frames", title_zh: "模拟与梦境 - 梦境碎片", 
        time: "2024.05.", 
        intro_en: "Random drop of some pieces of my dreams.", 
        intro_zh: "随机的梦境碎片。",
        small_img: "https://i.postimg.cc/WzFQcHjt/Dream_Frames_8.jpg", 
        large_img: "https://i.postimg.cc/WzFQcHjt/Dream_Frames_18.jpg",
        link: "DetailPages/SDInstallation.html"
    },
    { 
        id: 3, year: 2024, 
        title_en: "Copyloop (Group Project)", title_zh: "拷贝回路（合作作品）", 
        time: "2024.04", 
        intro_en: "An experimental video based on the others' works.", 
        intro_zh: "在copyloop这个合作作品中，我制作的实验影片。",
        small_img: "https://i.postimg.cc/vZMS0B1t/copy_Loop11.png", 
        large_img: "https://i.postimg.cc/9QVNLM4T/copy_Loop8.jpg" ,
        link: "DetailPages/Copyloop.html"
    },
    { 
        id: 4, year: 2024, 
        title_en: "Sentences Popping Machine", title_zh: "词句机器", 
        time: "2024.03", 
        intro_en: "What do I need? What should I do? The more guidance I get, the more confused I get in the maze with no signposts.", 
        intro_zh: "我需要什么？我要做什么？越多指引让我越是疑惑。",
        small_img: "https://i.postimg.cc/vZhMzCmw/SPWExhibition_View_20_2.jpg", 
        large_img: "https://i.postimg.cc/dV6vBg0k/SPWExhibition_View_29.jpg" ,
        link: "DetailPages/SentencesPoppingMachine.html"
    },
    { 
        id: 5, year: 2023, 
        title_en: "Ramadan Manual", title_zh: "斋月祭祀手册", 
        time: "2023.12", 
        intro_en: "This set of manuals is written from the perspective of a fictional futuristic machine.", 
        intro_zh: "这是从一个原创的虚构未来机器世界的角度编写的一组手册。",
        small_img: "https://i.postimg.cc/mgD7ZfKb/Final_05.jpg", 
        large_img: "https://i.postimg.cc/CxQkzrVf/Final_19.jpg" ,
        link: "DetailPages/RamadanManual.html"
    },
    { 
        id: 6, year: 2023, 
        title_en: "Flow", title_zh: "流", 
        time: "2023.09", 
        intro_en: "An experimental video.", 
        intro_zh: "一个体验感实验视频。",
        small_img: "https://i.postimg.cc/d1QsF4Zr/C028.jpg", 
        large_img: "https://i.postimg.cc/cH1xWXt1/C023.jpg" ,
        link: "DetailPages/Flow.html"
    },
    { 
        id: 7, year: 2023, 
        title_en: "The Same Underneath", title_zh: "同源", 
        time: "2023.09", 
        intro_en: "An installation using ANS's structure as inspiration.", 
        intro_zh: "一个以自主神经系统结构为灵感的装置作品。",
        small_img: "https://i.postimg.cc/fLWzsBSz/C022.jpg", 
        large_img: "https://i.postimg.cc/636WKY4v/C026.jpg" ,
        link: "DetailPages/TheSameUnderneath.html"
    },
    { 
        id: 8, year: 2023, 
        title_en: "Close Up A Bit", title_zh: "靠近一点", 
        time: "2023.10", 
        intro_en: "Communicate with me here without words, just get closer.", 
        intro_zh: "不要言语，靠近我。",
        small_img: "https://i.postimg.cc/vm0jgsZf/Close_Up_ABit_22.jpg", 
        large_img: "https://i.postimg.cc/MG94MSpy/Close_Up_ABit_29.jpg" ,
        link: "DetailPages/CloseUpABit.html"
    },
    { 
        id: 9, year: 2025, 
        title_en: "Path Drift", title_zh: "路径偏移", 
        time: "2025.11", 
        intro_en: "A third-person game exploring themes of discipline, diverse perspectives, and the meaning of freedom.", 
        intro_zh: "一个探讨规训、多样化视角、自由等议题的第三人称电脑游戏。",
        small_img: "https://i.postimg.cc/xC6MbgjV/Highres_Screenshot_2025_10_16_22_51_34.png", 
        large_img: "https://i.postimg.cc/JnpZBK7s/Highres_Screenshot_2025_10_19_22_11_54.png" ,
        link: "DetailPages/PathDrift.html"
    },
    // Add more items to fill the grid
];

// --- State Management ---
let currentLang = 'en'; 
let activeProjectId = null;
let currentFilterYear = 'All';

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Draggable Tag Logic
    const dragItem = document.getElementById('language-tag');
    let isDragging = false;
    let currentX; let currentY;
    let initialX; let initialY;
    let xOffset = 0; let yOffset = 0;

    dragItem.addEventListener("mousedown", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("mousemove", drag);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        if (e.target.closest('#language-tag') && !e.target.closest('button')) {
            isDragging = true;
        }
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            xOffset = currentX;
            yOffset = currentY;
            dragItem.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        }
    }

    // 2. Language Switching Logic
    const langButtons = document.querySelectorAll('.lang-btn');
    const langDisplay = document.getElementById('current-lang-display');
    const body = document.body;

    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent drag when clicking button
            const selectedLang = btn.dataset.lang;
            setLanguage(selectedLang);
        });
    });

    function setLanguage(lang) {
        currentLang = lang;
        
        // Update Tag Display
        langDisplay.textContent = lang === 'en' ? 'ENGLISH' : '中文';

        // Update Body Class for Fonts
        if (lang === 'en') {
            body.classList.remove('lang-zh');
            body.classList.add('lang-en');
        } else {
            body.classList.remove('lang-en');
            body.classList.add('lang-zh');
        }

        // Update UI Static Text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if(translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Refresh currently selected project text
        if(activeProjectId) {
            selectProject(activeProjectId);
        }
    }

    // 3. Grid Logic
    const workGridArea = document.getElementById('work-grid-area');
    const workTitle = document.getElementById('work-title');
    const workTime = document.getElementById('work-time');
    const workIntroText = document.getElementById('work-intro-text');
    const yearFilters = document.querySelectorAll('.year-filter');
    
    // --- ADDED: Get the background overlay element ---
    const bgOverlay = document.getElementById('bg-overlay');

    function renderGrid() {
        workGridArea.innerHTML = '';
        const filteredData = currentFilterYear === 'All'
            ? projectData
            : projectData.filter(p => p.year.toString() === currentFilterYear);

        // Create 16 slots for the inventory look
        for(let i=0; i<16; i++) {
            const card = document.createElement('div');
            card.className = 'work-card';

            // Check if we have a project for this slot
            if(i < filteredData.length) {
                const project = filteredData[i];
                card.dataset.id = project.id;
                
                // HTML Structure with your PNG Borders
                card.innerHTML = `
                    <div class="border-layer border-default"></div>
                    <div class="border-layer border-active"></div>
                    <div class="work-card-inner">
                        <img src="${project.small_img}" alt="project">
                    </div>
                `;
                
                card.addEventListener('click', () => selectProject(project.id));
                if (project.id === activeProjectId) card.classList.add('active');
            } else {
                // Empty Slot
                card.style.cursor = 'default';
                card.innerHTML = `<div class="border-layer border-default" style="opacity:0.2"></div>`;
            }
            workGridArea.appendChild(card);
        }
    }

    function selectProject(id) {
        const project = projectData.find(p => p.id === id);
        if (!project) return;

        activeProjectId = id;

        // Update Grid Styles
        document.querySelectorAll('.work-card').forEach(card => {
            card.classList.remove('active');
            if (parseInt(card.dataset.id) === id) card.classList.add('active');
        });

        // --- ADDED: Background Image Update Logic ---
        if (project.large_img) {
            bgOverlay.style.backgroundImage = `url('${project.large_img}')`;
            bgOverlay.style.opacity = '0.3'; // Make it visible (adjust opacity as needed)
        } else {
            bgOverlay.style.backgroundImage = 'none';
        }

        // Update Detail Panel Text based on Language
        workTitle.textContent = currentLang === 'en' ? project.title_en : project.title_zh;
        workTime.textContent = project.time;
        
        const intro = currentLang === 'en' ? project.intro_en : project.intro_zh;
        workIntroText.textContent = intro;

        // 处理 "View Detail" 按钮跳转逻辑
        const viewBtn = document.getElementById('view-detail-btn');
        if (viewBtn) {
            // 覆盖旧的点击事件，绑定新的跳转链接
            viewBtn.onclick = function() {
                if (project.link) {
                    window.location.href = project.link;
                } else {
                    console.warn("该项目没有配置跳转链接 (link property missing)");
                }
            };
        }
    }

    // 4. Year Filter
    yearFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            yearFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            currentFilterYear = filter.dataset.year;
            renderGrid();
        });
    });

    // Initialize
    renderGrid();
    if (projectData.length > 0) selectProject(projectData[0].id);
});


// --- 5. Dropdown Menu Click Logic (Updated for Multiple Menus) ---
// 获取所有的 nav-group (Videos 和 Others)
const navGroups = document.querySelectorAll('.nav-group');

navGroups.forEach(group => {
    group.addEventListener('click', function(e) {
        // 阻止点击事件冒泡到 document
        e.stopPropagation();
        
        // 逻辑：点击当前菜单时，先关闭所有“其他”已打开的菜单
        navGroups.forEach(otherGroup => {
            if (otherGroup !== group) {
                otherGroup.classList.remove('active');
            }
        });

        // 切换当前菜单的状态
        this.classList.toggle('active');
    });
});

// 点击屏幕空白处，关闭所有菜单
document.addEventListener('click', function() {
    navGroups.forEach(group => {
        group.classList.remove('active');
    });
});