document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const uploadBtn = document.getElementById('uploadBtn');
    const timeDisplay = document.getElementById('timeDisplay');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    
    // 点击上传区域触发文件选择
    uploadArea.addEventListener('click', function() {
        fileInput.click();
    });
    
    // 拖拽上传功能
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('active');
    });
    
    uploadArea.addEventListener('dragleave', function() {
        this.classList.remove('active');
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('active');
        
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            handleFileUpload();
        }
    });
    
    // 文件选择变化
    fileInput.addEventListener('change', handleFileUpload);
    
    // 处理文件上传
    function handleFileUpload() {
        if (fileInput.files.length > 0) {
            const fileName = fileInput.files[0].name;
            uploadArea.querySelector('h3').textContent = `已选择: ${fileName}`;
            uploadArea.querySelector('p').innerHTML = '文件已准备就绪<br>点击"开始处理视频"按钮上传';
            
            // 模拟处理效果
            uploadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 处理中...';
            uploadBtn.disabled = true;
            
            setTimeout(() => {
                uploadBtn.innerHTML = '<i class="fas fa-check"></i> 处理完成';
                uploadBtn.style.background = 'linear-gradient(45deg, #00c853, #009624)';
                
                // 更新播放器状态
                document.querySelector('.video-placeholder h2').textContent = fileName;
                document.querySelector('.video-placeholder p').innerHTML = '视频已准备好播放';
                document.querySelector('.video-placeholder i').className = 'fas fa-film';
                
                // 模拟播放时间
                timeDisplay.textContent = '00:00 / 34:25';
                
                // 启用控制按钮
                playBtn.style.background = 'rgba(100, 255, 218, 0.3)';
                pauseBtn.style.background = 'rgba(100, 255, 218, 0.3)';
                stopBtn.style.background = 'rgba(100, 255, 218, 0.3)';
            }, 3000);
        }
    }
    
    // 上传按钮点击事件
    uploadBtn.addEventListener('click', function() {
        if (!fileInput.files.length) {
            alert('请先选择视频文件');
            return;
        }
        handleFileUpload();
    });
    
    // 控制按钮事件
    playBtn.addEventListener('click', function() {
        timeDisplay.textContent = '02:42 / 34:25';
        timeDisplay.style.color = '#64ffda';
    });
    
    pauseBtn.addEventListener('click', function() {
        timeDisplay.textContent = '已暂停 | 02:42 / 34:25';
        timeDisplay.style.color = '#ff9e80';
    });
    
    stopBtn.addEventListener('click', function() {
        timeDisplay.textContent = '已停止 | 00:00 / 34:25';
        timeDisplay.style.color = '#ff5252';
    });
    // ===== 新增的定位功能交互代码 =====
const positioningOptions = document.querySelectorAll('.positioning-option');

positioningOptions.forEach(option => {
    option.addEventListener('click', function() {
        // 移除所有选项的active类
        positioningOptions.forEach(opt => opt.classList.remove('active'));
        
        // 为当前点击的选项添加active类
        this.classList.add('active');
        
        // 根据选择的选项执行不同操作
        if (this.querySelector('i').classList.contains('fa-image')) {
            console.log('定位画面功能被触发');
            // 这里可以添加定位画面的实际功能代码
        } else {
            console.log('定位旁白功能被触发');
            // 这里可以添加定位旁白的实际功能代码
        }
    });
});
});