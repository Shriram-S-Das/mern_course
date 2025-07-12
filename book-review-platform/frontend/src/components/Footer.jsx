import { Button } from "./ui/button";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="py-2 px-4 bg-slate-100 z-30 sm:flex items-center gap-2 border-t border-slate-200  sm:bg-white dark:bg-zinc-950 dark:border-zinc-800">
      <h1 className="flex justify-center items-center gap-2 pb-2 truncate">
        <span>happy</span>
        <span className="text-xl font-medium tracking-tight truncate transition-colors dark:text-zinc-50">
          Reading
        </span>
      
      </h1>
        
      
    </footer>
  );
};

export default Footer;
