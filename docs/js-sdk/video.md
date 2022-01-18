# 视频

## 视频录制

打开视频录制界面，录制成功后，返回本地视频文件路径。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持 | 支持 |


```js
w6s.video.startVideoRecoder({
  duration: 10, 
  quality: 1,
  sync_system_album: false,
  front: false,
  success: function(res) {},
  fail: function(err) {},
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| duration | Number | 视频录制最大录制时长,单位秒(默认为10秒) |
| quality | Number | 视频录制清晰度, "0" > 高清; "1" > 一般; "2" > 流畅(默认为一般) |
| sync_system_album | Boolean | 控制是否同步到系统相册, 可不填, 默认为false |
| front | Boolean | 控制摄像头是否为前置摄像头, 可不填, 默认为false |

**返回数据**

| 参数 | 说明 |
| - | - | 
| info.video_path | 视频的本地路径 |
| info.video_duration | 视频长度 |
| info.video_size | 返回视频大小，单位是K |
| info.video_thumbnail | 首帧图片base64数据 |


## 视频播放

通过传入视频地址，打开客户端的视频播放窗口。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | `v4.11.6+`  | `v4.11.6+` |


```js
w6s.video.playVideo({
  url: 'https://test.com/video/xx.mp4',
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| url | String | 视频的地址 |
