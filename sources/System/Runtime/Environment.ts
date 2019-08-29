/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

////
//
//  Imports
//
////

import SystemCoreDecorator from '../../package';

////
//
//  Classes
//
////

/**
 * Provides information and functions for the current runtime session.
 */
@SystemCoreDecorator.$( 'Runtime' )
export abstract class Environment
{
    ////
    //
    //  Static Properties
    //
    ////

    /**
     * Returns the object class of the runtime engine.
     */
    public static readonly esObject: typeof Object = Object;

    /**
     * Return the string class of the runtime engine.
     */
    public static readonly esString: typeof String = String;

    /**
     * Returns the global namespace.
     */
    public static readonly global: typeof globalThis = ( globalThis || window || self || global );

    /**
     * Returns true, if the runtime engine is of client type.
     */
    public static readonly isClient: boolean = ( window instanceof Window );

    /**
     * Returns true, if the runtime engine is of server type.
     */
    public static readonly isServer: boolean = ( global instanceof Object );

    /**
     * Returns true, if the runtime engine is of worker type.
     */
    public static readonly isWorker: boolean = ( self instanceof Worker );

    /**
     * Returns the largest integer float number that can be used without
     * precision problems in every runtime engine.
     */
    public static readonly maxSafeInteger: number = 0x1FFFFFFFFFFFFF;

    /**
     * Returns the lowest integer float number that can be used without
     * precision problems in every runtime engine.
     */
    public static readonly minSafeInteger: number = -0x1FFFFFFFFFFFFF;

    /**
     * Returns the newline string for this environment.
     */
    public static readonly newLine: string = '\n';

    /**
     * Returns an array of possible newline strings.
     */
    public static readonly newLineAll: string[] = ['\n', '\r', '\r\n'];

    ////
    //
    //  Static Functions
    //
    ////

    /**
     * Terminates the current process and returns an exit code to the runtime
     * engine.
     *
     * @param exitCode
     * The exit code for the runtime engine.
     */
    public static exit ( exitCode: number = 0 )
    {
        if ( Environment.isServer )
        {
            Environment.global.process.exit( exitCode );
        }
        else if ( Environment.isClient || Environment.isWorker )
        {
            Environment.global.close();
        }
        else
        {
            throw new Error( 'The caller does not have sufficient security permission to perform a process exit.' );
        }
    }
}

////
//
//  Export
//
////

export default Environment;
