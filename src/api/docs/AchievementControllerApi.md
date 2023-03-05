# OpenApiDefinition.AchievementControllerApi

All URIs are relative to *http://localhost:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](AchievementControllerApi.md#callDelete) | **DELETE** /api/achievements/{achievementId} | 
[**get**](AchievementControllerApi.md#get) | **GET** /api/achievements/{achievementId} | 
[**getAll**](AchievementControllerApi.md#getAll) | **GET** /api/achievements/all | 
[**getAllByPersonId**](AchievementControllerApi.md#getAllByPersonId) | **GET** /api/achievements/byPerson/{personId} | 
[**save**](AchievementControllerApi.md#save) | **POST** /api/achievements/ | 



## callDelete

> callDelete(achievementId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.AchievementControllerApi();
let achievementId = 789; // Number | 
apiInstance.callDelete(achievementId, (error, data, response) => {
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
 **achievementId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## get

> Achievement get(achievementId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.AchievementControllerApi();
let achievementId = 789; // Number | 
apiInstance.get(achievementId, (error, data, response) => {
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
 **achievementId** | **Number**|  | 

### Return type

[**Achievement**](Achievement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAll

> [Achievement] getAll()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.AchievementControllerApi();
apiInstance.getAll((error, data, response) => {
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

[**[Achievement]**](Achievement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllByPersonId

> [Achievement] getAllByPersonId(personId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.AchievementControllerApi();
let personId = 789; // Number | 
apiInstance.getAllByPersonId(personId, (error, data, response) => {
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

[**[Achievement]**](Achievement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## save

> Achievement save(achievement)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.AchievementControllerApi();
let achievement = new OpenApiDefinition.Achievement(); // Achievement | 
apiInstance.save(achievement, (error, data, response) => {
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
 **achievement** | [**Achievement**](Achievement.md)|  | 

### Return type

[**Achievement**](Achievement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

