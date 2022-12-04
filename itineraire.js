function showitineraire() {
    map.on('click', function(e){
        var gotolat = e.latlng.lat
        var gotolng = e.latlng.lng
        map.locate().on("locationfound", (i)=>{
            console.log(i.latlng)
            L.Routing.control({
      waypoints: [
        L.latLng(i.latlng.lat,i.latlng.lng),
        L.latLng(gotolat,gotolng)
      ]
      }).addTo(map)
        }) 
    });
  }