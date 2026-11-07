import images from "../images";

const WISH_API_LINK = "https://sheetdb.io/api/v1/k5tth7tpmq0tw"; // use mock api
const cdnLink =
  "https://res.cloudinary.com/ecsr9vbf/image/upload/f_auto,q_auto/v1793965992";

// common

// config Confetti

const configConfetti = {
  angle: "188",
  spread: 360,
  startVelocity: "50",
  elementCount: "133",
  dragFriction: 0.12,
  duration: 3000,
  stagger: "0",
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const weddingInfo = [
  {
    time: {
      date: "28/11",
      year: "2026",
      time: "16:00",
      full: "Thứ Bảy, Ngày 28 Tháng 11 năm 2026",
    },
    address: "388 đường Cách Mạng Tháng Tám, phường Sông Công, tỉnh Thái Nguyên",
    street: "đường cách mạng tháng 8",
    phone: "0989 842 123",
    posision: "bottom left",
  },
];

// December
const daysInMonth = [
  {
    title: "mon",
    days: [0, 2, 9, 16, 23, 30],
  },
  {
    title: "tue",
    days: [0, 3, 10, 17, 24, 31],
  },
  {
    title: "wed",
    days: [0, 4, 11, 18, 25, 0],
  },
  {
    title: "thu",
    days: [0, 5, 12, 19, 26, 0],
  },
  {
    title: "fri",
    days: [0, 6, 13, 20, 27, 0],
  },
  {
    title: "sat",
    days: [0, 7, 14, 21, 28, 0],
  },
  {
    title: "sun",
    days: [1, 8, 15, 22, 29, 0],
  },
];

// invitation intro (first section)
const introSection = {
  mainImage:
    "https://res.cloudinary.com/ecsr9vbf/image/upload/f_auto,q_auto/v1793965992/E17",
  brideFirstLetter: "T",
  groomFirstLetter: "N",
};

// profile section

const profileSection = {
  description:
    "Hôn nhân không phải là một điểm đến mà là một cuộc hành trình nơi mà hai người cùng xây dựng và phát triển",
  profiles: [
    {
      title: "bride",
      name: "Đoàn Thị Ngọc",
      avatar: `${cdnLink}/E19`,
      images: [`${cdnLink}/E19`, `${cdnLink}/E19`],
    },
    {
      title: "groom",
      name: "Ngụy Lý Tài Thuận",
      avatar: `${cdnLink}/E12`,
      images: [`${cdnLink}/E12`, `${cdnLink}/E12`],
    },
  ],
};

// invitation section

const invitationSection = {
  imgs: [`${cdnLink}/E26`, `${cdnLink}/E27`, `${cdnLink}/E28`],
  activeDay: 28,
};

// album section

const albumSection = {
  images: [
    `${cdnLink}/e30`,
    `${cdnLink}/e28`,
    `${cdnLink}/e25`,
    `${cdnLink}/e18`,
    `${cdnLink}/e7`,
    `${cdnLink}/e16`,
  ],
};

// guestbook section

const guestbookSection = {
  image: `${cdnLink}/e10`,
  time: "28/11/2026",
};

// gift section

const giftSection = {
  image:
    `${cdnLink}/E2`,
  brideBank: {
    name: "Đoàn Thị Ngọc",
    bankName: "Vietinbank ",
    qr: images.qr2.default.src,
    bankNumber: "107880386791",
  },
  groomBank: {
    name: "Ngụy Lý Tài Thuận",
    bankName: "MB BANK",
    qr: images.qr.default.src,
    bankNumber: "9999999996654",
  },
};

// timer
const timerSection = {
  weddingTime: {
    year: 2026,
    day: 28,
    month: 11,
  },
};

// final section

const finalSection = {
  images: [
    `${cdnLink}/E24`,
    `${cdnLink}/E33`,
    `${cdnLink}/E32`,
    `${cdnLink}/E13`,
  ],
};

// Album Page

const albumPage = {
  topImage: `${cdnLink}/E5`,
  bottomImage: `${cdnLink}/E24`,
  mainImage: `${cdnLink}/e18`,
};

const albumA = [
  {
    imgs: [
      {
        id: 1,
        img: `${cdnLink}/e29`,
      },

      {
        id: 2,
        img: `${cdnLink}/e30`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 3,
        img: `${cdnLink}/e31`,
      },
      {
        id: 4,
        img: `${cdnLink}/e32`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 5,
        img: `${cdnLink}/e33`,
      },
      {
        id: 6,
        img: `${cdnLink}/e34`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 7,
        img: `${cdnLink}/e35`,
      },
      {
        id: 8,
        img: `${cdnLink}/e36`,
      },
    ],
  },
];

const albumB = [
  {
    imgs: [
      {
        id: 9,
        img: `${cdnLink}/e10`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 10,
        img: `${cdnLink}/e9`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 11,
        img: `${cdnLink}/e7`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 12,
        img: `${cdnLink}/e11`,
      },
    ],
  },
];

const albumC = [
  {
    imgs: [
      {
        id: 13,
        img: `${cdnLink}/e1`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 14,
        img: `${cdnLink}/e5`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 15,
        img: `${cdnLink}/e4`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 16,
        img: `${cdnLink}/e3`,
      },
    ],
  },
];

const albums = [...albumA, ...albumB, ...albumC]; // for preview

const metaData = {
  main: {
    title: "Báo Hỉ Thuận - Ngọc | Kính Mời",
    graphImage:
      "https://res.cloudinary.com/ecsr9vbf/image/upload/f_auto,q_auto/v1793965989/E14.jpg",
  },

  wish: {
    title: "Tất cả lời chúc dành cho Thuận - Ngọc",
    graphImage:
      "https://res.cloudinary.com/ecsr9vbf/image/upload/f_auto,q_auto/v1793965989/E14.jpg",
  },

  invitation: {
    title: "Báo Hỉ | Form Nhập Tên",
    graphImage:
      "https://res.cloudinary.com/ecsr9vbf/image/upload/f_auto,q_auto/v1793965989/E14.jpg",
  },
  album: {
    title: "Album của Thuận - Ngọc",
    graphImage:
      "https://res.cloudinary.com/ecsr9vbf/image/upload/f_auto,q_auto/v1793965989/E14.jpg",
  },
};

export {
  weddingInfo,
  daysInMonth,
  albumPage,
  albumA,
  albumB,
  albumC,
  albums,
  configConfetti,
  introSection,
  profileSection,
  invitationSection,
  albumSection,
  guestbookSection,
  giftSection,
  timerSection,
  finalSection,
  WISH_API_LINK,
  metaData,
};
