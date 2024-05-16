import { useEffect } from "react";

import Background from "./components/Background";
import CustomParticle from "./components/CustomParticle";
import ProfileCard from "./components/ProfileCard";
import MeetUpInfo from "./components/MeetUpInfo";
import { MeetUpInfoType } from "./types";
import useConfetti from "./hooks/useConfetti";
import confetti from "canvas-confetti";

function App() {
  const queryParameters = new URLSearchParams(window.location.search)
  const info: MeetUpInfoType = {
    date: queryParameters.get("date") || undefined,
    place: queryParameters.get("place") || undefined,
    eventName: queryParameters.get("eventName") || undefined,
  }
  // const [mobileConfetti, desktopConfetti] = useConfetti();

  useEffect(() => {
    confetti({
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
  }, []);


  return (
    <>
      <div className="w-screen text-white z-10 absolute">
        <Background styleName="right">
          <div className="my-5 md:my-20 mx-1 p-3">
            <ProfileCard />
          </div>
        </Background>
        {info && (
          <Background styleName="left">
            <div className="my-5 md:my-20 mx-1 p-3">
              <MeetUpInfo info={info} />
            </div>
          </Background>
        )}
      </div>
      <CustomParticle />
    </>
  );
}

export default App
