import React, { Component } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'
import { ucFirst } from '../../utils/misc'

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
                                    <h4 className="display-inline">{ucFirst(metric.name)}: </h4>
                                    {metric.value}
                                </Col>
                            )
                        }) 
                    }
                </Row>
            </Grid>
        )
    }
}
