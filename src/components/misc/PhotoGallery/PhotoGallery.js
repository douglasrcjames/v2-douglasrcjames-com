import React, { Component } from "react";
import Gallery from "react-photo-gallery";

import ImageViewer from "./ImageViewer";
import "../../../assets/css/Gallery.scss";

export default class PhotoGallery extends Component {
    constructor() {
      super();
  
      this.state = {
        isImageOpen: false,
      };

      this.selectedImageIndex = null;
    }
  
    componentDidMount() {
      if(this.props.photos){
        this.setState({ photos: this.props.photos })
      }

      if (this.media_div) {
        const image_block_width = 90; //  width of each image to be rendered
        const outer_div_width = this.media_div.offsetWidth;
        if (outer_div_width) {
          const recommended_no_of_images = parseInt(
            outer_div_width / image_block_width,
            10
          );
          if (recommended_no_of_images !== this.state.no_of_image) {
            this.setState({ no_of_image: recommended_no_of_images });
          }
        }
      }
    }
  
    openImageViewer(images, index) {
      let images_arr = [];
  
      if (index) this.selectedImageIndex = index;
  
      let crop_size;
      if (window && window.innerWidth) {
        let innerWidth = window.innerWidth;
        if (innerWidth <= 400) {
          crop_size = "w=400";
        } else if (innerWidth <= 600) {
          crop_size = "w=600";
        } else {
          crop_size = "w=800";
        }
      }
      if (!crop_size) crop_size = "";
      else crop_size = "&" + crop_size;
  
      images.forEach(image => {
        images_arr.push({
          source: {
            thumbnail: image.url + "&w=150",
            regular: image.url + crop_size,
            download: image.url + crop_size
          },
          caption: image.description || null
        });
      });
  
      this.setState({ isImageOpen: true, photos: images_arr });
    }
  
    closeImageViewer() {
      this.setState({ isImageOpen: false, photos: [] });
    }
  
    render() {
      if(!this.state.photos){
        return(<h3>Loading photos...</h3>)
      } else {
        console.log("this.state.photos: ")
        console.log(this.state.photos)
        return (
          <div>
              <Gallery photos={this.props.photos} onClick={() => this.openImageViewer(this.props.photos, this.selectedImageIndex)} />
              {this.state.isImageOpen ? (
              <ImageViewer
                  currentIndex={this.selectedImageIndex}
                  images={this.state.photos}
                  showClose={true}
                  handleClose={() => this.closeImageViewer()}
              />
              ) : null}
          </div>
        );
      }

    }
  }
  
//   export default function PhotoGallery(props) {
//     const [currentImage, setCurrentImage] = useState(0);
//     const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
//     const openLightbox = useCallback((event, { photo, index }) => {
//       console.log("index:" + index);
//       setCurrentImage(index);
//       setViewerIsOpen(true);
//     }, []);
  
//     const closeLightbox = () => {
//       setCurrentImage(0);
//       setViewerIsOpen(false);
//     };
  
//     // return (
//     //   <div>
        
//     //     {viewerIsOpen ? (
//     //         <ImageViewer
//     //           currentIndex={this.selectedImageIndex}
//     //           images={props.photos}
//     //           showClose={true}
//     //           handleClose={() => this.closeImageViewer()}
//     //         />
          
//     //     ) : null}
  
//     //     {/* <Modal onClose={closeLightbox}>
//     //           <div>
//     //             <Carousel
//     //               currentIndex={currentImage}
//     //               views={props.photos.map(photo => ({
//     //                 ...photo,
//     //                 srcset: photo.srcSet,
//     //                 caption: photo.caption, 
//     //               }))}
//     //             />
//     //           </div>
              
//     //         </Modal> */}
//     //   </div>
//     // );
//   }
  