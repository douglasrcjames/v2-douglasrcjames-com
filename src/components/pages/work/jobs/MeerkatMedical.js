import React, { Component } from 'react'
import { meerkatFinalBuild } from '../../../../utils/screens'
import ScreensGallery from '../../../misc/ScreensGallery'

export default class MeerkatMedical extends Component {
    render() {
        return (
            <div className="wrapper">
                <ScreensGallery photos={meerkatFinalBuild} title={"Final Build"}/>
            </div>
        )
    }
}
