/* tslint:disable */
/* eslint-disable */
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
 */



/**
 * 
 * @export
 * @interface Person
 */
export interface Person {
    /**
     * 
     * @type {number}
     * @memberof Person
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'firstname'?: string;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'lastname'?: string;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'status'?: PersonStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'lifeguard'?: PersonLifeguardEnum;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'lifeguardFrom'?: string;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'fitness'?: string;
}

export const PersonStatusEnum = {
    Ill: 'ILL',
    Retired: 'RETIRED',
    Active: 'ACTIVE'
} as const;

export type PersonStatusEnum = typeof PersonStatusEnum[keyof typeof PersonStatusEnum];
export const PersonLifeguardEnum = {
    None: 'NONE',
    Junior: 'JUNIOR',
    Bronze: 'BRONZE',
    Silver: 'SILVER',
    Gold: 'GOLD'
} as const;

export type PersonLifeguardEnum = typeof PersonLifeguardEnum[keyof typeof PersonLifeguardEnum];


