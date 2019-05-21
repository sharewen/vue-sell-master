export default function setMedia(video, scale = 0.8) {
  // 设置poster属性：（非本地视频资源会有跨域截图问题）
  video.addEventListener('loadeddata', function(e) {
    // 拿到图片
    let canvas = document.createElement('canvas')
    canvas.width = video.videoWidth * scale
    canvas.height = video.videoHeight * scale
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
    let src = canvas.toDataURL('image/png')
    // 设置属性
    video.setAttribute('poster', src)
  })
}