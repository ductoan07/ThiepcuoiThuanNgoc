import styles from "./guestbook.module.scss";
import classNames from "classnames/bind";
import { useInView } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import Gift from "../gift";
import Sad from "@/app/icons/sad";
import Angry from "@/app/icons/angry";
import Love from "@/app/icons/love";

import Confetti from "react-dom-confetti";
import { useDebounce } from "@/app/helper";
import validation from "@/app/helper/validation";
import { useRouter } from "next/navigation";
import {
  configConfetti,
  guestbookSection,
  WISH_API_LINK,
} from "@/app/configs/ui";
const cx = classNames.bind(styles);

function GuestBook({ fName }) {
  const ref = useRef();
  const viewRef = useRef();
  const isInView = useInView(ref, { once: true });
  const isInViewBox = useInView(viewRef, { once: false });
  const [isOpenGift, setIsOpenGift] = useState(false);
  const router = useRouter();

  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [willArrive, setWillArrive] = useState(null);

  const [active, setActive] = useState(false);

  const handleChangeRadio = (type) => {
    setWillArrive(type);
  };

  const handleSendMessage = useDebounce(() => {
    const isValid = validation({ name, wish, isAttend: willArrive });

    if (isValid) {
      const payload = {
        data: [
          {
            name: name,
            wish: wish,
            isAttend: willArrive,
            createdAt: Date.now(),
          },
        ],
      };

      fetch(WISH_API_LINK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(async (response) => {
          const textData = await response.text();
          try {
            // Cố gắng chuyển đổi kết quả sang JSON an toàn
            const jsonData = JSON.parse(textData);
            if (!response.ok) {
              throw new Error(jsonData.error || "Lỗi từ SheetDB");
            }
            return jsonData;
          } catch (err) {
            // Nếu server trả về HTML, in thẳng nội dung HTML/Lỗi đó ra console để kiểm tra
            console.error("Server trả về HTML thay vì JSON:", textData);
            throw new Error("Server từ chối kết nối hoặc trả về dữ liệu sai định dạng.");
          }
        })
        .then((data) => {
          setName("");
          setWish("");
          setWillArrive(null);
          setActive(true); // Kích hoạt hiệu ứng pháo giấy Confetti chúc mừng
        })
        .catch((error) => {
          console.error("Chi tiết lỗi gửi lời chúc:", error);
          alert("Gửi lời chúc thất bại! Hãy kiểm tra lại kết nối hoặc link API SheetDB.");
        });
    } else {
      alert("Vui lòng điền đầy đủ tên, lời chúc và trạng thái tham dự!");
    }
  }, 1300);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (active) {
        setActive(false);
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [active]);

  const renderIcon = (type) => {
    return type !== null && type === "yes" ? (
      <Love className={cx("emoij")} />
    ) : type === "no" ? (
      <Sad className={cx("emoij")} />
    ) : type === "or" ? (
      <Angry className={cx("emoij")} />
    ) : (
      ""
    );
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")} ref={viewRef}>
        <div className={cx("background")}>
          <h2 className={cx("title")}>Sổ lưu bút</h2>
        </div>
        <div className={cx("img-wrap")}>
          <div
            className={cx("img")}
            style={{
              backgroundImage: `url(${guestbookSection.image})`,
              transform: isInViewBox
                ? "translateX(0) rotate(0deg)"
                : " translateX(-200px) rotate(-180deg)",
              opacity: isInViewBox ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
          />
          <div className={cx("frame")} />
        </div>
      </div>
      <div className={cx("container")}>
        <input
          type="text"
          className={cx("iname")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tên hoặc nickname của bạn"
        />

        <textarea
          className={cx("iwish")}
          placeholder="Viết lời chúc ở đây ..."
          value={wish}
          onChange={(e) => setWish(e.target.value)}
        />
        <div className={cx("radio-box")}>
          <input
            className={cx("radio")}
            type="radio"
            id="yes"
            name="will_arrive"
            checked={willArrive === "yes"}
            onChange={() => handleChangeRadio("yes")}
            value="Sẽ đến dự tiệc"
          />
          <label htmlFor="yes">Sẽ đến dự tiệc</label>
          <input
            className={cx("radio")}
            type="radio"
            id="no"
            name="will_arrive"
            checked={willArrive === "no"}
            value="Không thể đến dự"
            onChange={() => handleChangeRadio("no")}
          />
          <label htmlFor="no">Không thể đến dự</label>
          <input
            className={cx("radio")}
            type="radio"
            name="will_arrive"
            id="or"
            checked={willArrive === "or"}
            value="Không biết"
            onChange={() => handleChangeRadio("or")}
          />
          <label htmlFor="or">Không biết</label>
        </div>
        <p className={cx("help-text")}>
          Nếu không thể gửi lời nhắn bằng trình duyệt trong{" "}
          <strong>Messenger</strong>, hãy thử mở trình duyệt bên ngoài (
          <strong>Chrome, Safari,...</strong>){" "}
        </p>

        <button
          ref={ref}
          className={cx("btn")}
          style={{
            transform: isInView ? "translateY(0)" : "translateY(80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) ",
          }}
          onClick={handleSendMessage}
        >
          {renderIcon(willArrive)}
          Gửi lời nhắn
          {renderIcon(willArrive)}
        </button>

        <button
          className={cx("btn")}
          style={{
            transform: isInView ? "translateY(0)" : "translateY(80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          onClick={() => {
            router.push(`/wish?name=${fName}`);
          }}
        >
          Xem lời chúc
        </button>
      </div>
      <Confetti active={active} config={configConfetti} />

      <Gift onClose={() => setIsOpenGift(false)} />
    </div>
  );
}

export default GuestBook;