import "@/styles/globals.css";
export const metadata = {
  title: "Oğuzhan Aydınay",
  description: "Fullstack Developer",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
