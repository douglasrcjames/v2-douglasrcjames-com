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
                        <p>
                            Social life has definitely taken a hit since COVID started, but I still maintain friendships primarily through 
                            sending internet memes and playing video games with friends. Fortunately, I have spent quarantine living with 
                            my girlfriend (Ana), Siamese (Link), Tabby (Zelda), and Basset Hound (Georgie)! I will definitely be adding more content to this 
                            section, such as my blog, streaming channel, and more in the coming months.
                        </p>
                        <PhotoGallery photos={socialGallery} setWidth={"lg"} />
                    </div>
                </div>
                
            </div>
        )
    }
}
