import React, { Component } from 'react'
import PhotoGallery from '../misc/PhotoGallery'
import {socialGallery} from '../../utils/photos'
export default class Social extends Component {
    render() {
        return (
            <div>
                 <div className="social-bg">
                    <div className="shero-container">
                        <h1>Social</h1>
                        <p>Coming soon!</p>
                        <PhotoGallery photos={socialGallery} isWide={true} />
                    </div>
                </div>
                
            </div>
        )
    }
}
