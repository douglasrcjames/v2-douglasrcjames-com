import React, { Component } from 'react'
import { glasshousefarmsV1, glasshousefarmsWireframe } from '../../../../utils/screens'
import ScreensGallery from '../../../misc/ScreensGallery'

export default class GlassHouseFarms extends Component {
    render() {
        return (
            <div>
                <ScreensGallery photos={glasshousefarmsWireframe} title={"Wireframe"} />
                <ScreensGallery photos={glasshousefarmsV1} title={"Finished product"} />
            </div>
        )
    }
}
