/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Achievement from '../model/Achievement';

/**
* AchievementController service.
* @module api/AchievementControllerApi
* @version v0
*/
export default class AchievementControllerApi {

    /**
    * Constructs a new AchievementControllerApi. 
    * @alias module:api/AchievementControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the callDelete operation.
     * @callback module:api/AchievementControllerApi~callDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} achievementId 
     * @param {module:api/AchievementControllerApi~callDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    callDelete(achievementId, callback) {
      let postBody = null;
      // verify the required parameter 'achievementId' is set
      if (achievementId === undefined || achievementId === null) {
        throw new Error("Missing the required parameter 'achievementId' when calling callDelete");
      }

      let pathParams = {
        'achievementId': achievementId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/achievements/{achievementId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the get operation.
     * @callback module:api/AchievementControllerApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Achievement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} achievementId 
     * @param {module:api/AchievementControllerApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Achievement}
     */
    get(achievementId, callback) {
      let postBody = null;
      // verify the required parameter 'achievementId' is set
      if (achievementId === undefined || achievementId === null) {
        throw new Error("Missing the required parameter 'achievementId' when calling get");
      }

      let pathParams = {
        'achievementId': achievementId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = Achievement;
      return this.apiClient.callApi(
        '/api/achievements/{achievementId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAll operation.
     * @callback module:api/AchievementControllerApi~getAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Achievement>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AchievementControllerApi~getAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Achievement>}
     */
    getAll(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [Achievement];
      return this.apiClient.callApi(
        '/api/achievements/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllByPersonId operation.
     * @callback module:api/AchievementControllerApi~getAllByPersonIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Achievement>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} personId 
     * @param {module:api/AchievementControllerApi~getAllByPersonIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Achievement>}
     */
    getAllByPersonId(personId, callback) {
      let postBody = null;
      // verify the required parameter 'personId' is set
      if (personId === undefined || personId === null) {
        throw new Error("Missing the required parameter 'personId' when calling getAllByPersonId");
      }

      let pathParams = {
        'personId': personId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [Achievement];
      return this.apiClient.callApi(
        '/api/achievements/byPerson/{personId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the save operation.
     * @callback module:api/AchievementControllerApi~saveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Achievement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Achievement} achievement 
     * @param {module:api/AchievementControllerApi~saveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Achievement}
     */
    save(achievement, callback) {
      let postBody = achievement;
      // verify the required parameter 'achievement' is set
      if (achievement === undefined || achievement === null) {
        throw new Error("Missing the required parameter 'achievement' when calling save");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = Achievement;
      return this.apiClient.callApi(
        '/api/achievements/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
