import React, { Component } from 'react'
import { retreatonnicholsV1 } from "../../../../utils/photos"
import ScreensGallery from '../../../misc/ScreensGallery'

export default class RetreatOnNichols extends Component {
    render() {
        return (
            <div>
                <ScreensGallery photos={retreatonnicholsV1} title={"Screens"}/>
            </div>
        )
    }
}

