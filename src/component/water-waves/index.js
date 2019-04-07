const WAVE_FIX_HEIGHT = 2;
const BEZIER_CURVE_CONTROL_POINT_Y_FIX = 16;
const WAVE_CREST = BEZIER_CURVE_CONTROL_POINT_Y_FIX / 2;
const DEFAULT_BG_COLOR = {
  0: 'rgba(42, 220, 222, 0.16)',
  0.5: 'rgba(12, 162, 210, 0.16)'
};
const DEFAULT_PERCENT = 0.5;
const DEFAULT_CLIP_RADIUS_FIX = 2;
const PI = Math.PI;
const windowHandle = window;

const getWaveQuantity = Symbol('privateFunction');
const getUnitLength = Symbol('privateFunction');
const clipCanvas = Symbol('privateFunction');
const setWaveColor = Symbol('privateFunction');
const computeWaveHeight = Symbol('privateFunction');
const dynamicalWaves = Symbol('privateFunction');
const drawWave = Symbol('privateFunction');
const computeAnimationProgress = Symbol('privateFunction');
const getWavePointX = Symbol('privateFunction');

class WaterWaves {
  constructor({id, wavesConfig, percent = DEFAULT_PERCENT, clipRadiusFix = DEFAULT_CLIP_RADIUS_FIX}) {
    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext('2d');
    this.percent = percent;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.radius = this.width / 2;
    this.centerPoint = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
    };
    this.wavesConfig = wavesConfig.map(item => {
      return {
        waveQuantity: this[getWaveQuantity](item.zoom),
        unitLength: this[getUnitLength](item.zoom),
        sensibility: item.sensibility,
        progressCount: item.sensibility,
        color: item.color,

      };
    });

    this[clipCanvas](clipRadiusFix);
    this[computeWaveHeight]();
    this[dynamicalWaves]();
  }

  [getWaveQuantity](zoom) {
    !zoom && (zoom = 1);
    return Math.ceil(1 / zoom) + 1;
  }

  [getUnitLength](zoom) {
    !zoom && (zoom = 1);
    return this.width * zoom;
  }

  [clipCanvas](clipRadiusFix) {
    this.context.arc(
      this.centerPoint.x,
      this.centerPoint.y,
      this.centerPoint.x - clipRadiusFix,
      0,
      Math.PI * 2,
    );
    this.context.clip();
  }

  [dynamicalWaves]() {
    let {context, wavesConfig} = this;
    context.clearRect(0, 0, this.width, this.height);
    wavesConfig.forEach(item => {
      item.progressCount++;
      if (item.progressCount > item.sensibility) item.progressCount = 0;
      this[drawWave]({
        unitLength: item.unitLength,
        animationProgress: this[computeAnimationProgress](item.progressCount, item.sensibility),
        quantity: item.waveQuantity,
        color: item.color,
      });
    });

    this.parmaryLoopId = windowHandle.requestAnimationFrame(this[dynamicalWaves].bind(this));
  }

  [drawWave]({unitLength, animationProgress, quantity, color}) {
    let {context} = this;
    this[setWaveColor](color);
    context.beginPath();
    context.moveTo(-unitLength + unitLength * animationProgress, this.waveHeight);

    for (let i = 0; i < quantity; i++) {
      context.quadraticCurveTo(
        this[getWavePointX](unitLength, i + 1, 1) + unitLength * animationProgress,
        this.waveHeight - BEZIER_CURVE_CONTROL_POINT_Y_FIX,
        this[getWavePointX](unitLength, i + 1, 2) + unitLength * animationProgress,
        this.waveHeight
      );
      context.quadraticCurveTo(
        this[getWavePointX](unitLength, i + 1, 3) + unitLength * animationProgress,
        this.waveHeight + BEZIER_CURVE_CONTROL_POINT_Y_FIX,
        this[getWavePointX](unitLength, i + 1, 4) + unitLength * animationProgress,
        this.waveHeight
      );
    }

    context.lineTo(unitLength + unitLength * (quantity - 1) + unitLength * animationProgress, this.height)
    context.lineTo(-unitLength + unitLength * animationProgress, this.height);
    context.closePath();
    context.fill();
  }

  [computeWaveHeight]() {
    this.waveHeight = this.height - this.radius * (1 - Math.cos(this.percent * PI)) + WAVE_CREST + WAVE_FIX_HEIGHT;
  }

  [getWavePointX](unitLength, num, position) {
    return (num + position / 4 - 2) * unitLength;
  }

  [setWaveColor](bgColor = DEFAULT_BG_COLOR) {
    this.gradient = this.context.createLinearGradient(0, this.height, 0, this.height * this.percent);
    for (let key in bgColor) {
      this.gradient.addColorStop(parseFloat(key), bgColor[key]);
    }
    this.context.fillStyle = this.gradient;
  }

  [computeAnimationProgress](current, total) {
    return current / total;
  }

  updateWaveHeight(percent) {
    this.percent = percent;
    this[computeWaveHeight]();
  }

  clear() {
    windowHandle.cancelAnimationFrame(this.parmaryLoopId);
  }
}

export default WaterWaves;