import React, { Component } from 'react'
import { ihealphones } from '../../../../utils/photos'
import PhotoGallery from '../../../misc/PhotoGallery'

export default class IHealPhones extends Component {
    render() {
        return (
            
            <div>
                <div className="sm-video-container">
                    <div className="video-responsive">
                        <iframe
                            title="iHealPhones video"
                            width="560" height="315"
                            src="https://www.youtube.com/embed/LMTHC7okOKI"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen" 
                            msallowfullscreen="msallowfullscreen" 
                            oallowfullscreen="oallowfullscreen" 
                            webkitallowfullscreen="webkitallowfullscreen"
                        />
                    </div>
                </div>
                <br/>
                <PhotoGallery photos={ihealphones} />
            </div>
        )
    }
}
