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

import Environment from './Environment';
import IDisposable from '../IDisposable';
import Object from '../Object';

////
//
//  Classes
//
////

/**
 * Provides special functions for the runtime session.
 */
export module RuntimeUtility
{
    ////
    //
    //  Constants
    //
    ////

    const _generatedStringHashCodeSalt: number = ( 1 + ( Math.random() * ( Environment.maxSafeInteger - 1 ) ) );

    ////
    //
    //  Variables
    //
    ////

    let _disposableRegister: Record<number, IDisposable> = {};

    let _generatedUniqueHashCodeCounter: number = Environment.minSafeInteger;

    ////
    //
    //  Functions
    //
    ////

    /**
     * Dispose registered disposable objects.
     */
    function dispose (): void
    {
        Object
            .values( _disposableRegister )
            .forEach(
                function ( object: IDisposable ): void
                {
                    if ( object.isDisposed === false )
                    {
                        object.dispose();
                    }
                }
            );
    }

    /**
     * Terminates the current runtime session and returns an exit code to the
     * runtime engine.
     *
     * @param exitCode
     * Exit code for the runtime engine.
     */
    export function exit ( exitCode: number = 0 )
    {
        if ( Environment.isServer )
        {
            dispose();
            Environment.globalNamespace.process.exit( exitCode );
        }
        else if ( Environment.isClient || Environment.isWorker )
        {
            dispose();
            Environment.globalNamespace.close();
        }
        else
        {
            throw new Error( 'The caller does not have sufficient security permission to perform a process exit.' );
        }
    }

    /**
     * Returns a generated unique code for a string. This code is only unique
     * during the current runtime session.
     *
     * @param str
     * String to generate the unique code of.
     */
    export function generateStringHashCode ( str: string ): number
    {
        let hash1 = 5381;
        let hash2 = hash1;
        let len = str.length;

        while ( len > 2 )
        {
            hash1 = ( ( hash1 << 5 ) + hash1 + ( hash1 >> 27 ) ) ^ str.charCodeAt( len - 1 );
            hash2 = ( ( hash2 << 5 ) + hash2 + ( hash2 >> 27 ) ) ^ str.charCodeAt( len - 2 );
            len -= 2;
        }

        if ( len > 0 )
        {
            hash1 = ( ( hash1 << 5 ) + hash1 + ( hash1 >> 27 ) ) ^ str.charCodeAt( len - 1 );
        }

        hash1 ^= _generatedStringHashCodeSalt;

        return ( hash1 + ( hash2 * 1566083941 ) );
    }

    /**
     * Returns a generated unique code for an object instances. This code is
     * only unique during the current runtime session.
     */
    export function generateUniqueHashCode (): number
    {
        return ++_generatedUniqueHashCodeCounter;
    }

    /**
     * Registers a disposable object for handling of unmanaged data on runtime
     * termination.
     *
     * @param object
     * Disposable object to handle.
     */
    export function registerDisposable ( object: IDisposable ): void
    {
        _disposableRegister[object.getHashCode()] = object;
    }
}

////
//
//  Export
//
////

export default RuntimeUtility;
