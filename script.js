var Zap = {
    upload_pre_write: function(bundle) {
        bundle.request.files =  { "file": [ "file.gpx", bundle.action_fields_full.gpx, "application/octet-stream" ] } ;
    
        bundle.request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        // leave request data as object, not string!
        bundle.request.data = JSON.parse( '{ "activity_type": "running", "data_type": "gpx" }' );
        // we will mix request.data and request.files together
        return bundle.request; // let zapier complete it
    }

};
