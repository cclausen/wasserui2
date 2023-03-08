# OpenApiDefinition.PresenceControllerApi

All URIs are relative to *http://localhost:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allByPerson**](PresenceControllerApi.md#allByPerson) | **GET** /api/presences/{personId} | 
[**allOpen**](PresenceControllerApi.md#allOpen) | **GET** /api/presences | 
[**openPresenceByPerson**](PresenceControllerApi.md#openPresenceByPerson) | **GET** /api/presences/open/{personId} | 
[**startPresence**](PresenceControllerApi.md#startPresence) | **POST** /api/presences/start | 
[**stopPresence**](PresenceControllerApi.md#stopPresence) | **POST** /api/presences/stopById | 
[**stopPresenceByUser**](PresenceControllerApi.md#stopPresenceByUser) | **POST** /api/presences/stop | 
[**stopPresenceByUser1**](PresenceControllerApi.md#stopPresenceByUser1) | **POST** /api/presences/stopHere | 



## allByPerson

> [Presence] allByPerson(personId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.PresenceControllerApi();
let personId = 789; // Number | 
apiInstance.allByPerson(personId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **Number**|  | 

### Return type

[**[Presence]**](Presence.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## allOpen

> [Presence] allOpen()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.PresenceControllerApi();
apiInstance.allOpen((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Presence]**](Presence.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## openPresenceByPerson

> Presence openPresenceByPerson(personId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.PresenceControllerApi();
let personId = 789; // Number | 
apiInstance.openPresenceByPerson(personId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **Number**|  | 

### Return type

[**Presence**](Presence.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## startPresence

> startPresence(personId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.PresenceControllerApi();
let personId = 789; // Number | 
apiInstance.startPresence(personId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## stopPresence

> stopPresence(presenceId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.PresenceControllerApi();
let presenceId = 789; // Number | 
apiInstance.stopPresence(presenceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **presenceId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## stopPresenceByUser

> stopPresenceByUser(personId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.PresenceControllerApi();
let personId = 789; // Number | 
apiInstance.stopPresenceByUser(personId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## stopPresenceByUser1

> stopPresenceByUser1(personId, placeId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.PresenceControllerApi();
let personId = 789; // Number | 
let placeId = 789; // Number | 
apiInstance.stopPresenceByUser1(personId, placeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **Number**|  | 
 **placeId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

