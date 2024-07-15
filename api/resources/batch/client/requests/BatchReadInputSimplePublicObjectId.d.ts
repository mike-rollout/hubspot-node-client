/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as RolloutApi from "../../../..";
/**
 * @example
 *     {
 *         propertiesWithHistory: ["propertiesWithHistory"],
 *         inputs: [{
 *                 id: "id"
 *             }],
 *         properties: ["properties"]
 *     }
 */
export interface BatchReadInputSimplePublicObjectId {
    /**
     * Whether to return only results that have been archived.
     */
    archived?: boolean;
    propertiesWithHistory: string[];
    idProperty?: string;
    inputs: RolloutApi.SimplePublicObjectId[];
    properties: string[];
}
