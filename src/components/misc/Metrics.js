import React, { Component } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'
import { METRICS } from '../../utils/constants'
import { numberWithCommas, ucFirst } from '../../utils/misc'

export default class Metrics extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <h2 className="sm-margin-t-b">Metrics</h2>
                    </Col>
                </Row>
                <Row>  
                    { 
                        this.props.metrics.map((metric, i) => {
                                return (
                                    <Col key={i} xs={12} md={6} lg={3}>
                                        <label style={{fontSize: "18px"}}>{ucFirst(metric.name)}: </label>
                                        {metric.name === METRICS.FILES || metric.name === METRICS.LOC ? "~" : ""}{numberWithCommas(metric.value)}
                                    </Col>
                                )
                        })
                    }
                </Row>
            </Grid>
        )
    }
}
