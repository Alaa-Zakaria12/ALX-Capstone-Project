// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#d8d3b3] p-5 w-full  flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left">
        <h1 className="font-cursive text-3xl text-black">fairytale</h1>
        <p className="text-sm mt-2">
          Made by <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/alaazakaria12"  className="text-blue-600">Alaa Zakaria</a>
        </p>
      </div>
      <p className="text-sm mt-4 md:mt-0">&copy; Fairytale 2024</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/alaazakaria12" className="text-black hover:text-gray-700 text-lg">
          <FaLinkedin />
        </a>
        <a target='_blank' rel="noreferrer" href="https://github.com/Alaa-Zakaria12" className="text-black hover:text-gray-700 text-lg">
          <FaGithub />
        </a>
        <a target='_blank' rel="noreferrer" href="https://x.com/alaa_zakaria0" className="text-black hover:text-gray-700 text-lg">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
