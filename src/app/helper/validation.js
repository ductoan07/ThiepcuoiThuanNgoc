export default function validation({ name, wish, isAttend }) {
  // Đảm bảo name và wish không bị undefined/null trước khi gọi .trim()
  const safeName = (name || "").trim();
  const safeWish = (wish || "").trim();

  if (safeName === "") {
    alert("Vui lòng cho chúng tôi biết tên hoặc nickname của bạn !");
    return false;
  } else if (safeName.length > 30) {
    alert("Vui lòng nhập tên của bạn dưới 30 kí tự");
    return false;
  }

  if (safeWish === "") {
    alert("Vui lòng nhập lời chúc của bạn ! ");
    return false;
  } else if (safeWish.length > 300) {
    alert("Vui lòng nhập lời chúc của bạn dưới 300 kí tự");
    return false;
  } else if (safeWish.length < 10) { // Giảm xuống 10 kí tự để khách thoải mái gửi lời chúc ngắn
    alert("Vui lòng nhập lời chúc của bạn trên 10 kí tự");
    return false;
  }

  if (isAttend === null || isAttend === undefined) {
    alert("Hãy cho chúng tôi biết bạn có đến tham dự hay không !");
    return false;
  }

  return true;
}