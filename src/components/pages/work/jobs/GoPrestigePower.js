import React, { Component } from 'react'
import { goprestigepowerV1, goprestigepowerV2 } from "../../../../utils/screens"
import ScreensGallery from '../../../misc/ScreensGallery'

export default class GoPrestigePower extends Component {
    render() {
        return (
            <div>
                <div className="center-text">
                    <h3 style={{fontSize: "30px", verticalAlign: "middle"}}><u>Demo</u></h3>
                    <div className="sm-video-container">
                        <div className="video-responsive">
                            <iframe
                                title="goprestigepower.com web app demo video"
                                width="560" height="315"
                                src="https://www.youtube.com/embed/wad3TnxJgMQ"
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
                <ScreensGallery photos={goprestigepowerV1} title={"Before screens"}/>
                <ScreensGallery photos={goprestigepowerV2} title={"After screens"}/>
            </div>
        )
    }
}
