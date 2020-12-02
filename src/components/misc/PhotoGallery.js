import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from 'react-image-lightbox';
import { useEffect } from "react";

export default function PhotoGallery(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [galleryWidth, setGalleryWidth] = useState("sm");
  
    const openLightbox = useCallback((event, { photo, index }) => {
      console.log("index:" + index);
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    useEffect(() => {
      if(props.setWidth === "xl"){
        setGalleryWidth("xl")
      } else if(props.setWidth === "lg") {
        setGalleryWidth("lg")
      } else {
        if(props.photos.length < 3){
          setGalleryWidth("xs")
        } else if(props.photos.length > 3 || props.setWidth === "md"){
          setGalleryWidth("md")
        }
      }
      
    }, [props.photos, props.setWidth]);
  
    return (
      <div className={`${galleryWidth}-width center`}>
        <Gallery photos={props.photos} onClick={openLightbox} />
          {viewerIsOpen ? (
              <Lightbox
                mainSrc={props.photos[currentImage].src}
                nextSrc={props.photos[(currentImage + 1) % props.photos.length].src}
                prevSrc={props.photos[(currentImage + props.photos.length - 1) % props.photos.length].src}
                onCloseRequest={closeLightbox}
                imageCaption={props.photos[currentImage].caption}
                onMovePrevRequest={() =>
                  setCurrentImage((currentImage + props.photos.length - 1) % props.photos.length)
                }
                onMoveNextRequest={() =>
                  setCurrentImage((currentImage + 1) % props.photos.length)
                }
            />
          ) : null}
      </div>
    );
  }
  