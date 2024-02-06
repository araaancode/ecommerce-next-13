import "./globals.css";


export const metadata = {
  title: "فروشگاه",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/128/11012/11012566.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl">
      <body>
        <nav>
          <ul>
            <li>
              <a className="active" href="/">خانه</a>
            </li>

            <li>
              <a href="/products">محصولات</a>
            </li>

            <li>
              <a href="/about">درباره ما</a>
            </li>

            <li>
              <a href="/contact">تماس با ما</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
