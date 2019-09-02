System Core Library
===================

The System Core Library contains the most important parts to develop with
TypeScript in a .NET-like way. It contains functions for handling the runtime
session, reflection, and primitive types.



Overview
--------

* [API Documentation](https://typescriptlibs.org/system-core/api)

* [Bug Report](https://github.com/typescriptlibs/system-core/issues/new)

* [Homepage](https://typescriptlibs.org/system-core)

* [MIT License](./LICENSE)

* [Source Code](https://github.com/typescriptlibs/system-core)



Introduction
------------

The System Core comes with its own extended `Object` class to provide
additional functionality like runtime control and reflection.

```ts
import { Object } from `@tsl/system-core`;
const obj = new Object();
console.log(obj instanceof Object); // true
```

The `Object ` class provides in combination with the `Type` class a more
advanced type reflection. You can easily compare the class type agains a full
qualified name with virtual namespace or agains an other class type.

```ts
import { Object, Type } from `@tsl/system-core`;
const obj = new Object();
console.log(obj.getType().fullName === '@tsl/system-core/System.Object'); // true
const obj2 = new Object();
console.log(Type.of(obj).equals(Type.of(obj2))); // true
```

With the help of the abstract `Enum` class you can also declare full qualified
enums with their own unique type.

```ts
import { Enum, Namespace } from `@tsl/system-core`;
@Namespace('MyApp').$('Namespace')
class MyEnum extends Enum<number>
{
    public static readonly Maybe = new MyEnum(1);
    public static readonly No = new MyEnum(0);
    public static readonly Yes = new MyEnum(2);
}
const myFlag: MyEnum = MyEnum.Maybe;
```
