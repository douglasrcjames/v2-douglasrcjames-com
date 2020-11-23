import React, { Component } from 'react'
import { douglasrcjamesV1, douglasrcjamesV2, douglasrcjamesWireframe } from "../../../../utils/photos"
import PhotoGallery from '../../../misc/PhotoGallery'

export default class Douglasrcjames extends Component {
    render() {
        return (
            <div>
                <PhotoGallery photos={douglasrcjamesV1} title={"Screens"}/>
                <PhotoGallery photos={douglasrcjamesWireframe} title={"Version 2 wireframe"}/>
                {/* TODO: take screenshots and update here */}
                <PhotoGallery photos={douglasrcjamesV2} title={"Version 2 screens"}/>
            </div>
        )
    }
}
