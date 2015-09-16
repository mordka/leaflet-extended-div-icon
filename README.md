Meteor smart package wrapper for Leaflet-Extended-Div-Icon
=========================

[![License](http://img.shields.io/:license-mit-blue.svg)](http://tonekk.mit-license.org)

L.ExtendedDivIcon - Adds the ability to set the ```id``` and ```style``` of the element created by ```L.DivIcon```

## Installation

` meteor add mordka:leaflet-extended-div-icon `

## Usage example

```javascript
var marker = L.marker(L.latLng(lat, lng), {
                      icon: L.extendedDivIcon({

                        // Set classes here, as usual
                        className: 'class-a class-b class-c',

                        // Set id here (new!)
                        id: 'my-awesome-id'

                        // Set style here (new!)
                        style: {
                          backgroundColor: '#fff'
                        }
                      })
                    });
```
