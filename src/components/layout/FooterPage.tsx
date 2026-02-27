import { Link } from "react-router";

const FooterPage = () => {
  return (
    <>
      <footer className="bg-black/30 text-blue-400 backdrop-blur-md fixed w-full z-50 bottom-0 left-0 border-b border-white/10 flex items-center justify-center gap-7 h-[6vh]">
        <p>© 2026 Library Management System</p>
        <Link
          className="hover:cursor-pointer underline underline-blue-400 "
          target="_blank"
          to="https://github.com/HamidSirat20">
          Github
        </Link>
        <Link
          className="hover:cursor-pointer underline underline-blue-400 "
          target="_blank"
          to="https://www.linkedin.com/in/hamid-eshaqzada-b67a5bb9/">
          LinkedIn
        </Link>
      </footer>
    </>
  );
};

export default FooterPage;
