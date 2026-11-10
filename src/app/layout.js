import GlobalContext from "./context";
import "./globals.css";
import Sublayout from "./subLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <GlobalContext>
          <Sublayout>{children}</Sublayout>
        </GlobalContext>
      </body>
    </html>
  );
}
