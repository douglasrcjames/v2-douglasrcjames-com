import React, { Component } from 'react'
import { bodybyyamaWireframe } from '../../../../utils/photos'
import ScreensGallery from '../../../misc/ScreensGallery'

export default class BodyByYama extends Component {
    render() {
        return (
            <div>
                <ScreensGallery photos={bodybyyamaWireframe} title={"Wireframe"} />
                 
                <div className="center-text sm-margin-t-b">
                    <h3 style={{fontSize: "30px", verticalAlign: "middle"}}><u>Finished product</u></h3>
                </div>
                <img 
                    className="responsive center"
                    style={{width: "75%", border: "3px lightgrey solid"}}
                    alt="finished product"
                    src={require("../../../../assets/images/jobs/bodybyyama/finished-product.gif")}
                    />
            </div>
        )
    }
}
