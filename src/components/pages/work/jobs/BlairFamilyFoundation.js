import React, { Component } from 'react'
import { blairFamilyV1, blairFamilyV2, blairFamilyWireframe } from "../../../../utils/photos"
import ScreensGallery from '../../../misc/ScreensGallery'

export default class BlairFamilyFoundation extends Component {
    render() {
        return (
            <div>
                <ScreensGallery photos={blairFamilyV1} title={"Version 1 screens"}/>
                <ScreensGallery photos={blairFamilyWireframe} title={"Version 2 wireframe screens"}/>
                <ScreensGallery photos={blairFamilyV2} title={"Version 2 screens"}/>
            </div>
        )
    }
}
