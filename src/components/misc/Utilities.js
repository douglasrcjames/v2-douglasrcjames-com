
import React, { useState, useCallback }  from "react"

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export function ucFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const SocialLink = ({ label, link }) =>
  <a href={link} target="_blank" rel="noopener noreferrer">
     <img
        style={{verticalAlign:"middle"}}
        className="responsive footer-icon"
        alt={`${label}`}
        src={require(`../../assets/images/icons/social/${label}.png`)}
        />
  </a>

export default function PhotoGallery(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    console.log("index:" + index);
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={props.photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <div>
              <Carousel
                currentIndex={currentImage}
                views={props.photos.map(photo => ({
                  ...photo,
                  srcset: photo.srcSet,
                  caption: photo.caption, // TODO: change caption styling
                }))}
              />
            </div>
            
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
