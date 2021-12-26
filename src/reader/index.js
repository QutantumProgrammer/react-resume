/**
 * 用户必须有点击（鼠标或者键盘，任何点击均可）才可以自动播放音频，或者相应浏览器策略允许自动播放
 *  - chrome:"chrome://flags/#autoplay-policy"设置"Autoplay policy"选项
 *  - Firefox:"media.autoplay.default"设置0
 *
 * 涉及队列串行，封装问题未使用vue组件形式而使用直接dom操作的形式
 */

import axios from 'axios';

const READER_DOM_ID = '_text-reader';
const OPEN_API_URL = 'https://tts.baidu.com/text2audio';
// const OPEN_API_URL = 'https://tts.baidu.com/text2audio?cuid=baike&lan=ZH&ctp=1&pdt=301&vol=9&rate=32&per=4&tex=%E8%AF%95%E8%AF%95%E8%BF%99%E4%B8%AA%E3%80%82';
const LAN = 'ZH';
const IE = 'UTF-8';
const SPEED = 5; // 朗读速度
const PER = 5; // 声色 5 女声
const PDT = 301; // ??
const CTP = 1; // ??
const CUID= 'baike'; // ??

// rate=32?  &vol=9

export default {
  read,
};

const messageQueue = [];
let audioDomHandle = null;

/**
 * 串行播放音频
 * 根据当前队列产生一个队列副本（需要等待的消息），之后在总队列中加入自己供后续消息使用，返回两个promise对象，分别为播放音频前与音频播放结束后
 */
function read (text) {
  const selfMessageQueue = [...messageQueue];
  const getAudioBlobPromise = getAudioFromOpenApi(text);
  const selfMessageQueueFinishedPromise = Promise.all(selfMessageQueue).catch(err => err); // catch 之前所有任务的错误，否则错误会打断语音读取队列
  const queueAndFileReadyPromise = selfMessageQueueFinishedPromise.then(() => getAudioBlobPromise);
  const audioDomFileLoadedPromise = queueAndFileReadyPromise.then(audioBlob => (constructAudioDomByBlob(audioBlob)));
  const playEndedPromise = audioDomFileLoadedPromise.then(() => (play()));
  messageQueue.push(playEndedPromise);
  return {
    before: audioDomFileLoadedPromise,
    after: playEndedPromise,
  };
}

function constructAudioDomByBlob (audioBlob) {
  if (!audioBlob) return null;
  const audioDom = getAudioDom();
  let resolver = null;
  const promise = new Promise(resolve => (resolver = resolve));
  audioDom.onloadeddata = () => (resolver());
  audioDom.src = URL.createObjectURL(audioBlob);
  // audioDom.srcObject = audioBlob.data;
  return promise;
}

function play () {
  return new Promise(resolve => {
    audioDomHandle.play().catch(() => {
      resolve();
      messageQueue.shift();
    });
    audioDomHandle.onended = function () {
      resolve();
      messageQueue.shift();
    };
  });
}

function getAudioDom () {
  return audioDomHandle || createAudioDom();
}

function createAudioDom () {
  const audioDom = document.createElement('audio');
  audioDom.id = READER_DOM_ID;
  document.body.appendChild(audioDom);
  audioDomHandle = audioDom;
  return audioDomHandle;
}

function getAudioFromOpenApi (text) {
  return axios.get(OPEN_API_URL, {
    params: {
      lan: LAN,
      ie: IE,
      spd: SPEED,
      tex: text,
      per: PER,
      pdt: PDT,
      ctp: CTP,
      cuid: CUID,
    },
    responseType: 'blob',
  }).then(res => {
    if (res.type === 'application/json') {
      return new Promise((resolve, reject) => {
        const reader = new window.FileReader();
        reader.onload = function (e) {
          const error = JSON.parse(e.target.result);
          reject(error.err_msg);
        };
        reader.readAsText(res);
      });
    }

    return res.data;
  });
}

// function
