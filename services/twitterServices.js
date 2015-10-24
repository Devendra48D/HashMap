/**
 * Created by ranjay on 10/24/15.
 */
var request = require("request");
var Q = require("q");
var queryString = require("querystring");
//var utils   = require('../utils/config');





exports.twitterLogin = function(request, response){


    response.send("Welcome to the login page");
    /*
    makeRequest(params).then(function(user){

        console.log(user);
        response.send(user.body);

    },function(error){
        response.send(error.body);
    });
    */
};



function makeRequest(params){



    var deferred = Q.defer();

    var url = utils.baseUrl + params.url;

    request({
        url: url, //URL to hit
        method: params.method,
        body: params.body,
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'X-Parse-Application-Id': utils.parseApplicationId,
            'X-Parse-REST-API-Key': utils.parseRestApiKey,
            'X-Parse-Revocable-Session': 1
        }
    }, function(error, response, body){
        if(!error && response.statusCode == 200) {
            //console.log(response.statusCode, body);
            deferred.resolve({statusCode: response.statusCode, body: body});

        } else {
            console.log(error);
            deferred.reject({statusCode: response.statusCode, body: body});
        }
    });

    return deferred.promise;
}
