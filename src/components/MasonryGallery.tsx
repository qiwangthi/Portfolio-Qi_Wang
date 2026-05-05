import { useState } from 'react';

interface GalleryImage {
  src: string;
  caption: string;
  category: string;
}

interface MasonryGalleryProps {
  images: GalleryImage[];
  categories: string[];
}

export default function MasonryGallery({ images, categories }: MasonryGalleryProps) {
  const [activeTab, setActiveTab] = useState(categories[0] || '');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = images.filter((img) => img.category === activeTab);
  const selectedImage = selectedIndex !== null ? filteredImages[selectedIndex] ?? null : null;

  function openImage(index: number) {
    setSelectedIndex(index);
  }

  function showNextImage() {
    if (filteredImages.length === 0) {
      return;
    }

    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return (currentIndex + 1) % filteredImages.length;
    });
  }

  return (
    <div className="masonry-gallery">
      {/* Tab Navigation */}
      <div className="masonry-gallery__tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`masonry-gallery__tab${cat === activeTab ? ' masonry-gallery__tab--active' : ''}`}
            onClick={() => {
              setActiveTab(cat);
              setSelectedIndex(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="masonry-gallery__grid">
        {filteredImages.map((img, i) => (
          <div
            key={i}
            className="masonry-gallery__item"
            onClick={() => openImage(i)}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="masonry-gallery__image"
              loading="lazy"
            />
            <div className="masonry-gallery__overlay">
              <p className="masonry-gallery__item-caption">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="masonry-gallery__lightbox"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="masonry-gallery__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="masonry-gallery__lightbox-close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="masonry-gallery__lightbox-image"
              onClick={showNextImage}
              style={{ cursor: filteredImages.length > 1 ? 'pointer' : 'default' }}
            />
            <p className="masonry-gallery__lightbox-caption">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
