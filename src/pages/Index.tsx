
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { ganeshaForms } from "@/data/ganeshaForms";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-purple-200/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-600 to-yellow-600 mb-6 animate-fade-in">
              Welcome to the world of Ganesha!
            </h1>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-200/50 animate-scale-in">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Hello friends! Have you ever wondered about Ganesha's many wonderful forms? 
                Join Pooja on a fun adventure to discover 32 different forms from Mudgala Purana 
                and corresponding stories and learn what makes each Ganesha so special. Let's explore together!
              </p>
            </div>
            <div className="mt-8 animate-bounce">
              <ArrowDown className="mx-auto h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Video Section */}
      <section className="py-16 bg-gradient-to-br from-white/80 to-orange-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-purple-700 mb-8 animate-fade-in">
              What Makes Ganesha So Special? Watch this Story!
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-200/50 animate-scale-in">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/OVIz8M8fva0"
                  title="What Makes Ganesha So Special?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:from-orange-600 hover:to-purple-700 text-lg px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href="https://www.youtube.com/@kathaswithpooja" target="_blank" rel="noopener noreferrer">
                  Watch More & Subscribe on YouTube! 🎬
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">
              Discover the 32 Forms of Ganesha
            </h2>
            <p className="text-xl text-gray-600">
              Click on any Ganesha to start your magical journey!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 max-w-7xl mx-auto">
            {ganeshaForms.map((form, index) => (
              <Link 
                key={form.id} 
                to={`/ganesha/${form.id}`}
                className="group block animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Card className="h-full border-2 border-orange-200 hover:border-purple-400 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg bg-gradient-to-br from-white to-orange-50/50">
                  <CardContent className="p-3">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-purple-100 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                      {form.imagePath ? (
                        <img 
                          src={form.imagePath} 
                          alt={`Illustration of ${form.name}`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="text-4xl">🐘</div>
                      )}
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-sm text-purple-700 group-hover:text-orange-600 transition-colors">
                        {form.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for More Adventures?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Pooja's YouTube channel for more amazing stories and spiritual adventures!
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-white text-purple-600 hover:bg-yellow-100 text-lg px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <a href="https://www.youtube.com/@kathaswithpooja" target="_blank" rel="noopener noreferrer">
              Watch More & Subscribe on YouTube! 🎬
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
