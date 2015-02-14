var Zap = {

    upload_pre_write: function(bundle) {
        var request = bundle.request;
        request.headers.Authorization = 'Bearer '+ bundle.auth_fields.access_token;

        return request;
    }
    
};
