import confetti from "canvas-confetti";

const useConfetti = () => {
  const mobileConfetti = confetti({
    // パーティクルの数（デフォルト50)
    particleCount: 250,
    // 発射角度(デフォルト90度)
    angle: 90,
    // 発射範囲(デフォルト45度)
    spread: 180,
    // 発射速度 (default: 45)
    startVelocity: 90,
    // 失速具合 デフォルト0.9
    decay: 0.8,
    //重力 (0-1)
    gravity: 0.45,
    // default:0 数値を上げると横に流れる
    drift: 0,
    // confettiが動く長さ (default: 200)
    ticks: 100,
    // スタート位置
    origin: {
      x: 0.5,
      y: 1
    },
    // 残る時間
    duration: 100000,
    // z-indexを指定(default:100)
    zIndex: 100
  });
  const desktopConfetti = confetti({
    // パーティクルの数（デフォルト50)
    particleCount: 250,
    // 発射角度(デフォルト90度)
    angle: 90,
    // 発射範囲(デフォルト45度)
    spread: 800,
    // 発射速度 (default: 45)
    startVelocity: 90,
    // 失速具合 デフォルト0.9
    decay: 0.8,
    //重力 (0-1)
    gravity: 0.45,
    // default:0 数値を上げると横に流れる
    drift: 0,
    // confettiが動く長さ (default: 200)
    ticks: 100,
    // スタート位置
    origin: {
      x: 0.5,
      y: 1
    },
    // 残る時間
    duration: 100000,
    // z-indexを指定(default:100)
    zIndex: 100
  });
  return [mobileConfetti, desktopConfetti];
}

export default useConfetti;
