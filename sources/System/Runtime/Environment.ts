/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

////
//
//  Classes
//
////

/**
 * Provides information and functions for the current runtime session.
 */
export module Environment
{
    ////
    //
    //  Types
    //
    ////

    /**
     * Declares the most basic types.
     */
    export type BasicType = ( object | Function | PrimitiveType );

    /**
     * Declares a constructor with an index.
     */
    export type ConstructorType = ( Function & Record<string, unknown> );

    /**
     * Declares the primitive value types. These value types get converted by
     * the runtime engine to a full basic type, if necessary.
     */
    export type PrimitiveType = ( bigint | boolean | number | string | symbol );

    ////
    //
    //  Constants
    //
    ////

    /**
     * Returns the global namespace.
     */
    export const globalNamespace: typeof globalThis = (
        typeof globalThis !== 'undefined' ? globalThis :
            typeof self !== 'undefined' ? self :
                global
    ) as unknown as typeof globalThis;

    /**
     * Returns true, if the runtime engine is of client type.
     */
    export const isClient: boolean = ( typeof self !== 'undefined' && self instanceof Window );

    /**
     * Returns true, if the runtime engine is of worker type.
     */
    export const isWorker: boolean = ( typeof self !== 'undefined' && self instanceof Worker );

    /**
     * Returns true, if the runtime engine is of server type.
     */
    export const isServer: boolean = ( !isClient && !isWorker );

    /**
     * Returns the largest integer float number that can be used without
     * precision problems in every runtime engine.
     */
    export const maxSafeInteger: number = 0x1FFFFFFFFFFFFF;

    /**
     * Returns the lowest integer float number that can be used without
     * precision problems in every runtime engine.
     */
    export const minSafeInteger: number = -0x1FFFFFFFFFFFFF;

    /**
     * Returns the newline string for this environment.
     */
    export const newLine: string = '\n';

    /**
     * Returns an array of possible newline strings.
     */
    export const newLineAll: string[] = ['\r\n', '\n', '\r'];
}

////
//
//  Export
//
////

export default Environment;
