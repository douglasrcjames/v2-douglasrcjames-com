import React, { Component } from 'react'
import { douglasrcjamesV1, douglasrcjamesV2, douglasrcjamesWireframe } from "../../../../utils/screens"
import ScreensGallery from '../../../misc/ScreensGallery'

export default class Douglasrcjames extends Component {
    render() {
        return (
            <div>
                <ScreensGallery photos={douglasrcjamesV1} title={"Version 1 screens"}/>
                <ScreensGallery photos={douglasrcjamesWireframe} title={"Version 2 wireframe"}/>
                <ScreensGallery photos={douglasrcjamesV2} title={"Version 2 screens"}/>
            </div>
        )
    }
}
