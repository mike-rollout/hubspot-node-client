/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as RolloutApi from "../../..";
export declare namespace Gdpr {
    interface Options {
        environment?: core.Supplier<environments.RolloutApiEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        privateAppLegacy: core.Supplier<string>;
        privateApp: core.Supplier<string>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}
export declare class Gdpr {
    protected readonly _options: Gdpr.Options;
    constructor(_options: Gdpr.Options);
    /**
     * Permanently delete a contact and all associated content to follow GDPR. Use optional property 'idProperty' set to 'email' to identify contact by email address. If email address is not found, the email address will be added to a blocklist and prevent it from being used in the future.
     *
     * @example
     *     await rolloutApi.gdpr.postCrmV3ObjectsContactsGdprDeletePurge({
     *         objectId: "objectId"
     *     })
     */
    postCrmV3ObjectsContactsGdprDeletePurge(request: RolloutApi.PublicGdprDeleteInput, requestOptions?: Gdpr.RequestOptions): Promise<void>;
    protected _getAuthorizationHeader(): Promise<string>;
}
