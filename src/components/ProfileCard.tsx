import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRectangleAd, faBlog, faHouse } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div
        className="min-h-[190px] lg:min-w-[50%] min-w-[200px] rounded-[50%] mx-auto relative text-center"
      >
        <img
          key="icon"
          src="icon.jpeg"
          className="h-[190px] lg:h-[90%] rounded-[50%] absolute lg:left-1/2 lg:transform lg:translate-x-[-50%]"
        />
      </div>
      <div className="lg:ml-10 flex flex-col">
        <h2 className="lg:text-3xl text-xl mt-5 text-center lg:text-left">
          馬場 海好
        </h2>
        <h3 className="lg:text-2xl text-md mt-1 text-center lg:text-left">
          静岡大学 狩野研究室所属
        </h3>
        <div className="flex align-center justify-center my-2">
          <p>
            <a
              className="cursor-pointer text-xl"
              href="https://lovelovetrb.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faHouse} />
            </a>
          </p>
          <p>
            <a
              className="cursor-pointer text-xl ml-5"
              href="https://twitter.com/lovelovetrb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </p>
          <p>
            <a
              className="cursor-pointer text-xl  ml-5"
              href="https://github.com/lovelovetrb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
          <p>
            <a
              className="cursor-pointer text-xl  ml-5"
              href="https://risu-note.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faBlog} />
            </a>
          </p>
          <p>
            <a
              className="cursor-pointer text-xl ml-5"
              href="https://lovelovetrb.fanbox.cc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faRectangleAd} />
            </a>
          </p>
        </div>
        <p className="mt-2">
          専門分野は自然言語処理です。
        </p>
        <p className="mt-1">
          その他、Webアプリケーション開発、電子工作なども行っております！
        </p>
        <p className="mt-1">
          Twitterやブログもやっておりますので、ぜひフォローしてください！
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;

