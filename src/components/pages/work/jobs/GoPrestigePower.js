import React, { Component } from 'react'
import { goprestigepowerV1, goprestigepowerV2 } from "../../../../utils/photos"
import PhotoGallery from '../../../misc/PhotoGallery'

export default class GoPrestigePower extends Component {
    render() {
        return (
            <div>
                <PhotoGallery photos={goprestigepowerV1} title={"Before screens"}/>
                <PhotoGallery photos={goprestigepowerV2} title={"After screens"}/>
            </div>
        )
    }
}
