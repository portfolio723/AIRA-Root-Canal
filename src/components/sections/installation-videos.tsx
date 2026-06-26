import { Play } from 'lucide-react';

export function InstallationVideos() {
  const videos = [
    { title: "Industrial Rooftop Solar", src: "/v1.mp4", duration: "0:45" },
    { title: "Grid Sync Process", src: "/v2.mp4", duration: "1:20" },
    { title: "Client ROI Testimonial", src: "/v3.mp4", duration: "0:55" }
  ];

  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6 font-headline tracking-tighter">
            Watch a Zenith Energy Installation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, idx) => (
            <div key={idx} className="group relative rounded-[24px] overflow-hidden bg-[#111111] shadow-soft aspect-video cursor-pointer">
              <video 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                poster={`https://picsum.photos/seed/video${idx}/800/450`}
              >
                <source src={video.src} type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Play className="h-6 w-6 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-lg mb-1">{video.title}</p>
                <p className="text-white/60 text-sm">{video.duration} Minutes</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
