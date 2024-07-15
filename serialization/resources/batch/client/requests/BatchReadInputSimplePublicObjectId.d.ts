/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as RolloutApi from "../../../../../api";
import * as core from "../../../../../core";
export declare const BatchReadInputSimplePublicObjectId: core.serialization.Schema<serializers.BatchReadInputSimplePublicObjectId.Raw, Omit<RolloutApi.BatchReadInputSimplePublicObjectId, "archived">>;
export declare namespace BatchReadInputSimplePublicObjectId {
    interface Raw {
        propertiesWithHistory: string[];
        idProperty?: string | null;
        inputs: serializers.SimplePublicObjectId.Raw[];
        properties: string[];
    }
}
