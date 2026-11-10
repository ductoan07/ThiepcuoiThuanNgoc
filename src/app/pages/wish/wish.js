"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import classNames from "classnames/bind";
import styles from "./wish.module.scss";
import Link from "next/link";
import Love from "@/app/icons/love";
import Sad from "@/app/icons/sad";
import Angry from "@/app/icons/angry";
import wishArray from "@/api/wishes";
import { WISH_API_LINK } from "@/app/configs/ui";

const cx = classNames.bind(styles);

function WishContent() {
  const [wishes, setWishes] = useState([]);
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "You";

  useEffect(() => {
    const compareByDate = (a, b) => {
      return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    };

    if (!WISH_API_LINK) {
      const safeData = Array.isArray(wishArray) ? [...wishArray] : [];
      safeData.sort(compareByDate);
      setWishes(safeData);
    } else {
      fetch(WISH_API_LINK)
        .then((response) => response.json())
        .then((data) => {
          // Xử lý linh hoạt dữ liệu trả về từ SheetDB (mảng hoặc object bọc data)
          const resultList = Array.isArray(data) ? data : data?.data || [];
          const sortedData = [...resultList].sort(compareByDate);
          setWishes(sortedData);
        })
        .catch((error) => {
          console.error("Error fetching wishes:", error);
        });
    }
  }, []);

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>ALL WISHES FOR YOUU</h2>

      <div className={cx("statistic")}>
        <div className={cx("s-wrap")}>
          <Love className={cx("icon")} />
          <span className={cx("number")}>
            {wishes.length > 0
              ? wishes.filter((w) => w?.isAttend === "yes").length
              : 0}
          </span>
        </div>
        <div className={cx("s-wrap")}>
          <Sad className={cx("icon")} />
          <span className={cx("number")}>
            {wishes.length > 0
              ? wishes.filter((w) => w?.isAttend === "no").length
              : 0}
          </span>
        </div>
        <div className={cx("s-wrap")}>
          <Angry className={cx("icon")} />
          <span className={cx("number")}>
            {wishes.length > 0
              ? wishes.filter((w) => w?.isAttend === "or").length
              : 0}
          </span>
        </div>
      </div>

      <div className={cx("container")}>
        {wishes.length > 0 ? (
          wishes.map((w, index) => {
            return (
              <div className={cx("wish")} key={w?.id || index}>
                <span className={cx("name")}>{w?.name}</span>
                {/* Hỗ trợ linh hoạt cả key wish hoặc content từ SheetDB */}
                <p className={cx("content")}>{w?.wish || w?.content}</p>
                <span className={cx("isAttend")}>
                  Tham dự :{" "}
                  {w?.isAttend === "yes"
                    ? "Sẽ đến dự tiệc"
                    : w?.isAttend === "no"
                    ? "Không thể đến dự"
                    : "Không biết"}
                </span>
              </div>
            );
          })
        ) : (
          <p className={cx("nodata")}>
            Chúng tôi rất vui nếu nhận được lời chúc từ các bạn
          </p>
        )}
      </div>

      <Link href={`/?name=${name}`} className={cx("link")}>
        Quay lại trang chính
      </Link>
    </div>
  );
}

// Bọc Suspense để tối ưu Next.js App Router khi dùng useSearchParams
function Wish() {
  return (
    <Suspense fallback={<div className={cx("wrapper")}><p>Đang tải lời chúc...</p></div>}>
      <WishContent />
    </Suspense>
  );
}

export default Wish;