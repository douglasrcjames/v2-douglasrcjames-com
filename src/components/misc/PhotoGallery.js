import React, { Component } from "react"
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default class PhotoGallery extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        photoIndex: 0,
        isOpen: false,
      };
    }
  
    openLightBox = (i) => {
      this.setState({ isOpen: true, photoIndex: i })
    }
  
    render() {
      const { photoIndex, isOpen } = this.state;
  
      return (
        <div>
            <div className="center-text sm-margin-t-b">
                <h3 style={{fontSize: "30px", verticalAlign: "middle"}}><u>{this.props.title}</u> <span style={{fontSize: "20px"}}>({this.props.photos.length} total)</span></h3>
            </div>
            
            <SimpleBar className="slider-container center-text">
                { this.props.photos.map((photo, i) => {
                return (
                    <span key={i}>
                    <img src={photo.src} alt={photo.caption} className="slider-img" onClick={() => this.openLightBox(i)}/>
                    {/* TODO: get the caption on a new line from image, but not have every image on a new line... might have to this be overlayed on the image or only shown in the lightbox */}
                    {/* TODO: add buttons for more obvious side to side scrolling */}
                    {/* <span>{photo.caption}</span> */}
                    </span>
                )
                })}
            </SimpleBar>
          
          
            {isOpen && (
                <Lightbox
                    mainSrc={this.props.photos[photoIndex].src}
                    nextSrc={this.props.photos[(photoIndex + 1) % this.props.photos.length].src}
                    prevSrc={this.props.photos[(photoIndex + this.props.photos.length - 1) % this.props.photos.length].src}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    imageTitle={this.props.photos[photoIndex].caption}
                    onMovePrevRequest={() =>
                        this.setState({
                        photoIndex: (photoIndex + this.props.photos.length - 1) % this.props.photos.length,
                        })
                    }
                    onMoveNextRequest={() =>
                        this.setState({
                        photoIndex: (photoIndex + 1) % this.props.photos.length,
                        })
                    }
                />
            )}
        </div>
      );
    }
  }