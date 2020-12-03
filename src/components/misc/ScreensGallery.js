import React, { Component } from "react"
import SimpleBar from 'simplebar-react';
import Lightbox from 'react-image-lightbox';

export default class ScreensGallery extends Component {
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
                    <img src={photo.src} alt={photo.caption} onClick={() => this.openLightBox(i)}/>
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
                    imageCaption={this.props.photos[photoIndex].caption}
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