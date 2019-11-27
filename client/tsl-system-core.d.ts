declare module "System/Runtime/Namespace" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
        System Core Library
    
        Copyright (c) TypeScriptLibs and Contributors
    
        Licensed under the MIT License; you may not use this file except in
        compliance with the License. You may obtain a copy of the MIT License at
        https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    export interface INamespaceClassConstructor extends Function {
        /**
         * Returns the namespace of the class. Class namespaces are read-only
         * and can not be changed.
         */
        readonly '[[__namespace__]]'?: string;
    }
    export interface INamespaceClassDecorator extends ClassDecorator {
        $(...additionalNamespaces: Array<string>): INamespaceClassDecorator;
    }
    /**
     * Decorates the constructor of the following class with a namespace for further
     * reflection.
     *
     * @example
     * ```ts
     *   @Namespace('System').$('Reflection')
     *   export class MemberInfo
     *   {
     *     // => namespace: 'System.Runtime'
     *   }
     * ```
     *
     * @param namespaces
     * One or more namespaces of the class. All namespaces will be separated with a
     * point (`.`) character.
     */
    export function Namespace(...namespaces: Array<string>): INamespaceClassDecorator;
    export default Namespace;
}
declare module "System/Runtime/Package" {
    export interface IPackageClassConstructor extends Function {
        /**
         * Returns the package of the class. Class packkages are read-only and can
         * not be changed.
         */
        readonly '[[__package__]]'?: string;
    }
    export interface IPackageClassDecorator extends ClassDecorator {
        $(...additionalNamespaces: Array<string>): IPackageClassDecorator;
    }
    /**
     * Decorates the constructor of the following class with a package and optional
     * namespace for further reflection.
     *
     * ```ts
     * @Package('@tsl', 'system-core').$('System').$('Reflection')
     * export class MemberInfo
     * {
     *     // => package: '@tsl/system-core'
     *     // => namespace: 'System.Runtime'
     * }
     * ```
     *
     * @param packages
     * One or more packages of the class. All packages will be separated with a
     * slash (`/`) character.
     */
    export function Package(...packages: Array<string>): IPackageClassDecorator;
    export default Package;
}
declare module "package" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
        System Core Library
    
        Copyright (c) TypeScriptLibs and Contributors
    
        Licensed under the MIT License; you may not use this file except in
        compliance with the License. You may obtain a copy of the MIT License at
        https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import { IPackageClassDecorator } from "System/Runtime/Package";
    /**
     * Returns the package name.
     */
    export const PackageName: string;
    /**
     * Returns the package namespace.
     */
    export const PackageNamespace: string;
    /**
     * Returns the internal class decorator of the package.
     * @private
     */
    export const PackageClassDecorator: IPackageClassDecorator;
    export default PackageClassDecorator;
}
declare module "System/Runtime/Environment" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
        System Core Library
    
        Copyright (c) TypeScriptLibs and Contributors
    
        Licensed under the MIT License; you may not use this file except in
        compliance with the License. You may obtain a copy of the MIT License at
        https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    /**
     * Provides information and functions for the current runtime session.
     */
    export module Environment {
        /**
         * Declares the most basic types.
         */
        type BasicType = (object | Function | PrimitiveType);
        /**
         * Declares a constructor with an index.
         */
        type ConstructorType = (Function & Record<string, unknown>);
        /**
         * Declares the primitive value types. These value types get converted by
         * the runtime engine to a full basic type, if necessary.
         */
        type PrimitiveType = (bigint | boolean | number | string | symbol);
        /**
         * Returns the global namespace.
         */
        const globalNamespace: typeof globalThis;
        /**
         * Returns true, if the runtime engine is of client type.
         */
        const isClient: boolean;
        /**
         * Returns true, if the runtime engine is of worker type.
         */
        const isWorker: boolean;
        /**
         * Returns true, if the runtime engine is of server type.
         */
        const isServer: boolean;
        /**
         * Returns the largest integer float number that can be used without
         * precision problems in every runtime engine.
         */
        const maxSafeInteger: number;
        /**
         * Returns the lowest integer float number that can be used without
         * precision problems in every runtime engine.
         */
        const minSafeInteger: number;
        /**
         * Returns the newline string for this environment.
         */
        const newLine: string;
        /**
         * Returns an array of possible newline strings.
         */
        const newLineAll: string[];
    }
    export default Environment;
}
declare module "System/IDisposable" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
        System Core Library
    
        Copyright (c) TypeScriptLibs and Contributors
    
        Licensed under the MIT License; you may not use this file except in
        compliance with the License. You may obtain a copy of the MIT License at
        https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import Object from "System/Object";
    /**
     * Provides an interface to dispose unmanaged data. The runtime engine dispose
     * unmanaged data during session exit.
     */
    export interface IDisposable extends Object {
        /**
         * Returns true, if the dispose function has been called.
         */
        isDisposed: boolean;
        /**
         * The clean up function to dispose unmanaged data.
         */
        dispose(): void;
    }
    export default IDisposable;
}
declare module "System/Runtime/RuntimeUtility" {
    import IDisposable from "System/IDisposable";
    /**
     * Provides special functions for the runtime session.
     */
    export module RuntimeUtility {
        /**
         * Terminates the current runtime session and returns an exit code to the
         * runtime engine.
         *
         * @param exitCode
         * Exit code for the runtime engine.
         */
        function exit(exitCode?: number): void;
        /**
         * Generates and returns a unique code for a string. This code is only
         * unique during the current runtime session.
         *
         * @param str
         * String to generate the unique code of.
         */
        function generateStringHashCode(str: string): number;
        /**
         * Generates and returns a unique code for an object instances. This code is
         * only unique during the current runtime session.
         */
        function generateUniqueHashCode(): number;
        /**
         * Registers a disposable object for handling of unmanaged data on runtime
         * termination. There is no guarantee that the dispose function gets called,
         * because a runtime engine can be forced to terminate immediately.
         *
         * @param object
         * Disposable object to handle.
         */
        function registerDisposable(object: IDisposable): void;
    }
    export default RuntimeUtility;
}
declare module "System/Object" {
    import Environment from "System/Runtime/Environment";
    /**
     * The base `Object` class for all other classes. Internally defined in upper
     * case to avoid conflicts with reserved keywords.
     *
     * ```ts
     * import { Object, OBJECT } from '@tsl/system-core';
     * let obj = new Object();
     * console.log(obj.getType().fullName); // @tsl/system-core/System.Object
     * obj = new OBJECT();
     * console.log(obj.getType().fullName); // @tsl/system-core/System.Object
     * ```
     */
    export class OBJECT {
        private '[[__hashCode__]]';
        private '[[__target__]]';
        /**
         * Instantiates a basic object.
         */
        constructor();
        /**
         * Compares this object instance with an other object instance for equality.
         * Returns true, if the object instances are equal.
         *
         * @param other
         * The object instance to compare with.
         */
        equals(other: OBJECT): boolean;
        /**
         * Generates and returns a unique code for this object instance.
         */
        getHashCode(): number;
        /**
         * Returns the type of the object instance for further reflection.
         */
        getType(): Type;
        /**
         * Returns the class name as the default string representation of an
         * object. Must be overwritten by value based classes.
         */
        toString(): string;
        /**
         * Returns the primitive value of the object instance.
         */
        valueOf(): (bigint | boolean | number | string | symbol | this);
    }
    /**
     * Provides information about a reflected member.
     */
    export abstract class MemberInfo extends OBJECT {
        /**
         * Returns the type that declares the member.
         */
        abstract get declaringType(): Type;
        /**
         * Returns the name of the member.
         */
        abstract get name(): string;
        /**
         * Returns the type that was used to get the member info.
         */
        abstract get reflectedType(): Type;
    }
    /**
     * The `Type` class of an object provides information for further reflection.
     *
     * ```ts
     * import { Object, OBJECT, Type } from '@tsl/system-core';
     * let obj = new Object();
     * console.log(Type.of(obj).getType().fullName);
     * // output: @tsl/system-core/System.Object
     * obj = new OBJECT();
     * console.log(TYPE.of(obj).fullName);
     * // output: @tsl/system-core/System.Object
     * ```
     */
    export class Type extends MemberInfo {
        /**
         * Returns the class type of the given object.
         *
         * @param object
         * The object to get the type of.
         */
        static of(object: Environment.BasicType): Type;
        /**
         * Creates the class type of a given object.
         *
         * @param object
         * The object to reflect.
         */
        private constructor();
        private _constructor;
        private _hashCode;
        private _name;
        private _namespace;
        private _package;
        /**
         * Returns the class type.
         */
        get declaringType(): Type;
        /**
         * Returns the full class name.
         */
        get fullName(): string;
        /**
         * Returns true, if the type represents an enum class.
         */
        isEnum(): boolean;
        /**
         * Returns the class name.
         */
        get name(): string;
        /**
         * Returns the class namespace.
         */
        get namespace(): (string | undefined);
        /**
         * Returns the class package.
         */
        get package(): (string | undefined);
        /**
         * Returns the class type.
         */
        get reflectedType(): Type;
        /**
         * Compares this object type with another object type. Returns true, if the
         * object types are equal, otherwise false.
         *
         * @param other
         * The other type to compare with.
         */
        equals(other: OBJECT): boolean;
        /**
         * Returns the names of the enum constants.
         */
        getEnumNames(): Array<string>;
        /**
         * Returns a generated unique code for this type.
         */
        getHashCode(): number;
        /**
         * Returns itself for further reflection.
         */
        getType(): Type;
        /**
         * Returns the full name of the representing class.
         */
        toString(): string;
        /**
         * Returns the full name of the representing class.
         */
        valueOf(): string;
    }
    export default OBJECT;
}
declare module "System/IComparable" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
        System Core Library
    
        Copyright (c) TypeScriptLibs and Contributors
    
        Licensed under the MIT License; you may not use this file except in
        compliance with the License. You may obtain a copy of the MIT License at
        https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import Object from "System/Object";
    /**
     * Provides an interface to compare the order position of two objects of the
     * same type to each other.
     */
    export interface IComparable<T extends IComparable<T>> extends Object {
        /**
         * Returns a number indicating the order position of this object in
         * comparison to an other object of the same type.
         *
         * - A number lower than zero (`< 0`) means, that the order position of this
         *   object comes before the order position of the other object.
         *
         * - A number equal to zero (`=== 0`) means, that the order position of both
         *   objects is equal.
         *
         * - A number higher than zero (`> 0`) means, that the order position of
         *   this object comes after the order position of the other object.
         */
        compareTo(other: T): number;
    }
    export default IComparable;
}
declare module "System/Type" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
        System Core Library
    
        Copyright (c) TypeScriptLibs and Contributors
    
        Licensed under the MIT License; you may not use this file except in
        compliance with the License. You may obtain a copy of the MIT License at
        https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import { Type } from "System/Object";
    export { Type } from "System/Object";
    export default Type;
}
declare module "System/ValueType" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
        System Core Library
    
        Copyright (c) TypeScriptLibs and Contributors
    
        Licensed under the MIT License; you may not use this file except in
        compliance with the License. You may obtain a copy of the MIT License at
        https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import Environment from "System/Runtime/Environment";
    import Object from "System/Object";
    /**
     * The base class for value types.
     */
    export abstract class ValueType<T extends Environment.PrimitiveType> extends Object {
        /**
         * Returns true, if the object value is equal to the other object value.
         *
         * @param other
         * The object value to compare with.
         */
        equals(other: ValueType<T>): boolean;
        /**
         * Generates and returns a unique code for the string value of this object.
         */
        getHashCode(): number;
        /**
         * Returns the string of this object value.
         */
        toString(): string;
        /**
         * Returns the primitive value of this object. Must be overwritten.
         */
        abstract valueOf(): T;
    }
    export default ValueType;
}
declare module "System/Enum" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
        System Core Library
    
        Copyright (c) TypeScriptLibs and Contributors
    
        Licensed under the MIT License; you may not use this file except in
        compliance with the License. You may obtain a copy of the MIT License at
        https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import Environment from "System/Runtime/Environment";
    import IComparable from "System/IComparable";
    import Type from "System/Type";
    import ValueType from "System/ValueType";
    /**
     * This is the abstract base class for enums.
     *
     * ```ts
     * import { Enum } from `@tsl/system-core`;
     * class MyEnum extends Enum<boolean>
     * {
     *     public static readonly No = new MyEnum(false);
     *     public static readonly Yes = new MyEnum(true);
     * }
     * const myFlag: MyEnum = MyEnum.No;
     * ```
     */
    export abstract class Enum<T extends Environment.PrimitiveType> extends ValueType<T> implements IComparable<Enum<T>> {
        private static readonly _enums;
        /**
         * Returns all names of the given enum type.
         *
         * @param enumType
         * The enum type.
         */
        static getNames(enumType: Type): Array<string>;
        /**
         * Instantiates a new enum value.
         *
         * @param value
         * The value of the pair in the enum.
         */
        constructor(value: T);
        private _value;
        /**
         * Returns true, if the enum instance is the same.
         *
         * @param other
         * The enum to compare with.
         */
        equals(other: Enum<T>): boolean;
        /**
         * Returns a number indicating the order position of the current enum in
         * comparison to an other enum of the same type.
         *
         * - A number lower than zero (`< 0`) means, that the order position of the
         *   current enum comes before the order position of the other enum.
         *
         * - A number equal to zero (`=== 0`) means, that both enums share the same
         *   order position.
         *
         * - A number higher than zero (`> 0`) means, that the order position of the
         *   current enum comes after the order position of the other enum.
         */
        compareTo(other: Enum<T>): number;
        /**
         * Returns the value of the enum member.
         */
        valueOf(): T;
    }
    export default Enum;
}
declare module "System/Reflection/MemberInfo" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
        System Core Library
    
        Copyright (c) TypeScriptLibs and Contributors
    
        Licensed under the MIT License; you may not use this file except in
        compliance with the License. You may obtain a copy of the MIT License at
        https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import { MemberInfo } from "System/Object";
    export { MemberInfo } from "System/Object";
    export default MemberInfo;
}
declare module "System/Reflection/MemberTypes" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
        System Core Library
    
        Copyright (c) TypeScriptLibs and Contributors
    
        Licensed under the MIT License; you may not use this file except in
        compliance with the License. You may obtain a copy of the MIT License at
        https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import Enum from "System/Enum";
    export class MemberTypes extends Enum<number> {
        static readonly Constructor: MemberTypes;
        static readonly Event: MemberTypes;
        static readonly Field: MemberTypes;
        static readonly Method: MemberTypes;
        static readonly Property: MemberTypes;
        static readonly TypeInfo: MemberTypes;
        static readonly Custom: MemberTypes;
        static readonly NestedType: MemberTypes;
    }
    export default MemberTypes;
}
declare module "System/Reflection/index" {
    export * from "System/Reflection/MemberInfo";
    export * from "System/Reflection/MemberTypes";
}
declare module "System/Runtime/TestUtility" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
        System Core Library
    
        Copyright (c) TypeScriptLibs and Contributors
    
        Licensed under the MIT License; you may not use this file except in
        compliance with the License. You may obtain a copy of the MIT License at
        https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    export module TestUtility {
        function assertDeepEqual<T>(value: T, expected: T, errorMessage?: string): void;
        function assertEqual<T>(value: T, expected: T, errorMessage?: string): void;
        function assertNotEqual<T>(value: T, notExpected: T, errorMessage?: string): void;
        function clear(): void;
        function getAssertCounter(): number;
    }
    export default TestUtility;
}
declare module "System/Runtime/index" {
    export * from "System/Runtime/Environment";
    export * from "System/Runtime/Namespace";
    export * from "System/Runtime/Package";
    export * from "System/Runtime/RuntimeUtility";
    export * from "System/Runtime/TestUtility";
}
declare module "System/index" {
    export * from "System/Enum";
    export * from "System/IComparable";
    export * from "System/IDisposable";
    export * from "System/Object";
    export { OBJECT as Object } from "System/Object";
    export * from "System/Reflection/index";
    export * from "System/Runtime/index";
    export * from "System/Type";
}
declare module "index" {
    export * from "package";
    export * from "System/index";
}
declare module "System/Runtime/Environment.tests" {
    export function test(): void;
    export default test;
}
declare module "System/Object.tests" {
    export function test(): void;
    export default test;
}
declare module "index.tests" { }
