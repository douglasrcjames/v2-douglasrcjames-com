import React, { Component } from 'react'
import { dougsReactBoilerV1 } from "../../../../utils/photos"
import PhotoGallery from '../../../misc/PhotoGallery'

export default class DougsReactBoiler extends Component {
    render() {
        return (
            <div>
                <PhotoGallery photos={dougsReactBoilerV1} title={"Screens"}/>
            </div>
        )
    }
}
