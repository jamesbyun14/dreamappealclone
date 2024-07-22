import "./globals.css";

export const metadata = {
  title: "dreamappeal clone",
  description: "Made by james",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <p className="text-center pt-6">Made by 지명 ✨</p>
      </body>
    </html>
  );
}
