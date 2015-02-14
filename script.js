var Zap = {
    upload_pre_write: function(bundle) {

        var separator = "f94636b7375c4a37862029d4dc8bafe7";
        bundle.request.headers.Accept = '*/*';
        bundle.request.headers['Content-type'] = "multipart/form-data; boundary=" + separator;
        bundle.request.headers['Content-length'] = bundle.action_fields_full.gpx.length;
        bundle.request.headers['User-Agent'] = "hogehoge/1.0.0";
        bundle.request.data = "--"+separator+"\r\n" +
            "Content-Disposition: form-data; name=\"activity_type\"\r\n"+
            "\r\n"+
            "running\r\n"+
            "--"+separator+"\r\n" +
            "Content-Disposition: form-data; name=\"file_to_upload\"; filename=\"file.gpx\"\r\n"+
            "Content-Type: application/octet-stream\r\n"+
            "\r\n"+
            bundle.action_fields_full.gpx +
            "--"+separator+"--\r\n";
 
      console.log(bundle.request.data);
         return bundle.request;

    }

};
