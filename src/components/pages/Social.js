import React, { Component } from 'react'
import PhotoGallery from '../misc/PhotoGallery'
import {socialGallery} from '../../utils/photos'
export default class Social extends Component {
    render() {
        return (
            <div>
                 <div className="social-bg">
                    <div className="shero-container">
                        <h1 className="no-margin">Social</h1>
                        <p>More content coming soon...</p>
                        <PhotoGallery photos={socialGallery} setWidth={"lg"} />
                    </div>
                </div>
                
            </div>
        )
    }
}
