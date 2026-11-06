// Đường dẫn SheetDB của bạn
const WISH_API_LINK = "https://sheetdb.io/api/v1/jzh5wk0oxdvls";

// 1. Hàm lấy danh sách lời chúc (GET)
export const getWishes = async () => {
  try {
    const response = await fetch(WISH_API_LINK);
    const data = await response.json();
    
    // SheetDB có thể trả về mảng trực tiếp hoặc bọc trong { data: [...] }
    const resultList = Array.isArray(data) ? data : data?.data || [];
    return resultList; 
  } catch (error) {
    console.error("Lỗi khi lấy lời chúc:", error);
    return [];
  }
};

// 2. Hàm gửi lời chúc mới (POST) - Đã sửa cấu trúc data thành mảng [...]
export const sendWish = async ({ name, wish, isAttend }) => {
  try {
    const response = await fetch(WISH_API_LINK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        // SheetDB yêu cầu data phải là một mảng chứa object bên trong
        data: [
          {
            name: name,
            wish: wish,
            isAttend: isAttend,
            createdAt: Date.now(),
          }
        ],
      }),
    });

    // Kiểm tra nếu response không thành công (ví dụ lỗi 4xx, 5xx)
    if (!response.ok) {
      const errorText = await response.text();
      console.error("SheetDB Error Response:", errorText);
      return { status: "error" };
    }

    return await response.json();
  } catch (error) {
    console.error("Lỗi khi gửi lời chúc:", error);
    return { status: "error" };
  }
};