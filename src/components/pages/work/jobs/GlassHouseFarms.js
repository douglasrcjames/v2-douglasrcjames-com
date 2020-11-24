import React, { Component } from 'react'
import { glasshousefarmsV1, glasshousefarmsWireframe } from '../../../../utils/photos'
import PhotoGallery from '../../../misc/PhotoGallery'

export default class GlassHouseFarms extends Component {
    render() {
        return (
            <div>
                <PhotoGallery photos={glasshousefarmsWireframe} title={"Wireframe"} />
                <PhotoGallery photos={glasshousefarmsV1} title={"Finished product"} />
            </div>
        )
    }
}
