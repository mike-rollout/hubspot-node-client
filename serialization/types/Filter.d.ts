/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as RolloutApi from "../../api";
import * as core from "../../core";
export declare const Filter: core.serialization.ObjectSchema<serializers.Filter.Raw, RolloutApi.Filter>;
export declare namespace Filter {
    interface Raw {
        highValue?: string | null;
        propertyName: string;
        values?: string[] | null;
        value?: string | null;
        operator: serializers.FilterOperator.Raw;
    }
}
