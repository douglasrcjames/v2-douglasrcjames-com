import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox';

export default class TextLinkGallery extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false,
        };
      }
    
      openLightBox = () => {
        this.setState({ isOpen: true })
      }
    
      render() {
        const { isOpen } = this.state;
    
        return (
          <>
            <span onClick={() => this.openLightBox()} className="text-hover-yellow" style={{textDecoration: "underline"}}>{this.props.text}</span>
        
            {isOpen && (
                <Lightbox
                    mainSrc={this.props.photo.src}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    imageCaption={this.props.photo.caption}
                />
            )}
          </>
        );
      }
    }
