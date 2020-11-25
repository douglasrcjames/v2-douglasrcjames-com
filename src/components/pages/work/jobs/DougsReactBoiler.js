import React, { Component } from 'react'
import { dougsReactBoilerV1 } from "../../../../utils/photos"
import ScreensGallery from '../../../misc/ScreensGallery'

export default class DougsReactBoiler extends Component {
    render() {
        return (
            <div>
                <ScreensGallery photos={dougsReactBoilerV1} title={"Screens"}/>
            </div>
        )
    }
}
