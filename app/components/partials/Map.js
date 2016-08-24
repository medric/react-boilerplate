import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import React, { PropTypes, Component } from 'react';

class Map extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    // component
    componentWillUpdate () {
        const { store, router } = this.context;
        const { application } = this.props;
        // if (application.shouldRedirect) {
        //   store.dispatch(applicationActions.resetSubmitState())
        //   router.transition(...)
        // }
        console.log(store);
    }

    render() {
        return (
            <section style={{height: "600px"}}>
                <GoogleMapLoader
                query={{ libraries: "geometry,drawing,places,visualization" }}
                containerElement={
                    <div
                    {...this.props.containerElementProps}
                    style={{
                        height: "100%",
                    }}
                    />
                }
                googleMapElement={
                    <GoogleMap
                        ref={(map) => console.log(map)}
                        defaultZoom={13}
                        defaultCenter={{ lat: 45.750000, lng: 4.85 }}
                        onClick={this.props.onMapClick}
                    >
                    {this.props.markers.map((marker, index) => {
                        return (
                            <Marker
                            {...marker}
                            onRightclick={() => this.props.onMarkerRightclick(index)} />
                        );
                    })}
                    </GoogleMap>
                }
                />
            </section>
        );
    }
}

Map.propTypes = {
    markers: PropTypes.array,
};

Map.defaultProps = {
    markers: [],
};

export default Map;
