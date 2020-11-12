
import React from "react";
// { useState, useCallback } 

// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
// import {Link} from 'react-router-dom'

export function ucFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// export const Timeline = ({ children }) =>
//   <div className="tl-container l-width">
//     <ul className="tl-line">
//       {children}
//     </ul>
//   </div>
  
// export const Event = ({ title, subtitle, interval, link, children, lastEvent }) =>
// <>
//   <li className={lastEvent ? "tl-last-event" : "tl-event"}>
//     <label className="tl-icon"></label>
//     <span className="tl-date">{interval}</span>
//     <Link to={link || "# "}>
//       <div className="tl-body">
//         <h2>{title}</h2>
//         {subtitle && <h4>{subtitle}</h4>}
//         <div className="tl-description">
//           {children}
//         </div>
//       </div>
//     </Link>
//   </li>
// </>


export const SocialLink = ({ label, link }) =>
  <a href={link} target="_blank" rel="noopener noreferrer">
     <img
        style={{verticalAlign:"middle"}}
        className="responsive footer-icon"
        alt={`${label}`}
        src={require(`../../assets/images/icons/social/${label}.png`)}
        />
  </a>

// export default function PhotoGallery(props) {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);

//   const openLightbox = useCallback((event, { photo, index }) => {
//     console.log("index:" + index);
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };

//   return (
//     <div>
//       <Gallery photos={props.photos} onClick={openLightbox} />
//       <ModalGateway>
//         {viewerIsOpen ? (
//           <Modal onClose={closeLightbox}>
//             <Carousel
//               currentIndex={currentImage}
//               views={props.photos.map(x => ({
//                 ...x,
//                 srcset: x.srcSet,
//                 caption: x.title
//               }))}
//             />
//           </Modal>
//         ) : null}
//       </ModalGateway>
//     </div>
//   );
// }
