const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 select-none">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3 ">
        <div className="social-icon cursor-pointer">
          <img
            src="https://avatars1.githubusercontent.com/u/9919?v=4"
            alt="github"
            className="w-1/2 h-1/2"
            draggable={false}
          />
        </div>
        <div className="social-icon cursor-pointer">
          <img
            src="https://cdn.pixabay.com/photo/2015/03/10/17/30/twitter-667462_640.png"
            alt="twitter"
            draggable={false}
            className="w-1/2 h-1/2"
          />
        </div>
        <div className="social-icon cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
            alt="instagram"
            draggable={false}
            className="w-1/2 h-1/2"
          />
        </div>
      </div>

      <p className="text-white-500">© 2025 Gopal Gawas. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
