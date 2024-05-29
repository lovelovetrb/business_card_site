import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRectangleAd, faBlog, faHouse } from "@fortawesome/free-solid-svg-icons";

const linkList = [
  {
    href: "https://lovelovetrb.com",
    icon: faHouse,
  },
  {
    href: "risu-note.net",
    icon: faBlog,
  },
  {
    href: "https://github.com/lovelovetrb",
    icon: faGithub,
  },
  {
    href: "https://twitter.com/lovelovetrb",
    icon: faTwitter,
  },
  {
    href: "https://lovelovetrb.fanbox.cc/",
    icon: faRectangleAd,
  },
]
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
          {linkList.map((link) => (
            <p>
              <a
                key={link.href}
                className="cursor-pointer text-xl ml-5"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            </p>
          ))}
        </div>
        <p className="mt-2">
          専門分野は自然言語処理です。
        </p>
        <p className="mt-1">
          その他、Webアプリケーション開発、電子工作なども興味があります！
        </p>
        <p className="mt-1">
          X(Twitter)やGithubのフォローお願い致します！
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;

