import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { ganeshaForms } from "@/data/ganeshaForms";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GaneshaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const ganesha = ganeshaForms.find(form => form.id === id);

  if (!ganesha) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">Ganesha form not found</h1>
          <Link to="/" className="text-orange-600 hover:text-orange-700 underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-yellow-50">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back to Home */}
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-purple-600 hover:text-orange-600 transition-colors mb-8 group"
          >
            <ArrowUp className="h-4 w-4 rotate-[270deg] group-hover:translate-x-[-4px] transition-transform" />
            <span>Back to all forms</span>
          </Link>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Title */}
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-600 to-yellow-600 mb-4">
                {ganesha.name}
              </h1>
            </div>

            {/* Illustration */}
            <div className="flex justify-center">
              {ganesha.imagePath ? (
                <div className="w-80 h-80 bg-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-orange-300/50 overflow-hidden">
                  <img 
                    src={ganesha.imagePath} 
                    alt={`Beautiful illustration of ${ganesha.name}`}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              ) : (
                <div className="w-64 h-64 bg-gradient-to-br from-orange-200 to-purple-200 rounded-2xl flex items-center justify-center text-8xl shadow-lg border-4 border-orange-300/50">
                  🐘
                </div>
              )}
            </div>

            {/* Tagline */}
            <Card className="bg-gradient-to-r from-orange-100 to-purple-100 border-2 border-orange-200">
              <CardContent className="p-6 text-center">
                <p className="text-2xl font-semibold text-purple-700">
                  {ganesha.tagline}
                </p>
              </CardContent>
            </Card>

            {/* Story Time with Pooja */}
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-purple-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
                  📚 Story Time with Pooja
                </h2>
                <div className="space-y-4">
                  {ganesha.story.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-relaxed text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* YouTube Video */}
            {ganesha.videoId && (
              <Card className="bg-white/80 backdrop-blur-sm border-2 border-orange-200">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">
                    🎬 Watch the Story
                  </h2>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${ganesha.videoId}`}
                      title={`${ganesha.name} Story`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Let's Learn More Section */}
            <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
                  🌟 Let's Learn More!
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/60 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-600 mb-3">Sacred Mantra</h3>
                    <p className="text-lg font-semibold text-gray-800 mb-2">{ganesha.mantra}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-600 mb-3">Meaning</h3>
                    <p className="text-lg text-gray-700">{ganesha.meaning}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white text-xl px-8 py-6 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href="https://www.youtube.com/@kathaswithpooja" target="_blank" rel="noopener noreferrer">
                  Watch More & Subscribe on YouTube! 🎬
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GaneshaDetail;
