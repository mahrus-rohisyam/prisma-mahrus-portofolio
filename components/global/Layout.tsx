import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: React.ReactNode;
  className?: string;
  disableNavbar?: boolean;
  disableFooter?: boolean;
};

function Layout({ children, className, disableFooter, disableNavbar }: Props) {
  return (
    <body className="mx-auto max-w-[1710px] flex flex-col min-h-screen lg:min-h-screen">
      {!disableNavbar && <Header />}
      <main className={`w-full min-h-[80vh] bg-base-300 ${className ? className : ""}`}>{children}</main>
      {!disableFooter && <Footer />}
    </body>
  );
}

export default Layout;
