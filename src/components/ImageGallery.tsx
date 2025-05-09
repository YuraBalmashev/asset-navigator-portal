
import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize, X } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <>
      <div className="relative rounded-lg overflow-hidden">
        <div className="relative aspect-[16/9]">
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <button
            className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
            onClick={toggleFullscreen}
          >
            <Maximize size={18} />
          </button>
          
          {/* Navigation buttons */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
            onClick={handlePrevious}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
            onClick={handleNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Thumbnails */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={`w-24 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                index === currentIndex ? "border-[#9b87f5]" : "border-transparent"
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      
      {/* Fullscreen modal */}
      {fullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
          <div className="absolute top-4 right-4 z-10">
            <button
              className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
              onClick={toggleFullscreen}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="relative w-full h-full flex items-center justify-center p-8">
            <img
              src={images[currentIndex]}
              alt={`Full screen image ${currentIndex + 1}`}
              className="max-h-full max-w-full object-contain"
            />
            
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
              onClick={handlePrevious}
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
              onClick={handleNext}
            >
              <ChevronRight size={32} />
            </button>
          </div>
          
          <div className="w-full p-4 flex justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                className={`w-16 h-12 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                  index === currentIndex ? "border-white" : "border-transparent"
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
