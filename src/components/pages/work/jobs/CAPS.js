import React, { Component } from 'react'
import { CAPSV1, CAPSV2 } from "../../../../utils/screens"
import ScreensGallery from '../../../misc/ScreensGallery'

export default class CAPS extends Component {
    render() {
        return (
            <div>
                <div className="center-text">
                    <h3 style={{fontSize: "30px", verticalAlign: "middle"}}><u>Demo</u></h3>
                    <div className="sm-video-container">
                        <div className="video-responsive">
                            <iframe
                                title="capsmd.org web app demo video"
                                width="560" height="315"
                                src="https://www.youtube.com/embed/Ke1DP5UzHZQ"
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
                </div>
                <ScreensGallery photos={CAPSV1} title={"Version 1 screens"}/>
                <ScreensGallery photos={CAPSV2} title={"Version 2 screens"}/>
            </div>
        )
    }
}
