
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Career
 * 
 */
export type Career = $Result.DefaultSelection<Prisma.$CareerPayload>
/**
 * Model Logbook
 * 
 */
export type Logbook = $Result.DefaultSelection<Prisma.$LogbookPayload>
/**
 * Model Dispatch
 * 
 */
export type Dispatch = $Result.DefaultSelection<Prisma.$DispatchPayload>
/**
 * Model Entry
 * 
 */
export type Entry = $Result.DefaultSelection<Prisma.$EntryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rank: {
  PILOTCADET: 'PILOTCADET',
  SECONDOFFICER: 'SECONDOFFICER',
  FIRSTOFFICER: 'FIRSTOFFICER',
  CAPTAIN: 'CAPTAIN',
  SENIORCAPTAIN: 'SENIORCAPTAIN'
};

export type Rank = (typeof Rank)[keyof typeof Rank]


export const CareerType: {
  AIRLINE: 'AIRLINE',
  CARGO: 'CARGO',
  CORPORATE: 'CORPORATE'
};

export type CareerType = (typeof CareerType)[keyof typeof CareerType]

}

export type Rank = $Enums.Rank

export const Rank: typeof $Enums.Rank

export type CareerType = $Enums.CareerType

export const CareerType: typeof $Enums.CareerType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.career`: Exposes CRUD operations for the **Career** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Careers
    * const careers = await prisma.career.findMany()
    * ```
    */
  get career(): Prisma.CareerDelegate<ExtArgs>;

  /**
   * `prisma.logbook`: Exposes CRUD operations for the **Logbook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logbooks
    * const logbooks = await prisma.logbook.findMany()
    * ```
    */
  get logbook(): Prisma.LogbookDelegate<ExtArgs>;

  /**
   * `prisma.dispatch`: Exposes CRUD operations for the **Dispatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dispatches
    * const dispatches = await prisma.dispatch.findMany()
    * ```
    */
  get dispatch(): Prisma.DispatchDelegate<ExtArgs>;

  /**
   * `prisma.entry`: Exposes CRUD operations for the **Entry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entries
    * const entries = await prisma.entry.findMany()
    * ```
    */
  get entry(): Prisma.EntryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Career: 'Career',
    Logbook: 'Logbook',
    Dispatch: 'Dispatch',
    Entry: 'Entry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'career' | 'logbook' | 'dispatch' | 'entry'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Career: {
        payload: Prisma.$CareerPayload<ExtArgs>
        fields: Prisma.CareerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findFirst: {
            args: Prisma.CareerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findMany: {
            args: Prisma.CareerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          create: {
            args: Prisma.CareerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          createMany: {
            args: Prisma.CareerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CareerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          update: {
            args: Prisma.CareerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          deleteMany: {
            args: Prisma.CareerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CareerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CareerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          aggregate: {
            args: Prisma.CareerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCareer>
          }
          groupBy: {
            args: Prisma.CareerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CareerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareerCountArgs<ExtArgs>,
            result: $Utils.Optional<CareerCountAggregateOutputType> | number
          }
        }
      }
      Logbook: {
        payload: Prisma.$LogbookPayload<ExtArgs>
        fields: Prisma.LogbookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogbookFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogbookFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload>
          }
          findFirst: {
            args: Prisma.LogbookFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogbookFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload>
          }
          findMany: {
            args: Prisma.LogbookFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload>[]
          }
          create: {
            args: Prisma.LogbookCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload>
          }
          createMany: {
            args: Prisma.LogbookCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LogbookDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload>
          }
          update: {
            args: Prisma.LogbookUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload>
          }
          deleteMany: {
            args: Prisma.LogbookDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LogbookUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LogbookUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload>
          }
          aggregate: {
            args: Prisma.LogbookAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLogbook>
          }
          groupBy: {
            args: Prisma.LogbookGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LogbookGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogbookCountArgs<ExtArgs>,
            result: $Utils.Optional<LogbookCountAggregateOutputType> | number
          }
        }
      }
      Dispatch: {
        payload: Prisma.$DispatchPayload<ExtArgs>
        fields: Prisma.DispatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DispatchFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DispatchFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          findFirst: {
            args: Prisma.DispatchFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DispatchFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          findMany: {
            args: Prisma.DispatchFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>[]
          }
          create: {
            args: Prisma.DispatchCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          createMany: {
            args: Prisma.DispatchCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DispatchDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          update: {
            args: Prisma.DispatchUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          deleteMany: {
            args: Prisma.DispatchDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DispatchUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DispatchUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          aggregate: {
            args: Prisma.DispatchAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDispatch>
          }
          groupBy: {
            args: Prisma.DispatchGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DispatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.DispatchCountArgs<ExtArgs>,
            result: $Utils.Optional<DispatchCountAggregateOutputType> | number
          }
        }
      }
      Entry: {
        payload: Prisma.$EntryPayload<ExtArgs>
        fields: Prisma.EntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          findFirst: {
            args: Prisma.EntryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          findMany: {
            args: Prisma.EntryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          create: {
            args: Prisma.EntryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          createMany: {
            args: Prisma.EntryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EntryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          update: {
            args: Prisma.EntryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          deleteMany: {
            args: Prisma.EntryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EntryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EntryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          aggregate: {
            args: Prisma.EntryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEntry>
          }
          groupBy: {
            args: Prisma.EntryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntryCountArgs<ExtArgs>,
            result: $Utils.Optional<EntryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    careers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careers?: boolean | UserCountOutputTypeCountCareersArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCareersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerWhereInput
  }



  /**
   * Count Type LogbookCountOutputType
   */

  export type LogbookCountOutputType = {
    entries: number
  }

  export type LogbookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | LogbookCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes

  /**
   * LogbookCountOutputType without action
   */
  export type LogbookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogbookCountOutputType
     */
    select?: LogbookCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * LogbookCountOutputType without action
   */
  export type LogbookCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    darkMode: boolean | null
    autAdvance: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    darkMode: boolean | null
    autAdvance: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    darkMode: number
    autAdvance: number
    autAdvanceData: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    darkMode?: true
    autAdvance?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    darkMode?: true
    autAdvance?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    darkMode?: true
    autAdvance?: true
    autAdvanceData?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    darkMode: boolean
    autAdvance: boolean
    autAdvanceData: JsonValue
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    darkMode?: boolean
    autAdvance?: boolean
    autAdvanceData?: boolean
    careers?: boolean | User$careersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    darkMode?: boolean
    autAdvance?: boolean
    autAdvanceData?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careers?: boolean | User$careersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      careers: Prisma.$CareerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      darkMode: boolean
      autAdvance: boolean
      autAdvanceData: Prisma.JsonValue
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    careers<T extends User$careersArgs<ExtArgs> = {}>(args?: Subset<T, User$careersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly darkMode: FieldRef<"User", 'Boolean'>
    readonly autAdvance: FieldRef<"User", 'Boolean'>
    readonly autAdvanceData: FieldRef<"User", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.careers
   */
  export type User$careersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerInclude<ExtArgs> | null
    where?: CareerWhereInput
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    cursor?: CareerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Career
   */

  export type AggregateCareer = {
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  export type CareerAvgAggregateOutputType = {
    flightHours: number | null
  }

  export type CareerSumAggregateOutputType = {
    flightHours: number | null
  }

  export type CareerMinAggregateOutputType = {
    id: string | null
    base: string | null
    company: string | null
    aircraft: string | null
    flightHours: number | null
    name: string | null
    rank: $Enums.Rank | null
    careerType: $Enums.CareerType | null
    userId: string | null
  }

  export type CareerMaxAggregateOutputType = {
    id: string | null
    base: string | null
    company: string | null
    aircraft: string | null
    flightHours: number | null
    name: string | null
    rank: $Enums.Rank | null
    careerType: $Enums.CareerType | null
    userId: string | null
  }

  export type CareerCountAggregateOutputType = {
    id: number
    base: number
    company: number
    aircraft: number
    flightHours: number
    name: number
    rank: number
    careerType: number
    userId: number
    _all: number
  }


  export type CareerAvgAggregateInputType = {
    flightHours?: true
  }

  export type CareerSumAggregateInputType = {
    flightHours?: true
  }

  export type CareerMinAggregateInputType = {
    id?: true
    base?: true
    company?: true
    aircraft?: true
    flightHours?: true
    name?: true
    rank?: true
    careerType?: true
    userId?: true
  }

  export type CareerMaxAggregateInputType = {
    id?: true
    base?: true
    company?: true
    aircraft?: true
    flightHours?: true
    name?: true
    rank?: true
    careerType?: true
    userId?: true
  }

  export type CareerCountAggregateInputType = {
    id?: true
    base?: true
    company?: true
    aircraft?: true
    flightHours?: true
    name?: true
    rank?: true
    careerType?: true
    userId?: true
    _all?: true
  }

  export type CareerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Career to aggregate.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Careers
    **/
    _count?: true | CareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerMaxAggregateInputType
  }

  export type GetCareerAggregateType<T extends CareerAggregateArgs> = {
        [P in keyof T & keyof AggregateCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareer[P]>
      : GetScalarType<T[P], AggregateCareer[P]>
  }




  export type CareerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerWhereInput
    orderBy?: CareerOrderByWithAggregationInput | CareerOrderByWithAggregationInput[]
    by: CareerScalarFieldEnum[] | CareerScalarFieldEnum
    having?: CareerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerCountAggregateInputType | true
    _avg?: CareerAvgAggregateInputType
    _sum?: CareerSumAggregateInputType
    _min?: CareerMinAggregateInputType
    _max?: CareerMaxAggregateInputType
  }

  export type CareerGroupByOutputType = {
    id: string
    base: string
    company: string
    aircraft: string
    flightHours: number
    name: string
    rank: $Enums.Rank
    careerType: $Enums.CareerType
    userId: string
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  type GetCareerGroupByPayload<T extends CareerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerGroupByOutputType[P]>
            : GetScalarType<T[P], CareerGroupByOutputType[P]>
        }
      >
    >


  export type CareerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    base?: boolean
    company?: boolean
    aircraft?: boolean
    flightHours?: boolean
    name?: boolean
    rank?: boolean
    careerType?: boolean
    userId?: boolean
    belongsTo?: boolean | UserDefaultArgs<ExtArgs>
    dispatches?: boolean | Career$dispatchesArgs<ExtArgs>
    logbook?: boolean | Career$logbookArgs<ExtArgs>
  }, ExtArgs["result"]["career"]>

  export type CareerSelectScalar = {
    id?: boolean
    base?: boolean
    company?: boolean
    aircraft?: boolean
    flightHours?: boolean
    name?: boolean
    rank?: boolean
    careerType?: boolean
    userId?: boolean
  }

  export type CareerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    belongsTo?: boolean | UserDefaultArgs<ExtArgs>
    dispatches?: boolean | Career$dispatchesArgs<ExtArgs>
    logbook?: boolean | Career$logbookArgs<ExtArgs>
  }


  export type $CareerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Career"
    objects: {
      belongsTo: Prisma.$UserPayload<ExtArgs>
      dispatches: Prisma.$DispatchPayload<ExtArgs> | null
      logbook: Prisma.$LogbookPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      base: string
      company: string
      aircraft: string
      flightHours: number
      name: string
      rank: $Enums.Rank
      careerType: $Enums.CareerType
      userId: string
    }, ExtArgs["result"]["career"]>
    composites: {}
  }


  type CareerGetPayload<S extends boolean | null | undefined | CareerDefaultArgs> = $Result.GetResult<Prisma.$CareerPayload, S>

  type CareerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CareerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CareerCountAggregateInputType | true
    }

  export interface CareerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Career'], meta: { name: 'Career' } }
    /**
     * Find zero or one Career that matches the filter.
     * @param {CareerFindUniqueArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CareerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CareerFindUniqueArgs<ExtArgs>>
    ): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Career that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CareerFindUniqueOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CareerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CareerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Career that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CareerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CareerFindFirstArgs<ExtArgs>>
    ): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Career that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CareerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CareerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Careers
     * const careers = await prisma.career.findMany()
     * 
     * // Get first 10 Careers
     * const careers = await prisma.career.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careerWithIdOnly = await prisma.career.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CareerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CareerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Career.
     * @param {CareerCreateArgs} args - Arguments to create a Career.
     * @example
     * // Create one Career
     * const Career = await prisma.career.create({
     *   data: {
     *     // ... data to create a Career
     *   }
     * })
     * 
    **/
    create<T extends CareerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CareerCreateArgs<ExtArgs>>
    ): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Careers.
     *     @param {CareerCreateManyArgs} args - Arguments to create many Careers.
     *     @example
     *     // Create many Careers
     *     const career = await prisma.career.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CareerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CareerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Career.
     * @param {CareerDeleteArgs} args - Arguments to delete one Career.
     * @example
     * // Delete one Career
     * const Career = await prisma.career.delete({
     *   where: {
     *     // ... filter to delete one Career
     *   }
     * })
     * 
    **/
    delete<T extends CareerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CareerDeleteArgs<ExtArgs>>
    ): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Career.
     * @param {CareerUpdateArgs} args - Arguments to update one Career.
     * @example
     * // Update one Career
     * const career = await prisma.career.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CareerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CareerUpdateArgs<ExtArgs>>
    ): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Careers.
     * @param {CareerDeleteManyArgs} args - Arguments to filter Careers to delete.
     * @example
     * // Delete a few Careers
     * const { count } = await prisma.career.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CareerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CareerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CareerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CareerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Career.
     * @param {CareerUpsertArgs} args - Arguments to update or create a Career.
     * @example
     * // Update or create a Career
     * const career = await prisma.career.upsert({
     *   create: {
     *     // ... data to create a Career
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Career we want to update
     *   }
     * })
    **/
    upsert<T extends CareerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CareerUpsertArgs<ExtArgs>>
    ): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerCountArgs} args - Arguments to filter Careers to count.
     * @example
     * // Count the number of Careers
     * const count = await prisma.career.count({
     *   where: {
     *     // ... the filter for the Careers we want to count
     *   }
     * })
    **/
    count<T extends CareerCountArgs>(
      args?: Subset<T, CareerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareerAggregateArgs>(args: Subset<T, CareerAggregateArgs>): Prisma.PrismaPromise<GetCareerAggregateType<T>>

    /**
     * Group by Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CareerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerGroupByArgs['orderBy'] }
        : { orderBy?: CareerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CareerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Career model
   */
  readonly fields: CareerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Career.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    belongsTo<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    dispatches<T extends Career$dispatchesArgs<ExtArgs> = {}>(args?: Subset<T, Career$dispatchesArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    logbook<T extends Career$logbookArgs<ExtArgs> = {}>(args?: Subset<T, Career$logbookArgs<ExtArgs>>): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Career model
   */ 
  interface CareerFieldRefs {
    readonly id: FieldRef<"Career", 'String'>
    readonly base: FieldRef<"Career", 'String'>
    readonly company: FieldRef<"Career", 'String'>
    readonly aircraft: FieldRef<"Career", 'String'>
    readonly flightHours: FieldRef<"Career", 'Float'>
    readonly name: FieldRef<"Career", 'String'>
    readonly rank: FieldRef<"Career", 'Rank'>
    readonly careerType: FieldRef<"Career", 'CareerType'>
    readonly userId: FieldRef<"Career", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Career findUnique
   */
  export type CareerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }


  /**
   * Career findUniqueOrThrow
   */
  export type CareerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }


  /**
   * Career findFirst
   */
  export type CareerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }


  /**
   * Career findFirstOrThrow
   */
  export type CareerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }


  /**
   * Career findMany
   */
  export type CareerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Careers to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }


  /**
   * Career create
   */
  export type CareerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The data needed to create a Career.
     */
    data: XOR<CareerCreateInput, CareerUncheckedCreateInput>
  }


  /**
   * Career createMany
   */
  export type CareerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Career update
   */
  export type CareerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The data needed to update a Career.
     */
    data: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
    /**
     * Choose, which Career to update.
     */
    where: CareerWhereUniqueInput
  }


  /**
   * Career updateMany
   */
  export type CareerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
  }


  /**
   * Career upsert
   */
  export type CareerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The filter to search for the Career to update in case it exists.
     */
    where: CareerWhereUniqueInput
    /**
     * In case the Career found by the `where` argument doesn't exist, create a new Career with this data.
     */
    create: XOR<CareerCreateInput, CareerUncheckedCreateInput>
    /**
     * In case the Career was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
  }


  /**
   * Career delete
   */
  export type CareerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter which Career to delete.
     */
    where: CareerWhereUniqueInput
  }


  /**
   * Career deleteMany
   */
  export type CareerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Careers to delete
     */
    where?: CareerWhereInput
  }


  /**
   * Career.dispatches
   */
  export type Career$dispatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DispatchInclude<ExtArgs> | null
    where?: DispatchWhereInput
  }


  /**
   * Career.logbook
   */
  export type Career$logbookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogbookInclude<ExtArgs> | null
    where?: LogbookWhereInput
  }


  /**
   * Career without action
   */
  export type CareerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerInclude<ExtArgs> | null
  }



  /**
   * Model Logbook
   */

  export type AggregateLogbook = {
    _count: LogbookCountAggregateOutputType | null
    _min: LogbookMinAggregateOutputType | null
    _max: LogbookMaxAggregateOutputType | null
  }

  export type LogbookMinAggregateOutputType = {
    id: string | null
    careerId: string | null
  }

  export type LogbookMaxAggregateOutputType = {
    id: string | null
    careerId: string | null
  }

  export type LogbookCountAggregateOutputType = {
    id: number
    careerId: number
    _all: number
  }


  export type LogbookMinAggregateInputType = {
    id?: true
    careerId?: true
  }

  export type LogbookMaxAggregateInputType = {
    id?: true
    careerId?: true
  }

  export type LogbookCountAggregateInputType = {
    id?: true
    careerId?: true
    _all?: true
  }

  export type LogbookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logbook to aggregate.
     */
    where?: LogbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logbooks to fetch.
     */
    orderBy?: LogbookOrderByWithRelationInput | LogbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logbooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logbooks
    **/
    _count?: true | LogbookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogbookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogbookMaxAggregateInputType
  }

  export type GetLogbookAggregateType<T extends LogbookAggregateArgs> = {
        [P in keyof T & keyof AggregateLogbook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogbook[P]>
      : GetScalarType<T[P], AggregateLogbook[P]>
  }




  export type LogbookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogbookWhereInput
    orderBy?: LogbookOrderByWithAggregationInput | LogbookOrderByWithAggregationInput[]
    by: LogbookScalarFieldEnum[] | LogbookScalarFieldEnum
    having?: LogbookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogbookCountAggregateInputType | true
    _min?: LogbookMinAggregateInputType
    _max?: LogbookMaxAggregateInputType
  }

  export type LogbookGroupByOutputType = {
    id: string
    careerId: string
    _count: LogbookCountAggregateOutputType | null
    _min: LogbookMinAggregateOutputType | null
    _max: LogbookMaxAggregateOutputType | null
  }

  type GetLogbookGroupByPayload<T extends LogbookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogbookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogbookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogbookGroupByOutputType[P]>
            : GetScalarType<T[P], LogbookGroupByOutputType[P]>
        }
      >
    >


  export type LogbookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    careerId?: boolean
    entries?: boolean | Logbook$entriesArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
    _count?: boolean | LogbookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logbook"]>

  export type LogbookSelectScalar = {
    id?: boolean
    careerId?: boolean
  }

  export type LogbookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | Logbook$entriesArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
    _count?: boolean | LogbookCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $LogbookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Logbook"
    objects: {
      entries: Prisma.$EntryPayload<ExtArgs>[]
      career: Prisma.$CareerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      careerId: string
    }, ExtArgs["result"]["logbook"]>
    composites: {}
  }


  type LogbookGetPayload<S extends boolean | null | undefined | LogbookDefaultArgs> = $Result.GetResult<Prisma.$LogbookPayload, S>

  type LogbookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LogbookFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LogbookCountAggregateInputType | true
    }

  export interface LogbookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Logbook'], meta: { name: 'Logbook' } }
    /**
     * Find zero or one Logbook that matches the filter.
     * @param {LogbookFindUniqueArgs} args - Arguments to find a Logbook
     * @example
     * // Get one Logbook
     * const logbook = await prisma.logbook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LogbookFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LogbookFindUniqueArgs<ExtArgs>>
    ): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Logbook that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LogbookFindUniqueOrThrowArgs} args - Arguments to find a Logbook
     * @example
     * // Get one Logbook
     * const logbook = await prisma.logbook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LogbookFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LogbookFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Logbook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookFindFirstArgs} args - Arguments to find a Logbook
     * @example
     * // Get one Logbook
     * const logbook = await prisma.logbook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LogbookFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LogbookFindFirstArgs<ExtArgs>>
    ): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Logbook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookFindFirstOrThrowArgs} args - Arguments to find a Logbook
     * @example
     * // Get one Logbook
     * const logbook = await prisma.logbook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LogbookFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LogbookFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Logbooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logbooks
     * const logbooks = await prisma.logbook.findMany()
     * 
     * // Get first 10 Logbooks
     * const logbooks = await prisma.logbook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logbookWithIdOnly = await prisma.logbook.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LogbookFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogbookFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Logbook.
     * @param {LogbookCreateArgs} args - Arguments to create a Logbook.
     * @example
     * // Create one Logbook
     * const Logbook = await prisma.logbook.create({
     *   data: {
     *     // ... data to create a Logbook
     *   }
     * })
     * 
    **/
    create<T extends LogbookCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LogbookCreateArgs<ExtArgs>>
    ): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Logbooks.
     *     @param {LogbookCreateManyArgs} args - Arguments to create many Logbooks.
     *     @example
     *     // Create many Logbooks
     *     const logbook = await prisma.logbook.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LogbookCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogbookCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Logbook.
     * @param {LogbookDeleteArgs} args - Arguments to delete one Logbook.
     * @example
     * // Delete one Logbook
     * const Logbook = await prisma.logbook.delete({
     *   where: {
     *     // ... filter to delete one Logbook
     *   }
     * })
     * 
    **/
    delete<T extends LogbookDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LogbookDeleteArgs<ExtArgs>>
    ): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Logbook.
     * @param {LogbookUpdateArgs} args - Arguments to update one Logbook.
     * @example
     * // Update one Logbook
     * const logbook = await prisma.logbook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LogbookUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LogbookUpdateArgs<ExtArgs>>
    ): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Logbooks.
     * @param {LogbookDeleteManyArgs} args - Arguments to filter Logbooks to delete.
     * @example
     * // Delete a few Logbooks
     * const { count } = await prisma.logbook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LogbookDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogbookDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logbooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logbooks
     * const logbook = await prisma.logbook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LogbookUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LogbookUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Logbook.
     * @param {LogbookUpsertArgs} args - Arguments to update or create a Logbook.
     * @example
     * // Update or create a Logbook
     * const logbook = await prisma.logbook.upsert({
     *   create: {
     *     // ... data to create a Logbook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logbook we want to update
     *   }
     * })
    **/
    upsert<T extends LogbookUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LogbookUpsertArgs<ExtArgs>>
    ): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Logbooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookCountArgs} args - Arguments to filter Logbooks to count.
     * @example
     * // Count the number of Logbooks
     * const count = await prisma.logbook.count({
     *   where: {
     *     // ... the filter for the Logbooks we want to count
     *   }
     * })
    **/
    count<T extends LogbookCountArgs>(
      args?: Subset<T, LogbookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogbookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logbook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogbookAggregateArgs>(args: Subset<T, LogbookAggregateArgs>): Prisma.PrismaPromise<GetLogbookAggregateType<T>>

    /**
     * Group by Logbook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogbookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogbookGroupByArgs['orderBy'] }
        : { orderBy?: LogbookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogbookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogbookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Logbook model
   */
  readonly fields: LogbookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Logbook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogbookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    entries<T extends Logbook$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Logbook$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, 'findMany'> | Null>;

    career<T extends CareerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareerDefaultArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Logbook model
   */ 
  interface LogbookFieldRefs {
    readonly id: FieldRef<"Logbook", 'String'>
    readonly careerId: FieldRef<"Logbook", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Logbook findUnique
   */
  export type LogbookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * Filter, which Logbook to fetch.
     */
    where: LogbookWhereUniqueInput
  }


  /**
   * Logbook findUniqueOrThrow
   */
  export type LogbookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * Filter, which Logbook to fetch.
     */
    where: LogbookWhereUniqueInput
  }


  /**
   * Logbook findFirst
   */
  export type LogbookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * Filter, which Logbook to fetch.
     */
    where?: LogbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logbooks to fetch.
     */
    orderBy?: LogbookOrderByWithRelationInput | LogbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logbooks.
     */
    cursor?: LogbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logbooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logbooks.
     */
    distinct?: LogbookScalarFieldEnum | LogbookScalarFieldEnum[]
  }


  /**
   * Logbook findFirstOrThrow
   */
  export type LogbookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * Filter, which Logbook to fetch.
     */
    where?: LogbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logbooks to fetch.
     */
    orderBy?: LogbookOrderByWithRelationInput | LogbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logbooks.
     */
    cursor?: LogbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logbooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logbooks.
     */
    distinct?: LogbookScalarFieldEnum | LogbookScalarFieldEnum[]
  }


  /**
   * Logbook findMany
   */
  export type LogbookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * Filter, which Logbooks to fetch.
     */
    where?: LogbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logbooks to fetch.
     */
    orderBy?: LogbookOrderByWithRelationInput | LogbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logbooks.
     */
    cursor?: LogbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logbooks.
     */
    skip?: number
    distinct?: LogbookScalarFieldEnum | LogbookScalarFieldEnum[]
  }


  /**
   * Logbook create
   */
  export type LogbookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * The data needed to create a Logbook.
     */
    data: XOR<LogbookCreateInput, LogbookUncheckedCreateInput>
  }


  /**
   * Logbook createMany
   */
  export type LogbookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logbooks.
     */
    data: LogbookCreateManyInput | LogbookCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Logbook update
   */
  export type LogbookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * The data needed to update a Logbook.
     */
    data: XOR<LogbookUpdateInput, LogbookUncheckedUpdateInput>
    /**
     * Choose, which Logbook to update.
     */
    where: LogbookWhereUniqueInput
  }


  /**
   * Logbook updateMany
   */
  export type LogbookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logbooks.
     */
    data: XOR<LogbookUpdateManyMutationInput, LogbookUncheckedUpdateManyInput>
    /**
     * Filter which Logbooks to update
     */
    where?: LogbookWhereInput
  }


  /**
   * Logbook upsert
   */
  export type LogbookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * The filter to search for the Logbook to update in case it exists.
     */
    where: LogbookWhereUniqueInput
    /**
     * In case the Logbook found by the `where` argument doesn't exist, create a new Logbook with this data.
     */
    create: XOR<LogbookCreateInput, LogbookUncheckedCreateInput>
    /**
     * In case the Logbook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogbookUpdateInput, LogbookUncheckedUpdateInput>
  }


  /**
   * Logbook delete
   */
  export type LogbookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * Filter which Logbook to delete.
     */
    where: LogbookWhereUniqueInput
  }


  /**
   * Logbook deleteMany
   */
  export type LogbookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logbooks to delete
     */
    where?: LogbookWhereInput
  }


  /**
   * Logbook.entries
   */
  export type Logbook$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntryInclude<ExtArgs> | null
    where?: EntryWhereInput
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    cursor?: EntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }


  /**
   * Logbook without action
   */
  export type LogbookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogbookInclude<ExtArgs> | null
  }



  /**
   * Model Dispatch
   */

  export type AggregateDispatch = {
    _count: DispatchCountAggregateOutputType | null
    _min: DispatchMinAggregateOutputType | null
    _max: DispatchMaxAggregateOutputType | null
  }

  export type DispatchMinAggregateOutputType = {
    id: string | null
    careerId: string | null
  }

  export type DispatchMaxAggregateOutputType = {
    id: string | null
    careerId: string | null
  }

  export type DispatchCountAggregateOutputType = {
    id: number
    data: number
    careerId: number
    _all: number
  }


  export type DispatchMinAggregateInputType = {
    id?: true
    careerId?: true
  }

  export type DispatchMaxAggregateInputType = {
    id?: true
    careerId?: true
  }

  export type DispatchCountAggregateInputType = {
    id?: true
    data?: true
    careerId?: true
    _all?: true
  }

  export type DispatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispatch to aggregate.
     */
    where?: DispatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispatches to fetch.
     */
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DispatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dispatches
    **/
    _count?: true | DispatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DispatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DispatchMaxAggregateInputType
  }

  export type GetDispatchAggregateType<T extends DispatchAggregateArgs> = {
        [P in keyof T & keyof AggregateDispatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispatch[P]>
      : GetScalarType<T[P], AggregateDispatch[P]>
  }




  export type DispatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispatchWhereInput
    orderBy?: DispatchOrderByWithAggregationInput | DispatchOrderByWithAggregationInput[]
    by: DispatchScalarFieldEnum[] | DispatchScalarFieldEnum
    having?: DispatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DispatchCountAggregateInputType | true
    _min?: DispatchMinAggregateInputType
    _max?: DispatchMaxAggregateInputType
  }

  export type DispatchGroupByOutputType = {
    id: string
    data: JsonValue | null
    careerId: string
    _count: DispatchCountAggregateOutputType | null
    _min: DispatchMinAggregateOutputType | null
    _max: DispatchMaxAggregateOutputType | null
  }

  type GetDispatchGroupByPayload<T extends DispatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DispatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DispatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DispatchGroupByOutputType[P]>
            : GetScalarType<T[P], DispatchGroupByOutputType[P]>
        }
      >
    >


  export type DispatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    careerId?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispatch"]>

  export type DispatchSelectScalar = {
    id?: boolean
    data?: boolean
    careerId?: boolean
  }

  export type DispatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }


  export type $DispatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispatch"
    objects: {
      career: Prisma.$CareerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: Prisma.JsonValue | null
      careerId: string
    }, ExtArgs["result"]["dispatch"]>
    composites: {}
  }


  type DispatchGetPayload<S extends boolean | null | undefined | DispatchDefaultArgs> = $Result.GetResult<Prisma.$DispatchPayload, S>

  type DispatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DispatchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DispatchCountAggregateInputType | true
    }

  export interface DispatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispatch'], meta: { name: 'Dispatch' } }
    /**
     * Find zero or one Dispatch that matches the filter.
     * @param {DispatchFindUniqueArgs} args - Arguments to find a Dispatch
     * @example
     * // Get one Dispatch
     * const dispatch = await prisma.dispatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DispatchFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DispatchFindUniqueArgs<ExtArgs>>
    ): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Dispatch that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DispatchFindUniqueOrThrowArgs} args - Arguments to find a Dispatch
     * @example
     * // Get one Dispatch
     * const dispatch = await prisma.dispatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DispatchFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DispatchFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Dispatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchFindFirstArgs} args - Arguments to find a Dispatch
     * @example
     * // Get one Dispatch
     * const dispatch = await prisma.dispatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DispatchFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DispatchFindFirstArgs<ExtArgs>>
    ): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Dispatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchFindFirstOrThrowArgs} args - Arguments to find a Dispatch
     * @example
     * // Get one Dispatch
     * const dispatch = await prisma.dispatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DispatchFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DispatchFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Dispatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dispatches
     * const dispatches = await prisma.dispatch.findMany()
     * 
     * // Get first 10 Dispatches
     * const dispatches = await prisma.dispatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dispatchWithIdOnly = await prisma.dispatch.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DispatchFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DispatchFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Dispatch.
     * @param {DispatchCreateArgs} args - Arguments to create a Dispatch.
     * @example
     * // Create one Dispatch
     * const Dispatch = await prisma.dispatch.create({
     *   data: {
     *     // ... data to create a Dispatch
     *   }
     * })
     * 
    **/
    create<T extends DispatchCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DispatchCreateArgs<ExtArgs>>
    ): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Dispatches.
     *     @param {DispatchCreateManyArgs} args - Arguments to create many Dispatches.
     *     @example
     *     // Create many Dispatches
     *     const dispatch = await prisma.dispatch.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DispatchCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DispatchCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dispatch.
     * @param {DispatchDeleteArgs} args - Arguments to delete one Dispatch.
     * @example
     * // Delete one Dispatch
     * const Dispatch = await prisma.dispatch.delete({
     *   where: {
     *     // ... filter to delete one Dispatch
     *   }
     * })
     * 
    **/
    delete<T extends DispatchDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DispatchDeleteArgs<ExtArgs>>
    ): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Dispatch.
     * @param {DispatchUpdateArgs} args - Arguments to update one Dispatch.
     * @example
     * // Update one Dispatch
     * const dispatch = await prisma.dispatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DispatchUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DispatchUpdateArgs<ExtArgs>>
    ): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Dispatches.
     * @param {DispatchDeleteManyArgs} args - Arguments to filter Dispatches to delete.
     * @example
     * // Delete a few Dispatches
     * const { count } = await prisma.dispatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DispatchDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DispatchDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dispatches
     * const dispatch = await prisma.dispatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DispatchUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DispatchUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dispatch.
     * @param {DispatchUpsertArgs} args - Arguments to update or create a Dispatch.
     * @example
     * // Update or create a Dispatch
     * const dispatch = await prisma.dispatch.upsert({
     *   create: {
     *     // ... data to create a Dispatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispatch we want to update
     *   }
     * })
    **/
    upsert<T extends DispatchUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DispatchUpsertArgs<ExtArgs>>
    ): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Dispatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchCountArgs} args - Arguments to filter Dispatches to count.
     * @example
     * // Count the number of Dispatches
     * const count = await prisma.dispatch.count({
     *   where: {
     *     // ... the filter for the Dispatches we want to count
     *   }
     * })
    **/
    count<T extends DispatchCountArgs>(
      args?: Subset<T, DispatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DispatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DispatchAggregateArgs>(args: Subset<T, DispatchAggregateArgs>): Prisma.PrismaPromise<GetDispatchAggregateType<T>>

    /**
     * Group by Dispatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DispatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DispatchGroupByArgs['orderBy'] }
        : { orderBy?: DispatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DispatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispatch model
   */
  readonly fields: DispatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DispatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    career<T extends CareerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareerDefaultArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Dispatch model
   */ 
  interface DispatchFieldRefs {
    readonly id: FieldRef<"Dispatch", 'String'>
    readonly data: FieldRef<"Dispatch", 'Json'>
    readonly careerId: FieldRef<"Dispatch", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Dispatch findUnique
   */
  export type DispatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatch to fetch.
     */
    where: DispatchWhereUniqueInput
  }


  /**
   * Dispatch findUniqueOrThrow
   */
  export type DispatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatch to fetch.
     */
    where: DispatchWhereUniqueInput
  }


  /**
   * Dispatch findFirst
   */
  export type DispatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatch to fetch.
     */
    where?: DispatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispatches to fetch.
     */
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispatches.
     */
    cursor?: DispatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispatches.
     */
    distinct?: DispatchScalarFieldEnum | DispatchScalarFieldEnum[]
  }


  /**
   * Dispatch findFirstOrThrow
   */
  export type DispatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatch to fetch.
     */
    where?: DispatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispatches to fetch.
     */
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispatches.
     */
    cursor?: DispatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispatches.
     */
    distinct?: DispatchScalarFieldEnum | DispatchScalarFieldEnum[]
  }


  /**
   * Dispatch findMany
   */
  export type DispatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatches to fetch.
     */
    where?: DispatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispatches to fetch.
     */
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dispatches.
     */
    cursor?: DispatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispatches.
     */
    skip?: number
    distinct?: DispatchScalarFieldEnum | DispatchScalarFieldEnum[]
  }


  /**
   * Dispatch create
   */
  export type DispatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Dispatch.
     */
    data: XOR<DispatchCreateInput, DispatchUncheckedCreateInput>
  }


  /**
   * Dispatch createMany
   */
  export type DispatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dispatches.
     */
    data: DispatchCreateManyInput | DispatchCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Dispatch update
   */
  export type DispatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Dispatch.
     */
    data: XOR<DispatchUpdateInput, DispatchUncheckedUpdateInput>
    /**
     * Choose, which Dispatch to update.
     */
    where: DispatchWhereUniqueInput
  }


  /**
   * Dispatch updateMany
   */
  export type DispatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dispatches.
     */
    data: XOR<DispatchUpdateManyMutationInput, DispatchUncheckedUpdateManyInput>
    /**
     * Filter which Dispatches to update
     */
    where?: DispatchWhereInput
  }


  /**
   * Dispatch upsert
   */
  export type DispatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Dispatch to update in case it exists.
     */
    where: DispatchWhereUniqueInput
    /**
     * In case the Dispatch found by the `where` argument doesn't exist, create a new Dispatch with this data.
     */
    create: XOR<DispatchCreateInput, DispatchUncheckedCreateInput>
    /**
     * In case the Dispatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DispatchUpdateInput, DispatchUncheckedUpdateInput>
  }


  /**
   * Dispatch delete
   */
  export type DispatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter which Dispatch to delete.
     */
    where: DispatchWhereUniqueInput
  }


  /**
   * Dispatch deleteMany
   */
  export type DispatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispatches to delete
     */
    where?: DispatchWhereInput
  }


  /**
   * Dispatch without action
   */
  export type DispatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DispatchInclude<ExtArgs> | null
  }



  /**
   * Model Entry
   */

  export type AggregateEntry = {
    _count: EntryCountAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  export type EntryMinAggregateOutputType = {
    id: string | null
    logbookId: string | null
    createdAt: Date | null
  }

  export type EntryMaxAggregateOutputType = {
    id: string | null
    logbookId: string | null
    createdAt: Date | null
  }

  export type EntryCountAggregateOutputType = {
    id: number
    data: number
    logbookId: number
    createdAt: number
    _all: number
  }


  export type EntryMinAggregateInputType = {
    id?: true
    logbookId?: true
    createdAt?: true
  }

  export type EntryMaxAggregateInputType = {
    id?: true
    logbookId?: true
    createdAt?: true
  }

  export type EntryCountAggregateInputType = {
    id?: true
    data?: true
    logbookId?: true
    createdAt?: true
    _all?: true
  }

  export type EntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entry to aggregate.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entries
    **/
    _count?: true | EntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntryMaxAggregateInputType
  }

  export type GetEntryAggregateType<T extends EntryAggregateArgs> = {
        [P in keyof T & keyof AggregateEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntry[P]>
      : GetScalarType<T[P], AggregateEntry[P]>
  }




  export type EntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryWhereInput
    orderBy?: EntryOrderByWithAggregationInput | EntryOrderByWithAggregationInput[]
    by: EntryScalarFieldEnum[] | EntryScalarFieldEnum
    having?: EntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntryCountAggregateInputType | true
    _min?: EntryMinAggregateInputType
    _max?: EntryMaxAggregateInputType
  }

  export type EntryGroupByOutputType = {
    id: string
    data: JsonValue
    logbookId: string | null
    createdAt: Date
    _count: EntryCountAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  type GetEntryGroupByPayload<T extends EntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntryGroupByOutputType[P]>
            : GetScalarType<T[P], EntryGroupByOutputType[P]>
        }
      >
    >


  export type EntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    logbookId?: boolean
    createdAt?: boolean
    isPartOfLogbook?: boolean | Entry$isPartOfLogbookArgs<ExtArgs>
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectScalar = {
    id?: boolean
    data?: boolean
    logbookId?: boolean
    createdAt?: boolean
  }

  export type EntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    isPartOfLogbook?: boolean | Entry$isPartOfLogbookArgs<ExtArgs>
  }


  export type $EntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entry"
    objects: {
      isPartOfLogbook: Prisma.$LogbookPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: Prisma.JsonValue
      logbookId: string | null
      createdAt: Date
    }, ExtArgs["result"]["entry"]>
    composites: {}
  }


  type EntryGetPayload<S extends boolean | null | undefined | EntryDefaultArgs> = $Result.GetResult<Prisma.$EntryPayload, S>

  type EntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EntryCountAggregateInputType | true
    }

  export interface EntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entry'], meta: { name: 'Entry' } }
    /**
     * Find zero or one Entry that matches the filter.
     * @param {EntryFindUniqueArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EntryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EntryFindUniqueArgs<ExtArgs>>
    ): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Entry that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EntryFindUniqueOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EntryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Entry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindFirstArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EntryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EntryFindFirstArgs<ExtArgs>>
    ): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Entry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindFirstOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EntryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entries
     * const entries = await prisma.entry.findMany()
     * 
     * // Get first 10 Entries
     * const entries = await prisma.entry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entryWithIdOnly = await prisma.entry.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EntryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Entry.
     * @param {EntryCreateArgs} args - Arguments to create a Entry.
     * @example
     * // Create one Entry
     * const Entry = await prisma.entry.create({
     *   data: {
     *     // ... data to create a Entry
     *   }
     * })
     * 
    **/
    create<T extends EntryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EntryCreateArgs<ExtArgs>>
    ): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Entries.
     *     @param {EntryCreateManyArgs} args - Arguments to create many Entries.
     *     @example
     *     // Create many Entries
     *     const entry = await prisma.entry.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EntryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entry.
     * @param {EntryDeleteArgs} args - Arguments to delete one Entry.
     * @example
     * // Delete one Entry
     * const Entry = await prisma.entry.delete({
     *   where: {
     *     // ... filter to delete one Entry
     *   }
     * })
     * 
    **/
    delete<T extends EntryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EntryDeleteArgs<ExtArgs>>
    ): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Entry.
     * @param {EntryUpdateArgs} args - Arguments to update one Entry.
     * @example
     * // Update one Entry
     * const entry = await prisma.entry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EntryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EntryUpdateArgs<ExtArgs>>
    ): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Entries.
     * @param {EntryDeleteManyArgs} args - Arguments to filter Entries to delete.
     * @example
     * // Delete a few Entries
     * const { count } = await prisma.entry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EntryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EntryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EntryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entry.
     * @param {EntryUpsertArgs} args - Arguments to update or create a Entry.
     * @example
     * // Update or create a Entry
     * const entry = await prisma.entry.upsert({
     *   create: {
     *     // ... data to create a Entry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entry we want to update
     *   }
     * })
    **/
    upsert<T extends EntryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EntryUpsertArgs<ExtArgs>>
    ): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryCountArgs} args - Arguments to filter Entries to count.
     * @example
     * // Count the number of Entries
     * const count = await prisma.entry.count({
     *   where: {
     *     // ... the filter for the Entries we want to count
     *   }
     * })
    **/
    count<T extends EntryCountArgs>(
      args?: Subset<T, EntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntryAggregateArgs>(args: Subset<T, EntryAggregateArgs>): Prisma.PrismaPromise<GetEntryAggregateType<T>>

    /**
     * Group by Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntryGroupByArgs['orderBy'] }
        : { orderBy?: EntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entry model
   */
  readonly fields: EntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    isPartOfLogbook<T extends Entry$isPartOfLogbookArgs<ExtArgs> = {}>(args?: Subset<T, Entry$isPartOfLogbookArgs<ExtArgs>>): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Entry model
   */ 
  interface EntryFieldRefs {
    readonly id: FieldRef<"Entry", 'String'>
    readonly data: FieldRef<"Entry", 'Json'>
    readonly logbookId: FieldRef<"Entry", 'String'>
    readonly createdAt: FieldRef<"Entry", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Entry findUnique
   */
  export type EntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where: EntryWhereUniqueInput
  }


  /**
   * Entry findUniqueOrThrow
   */
  export type EntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where: EntryWhereUniqueInput
  }


  /**
   * Entry findFirst
   */
  export type EntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }


  /**
   * Entry findFirstOrThrow
   */
  export type EntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }


  /**
   * Entry findMany
   */
  export type EntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entries to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }


  /**
   * Entry create
   */
  export type EntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The data needed to create a Entry.
     */
    data: XOR<EntryCreateInput, EntryUncheckedCreateInput>
  }


  /**
   * Entry createMany
   */
  export type EntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entries.
     */
    data: EntryCreateManyInput | EntryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Entry update
   */
  export type EntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The data needed to update a Entry.
     */
    data: XOR<EntryUpdateInput, EntryUncheckedUpdateInput>
    /**
     * Choose, which Entry to update.
     */
    where: EntryWhereUniqueInput
  }


  /**
   * Entry updateMany
   */
  export type EntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entries.
     */
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyInput>
    /**
     * Filter which Entries to update
     */
    where?: EntryWhereInput
  }


  /**
   * Entry upsert
   */
  export type EntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The filter to search for the Entry to update in case it exists.
     */
    where: EntryWhereUniqueInput
    /**
     * In case the Entry found by the `where` argument doesn't exist, create a new Entry with this data.
     */
    create: XOR<EntryCreateInput, EntryUncheckedCreateInput>
    /**
     * In case the Entry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntryUpdateInput, EntryUncheckedUpdateInput>
  }


  /**
   * Entry delete
   */
  export type EntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter which Entry to delete.
     */
    where: EntryWhereUniqueInput
  }


  /**
   * Entry deleteMany
   */
  export type EntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entries to delete
     */
    where?: EntryWhereInput
  }


  /**
   * Entry.isPartOfLogbook
   */
  export type Entry$isPartOfLogbookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogbookInclude<ExtArgs> | null
    where?: LogbookWhereInput
  }


  /**
   * Entry without action
   */
  export type EntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntryInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    darkMode: 'darkMode',
    autAdvance: 'autAdvance',
    autAdvanceData: 'autAdvanceData'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CareerScalarFieldEnum: {
    id: 'id',
    base: 'base',
    company: 'company',
    aircraft: 'aircraft',
    flightHours: 'flightHours',
    name: 'name',
    rank: 'rank',
    careerType: 'careerType',
    userId: 'userId'
  };

  export type CareerScalarFieldEnum = (typeof CareerScalarFieldEnum)[keyof typeof CareerScalarFieldEnum]


  export const LogbookScalarFieldEnum: {
    id: 'id',
    careerId: 'careerId'
  };

  export type LogbookScalarFieldEnum = (typeof LogbookScalarFieldEnum)[keyof typeof LogbookScalarFieldEnum]


  export const DispatchScalarFieldEnum: {
    id: 'id',
    data: 'data',
    careerId: 'careerId'
  };

  export type DispatchScalarFieldEnum = (typeof DispatchScalarFieldEnum)[keyof typeof DispatchScalarFieldEnum]


  export const EntryScalarFieldEnum: {
    id: 'id',
    data: 'data',
    logbookId: 'logbookId',
    createdAt: 'createdAt'
  };

  export type EntryScalarFieldEnum = (typeof EntryScalarFieldEnum)[keyof typeof EntryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Rank'
   */
  export type EnumRankFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rank'>
    


  /**
   * Reference to a field of type 'Rank[]'
   */
  export type ListEnumRankFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rank[]'>
    


  /**
   * Reference to a field of type 'CareerType'
   */
  export type EnumCareerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CareerType'>
    


  /**
   * Reference to a field of type 'CareerType[]'
   */
  export type ListEnumCareerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CareerType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    darkMode?: BoolFilter<"User"> | boolean
    autAdvance?: BoolFilter<"User"> | boolean
    autAdvanceData?: JsonFilter<"User">
    careers?: CareerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    darkMode?: SortOrder
    autAdvance?: SortOrder
    autAdvanceData?: SortOrder
    careers?: CareerOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    darkMode?: BoolFilter<"User"> | boolean
    autAdvance?: BoolFilter<"User"> | boolean
    autAdvanceData?: JsonFilter<"User">
    careers?: CareerListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    darkMode?: SortOrder
    autAdvance?: SortOrder
    autAdvanceData?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    darkMode?: BoolWithAggregatesFilter<"User"> | boolean
    autAdvance?: BoolWithAggregatesFilter<"User"> | boolean
    autAdvanceData?: JsonWithAggregatesFilter<"User">
  }

  export type CareerWhereInput = {
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    id?: StringFilter<"Career"> | string
    base?: StringFilter<"Career"> | string
    company?: StringFilter<"Career"> | string
    aircraft?: StringFilter<"Career"> | string
    flightHours?: FloatFilter<"Career"> | number
    name?: StringFilter<"Career"> | string
    rank?: EnumRankFilter<"Career"> | $Enums.Rank
    careerType?: EnumCareerTypeFilter<"Career"> | $Enums.CareerType
    userId?: StringFilter<"Career"> | string
    belongsTo?: XOR<UserRelationFilter, UserWhereInput>
    dispatches?: XOR<DispatchNullableRelationFilter, DispatchWhereInput> | null
    logbook?: XOR<LogbookNullableRelationFilter, LogbookWhereInput> | null
  }

  export type CareerOrderByWithRelationInput = {
    id?: SortOrder
    base?: SortOrder
    company?: SortOrder
    aircraft?: SortOrder
    flightHours?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    careerType?: SortOrder
    userId?: SortOrder
    belongsTo?: UserOrderByWithRelationInput
    dispatches?: DispatchOrderByWithRelationInput
    logbook?: LogbookOrderByWithRelationInput
  }

  export type CareerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    base?: StringFilter<"Career"> | string
    company?: StringFilter<"Career"> | string
    aircraft?: StringFilter<"Career"> | string
    flightHours?: FloatFilter<"Career"> | number
    name?: StringFilter<"Career"> | string
    rank?: EnumRankFilter<"Career"> | $Enums.Rank
    careerType?: EnumCareerTypeFilter<"Career"> | $Enums.CareerType
    userId?: StringFilter<"Career"> | string
    belongsTo?: XOR<UserRelationFilter, UserWhereInput>
    dispatches?: XOR<DispatchNullableRelationFilter, DispatchWhereInput> | null
    logbook?: XOR<LogbookNullableRelationFilter, LogbookWhereInput> | null
  }, "id">

  export type CareerOrderByWithAggregationInput = {
    id?: SortOrder
    base?: SortOrder
    company?: SortOrder
    aircraft?: SortOrder
    flightHours?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    careerType?: SortOrder
    userId?: SortOrder
    _count?: CareerCountOrderByAggregateInput
    _avg?: CareerAvgOrderByAggregateInput
    _max?: CareerMaxOrderByAggregateInput
    _min?: CareerMinOrderByAggregateInput
    _sum?: CareerSumOrderByAggregateInput
  }

  export type CareerScalarWhereWithAggregatesInput = {
    AND?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    OR?: CareerScalarWhereWithAggregatesInput[]
    NOT?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Career"> | string
    base?: StringWithAggregatesFilter<"Career"> | string
    company?: StringWithAggregatesFilter<"Career"> | string
    aircraft?: StringWithAggregatesFilter<"Career"> | string
    flightHours?: FloatWithAggregatesFilter<"Career"> | number
    name?: StringWithAggregatesFilter<"Career"> | string
    rank?: EnumRankWithAggregatesFilter<"Career"> | $Enums.Rank
    careerType?: EnumCareerTypeWithAggregatesFilter<"Career"> | $Enums.CareerType
    userId?: StringWithAggregatesFilter<"Career"> | string
  }

  export type LogbookWhereInput = {
    AND?: LogbookWhereInput | LogbookWhereInput[]
    OR?: LogbookWhereInput[]
    NOT?: LogbookWhereInput | LogbookWhereInput[]
    id?: StringFilter<"Logbook"> | string
    careerId?: StringFilter<"Logbook"> | string
    entries?: EntryListRelationFilter
    career?: XOR<CareerRelationFilter, CareerWhereInput>
  }

  export type LogbookOrderByWithRelationInput = {
    id?: SortOrder
    careerId?: SortOrder
    entries?: EntryOrderByRelationAggregateInput
    career?: CareerOrderByWithRelationInput
  }

  export type LogbookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    careerId?: string
    AND?: LogbookWhereInput | LogbookWhereInput[]
    OR?: LogbookWhereInput[]
    NOT?: LogbookWhereInput | LogbookWhereInput[]
    entries?: EntryListRelationFilter
    career?: XOR<CareerRelationFilter, CareerWhereInput>
  }, "id" | "careerId">

  export type LogbookOrderByWithAggregationInput = {
    id?: SortOrder
    careerId?: SortOrder
    _count?: LogbookCountOrderByAggregateInput
    _max?: LogbookMaxOrderByAggregateInput
    _min?: LogbookMinOrderByAggregateInput
  }

  export type LogbookScalarWhereWithAggregatesInput = {
    AND?: LogbookScalarWhereWithAggregatesInput | LogbookScalarWhereWithAggregatesInput[]
    OR?: LogbookScalarWhereWithAggregatesInput[]
    NOT?: LogbookScalarWhereWithAggregatesInput | LogbookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Logbook"> | string
    careerId?: StringWithAggregatesFilter<"Logbook"> | string
  }

  export type DispatchWhereInput = {
    AND?: DispatchWhereInput | DispatchWhereInput[]
    OR?: DispatchWhereInput[]
    NOT?: DispatchWhereInput | DispatchWhereInput[]
    id?: StringFilter<"Dispatch"> | string
    data?: JsonNullableFilter<"Dispatch">
    careerId?: StringFilter<"Dispatch"> | string
    career?: XOR<CareerRelationFilter, CareerWhereInput>
  }

  export type DispatchOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrderInput | SortOrder
    careerId?: SortOrder
    career?: CareerOrderByWithRelationInput
  }

  export type DispatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    careerId?: string
    AND?: DispatchWhereInput | DispatchWhereInput[]
    OR?: DispatchWhereInput[]
    NOT?: DispatchWhereInput | DispatchWhereInput[]
    data?: JsonNullableFilter<"Dispatch">
    career?: XOR<CareerRelationFilter, CareerWhereInput>
  }, "id" | "careerId">

  export type DispatchOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrderInput | SortOrder
    careerId?: SortOrder
    _count?: DispatchCountOrderByAggregateInput
    _max?: DispatchMaxOrderByAggregateInput
    _min?: DispatchMinOrderByAggregateInput
  }

  export type DispatchScalarWhereWithAggregatesInput = {
    AND?: DispatchScalarWhereWithAggregatesInput | DispatchScalarWhereWithAggregatesInput[]
    OR?: DispatchScalarWhereWithAggregatesInput[]
    NOT?: DispatchScalarWhereWithAggregatesInput | DispatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dispatch"> | string
    data?: JsonNullableWithAggregatesFilter<"Dispatch">
    careerId?: StringWithAggregatesFilter<"Dispatch"> | string
  }

  export type EntryWhereInput = {
    AND?: EntryWhereInput | EntryWhereInput[]
    OR?: EntryWhereInput[]
    NOT?: EntryWhereInput | EntryWhereInput[]
    id?: StringFilter<"Entry"> | string
    data?: JsonFilter<"Entry">
    logbookId?: StringNullableFilter<"Entry"> | string | null
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    isPartOfLogbook?: XOR<LogbookNullableRelationFilter, LogbookWhereInput> | null
  }

  export type EntryOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    logbookId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isPartOfLogbook?: LogbookOrderByWithRelationInput
  }

  export type EntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EntryWhereInput | EntryWhereInput[]
    OR?: EntryWhereInput[]
    NOT?: EntryWhereInput | EntryWhereInput[]
    data?: JsonFilter<"Entry">
    logbookId?: StringNullableFilter<"Entry"> | string | null
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    isPartOfLogbook?: XOR<LogbookNullableRelationFilter, LogbookWhereInput> | null
  }, "id">

  export type EntryOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    logbookId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EntryCountOrderByAggregateInput
    _max?: EntryMaxOrderByAggregateInput
    _min?: EntryMinOrderByAggregateInput
  }

  export type EntryScalarWhereWithAggregatesInput = {
    AND?: EntryScalarWhereWithAggregatesInput | EntryScalarWhereWithAggregatesInput[]
    OR?: EntryScalarWhereWithAggregatesInput[]
    NOT?: EntryScalarWhereWithAggregatesInput | EntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entry"> | string
    data?: JsonWithAggregatesFilter<"Entry">
    logbookId?: StringNullableWithAggregatesFilter<"Entry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Entry"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    darkMode?: boolean
    autAdvance?: boolean
    autAdvanceData?: JsonNullValueInput | InputJsonValue
    careers?: CareerCreateNestedManyWithoutBelongsToInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    darkMode?: boolean
    autAdvance?: boolean
    autAdvanceData?: JsonNullValueInput | InputJsonValue
    careers?: CareerUncheckedCreateNestedManyWithoutBelongsToInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    autAdvance?: BoolFieldUpdateOperationsInput | boolean
    autAdvanceData?: JsonNullValueInput | InputJsonValue
    careers?: CareerUpdateManyWithoutBelongsToNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    autAdvance?: BoolFieldUpdateOperationsInput | boolean
    autAdvanceData?: JsonNullValueInput | InputJsonValue
    careers?: CareerUncheckedUpdateManyWithoutBelongsToNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    darkMode?: boolean
    autAdvance?: boolean
    autAdvanceData?: JsonNullValueInput | InputJsonValue
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    autAdvance?: BoolFieldUpdateOperationsInput | boolean
    autAdvanceData?: JsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    autAdvance?: BoolFieldUpdateOperationsInput | boolean
    autAdvanceData?: JsonNullValueInput | InputJsonValue
  }

  export type CareerCreateInput = {
    id?: string
    base: string
    company: string
    aircraft?: string
    flightHours?: number
    name?: string
    rank?: $Enums.Rank
    careerType?: $Enums.CareerType
    belongsTo: UserCreateNestedOneWithoutCareersInput
    dispatches?: DispatchCreateNestedOneWithoutCareerInput
    logbook?: LogbookCreateNestedOneWithoutCareerInput
  }

  export type CareerUncheckedCreateInput = {
    id?: string
    base: string
    company: string
    aircraft?: string
    flightHours?: number
    name?: string
    rank?: $Enums.Rank
    careerType?: $Enums.CareerType
    userId: string
    dispatches?: DispatchUncheckedCreateNestedOneWithoutCareerInput
    logbook?: LogbookUncheckedCreateNestedOneWithoutCareerInput
  }

  export type CareerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    base?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    aircraft?: StringFieldUpdateOperationsInput | string
    flightHours?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    careerType?: EnumCareerTypeFieldUpdateOperationsInput | $Enums.CareerType
    belongsTo?: UserUpdateOneRequiredWithoutCareersNestedInput
    dispatches?: DispatchUpdateOneWithoutCareerNestedInput
    logbook?: LogbookUpdateOneWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    base?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    aircraft?: StringFieldUpdateOperationsInput | string
    flightHours?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    careerType?: EnumCareerTypeFieldUpdateOperationsInput | $Enums.CareerType
    userId?: StringFieldUpdateOperationsInput | string
    dispatches?: DispatchUncheckedUpdateOneWithoutCareerNestedInput
    logbook?: LogbookUncheckedUpdateOneWithoutCareerNestedInput
  }

  export type CareerCreateManyInput = {
    id?: string
    base: string
    company: string
    aircraft?: string
    flightHours?: number
    name?: string
    rank?: $Enums.Rank
    careerType?: $Enums.CareerType
    userId: string
  }

  export type CareerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    base?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    aircraft?: StringFieldUpdateOperationsInput | string
    flightHours?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    careerType?: EnumCareerTypeFieldUpdateOperationsInput | $Enums.CareerType
  }

  export type CareerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    base?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    aircraft?: StringFieldUpdateOperationsInput | string
    flightHours?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    careerType?: EnumCareerTypeFieldUpdateOperationsInput | $Enums.CareerType
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LogbookCreateInput = {
    id?: string
    entries?: EntryCreateNestedManyWithoutIsPartOfLogbookInput
    career: CareerCreateNestedOneWithoutLogbookInput
  }

  export type LogbookUncheckedCreateInput = {
    id?: string
    careerId: string
    entries?: EntryUncheckedCreateNestedManyWithoutIsPartOfLogbookInput
  }

  export type LogbookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entries?: EntryUpdateManyWithoutIsPartOfLogbookNestedInput
    career?: CareerUpdateOneRequiredWithoutLogbookNestedInput
  }

  export type LogbookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    careerId?: StringFieldUpdateOperationsInput | string
    entries?: EntryUncheckedUpdateManyWithoutIsPartOfLogbookNestedInput
  }

  export type LogbookCreateManyInput = {
    id?: string
    careerId: string
  }

  export type LogbookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type LogbookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    careerId?: StringFieldUpdateOperationsInput | string
  }

  export type DispatchCreateInput = {
    id?: string
    data?: NullableJsonNullValueInput | InputJsonValue
    career: CareerCreateNestedOneWithoutDispatchesInput
  }

  export type DispatchUncheckedCreateInput = {
    id?: string
    data?: NullableJsonNullValueInput | InputJsonValue
    careerId: string
  }

  export type DispatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    career?: CareerUpdateOneRequiredWithoutDispatchesNestedInput
  }

  export type DispatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    careerId?: StringFieldUpdateOperationsInput | string
  }

  export type DispatchCreateManyInput = {
    id?: string
    data?: NullableJsonNullValueInput | InputJsonValue
    careerId: string
  }

  export type DispatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DispatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    careerId?: StringFieldUpdateOperationsInput | string
  }

  export type EntryCreateInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    isPartOfLogbook?: LogbookCreateNestedOneWithoutEntriesInput
  }

  export type EntryUncheckedCreateInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    logbookId?: string | null
    createdAt?: Date | string
  }

  export type EntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPartOfLogbook?: LogbookUpdateOneWithoutEntriesNestedInput
  }

  export type EntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    logbookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryCreateManyInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    logbookId?: string | null
    createdAt?: Date | string
  }

  export type EntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    logbookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CareerListRelationFilter = {
    every?: CareerWhereInput
    some?: CareerWhereInput
    none?: CareerWhereInput
  }

  export type CareerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    darkMode?: SortOrder
    autAdvance?: SortOrder
    autAdvanceData?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    darkMode?: SortOrder
    autAdvance?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    darkMode?: SortOrder
    autAdvance?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumRankFilter<$PrismaModel = never> = {
    equals?: $Enums.Rank | EnumRankFieldRefInput<$PrismaModel>
    in?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    not?: NestedEnumRankFilter<$PrismaModel> | $Enums.Rank
  }

  export type EnumCareerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CareerType | EnumCareerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CareerType[] | ListEnumCareerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CareerType[] | ListEnumCareerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCareerTypeFilter<$PrismaModel> | $Enums.CareerType
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DispatchNullableRelationFilter = {
    is?: DispatchWhereInput | null
    isNot?: DispatchWhereInput | null
  }

  export type LogbookNullableRelationFilter = {
    is?: LogbookWhereInput | null
    isNot?: LogbookWhereInput | null
  }

  export type CareerCountOrderByAggregateInput = {
    id?: SortOrder
    base?: SortOrder
    company?: SortOrder
    aircraft?: SortOrder
    flightHours?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    careerType?: SortOrder
    userId?: SortOrder
  }

  export type CareerAvgOrderByAggregateInput = {
    flightHours?: SortOrder
  }

  export type CareerMaxOrderByAggregateInput = {
    id?: SortOrder
    base?: SortOrder
    company?: SortOrder
    aircraft?: SortOrder
    flightHours?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    careerType?: SortOrder
    userId?: SortOrder
  }

  export type CareerMinOrderByAggregateInput = {
    id?: SortOrder
    base?: SortOrder
    company?: SortOrder
    aircraft?: SortOrder
    flightHours?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    careerType?: SortOrder
    userId?: SortOrder
  }

  export type CareerSumOrderByAggregateInput = {
    flightHours?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumRankWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rank | EnumRankFieldRefInput<$PrismaModel>
    in?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    not?: NestedEnumRankWithAggregatesFilter<$PrismaModel> | $Enums.Rank
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRankFilter<$PrismaModel>
    _max?: NestedEnumRankFilter<$PrismaModel>
  }

  export type EnumCareerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CareerType | EnumCareerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CareerType[] | ListEnumCareerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CareerType[] | ListEnumCareerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCareerTypeWithAggregatesFilter<$PrismaModel> | $Enums.CareerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCareerTypeFilter<$PrismaModel>
    _max?: NestedEnumCareerTypeFilter<$PrismaModel>
  }

  export type EntryListRelationFilter = {
    every?: EntryWhereInput
    some?: EntryWhereInput
    none?: EntryWhereInput
  }

  export type CareerRelationFilter = {
    is?: CareerWhereInput
    isNot?: CareerWhereInput
  }

  export type EntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogbookCountOrderByAggregateInput = {
    id?: SortOrder
    careerId?: SortOrder
  }

  export type LogbookMaxOrderByAggregateInput = {
    id?: SortOrder
    careerId?: SortOrder
  }

  export type LogbookMinOrderByAggregateInput = {
    id?: SortOrder
    careerId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DispatchCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    careerId?: SortOrder
  }

  export type DispatchMaxOrderByAggregateInput = {
    id?: SortOrder
    careerId?: SortOrder
  }

  export type DispatchMinOrderByAggregateInput = {
    id?: SortOrder
    careerId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EntryCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    logbookId?: SortOrder
    createdAt?: SortOrder
  }

  export type EntryMaxOrderByAggregateInput = {
    id?: SortOrder
    logbookId?: SortOrder
    createdAt?: SortOrder
  }

  export type EntryMinOrderByAggregateInput = {
    id?: SortOrder
    logbookId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CareerCreateNestedManyWithoutBelongsToInput = {
    create?: XOR<CareerCreateWithoutBelongsToInput, CareerUncheckedCreateWithoutBelongsToInput> | CareerCreateWithoutBelongsToInput[] | CareerUncheckedCreateWithoutBelongsToInput[]
    connectOrCreate?: CareerCreateOrConnectWithoutBelongsToInput | CareerCreateOrConnectWithoutBelongsToInput[]
    createMany?: CareerCreateManyBelongsToInputEnvelope
    connect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
  }

  export type CareerUncheckedCreateNestedManyWithoutBelongsToInput = {
    create?: XOR<CareerCreateWithoutBelongsToInput, CareerUncheckedCreateWithoutBelongsToInput> | CareerCreateWithoutBelongsToInput[] | CareerUncheckedCreateWithoutBelongsToInput[]
    connectOrCreate?: CareerCreateOrConnectWithoutBelongsToInput | CareerCreateOrConnectWithoutBelongsToInput[]
    createMany?: CareerCreateManyBelongsToInputEnvelope
    connect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CareerUpdateManyWithoutBelongsToNestedInput = {
    create?: XOR<CareerCreateWithoutBelongsToInput, CareerUncheckedCreateWithoutBelongsToInput> | CareerCreateWithoutBelongsToInput[] | CareerUncheckedCreateWithoutBelongsToInput[]
    connectOrCreate?: CareerCreateOrConnectWithoutBelongsToInput | CareerCreateOrConnectWithoutBelongsToInput[]
    upsert?: CareerUpsertWithWhereUniqueWithoutBelongsToInput | CareerUpsertWithWhereUniqueWithoutBelongsToInput[]
    createMany?: CareerCreateManyBelongsToInputEnvelope
    set?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    disconnect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    delete?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    connect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    update?: CareerUpdateWithWhereUniqueWithoutBelongsToInput | CareerUpdateWithWhereUniqueWithoutBelongsToInput[]
    updateMany?: CareerUpdateManyWithWhereWithoutBelongsToInput | CareerUpdateManyWithWhereWithoutBelongsToInput[]
    deleteMany?: CareerScalarWhereInput | CareerScalarWhereInput[]
  }

  export type CareerUncheckedUpdateManyWithoutBelongsToNestedInput = {
    create?: XOR<CareerCreateWithoutBelongsToInput, CareerUncheckedCreateWithoutBelongsToInput> | CareerCreateWithoutBelongsToInput[] | CareerUncheckedCreateWithoutBelongsToInput[]
    connectOrCreate?: CareerCreateOrConnectWithoutBelongsToInput | CareerCreateOrConnectWithoutBelongsToInput[]
    upsert?: CareerUpsertWithWhereUniqueWithoutBelongsToInput | CareerUpsertWithWhereUniqueWithoutBelongsToInput[]
    createMany?: CareerCreateManyBelongsToInputEnvelope
    set?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    disconnect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    delete?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    connect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    update?: CareerUpdateWithWhereUniqueWithoutBelongsToInput | CareerUpdateWithWhereUniqueWithoutBelongsToInput[]
    updateMany?: CareerUpdateManyWithWhereWithoutBelongsToInput | CareerUpdateManyWithWhereWithoutBelongsToInput[]
    deleteMany?: CareerScalarWhereInput | CareerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCareersInput = {
    create?: XOR<UserCreateWithoutCareersInput, UserUncheckedCreateWithoutCareersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCareersInput
    connect?: UserWhereUniqueInput
  }

  export type DispatchCreateNestedOneWithoutCareerInput = {
    create?: XOR<DispatchCreateWithoutCareerInput, DispatchUncheckedCreateWithoutCareerInput>
    connectOrCreate?: DispatchCreateOrConnectWithoutCareerInput
    connect?: DispatchWhereUniqueInput
  }

  export type LogbookCreateNestedOneWithoutCareerInput = {
    create?: XOR<LogbookCreateWithoutCareerInput, LogbookUncheckedCreateWithoutCareerInput>
    connectOrCreate?: LogbookCreateOrConnectWithoutCareerInput
    connect?: LogbookWhereUniqueInput
  }

  export type DispatchUncheckedCreateNestedOneWithoutCareerInput = {
    create?: XOR<DispatchCreateWithoutCareerInput, DispatchUncheckedCreateWithoutCareerInput>
    connectOrCreate?: DispatchCreateOrConnectWithoutCareerInput
    connect?: DispatchWhereUniqueInput
  }

  export type LogbookUncheckedCreateNestedOneWithoutCareerInput = {
    create?: XOR<LogbookCreateWithoutCareerInput, LogbookUncheckedCreateWithoutCareerInput>
    connectOrCreate?: LogbookCreateOrConnectWithoutCareerInput
    connect?: LogbookWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRankFieldUpdateOperationsInput = {
    set?: $Enums.Rank
  }

  export type EnumCareerTypeFieldUpdateOperationsInput = {
    set?: $Enums.CareerType
  }

  export type UserUpdateOneRequiredWithoutCareersNestedInput = {
    create?: XOR<UserCreateWithoutCareersInput, UserUncheckedCreateWithoutCareersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCareersInput
    upsert?: UserUpsertWithoutCareersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCareersInput, UserUpdateWithoutCareersInput>, UserUncheckedUpdateWithoutCareersInput>
  }

  export type DispatchUpdateOneWithoutCareerNestedInput = {
    create?: XOR<DispatchCreateWithoutCareerInput, DispatchUncheckedCreateWithoutCareerInput>
    connectOrCreate?: DispatchCreateOrConnectWithoutCareerInput
    upsert?: DispatchUpsertWithoutCareerInput
    disconnect?: DispatchWhereInput | boolean
    delete?: DispatchWhereInput | boolean
    connect?: DispatchWhereUniqueInput
    update?: XOR<XOR<DispatchUpdateToOneWithWhereWithoutCareerInput, DispatchUpdateWithoutCareerInput>, DispatchUncheckedUpdateWithoutCareerInput>
  }

  export type LogbookUpdateOneWithoutCareerNestedInput = {
    create?: XOR<LogbookCreateWithoutCareerInput, LogbookUncheckedCreateWithoutCareerInput>
    connectOrCreate?: LogbookCreateOrConnectWithoutCareerInput
    upsert?: LogbookUpsertWithoutCareerInput
    disconnect?: LogbookWhereInput | boolean
    delete?: LogbookWhereInput | boolean
    connect?: LogbookWhereUniqueInput
    update?: XOR<XOR<LogbookUpdateToOneWithWhereWithoutCareerInput, LogbookUpdateWithoutCareerInput>, LogbookUncheckedUpdateWithoutCareerInput>
  }

  export type DispatchUncheckedUpdateOneWithoutCareerNestedInput = {
    create?: XOR<DispatchCreateWithoutCareerInput, DispatchUncheckedCreateWithoutCareerInput>
    connectOrCreate?: DispatchCreateOrConnectWithoutCareerInput
    upsert?: DispatchUpsertWithoutCareerInput
    disconnect?: DispatchWhereInput | boolean
    delete?: DispatchWhereInput | boolean
    connect?: DispatchWhereUniqueInput
    update?: XOR<XOR<DispatchUpdateToOneWithWhereWithoutCareerInput, DispatchUpdateWithoutCareerInput>, DispatchUncheckedUpdateWithoutCareerInput>
  }

  export type LogbookUncheckedUpdateOneWithoutCareerNestedInput = {
    create?: XOR<LogbookCreateWithoutCareerInput, LogbookUncheckedCreateWithoutCareerInput>
    connectOrCreate?: LogbookCreateOrConnectWithoutCareerInput
    upsert?: LogbookUpsertWithoutCareerInput
    disconnect?: LogbookWhereInput | boolean
    delete?: LogbookWhereInput | boolean
    connect?: LogbookWhereUniqueInput
    update?: XOR<XOR<LogbookUpdateToOneWithWhereWithoutCareerInput, LogbookUpdateWithoutCareerInput>, LogbookUncheckedUpdateWithoutCareerInput>
  }

  export type EntryCreateNestedManyWithoutIsPartOfLogbookInput = {
    create?: XOR<EntryCreateWithoutIsPartOfLogbookInput, EntryUncheckedCreateWithoutIsPartOfLogbookInput> | EntryCreateWithoutIsPartOfLogbookInput[] | EntryUncheckedCreateWithoutIsPartOfLogbookInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutIsPartOfLogbookInput | EntryCreateOrConnectWithoutIsPartOfLogbookInput[]
    createMany?: EntryCreateManyIsPartOfLogbookInputEnvelope
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
  }

  export type CareerCreateNestedOneWithoutLogbookInput = {
    create?: XOR<CareerCreateWithoutLogbookInput, CareerUncheckedCreateWithoutLogbookInput>
    connectOrCreate?: CareerCreateOrConnectWithoutLogbookInput
    connect?: CareerWhereUniqueInput
  }

  export type EntryUncheckedCreateNestedManyWithoutIsPartOfLogbookInput = {
    create?: XOR<EntryCreateWithoutIsPartOfLogbookInput, EntryUncheckedCreateWithoutIsPartOfLogbookInput> | EntryCreateWithoutIsPartOfLogbookInput[] | EntryUncheckedCreateWithoutIsPartOfLogbookInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutIsPartOfLogbookInput | EntryCreateOrConnectWithoutIsPartOfLogbookInput[]
    createMany?: EntryCreateManyIsPartOfLogbookInputEnvelope
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
  }

  export type EntryUpdateManyWithoutIsPartOfLogbookNestedInput = {
    create?: XOR<EntryCreateWithoutIsPartOfLogbookInput, EntryUncheckedCreateWithoutIsPartOfLogbookInput> | EntryCreateWithoutIsPartOfLogbookInput[] | EntryUncheckedCreateWithoutIsPartOfLogbookInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutIsPartOfLogbookInput | EntryCreateOrConnectWithoutIsPartOfLogbookInput[]
    upsert?: EntryUpsertWithWhereUniqueWithoutIsPartOfLogbookInput | EntryUpsertWithWhereUniqueWithoutIsPartOfLogbookInput[]
    createMany?: EntryCreateManyIsPartOfLogbookInputEnvelope
    set?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    disconnect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    delete?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    update?: EntryUpdateWithWhereUniqueWithoutIsPartOfLogbookInput | EntryUpdateWithWhereUniqueWithoutIsPartOfLogbookInput[]
    updateMany?: EntryUpdateManyWithWhereWithoutIsPartOfLogbookInput | EntryUpdateManyWithWhereWithoutIsPartOfLogbookInput[]
    deleteMany?: EntryScalarWhereInput | EntryScalarWhereInput[]
  }

  export type CareerUpdateOneRequiredWithoutLogbookNestedInput = {
    create?: XOR<CareerCreateWithoutLogbookInput, CareerUncheckedCreateWithoutLogbookInput>
    connectOrCreate?: CareerCreateOrConnectWithoutLogbookInput
    upsert?: CareerUpsertWithoutLogbookInput
    connect?: CareerWhereUniqueInput
    update?: XOR<XOR<CareerUpdateToOneWithWhereWithoutLogbookInput, CareerUpdateWithoutLogbookInput>, CareerUncheckedUpdateWithoutLogbookInput>
  }

  export type EntryUncheckedUpdateManyWithoutIsPartOfLogbookNestedInput = {
    create?: XOR<EntryCreateWithoutIsPartOfLogbookInput, EntryUncheckedCreateWithoutIsPartOfLogbookInput> | EntryCreateWithoutIsPartOfLogbookInput[] | EntryUncheckedCreateWithoutIsPartOfLogbookInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutIsPartOfLogbookInput | EntryCreateOrConnectWithoutIsPartOfLogbookInput[]
    upsert?: EntryUpsertWithWhereUniqueWithoutIsPartOfLogbookInput | EntryUpsertWithWhereUniqueWithoutIsPartOfLogbookInput[]
    createMany?: EntryCreateManyIsPartOfLogbookInputEnvelope
    set?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    disconnect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    delete?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    update?: EntryUpdateWithWhereUniqueWithoutIsPartOfLogbookInput | EntryUpdateWithWhereUniqueWithoutIsPartOfLogbookInput[]
    updateMany?: EntryUpdateManyWithWhereWithoutIsPartOfLogbookInput | EntryUpdateManyWithWhereWithoutIsPartOfLogbookInput[]
    deleteMany?: EntryScalarWhereInput | EntryScalarWhereInput[]
  }

  export type CareerCreateNestedOneWithoutDispatchesInput = {
    create?: XOR<CareerCreateWithoutDispatchesInput, CareerUncheckedCreateWithoutDispatchesInput>
    connectOrCreate?: CareerCreateOrConnectWithoutDispatchesInput
    connect?: CareerWhereUniqueInput
  }

  export type CareerUpdateOneRequiredWithoutDispatchesNestedInput = {
    create?: XOR<CareerCreateWithoutDispatchesInput, CareerUncheckedCreateWithoutDispatchesInput>
    connectOrCreate?: CareerCreateOrConnectWithoutDispatchesInput
    upsert?: CareerUpsertWithoutDispatchesInput
    connect?: CareerWhereUniqueInput
    update?: XOR<XOR<CareerUpdateToOneWithWhereWithoutDispatchesInput, CareerUpdateWithoutDispatchesInput>, CareerUncheckedUpdateWithoutDispatchesInput>
  }

  export type LogbookCreateNestedOneWithoutEntriesInput = {
    create?: XOR<LogbookCreateWithoutEntriesInput, LogbookUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: LogbookCreateOrConnectWithoutEntriesInput
    connect?: LogbookWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LogbookUpdateOneWithoutEntriesNestedInput = {
    create?: XOR<LogbookCreateWithoutEntriesInput, LogbookUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: LogbookCreateOrConnectWithoutEntriesInput
    upsert?: LogbookUpsertWithoutEntriesInput
    disconnect?: LogbookWhereInput | boolean
    delete?: LogbookWhereInput | boolean
    connect?: LogbookWhereUniqueInput
    update?: XOR<XOR<LogbookUpdateToOneWithWhereWithoutEntriesInput, LogbookUpdateWithoutEntriesInput>, LogbookUncheckedUpdateWithoutEntriesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRankFilter<$PrismaModel = never> = {
    equals?: $Enums.Rank | EnumRankFieldRefInput<$PrismaModel>
    in?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    not?: NestedEnumRankFilter<$PrismaModel> | $Enums.Rank
  }

  export type NestedEnumCareerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CareerType | EnumCareerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CareerType[] | ListEnumCareerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CareerType[] | ListEnumCareerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCareerTypeFilter<$PrismaModel> | $Enums.CareerType
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumRankWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rank | EnumRankFieldRefInput<$PrismaModel>
    in?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    not?: NestedEnumRankWithAggregatesFilter<$PrismaModel> | $Enums.Rank
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRankFilter<$PrismaModel>
    _max?: NestedEnumRankFilter<$PrismaModel>
  }

  export type NestedEnumCareerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CareerType | EnumCareerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CareerType[] | ListEnumCareerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CareerType[] | ListEnumCareerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCareerTypeWithAggregatesFilter<$PrismaModel> | $Enums.CareerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCareerTypeFilter<$PrismaModel>
    _max?: NestedEnumCareerTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CareerCreateWithoutBelongsToInput = {
    id?: string
    base: string
    company: string
    aircraft?: string
    flightHours?: number
    name?: string
    rank?: $Enums.Rank
    careerType?: $Enums.CareerType
    dispatches?: DispatchCreateNestedOneWithoutCareerInput
    logbook?: LogbookCreateNestedOneWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutBelongsToInput = {
    id?: string
    base: string
    company: string
    aircraft?: string
    flightHours?: number
    name?: string
    rank?: $Enums.Rank
    careerType?: $Enums.CareerType
    dispatches?: DispatchUncheckedCreateNestedOneWithoutCareerInput
    logbook?: LogbookUncheckedCreateNestedOneWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutBelongsToInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutBelongsToInput, CareerUncheckedCreateWithoutBelongsToInput>
  }

  export type CareerCreateManyBelongsToInputEnvelope = {
    data: CareerCreateManyBelongsToInput | CareerCreateManyBelongsToInput[]
    skipDuplicates?: boolean
  }

  export type CareerUpsertWithWhereUniqueWithoutBelongsToInput = {
    where: CareerWhereUniqueInput
    update: XOR<CareerUpdateWithoutBelongsToInput, CareerUncheckedUpdateWithoutBelongsToInput>
    create: XOR<CareerCreateWithoutBelongsToInput, CareerUncheckedCreateWithoutBelongsToInput>
  }

  export type CareerUpdateWithWhereUniqueWithoutBelongsToInput = {
    where: CareerWhereUniqueInput
    data: XOR<CareerUpdateWithoutBelongsToInput, CareerUncheckedUpdateWithoutBelongsToInput>
  }

  export type CareerUpdateManyWithWhereWithoutBelongsToInput = {
    where: CareerScalarWhereInput
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyWithoutBelongsToInput>
  }

  export type CareerScalarWhereInput = {
    AND?: CareerScalarWhereInput | CareerScalarWhereInput[]
    OR?: CareerScalarWhereInput[]
    NOT?: CareerScalarWhereInput | CareerScalarWhereInput[]
    id?: StringFilter<"Career"> | string
    base?: StringFilter<"Career"> | string
    company?: StringFilter<"Career"> | string
    aircraft?: StringFilter<"Career"> | string
    flightHours?: FloatFilter<"Career"> | number
    name?: StringFilter<"Career"> | string
    rank?: EnumRankFilter<"Career"> | $Enums.Rank
    careerType?: EnumCareerTypeFilter<"Career"> | $Enums.CareerType
    userId?: StringFilter<"Career"> | string
  }

  export type UserCreateWithoutCareersInput = {
    id: string
    darkMode?: boolean
    autAdvance?: boolean
    autAdvanceData?: JsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedCreateWithoutCareersInput = {
    id: string
    darkMode?: boolean
    autAdvance?: boolean
    autAdvanceData?: JsonNullValueInput | InputJsonValue
  }

  export type UserCreateOrConnectWithoutCareersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCareersInput, UserUncheckedCreateWithoutCareersInput>
  }

  export type DispatchCreateWithoutCareerInput = {
    id?: string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DispatchUncheckedCreateWithoutCareerInput = {
    id?: string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DispatchCreateOrConnectWithoutCareerInput = {
    where: DispatchWhereUniqueInput
    create: XOR<DispatchCreateWithoutCareerInput, DispatchUncheckedCreateWithoutCareerInput>
  }

  export type LogbookCreateWithoutCareerInput = {
    id?: string
    entries?: EntryCreateNestedManyWithoutIsPartOfLogbookInput
  }

  export type LogbookUncheckedCreateWithoutCareerInput = {
    id?: string
    entries?: EntryUncheckedCreateNestedManyWithoutIsPartOfLogbookInput
  }

  export type LogbookCreateOrConnectWithoutCareerInput = {
    where: LogbookWhereUniqueInput
    create: XOR<LogbookCreateWithoutCareerInput, LogbookUncheckedCreateWithoutCareerInput>
  }

  export type UserUpsertWithoutCareersInput = {
    update: XOR<UserUpdateWithoutCareersInput, UserUncheckedUpdateWithoutCareersInput>
    create: XOR<UserCreateWithoutCareersInput, UserUncheckedCreateWithoutCareersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCareersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCareersInput, UserUncheckedUpdateWithoutCareersInput>
  }

  export type UserUpdateWithoutCareersInput = {
    id?: StringFieldUpdateOperationsInput | string
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    autAdvance?: BoolFieldUpdateOperationsInput | boolean
    autAdvanceData?: JsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateWithoutCareersInput = {
    id?: StringFieldUpdateOperationsInput | string
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    autAdvance?: BoolFieldUpdateOperationsInput | boolean
    autAdvanceData?: JsonNullValueInput | InputJsonValue
  }

  export type DispatchUpsertWithoutCareerInput = {
    update: XOR<DispatchUpdateWithoutCareerInput, DispatchUncheckedUpdateWithoutCareerInput>
    create: XOR<DispatchCreateWithoutCareerInput, DispatchUncheckedCreateWithoutCareerInput>
    where?: DispatchWhereInput
  }

  export type DispatchUpdateToOneWithWhereWithoutCareerInput = {
    where?: DispatchWhereInput
    data: XOR<DispatchUpdateWithoutCareerInput, DispatchUncheckedUpdateWithoutCareerInput>
  }

  export type DispatchUpdateWithoutCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DispatchUncheckedUpdateWithoutCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LogbookUpsertWithoutCareerInput = {
    update: XOR<LogbookUpdateWithoutCareerInput, LogbookUncheckedUpdateWithoutCareerInput>
    create: XOR<LogbookCreateWithoutCareerInput, LogbookUncheckedCreateWithoutCareerInput>
    where?: LogbookWhereInput
  }

  export type LogbookUpdateToOneWithWhereWithoutCareerInput = {
    where?: LogbookWhereInput
    data: XOR<LogbookUpdateWithoutCareerInput, LogbookUncheckedUpdateWithoutCareerInput>
  }

  export type LogbookUpdateWithoutCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    entries?: EntryUpdateManyWithoutIsPartOfLogbookNestedInput
  }

  export type LogbookUncheckedUpdateWithoutCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    entries?: EntryUncheckedUpdateManyWithoutIsPartOfLogbookNestedInput
  }

  export type EntryCreateWithoutIsPartOfLogbookInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EntryUncheckedCreateWithoutIsPartOfLogbookInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EntryCreateOrConnectWithoutIsPartOfLogbookInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutIsPartOfLogbookInput, EntryUncheckedCreateWithoutIsPartOfLogbookInput>
  }

  export type EntryCreateManyIsPartOfLogbookInputEnvelope = {
    data: EntryCreateManyIsPartOfLogbookInput | EntryCreateManyIsPartOfLogbookInput[]
    skipDuplicates?: boolean
  }

  export type CareerCreateWithoutLogbookInput = {
    id?: string
    base: string
    company: string
    aircraft?: string
    flightHours?: number
    name?: string
    rank?: $Enums.Rank
    careerType?: $Enums.CareerType
    belongsTo: UserCreateNestedOneWithoutCareersInput
    dispatches?: DispatchCreateNestedOneWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutLogbookInput = {
    id?: string
    base: string
    company: string
    aircraft?: string
    flightHours?: number
    name?: string
    rank?: $Enums.Rank
    careerType?: $Enums.CareerType
    userId: string
    dispatches?: DispatchUncheckedCreateNestedOneWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutLogbookInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutLogbookInput, CareerUncheckedCreateWithoutLogbookInput>
  }

  export type EntryUpsertWithWhereUniqueWithoutIsPartOfLogbookInput = {
    where: EntryWhereUniqueInput
    update: XOR<EntryUpdateWithoutIsPartOfLogbookInput, EntryUncheckedUpdateWithoutIsPartOfLogbookInput>
    create: XOR<EntryCreateWithoutIsPartOfLogbookInput, EntryUncheckedCreateWithoutIsPartOfLogbookInput>
  }

  export type EntryUpdateWithWhereUniqueWithoutIsPartOfLogbookInput = {
    where: EntryWhereUniqueInput
    data: XOR<EntryUpdateWithoutIsPartOfLogbookInput, EntryUncheckedUpdateWithoutIsPartOfLogbookInput>
  }

  export type EntryUpdateManyWithWhereWithoutIsPartOfLogbookInput = {
    where: EntryScalarWhereInput
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyWithoutIsPartOfLogbookInput>
  }

  export type EntryScalarWhereInput = {
    AND?: EntryScalarWhereInput | EntryScalarWhereInput[]
    OR?: EntryScalarWhereInput[]
    NOT?: EntryScalarWhereInput | EntryScalarWhereInput[]
    id?: StringFilter<"Entry"> | string
    data?: JsonFilter<"Entry">
    logbookId?: StringNullableFilter<"Entry"> | string | null
    createdAt?: DateTimeFilter<"Entry"> | Date | string
  }

  export type CareerUpsertWithoutLogbookInput = {
    update: XOR<CareerUpdateWithoutLogbookInput, CareerUncheckedUpdateWithoutLogbookInput>
    create: XOR<CareerCreateWithoutLogbookInput, CareerUncheckedCreateWithoutLogbookInput>
    where?: CareerWhereInput
  }

  export type CareerUpdateToOneWithWhereWithoutLogbookInput = {
    where?: CareerWhereInput
    data: XOR<CareerUpdateWithoutLogbookInput, CareerUncheckedUpdateWithoutLogbookInput>
  }

  export type CareerUpdateWithoutLogbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    base?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    aircraft?: StringFieldUpdateOperationsInput | string
    flightHours?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    careerType?: EnumCareerTypeFieldUpdateOperationsInput | $Enums.CareerType
    belongsTo?: UserUpdateOneRequiredWithoutCareersNestedInput
    dispatches?: DispatchUpdateOneWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutLogbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    base?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    aircraft?: StringFieldUpdateOperationsInput | string
    flightHours?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    careerType?: EnumCareerTypeFieldUpdateOperationsInput | $Enums.CareerType
    userId?: StringFieldUpdateOperationsInput | string
    dispatches?: DispatchUncheckedUpdateOneWithoutCareerNestedInput
  }

  export type CareerCreateWithoutDispatchesInput = {
    id?: string
    base: string
    company: string
    aircraft?: string
    flightHours?: number
    name?: string
    rank?: $Enums.Rank
    careerType?: $Enums.CareerType
    belongsTo: UserCreateNestedOneWithoutCareersInput
    logbook?: LogbookCreateNestedOneWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutDispatchesInput = {
    id?: string
    base: string
    company: string
    aircraft?: string
    flightHours?: number
    name?: string
    rank?: $Enums.Rank
    careerType?: $Enums.CareerType
    userId: string
    logbook?: LogbookUncheckedCreateNestedOneWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutDispatchesInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutDispatchesInput, CareerUncheckedCreateWithoutDispatchesInput>
  }

  export type CareerUpsertWithoutDispatchesInput = {
    update: XOR<CareerUpdateWithoutDispatchesInput, CareerUncheckedUpdateWithoutDispatchesInput>
    create: XOR<CareerCreateWithoutDispatchesInput, CareerUncheckedCreateWithoutDispatchesInput>
    where?: CareerWhereInput
  }

  export type CareerUpdateToOneWithWhereWithoutDispatchesInput = {
    where?: CareerWhereInput
    data: XOR<CareerUpdateWithoutDispatchesInput, CareerUncheckedUpdateWithoutDispatchesInput>
  }

  export type CareerUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    base?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    aircraft?: StringFieldUpdateOperationsInput | string
    flightHours?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    careerType?: EnumCareerTypeFieldUpdateOperationsInput | $Enums.CareerType
    belongsTo?: UserUpdateOneRequiredWithoutCareersNestedInput
    logbook?: LogbookUpdateOneWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    base?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    aircraft?: StringFieldUpdateOperationsInput | string
    flightHours?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    careerType?: EnumCareerTypeFieldUpdateOperationsInput | $Enums.CareerType
    userId?: StringFieldUpdateOperationsInput | string
    logbook?: LogbookUncheckedUpdateOneWithoutCareerNestedInput
  }

  export type LogbookCreateWithoutEntriesInput = {
    id?: string
    career: CareerCreateNestedOneWithoutLogbookInput
  }

  export type LogbookUncheckedCreateWithoutEntriesInput = {
    id?: string
    careerId: string
  }

  export type LogbookCreateOrConnectWithoutEntriesInput = {
    where: LogbookWhereUniqueInput
    create: XOR<LogbookCreateWithoutEntriesInput, LogbookUncheckedCreateWithoutEntriesInput>
  }

  export type LogbookUpsertWithoutEntriesInput = {
    update: XOR<LogbookUpdateWithoutEntriesInput, LogbookUncheckedUpdateWithoutEntriesInput>
    create: XOR<LogbookCreateWithoutEntriesInput, LogbookUncheckedCreateWithoutEntriesInput>
    where?: LogbookWhereInput
  }

  export type LogbookUpdateToOneWithWhereWithoutEntriesInput = {
    where?: LogbookWhereInput
    data: XOR<LogbookUpdateWithoutEntriesInput, LogbookUncheckedUpdateWithoutEntriesInput>
  }

  export type LogbookUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    career?: CareerUpdateOneRequiredWithoutLogbookNestedInput
  }

  export type LogbookUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    careerId?: StringFieldUpdateOperationsInput | string
  }

  export type CareerCreateManyBelongsToInput = {
    id?: string
    base: string
    company: string
    aircraft?: string
    flightHours?: number
    name?: string
    rank?: $Enums.Rank
    careerType?: $Enums.CareerType
  }

  export type CareerUpdateWithoutBelongsToInput = {
    id?: StringFieldUpdateOperationsInput | string
    base?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    aircraft?: StringFieldUpdateOperationsInput | string
    flightHours?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    careerType?: EnumCareerTypeFieldUpdateOperationsInput | $Enums.CareerType
    dispatches?: DispatchUpdateOneWithoutCareerNestedInput
    logbook?: LogbookUpdateOneWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutBelongsToInput = {
    id?: StringFieldUpdateOperationsInput | string
    base?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    aircraft?: StringFieldUpdateOperationsInput | string
    flightHours?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    careerType?: EnumCareerTypeFieldUpdateOperationsInput | $Enums.CareerType
    dispatches?: DispatchUncheckedUpdateOneWithoutCareerNestedInput
    logbook?: LogbookUncheckedUpdateOneWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateManyWithoutBelongsToInput = {
    id?: StringFieldUpdateOperationsInput | string
    base?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    aircraft?: StringFieldUpdateOperationsInput | string
    flightHours?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    careerType?: EnumCareerTypeFieldUpdateOperationsInput | $Enums.CareerType
  }

  export type EntryCreateManyIsPartOfLogbookInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EntryUpdateWithoutIsPartOfLogbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryUncheckedUpdateWithoutIsPartOfLogbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryUncheckedUpdateManyWithoutIsPartOfLogbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LogbookCountOutputTypeDefaultArgs instead
     */
    export type LogbookCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LogbookCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CareerDefaultArgs instead
     */
    export type CareerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CareerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LogbookDefaultArgs instead
     */
    export type LogbookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LogbookDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DispatchDefaultArgs instead
     */
    export type DispatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DispatchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntryDefaultArgs instead
     */
    export type EntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}