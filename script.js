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
    

    
    let isProcessing = false;
    let selectedFile = null;

    // 文件选择处理
    function handleFileSelect() {
        if (fileInput.files.length > 0) {
            selectedFile = fileInput.files[0];
            uploadArea.querySelector('h3').textContent = `已选择: ${selectedFile.name}`;
            uploadArea.querySelector('p').textContent = '点击"开始处理"按钮上传';
            
            // 重置按钮状态
            uploadBtn.innerHTML = '<i class="fas fa-upload"></i> 开始处理';
            uploadBtn.style.background = 'linear-gradient(45deg, #00b4db, #0083b0)';
            uploadBtn.disabled = false;
        }
    }

    // 上传处理
    function handleFileUpload() {
        if (!selectedFile || isProcessing) return;
        
        isProcessing = true;
        uploadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 处理中...';
        uploadBtn.disabled = true;
        
        setTimeout(() => {
            isProcessing = false;
            // 处理完成逻辑
        }, 3000);
    }
    // 修改事件监听
    fileInput.addEventListener('change', handleFileSelect);
    uploadBtn.addEventListener('click', handleFileUpload);

    // 拖拽逻辑调整
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('active');
        
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            handleFileSelect(); // 仅更新UI
        }
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
