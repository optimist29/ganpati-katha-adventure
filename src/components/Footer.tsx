
const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-2xl">🐘</div>
          <h3 className="text-xl font-bold">32 Forms of Ganesha</h3>
          <p className="text-purple-200">An Interactive Adventure with Kathas with Pooja</p>
          
          <div className="flex justify-center space-x-6 text-sm">
            <a 
              href="https://www.youtube.com/@kathaswithpooja" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-300 transition-colors"
            >
              YouTube
            </a>
            <a 
              href="https://instagram.com/kathaswithpooja/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-300 transition-colors"
            >
              Instagram
            </a>
          </div>
          
          <div className="border-t border-purple-700 pt-4 text-sm text-purple-300">
            <p>© 2025 Kathas with Pooja. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
