/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var exec = require('cordova/exec');

var AdobeCreativeSDKFoundation = {
    
    /*
    Logs in a user.
    
    The successCallback will be called if the login was successful, and it will return 
    as its only argument, a JSON object with these five keys:

        adobeID // The Adobe ID of the user
        displayName // The display name of the user
        firstName // The email address of the user
        lastName // The first name of the user
        email // The email address of the user
    
    The failureCallback will be called if the login was unsuccessful, and it will return
    as its only argument, an error message.
    */
    login: function(successCallback, failureCallback) {
        exec(successCallback, failureCallback, "AdobeCreativeSDKFoundation", "login", []);
    },

    /*
    Logs out a user.
    
    The successCallback will be called if the logout was successful, with no arguments.
    
    The failureCallback will be called if the logout was unsuccessful, and it will return
    as its only argument, an error message.
    */
    logout: function(successCallback, failureCallback) {
        exec(successCallback, failureCallback, "AdobeCreativeSDKFoundation", "logout", []);
    },
    
    /*
    Gets metadata for your Creative Cloud file.
    
    The successCallback will be called if the call was successful, and it will return 
    as its only argument, a JSON object with the metadata.
    
    The failureCallback will be called if the call was unsuccessful, and it will return
    as its only argument, an error message.
    */
    getFileMetadata: function(successCallback, failureCallback) {
        exec(successCallback, failureCallback, "AdobeCreativeSDKFoundation", "getFileMetadata", []);
    },
    
    /*
    Download your Creative Cloud file.
    
    The successCallback will be called if the call was successful and when the file is being 
    downloaded (progress), and it will return 
    as its only argument, a JSON object. Properties available:
        href: 
            the href of the file
        metadata:
            the metadata object of the file (download start)
        fractionCompleted:
            number of bytes of the downloaded file that has been downloaded (download progress)
        result:
            the file URL of the downloaded file (download complete)
    
    The failureCallback will be called if the call was unsuccessful, and it will return
    as its only argument, an error message.
    
    Pass in the options object to specify the size and type of the file returned. The
    available keys are:
         width, height: 
            If any dimension is omitted, the full-sized rendition of the file
            will be returned.
         type: 
            (JPEG = 0, PNG = 1, PDF = 2, GIF = 3, TIFF = 4). 
            If omitted, JPEG is the default.
    */
    downloadFiles: function(successCallback, failureCallback, options) {
        exec(successCallback, failureCallback, "AdobeCreativeSDKFoundation", "downloadFiles", [ options ]);
    }
};

module.exports = AdobeCreativeSDKFoundation;
