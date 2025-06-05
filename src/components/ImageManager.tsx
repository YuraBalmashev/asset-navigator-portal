
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Trash2, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ImageManagerProps {
  images: string[];
  onImagesChange: (images: string[]) => void;
  maxImages?: number;
}

const ImageManager = ({ images, onImagesChange, maxImages = 10 }: ImageManagerProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      const newImages = Array.from(files).map((file) => {
        return URL.createObjectURL(file);
      });

      const updatedImages = [...images, ...newImages].slice(0, maxImages);
      onImagesChange(updatedImages);
      setIsUploading(false);
      
      toast({
        title: "Изображения загружены",
        description: `Загружено ${newImages.length} изображений`,
      });
    }, 1000);
  };

  const handleImageDelete = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    onImagesChange(updatedImages);
    
    toast({
      title: "Изображение удалено",
      description: "Изображение успешно удалено",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Управление изображениями</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{images.length}/{maxImages}</span>
          <label htmlFor="image-upload">
            <Button
              variant="outline"
              size="sm"
              disabled={isUploading || images.length >= maxImages}
              className="cursor-pointer"
              asChild
            >
              <span>
                {isUploading ? (
                  <>
                    <Upload size={16} className="mr-2 animate-spin" />
                    Загружается...
                  </>
                ) : (
                  <>
                    <Plus size={16} className="mr-2" />
                    Добавить
                  </>
                )}
              </span>
            </Button>
          </label>
          <input
            id="image-upload"
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            disabled={isUploading || images.length >= maxImages}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8"
              onClick={() => handleImageDelete(index)}
            >
              <Trash2 size={14} />
            </Button>
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
          <Upload size={48} className="mx-auto mb-4 text-gray-400" />
          <p className="text-gray-500 mb-2">Изображения не загружены</p>
          <p className="text-sm text-gray-400">Нажмите "Добавить" чтобы загрузить изображения</p>
        </div>
      )}
    </div>
  );
};

export default ImageManager;
