import React, { Component } from 'react'
import { CAPSV1, CAPSV2 } from "../../../../utils/screens"
import ScreensGallery from '../../../misc/ScreensGallery'

export default class CAPS extends Component {
    render() {
        return (
            <div>
                <ScreensGallery photos={CAPSV1} title={"Version 1 screens"}/>
                <ScreensGallery photos={CAPSV2} title={"Version 2 screens"}/>
            </div>
        )
    }
}
