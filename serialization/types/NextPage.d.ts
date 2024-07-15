/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as RolloutApi from "../../api";
import * as core from "../../core";
export declare const NextPage: core.serialization.ObjectSchema<serializers.NextPage.Raw, RolloutApi.NextPage>;
export declare namespace NextPage {
    interface Raw {
        link?: string | null;
        after: string;
    }
}
