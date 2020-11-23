import React, { Component } from 'react'
import { blairFamilyV1, blairFamilyV2, blairFamilyWireframe } from "../../../../utils/photos"
import PhotoGallery from '../../../misc/PhotoGallery'

export default class BlairFamilyFoundation extends Component {
    render() {
        return (
            <div>
                <PhotoGallery photos={blairFamilyV1} title={"Version 1 screens"}/>
                <PhotoGallery photos={blairFamilyWireframe} title={"Version 2 wireframe screens"}/>
                <PhotoGallery photos={blairFamilyV2} title={"Version 2 screens"}/>
            </div>
        )
    }
}
