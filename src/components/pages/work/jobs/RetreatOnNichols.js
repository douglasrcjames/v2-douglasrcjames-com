import React, { Component } from 'react'
import { retreatonnicholsV1 } from "../../../../utils/photos"
import PhotoGallery from '../../../misc/PhotoGallery'

export default class RetreatOnNichols extends Component {
    render() {
        return (
            <div>
                <PhotoGallery photos={retreatonnicholsV1} title={"Screens"}/>
            </div>
        )
    }
}

