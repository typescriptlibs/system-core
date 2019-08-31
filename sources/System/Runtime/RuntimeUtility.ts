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

    const _disposableCleanUpThreshold = 1000;

    const _generatedStringHashCodeSalt: number = ( 1 + ( Math.random() * ( Environment.maxSafeInteger - 1 ) ) );

    ////
    //
    //  Constructor
    //
    ////

    initialize();

    ////
    //
    //  Variables
    //
    ////

    let _disposableCleanUpCountdown: number = _disposableCleanUpThreshold;

    let _disposableCleanUpInterval: number;

    let _disposableRegistry: Record<string, IDisposable> = {};

    let _generatedUniqueHashCodeCounter: number = Environment.minSafeInteger;

    ////
    //
    //  Functions
    //
    ////

    /**
     * Cleans up registered disposable objects.
     */
    function cleanUpDisposables (): void
    {
        Object
            .keys( _disposableRegistry )
            .forEach(
                function ( id: string ): void
                {
                    if ( _disposableRegistry[id].isDisposed === true )
                    {
                        delete _disposableRegistry[id];
                    }
                }
            );
    }

    /**
     * Dispose registered objects.
     */
    function dispose (): void
    {
        window.clearInterval( _disposableCleanUpInterval );

        Object
            .values( _disposableRegistry )
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
        dispose();

        if ( Environment.isServer )
        {
            Environment.globalNamespace.process.exit( exitCode );
        }
        else
        {
            Environment.globalNamespace.close();
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
     * Initialize runtime utility.
     */
    function initialize (): void
    {
        _disposableCleanUpInterval = window.setInterval( cleanUpDisposables, 60000 );

        if ( Environment.isServer )
        {
            initializeServer();
        }
        else
        {
            initializeClient();
        }
    }

    /**
     * Initialize client runtime.
     */
    function initializeClient (): void
    {
        Environment.globalNamespace.addEventListener( 'beforeunload', dispose );
    }

    /**
     * Initialize dispose management.
     */
    function initializeDispose (): void
    {

    }

    /**
     * Initialize server runtime.
     */
    function initializeServer (): void
    {
        const signal = function ()
        {
            exit();
        }

        process.on( 'exit', exit );
        process.on( 'SIGBREAK', signal );
        process.on( 'SIGHUP', signal );
        process.on( 'SIGINT', signal );
        process.on( 'SIGUSR1', signal );
        process.on( 'SIGUSR2', signal );
        process.on( 'SIGTERM', signal );
    }

    /**
     * Registers a disposable object for handling of unmanaged data on runtime
     * termination. There is no guarantee that the dispose function gets called,
     * because a runtime engine can be forced to terminate immediately.
     *
     * @param object
     * Disposable object to handle.
     */
    export function registerDisposable ( object: IDisposable ): void
    {
        _disposableRegistry[object.getHashCode().toString( 16 )] = object;

        if ( --_disposableCleanUpCountdown === 0 )
        {
            cleanUpDisposables();
            _disposableCleanUpCountdown = _disposableCleanUpThreshold;
        }
    }
}

////
//
//  Export
//
////

export default RuntimeUtility;
