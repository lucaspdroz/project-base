import React from 'react'

export default function index() {

    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXNwcnlhbiIsImEiOiJjamFqeGtwczUyZWlvMnpwbGR4a3p2OHU0In0.KeF4pu_MGScAyu8eEakz9Q';
    var map = new mapboxgl.Map({
        container: 'YOUR_CONTAINER_ELEMENT_ID',
        style: 'mapbox://styles/mapbox/streets-v11'
    });

    return (
        <div>

        </div>
    )
}
