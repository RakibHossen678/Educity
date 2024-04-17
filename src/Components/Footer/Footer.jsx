const Footer = () => {
  return (
    <div>
      <footer className=" border-t-2 border-t-black">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0 py-4">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <h1>© 2024 Edusity. All rights reserved.</h1>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <a  href="#">
                Terms of Services
              </a>
            </li>
            <li>
              <a  href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
