//
// Author: Shilong
// Date: 2/5/2015
//
 
require('cloud/app.js');
 
/**
 * getPosts
 *
 */
Parse.Cloud.define("getPosts", function(request, status) {
   
    var Posts = Parse.Object.extend("Posts");
    var query = new Parse.Query(Posts);
 
    query.find({
        success: function(results) {
            // No post 
            if (results.length == 0) {
                status.success("No post.");
            };
 
            // Has post
            status.success(results);
        },
        error: function(error) {
            status.error(error);
        }
    });
});

Parse.Cloud.define("getPlans", function(request, status) {
                   
                   var Posts = Parse.Object.extend("Plans");
                   var query = new Parse.Query(Posts);
                   
                   query.find({
                              success: function(results) {
                              // No post
                              if (results.length == 0) {
                              status.success("No plan.");
                              };
                              
                              // Has post
                              status.success(results);
                              },
                              error: function(error) {
                              status.error(error);
                              }
                              });
                   });
