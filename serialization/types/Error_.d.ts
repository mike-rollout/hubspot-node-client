/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as RolloutApi from "../../api";
import * as core from "../../core";
export declare const Error_: core.serialization.ObjectSchema<serializers.Error_.Raw, RolloutApi.Error_>;
export declare namespace Error_ {
    interface Raw {
        subCategory?: string | null;
        context?: Record<string, string[]> | null;
        correlationId: string;
        links?: Record<string, string> | null;
        message: string;
        category: string;
        errors?: serializers.ErrorDetail.Raw[] | null;
    }
}
