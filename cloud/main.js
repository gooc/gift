//
// Author: Shilong
// Date: 2/5/2015
//
 
require('cloud/app.js');
 
/**
 * getFirstPost
 *
 *
 */
Parse.Cloud.define("getFirstPost", function(request, status) {
   
    var Posts = Parse.Object.extend("Posts");
    var query = new Parse.Query(Posts);
 
    query.find({
        success: function(results) {
            // No post 
            if (results.length == 0) {
                status.success("No post.");
            };
 
            // Has post
            var firsPost = results[0];
            status.success(firsPost);
        },
        error: function(error) {
            status.error(error);
        }
    });
});
