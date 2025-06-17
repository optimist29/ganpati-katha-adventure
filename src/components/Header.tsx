
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-200/50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-3xl">🐘</div>
            <div>
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600">
                32 Forms of Ganesha
              </h1>
              <p className="text-sm text-gray-600">with Kathas with Pooja</p>
            </div>
          </Link>
          
          <Button 
            asChild
            className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white rounded-full px-6"
          >
            <a href="https://www.youtube.com/@kathaswithpooja" target="_blank" rel="noopener noreferrer">
              Subscribe 🎬
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
