import React, { Component } from 'react'
import { CAPSV1, CAPSV2 } from "../../../../utils/photos"
import PhotoGallery from '../../../misc/PhotoGallery'

export default class CAPS extends Component {
    render() {
        return (
            <div>
                <PhotoGallery photos={CAPSV1} title={"Version 1 screens"}/>
                <PhotoGallery photos={CAPSV2} title={"Version 1 screens"}/>
            </div>
        )
    }
}
