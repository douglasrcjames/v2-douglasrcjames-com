import React, { Component } from 'react'
import { goprestigepowerV1, goprestigepowerV2 } from "../../../../utils/photos"
import ScreensGallery from '../../../misc/ScreensGallery'

export default class GoPrestigePower extends Component {
    render() {
        return (
            <div>
                <ScreensGallery photos={goprestigepowerV1} title={"Before screens"}/>
                <ScreensGallery photos={goprestigepowerV2} title={"After screens"}/>
            </div>
        )
    }
}
