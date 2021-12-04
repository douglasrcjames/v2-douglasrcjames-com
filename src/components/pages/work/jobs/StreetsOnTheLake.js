import React, { Component } from 'react'
import { streetsEvent, streetsFinalBuild } from '../../../../utils/screens'
import ScreensGallery from '../../../misc/ScreensGallery'

export default class StreetsOnTheLake extends Component {
    render() {
        return (
            <div className="wrapper">
                <ScreensGallery photos={streetsFinalBuild} title={"Final Build"}/>
                <ScreensGallery photos={streetsEvent} title={"Final Event"}/>
            </div>
        )
    }
}
