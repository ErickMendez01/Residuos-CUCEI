
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Dispositivo
 * 
 */
export type Dispositivo = $Result.DefaultSelection<Prisma.$DispositivoPayload>
/**
 * Model Componente
 * 
 */
export type Componente = $Result.DefaultSelection<Prisma.$ComponentePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ResultadoClasificacion: {
  REUTILIZAR: 'REUTILIZAR',
  RECICLAR: 'RECICLAR',
  DESECHABLE: 'DESECHABLE',
  PENDIENTE: 'PENDIENTE'
};

export type ResultadoClasificacion = (typeof ResultadoClasificacion)[keyof typeof ResultadoClasificacion]


export const EstadoGeneral: {
  FUNCIONAL: 'FUNCIONAL',
  PARCIALMENTE_FUNCIONAL: 'PARCIALMENTE_FUNCIONAL',
  DAÑADO: 'DAÑADO'
};

export type EstadoGeneral = (typeof EstadoGeneral)[keyof typeof EstadoGeneral]

}

export type ResultadoClasificacion = $Enums.ResultadoClasificacion

export const ResultadoClasificacion: typeof $Enums.ResultadoClasificacion

export type EstadoGeneral = $Enums.EstadoGeneral

export const EstadoGeneral: typeof $Enums.EstadoGeneral

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dispositivo`: Exposes CRUD operations for the **Dispositivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dispositivos
    * const dispositivos = await prisma.dispositivo.findMany()
    * ```
    */
  get dispositivo(): Prisma.DispositivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.componente`: Exposes CRUD operations for the **Componente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Componentes
    * const componentes = await prisma.componente.findMany()
    * ```
    */
  get componente(): Prisma.ComponenteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Account: 'Account',
    Dispositivo: 'Dispositivo',
    Componente: 'Componente'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "dispositivo" | "componente"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Dispositivo: {
        payload: Prisma.$DispositivoPayload<ExtArgs>
        fields: Prisma.DispositivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DispositivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DispositivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          findFirst: {
            args: Prisma.DispositivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DispositivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          findMany: {
            args: Prisma.DispositivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>[]
          }
          create: {
            args: Prisma.DispositivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          createMany: {
            args: Prisma.DispositivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DispositivoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>[]
          }
          delete: {
            args: Prisma.DispositivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          update: {
            args: Prisma.DispositivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          deleteMany: {
            args: Prisma.DispositivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DispositivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DispositivoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>[]
          }
          upsert: {
            args: Prisma.DispositivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          aggregate: {
            args: Prisma.DispositivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispositivo>
          }
          groupBy: {
            args: Prisma.DispositivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DispositivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DispositivoCountArgs<ExtArgs>
            result: $Utils.Optional<DispositivoCountAggregateOutputType> | number
          }
        }
      }
      Componente: {
        payload: Prisma.$ComponentePayload<ExtArgs>
        fields: Prisma.ComponenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComponenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComponenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentePayload>
          }
          findFirst: {
            args: Prisma.ComponenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComponenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentePayload>
          }
          findMany: {
            args: Prisma.ComponenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentePayload>[]
          }
          create: {
            args: Prisma.ComponenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentePayload>
          }
          createMany: {
            args: Prisma.ComponenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComponenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentePayload>[]
          }
          delete: {
            args: Prisma.ComponenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentePayload>
          }
          update: {
            args: Prisma.ComponenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentePayload>
          }
          deleteMany: {
            args: Prisma.ComponenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComponenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComponenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentePayload>[]
          }
          upsert: {
            args: Prisma.ComponenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentePayload>
          }
          aggregate: {
            args: Prisma.ComponenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComponente>
          }
          groupBy: {
            args: Prisma.ComponenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComponenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComponenteCountArgs<ExtArgs>
            result: $Utils.Optional<ComponenteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    dispositivo?: DispositivoOmit
    componente?: ComponenteOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
    accounts: number
    dispositivos: number
    componentes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    dispositivos?: boolean | UserCountOutputTypeCountDispositivosArgs
    componentes?: boolean | UserCountOutputTypeCountComponentesArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDispositivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispositivoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountComponentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponenteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    password: string | null
    gender: string | null
    birthDate: Date | null
    country: string | null
    city: string | null
    university: string | null
    career: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    password: string | null
    gender: string | null
    birthDate: Date | null
    country: string | null
    city: string | null
    university: string | null
    career: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    gender: number
    birthDate: number
    country: number
    city: number
    university: number
    career: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    gender?: true
    birthDate?: true
    country?: true
    city?: true
    university?: true
    career?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    gender?: true
    birthDate?: true
    country?: true
    city?: true
    university?: true
    career?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    gender?: true
    birthDate?: true
    country?: true
    city?: true
    university?: true
    career?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    emailVerified: boolean
    image: string | null
    password: string | null
    gender: string | null
    birthDate: Date | null
    country: string | null
    city: string | null
    university: string | null
    career: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    gender?: boolean
    birthDate?: boolean
    country?: boolean
    city?: boolean
    university?: boolean
    career?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    dispositivos?: boolean | User$dispositivosArgs<ExtArgs>
    componentes?: boolean | User$componentesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    gender?: boolean
    birthDate?: boolean
    country?: boolean
    city?: boolean
    university?: boolean
    career?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    gender?: boolean
    birthDate?: boolean
    country?: boolean
    city?: boolean
    university?: boolean
    career?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    gender?: boolean
    birthDate?: boolean
    country?: boolean
    city?: boolean
    university?: boolean
    career?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "password" | "gender" | "birthDate" | "country" | "city" | "university" | "career", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    dispositivos?: boolean | User$dispositivosArgs<ExtArgs>
    componentes?: boolean | User$componentesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      dispositivos: Prisma.$DispositivoPayload<ExtArgs>[]
      componentes: Prisma.$ComponentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      emailVerified: boolean
      image: string | null
      password: string | null
      gender: string | null
      birthDate: Date | null
      country: string | null
      city: string | null
      university: string | null
      career: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dispositivos<T extends User$dispositivosArgs<ExtArgs> = {}>(args?: Subset<T, User$dispositivosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    componentes<T extends User$componentesArgs<ExtArgs> = {}>(args?: Subset<T, User$componentesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly country: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly university: FieldRef<"User", 'String'>
    readonly career: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.dispositivos
   */
  export type User$dispositivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    where?: DispositivoWhereInput
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    cursor?: DispositivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * User.componentes
   */
  export type User$componentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Componente
     */
    select?: ComponenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Componente
     */
    omit?: ComponenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponenteInclude<ExtArgs> | null
    where?: ComponenteWhereInput
    orderBy?: ComponenteOrderByWithRelationInput | ComponenteOrderByWithRelationInput[]
    cursor?: ComponenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComponenteScalarFieldEnum | ComponenteScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    userId: number | null
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    userId: number | null
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: number | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    userId?: true
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    userId?: true
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'Int'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Dispositivo
   */

  export type AggregateDispositivo = {
    _count: DispositivoCountAggregateOutputType | null
    _avg: DispositivoAvgAggregateOutputType | null
    _sum: DispositivoSumAggregateOutputType | null
    _min: DispositivoMinAggregateOutputType | null
    _max: DispositivoMaxAggregateOutputType | null
  }

  export type DispositivoAvgAggregateOutputType = {
    id_dispositivo: number | null
    id_usuario: number | null
  }

  export type DispositivoSumAggregateOutputType = {
    id_dispositivo: number | null
    id_usuario: number | null
  }

  export type DispositivoMinAggregateOutputType = {
    id_dispositivo: number | null
    nombre: string | null
    marca: string | null
    modelo: string | null
    estado_general: $Enums.EstadoGeneral | null
    resultado: $Enums.ResultadoClasificacion | null
    justificacion: string | null
    descripcion: string | null
    categoria: string | null
    numero: string | null
    ubicacion: string | null
    id_usuario: number | null
  }

  export type DispositivoMaxAggregateOutputType = {
    id_dispositivo: number | null
    nombre: string | null
    marca: string | null
    modelo: string | null
    estado_general: $Enums.EstadoGeneral | null
    resultado: $Enums.ResultadoClasificacion | null
    justificacion: string | null
    descripcion: string | null
    categoria: string | null
    numero: string | null
    ubicacion: string | null
    id_usuario: number | null
  }

  export type DispositivoCountAggregateOutputType = {
    id_dispositivo: number
    nombre: number
    marca: number
    modelo: number
    estado_general: number
    resultado: number
    justificacion: number
    descripcion: number
    categoria: number
    numero: number
    ubicacion: number
    id_usuario: number
    _all: number
  }


  export type DispositivoAvgAggregateInputType = {
    id_dispositivo?: true
    id_usuario?: true
  }

  export type DispositivoSumAggregateInputType = {
    id_dispositivo?: true
    id_usuario?: true
  }

  export type DispositivoMinAggregateInputType = {
    id_dispositivo?: true
    nombre?: true
    marca?: true
    modelo?: true
    estado_general?: true
    resultado?: true
    justificacion?: true
    descripcion?: true
    categoria?: true
    numero?: true
    ubicacion?: true
    id_usuario?: true
  }

  export type DispositivoMaxAggregateInputType = {
    id_dispositivo?: true
    nombre?: true
    marca?: true
    modelo?: true
    estado_general?: true
    resultado?: true
    justificacion?: true
    descripcion?: true
    categoria?: true
    numero?: true
    ubicacion?: true
    id_usuario?: true
  }

  export type DispositivoCountAggregateInputType = {
    id_dispositivo?: true
    nombre?: true
    marca?: true
    modelo?: true
    estado_general?: true
    resultado?: true
    justificacion?: true
    descripcion?: true
    categoria?: true
    numero?: true
    ubicacion?: true
    id_usuario?: true
    _all?: true
  }

  export type DispositivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispositivo to aggregate.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dispositivos
    **/
    _count?: true | DispositivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DispositivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DispositivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DispositivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DispositivoMaxAggregateInputType
  }

  export type GetDispositivoAggregateType<T extends DispositivoAggregateArgs> = {
        [P in keyof T & keyof AggregateDispositivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispositivo[P]>
      : GetScalarType<T[P], AggregateDispositivo[P]>
  }




  export type DispositivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispositivoWhereInput
    orderBy?: DispositivoOrderByWithAggregationInput | DispositivoOrderByWithAggregationInput[]
    by: DispositivoScalarFieldEnum[] | DispositivoScalarFieldEnum
    having?: DispositivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DispositivoCountAggregateInputType | true
    _avg?: DispositivoAvgAggregateInputType
    _sum?: DispositivoSumAggregateInputType
    _min?: DispositivoMinAggregateInputType
    _max?: DispositivoMaxAggregateInputType
  }

  export type DispositivoGroupByOutputType = {
    id_dispositivo: number
    nombre: string
    marca: string
    modelo: string
    estado_general: $Enums.EstadoGeneral
    resultado: $Enums.ResultadoClasificacion
    justificacion: string | null
    descripcion: string | null
    categoria: string | null
    numero: string | null
    ubicacion: string | null
    id_usuario: number
    _count: DispositivoCountAggregateOutputType | null
    _avg: DispositivoAvgAggregateOutputType | null
    _sum: DispositivoSumAggregateOutputType | null
    _min: DispositivoMinAggregateOutputType | null
    _max: DispositivoMaxAggregateOutputType | null
  }

  type GetDispositivoGroupByPayload<T extends DispositivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DispositivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DispositivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DispositivoGroupByOutputType[P]>
            : GetScalarType<T[P], DispositivoGroupByOutputType[P]>
        }
      >
    >


  export type DispositivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dispositivo?: boolean
    nombre?: boolean
    marca?: boolean
    modelo?: boolean
    estado_general?: boolean
    resultado?: boolean
    justificacion?: boolean
    descripcion?: boolean
    categoria?: boolean
    numero?: boolean
    ubicacion?: boolean
    id_usuario?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispositivo"]>

  export type DispositivoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dispositivo?: boolean
    nombre?: boolean
    marca?: boolean
    modelo?: boolean
    estado_general?: boolean
    resultado?: boolean
    justificacion?: boolean
    descripcion?: boolean
    categoria?: boolean
    numero?: boolean
    ubicacion?: boolean
    id_usuario?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispositivo"]>

  export type DispositivoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dispositivo?: boolean
    nombre?: boolean
    marca?: boolean
    modelo?: boolean
    estado_general?: boolean
    resultado?: boolean
    justificacion?: boolean
    descripcion?: boolean
    categoria?: boolean
    numero?: boolean
    ubicacion?: boolean
    id_usuario?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispositivo"]>

  export type DispositivoSelectScalar = {
    id_dispositivo?: boolean
    nombre?: boolean
    marca?: boolean
    modelo?: boolean
    estado_general?: boolean
    resultado?: boolean
    justificacion?: boolean
    descripcion?: boolean
    categoria?: boolean
    numero?: boolean
    ubicacion?: boolean
    id_usuario?: boolean
  }

  export type DispositivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_dispositivo" | "nombre" | "marca" | "modelo" | "estado_general" | "resultado" | "justificacion" | "descripcion" | "categoria" | "numero" | "ubicacion" | "id_usuario", ExtArgs["result"]["dispositivo"]>
  export type DispositivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DispositivoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DispositivoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DispositivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispositivo"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_dispositivo: number
      nombre: string
      marca: string
      modelo: string
      estado_general: $Enums.EstadoGeneral
      resultado: $Enums.ResultadoClasificacion
      justificacion: string | null
      descripcion: string | null
      categoria: string | null
      numero: string | null
      ubicacion: string | null
      id_usuario: number
    }, ExtArgs["result"]["dispositivo"]>
    composites: {}
  }

  type DispositivoGetPayload<S extends boolean | null | undefined | DispositivoDefaultArgs> = $Result.GetResult<Prisma.$DispositivoPayload, S>

  type DispositivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DispositivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DispositivoCountAggregateInputType | true
    }

  export interface DispositivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispositivo'], meta: { name: 'Dispositivo' } }
    /**
     * Find zero or one Dispositivo that matches the filter.
     * @param {DispositivoFindUniqueArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DispositivoFindUniqueArgs>(args: SelectSubset<T, DispositivoFindUniqueArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dispositivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DispositivoFindUniqueOrThrowArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DispositivoFindUniqueOrThrowArgs>(args: SelectSubset<T, DispositivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispositivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindFirstArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DispositivoFindFirstArgs>(args?: SelectSubset<T, DispositivoFindFirstArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispositivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindFirstOrThrowArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DispositivoFindFirstOrThrowArgs>(args?: SelectSubset<T, DispositivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dispositivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dispositivos
     * const dispositivos = await prisma.dispositivo.findMany()
     * 
     * // Get first 10 Dispositivos
     * const dispositivos = await prisma.dispositivo.findMany({ take: 10 })
     * 
     * // Only select the `id_dispositivo`
     * const dispositivoWithId_dispositivoOnly = await prisma.dispositivo.findMany({ select: { id_dispositivo: true } })
     * 
     */
    findMany<T extends DispositivoFindManyArgs>(args?: SelectSubset<T, DispositivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dispositivo.
     * @param {DispositivoCreateArgs} args - Arguments to create a Dispositivo.
     * @example
     * // Create one Dispositivo
     * const Dispositivo = await prisma.dispositivo.create({
     *   data: {
     *     // ... data to create a Dispositivo
     *   }
     * })
     * 
     */
    create<T extends DispositivoCreateArgs>(args: SelectSubset<T, DispositivoCreateArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dispositivos.
     * @param {DispositivoCreateManyArgs} args - Arguments to create many Dispositivos.
     * @example
     * // Create many Dispositivos
     * const dispositivo = await prisma.dispositivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DispositivoCreateManyArgs>(args?: SelectSubset<T, DispositivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dispositivos and returns the data saved in the database.
     * @param {DispositivoCreateManyAndReturnArgs} args - Arguments to create many Dispositivos.
     * @example
     * // Create many Dispositivos
     * const dispositivo = await prisma.dispositivo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dispositivos and only return the `id_dispositivo`
     * const dispositivoWithId_dispositivoOnly = await prisma.dispositivo.createManyAndReturn({
     *   select: { id_dispositivo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DispositivoCreateManyAndReturnArgs>(args?: SelectSubset<T, DispositivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dispositivo.
     * @param {DispositivoDeleteArgs} args - Arguments to delete one Dispositivo.
     * @example
     * // Delete one Dispositivo
     * const Dispositivo = await prisma.dispositivo.delete({
     *   where: {
     *     // ... filter to delete one Dispositivo
     *   }
     * })
     * 
     */
    delete<T extends DispositivoDeleteArgs>(args: SelectSubset<T, DispositivoDeleteArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dispositivo.
     * @param {DispositivoUpdateArgs} args - Arguments to update one Dispositivo.
     * @example
     * // Update one Dispositivo
     * const dispositivo = await prisma.dispositivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DispositivoUpdateArgs>(args: SelectSubset<T, DispositivoUpdateArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dispositivos.
     * @param {DispositivoDeleteManyArgs} args - Arguments to filter Dispositivos to delete.
     * @example
     * // Delete a few Dispositivos
     * const { count } = await prisma.dispositivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DispositivoDeleteManyArgs>(args?: SelectSubset<T, DispositivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispositivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dispositivos
     * const dispositivo = await prisma.dispositivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DispositivoUpdateManyArgs>(args: SelectSubset<T, DispositivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispositivos and returns the data updated in the database.
     * @param {DispositivoUpdateManyAndReturnArgs} args - Arguments to update many Dispositivos.
     * @example
     * // Update many Dispositivos
     * const dispositivo = await prisma.dispositivo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dispositivos and only return the `id_dispositivo`
     * const dispositivoWithId_dispositivoOnly = await prisma.dispositivo.updateManyAndReturn({
     *   select: { id_dispositivo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DispositivoUpdateManyAndReturnArgs>(args: SelectSubset<T, DispositivoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dispositivo.
     * @param {DispositivoUpsertArgs} args - Arguments to update or create a Dispositivo.
     * @example
     * // Update or create a Dispositivo
     * const dispositivo = await prisma.dispositivo.upsert({
     *   create: {
     *     // ... data to create a Dispositivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispositivo we want to update
     *   }
     * })
     */
    upsert<T extends DispositivoUpsertArgs>(args: SelectSubset<T, DispositivoUpsertArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dispositivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoCountArgs} args - Arguments to filter Dispositivos to count.
     * @example
     * // Count the number of Dispositivos
     * const count = await prisma.dispositivo.count({
     *   where: {
     *     // ... the filter for the Dispositivos we want to count
     *   }
     * })
    **/
    count<T extends DispositivoCountArgs>(
      args?: Subset<T, DispositivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DispositivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispositivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DispositivoAggregateArgs>(args: Subset<T, DispositivoAggregateArgs>): Prisma.PrismaPromise<GetDispositivoAggregateType<T>>

    /**
     * Group by Dispositivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoGroupByArgs} args - Group by arguments.
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
      T extends DispositivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DispositivoGroupByArgs['orderBy'] }
        : { orderBy?: DispositivoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DispositivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispositivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispositivo model
   */
  readonly fields: DispositivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispositivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DispositivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dispositivo model
   */
  interface DispositivoFieldRefs {
    readonly id_dispositivo: FieldRef<"Dispositivo", 'Int'>
    readonly nombre: FieldRef<"Dispositivo", 'String'>
    readonly marca: FieldRef<"Dispositivo", 'String'>
    readonly modelo: FieldRef<"Dispositivo", 'String'>
    readonly estado_general: FieldRef<"Dispositivo", 'EstadoGeneral'>
    readonly resultado: FieldRef<"Dispositivo", 'ResultadoClasificacion'>
    readonly justificacion: FieldRef<"Dispositivo", 'String'>
    readonly descripcion: FieldRef<"Dispositivo", 'String'>
    readonly categoria: FieldRef<"Dispositivo", 'String'>
    readonly numero: FieldRef<"Dispositivo", 'String'>
    readonly ubicacion: FieldRef<"Dispositivo", 'String'>
    readonly id_usuario: FieldRef<"Dispositivo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Dispositivo findUnique
   */
  export type DispositivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo findUniqueOrThrow
   */
  export type DispositivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo findFirst
   */
  export type DispositivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispositivos.
     */
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo findFirstOrThrow
   */
  export type DispositivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispositivos.
     */
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo findMany
   */
  export type DispositivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivos to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo create
   */
  export type DispositivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * The data needed to create a Dispositivo.
     */
    data: XOR<DispositivoCreateInput, DispositivoUncheckedCreateInput>
  }

  /**
   * Dispositivo createMany
   */
  export type DispositivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dispositivos.
     */
    data: DispositivoCreateManyInput | DispositivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dispositivo createManyAndReturn
   */
  export type DispositivoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * The data used to create many Dispositivos.
     */
    data: DispositivoCreateManyInput | DispositivoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispositivo update
   */
  export type DispositivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * The data needed to update a Dispositivo.
     */
    data: XOR<DispositivoUpdateInput, DispositivoUncheckedUpdateInput>
    /**
     * Choose, which Dispositivo to update.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo updateMany
   */
  export type DispositivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dispositivos.
     */
    data: XOR<DispositivoUpdateManyMutationInput, DispositivoUncheckedUpdateManyInput>
    /**
     * Filter which Dispositivos to update
     */
    where?: DispositivoWhereInput
    /**
     * Limit how many Dispositivos to update.
     */
    limit?: number
  }

  /**
   * Dispositivo updateManyAndReturn
   */
  export type DispositivoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * The data used to update Dispositivos.
     */
    data: XOR<DispositivoUpdateManyMutationInput, DispositivoUncheckedUpdateManyInput>
    /**
     * Filter which Dispositivos to update
     */
    where?: DispositivoWhereInput
    /**
     * Limit how many Dispositivos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispositivo upsert
   */
  export type DispositivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * The filter to search for the Dispositivo to update in case it exists.
     */
    where: DispositivoWhereUniqueInput
    /**
     * In case the Dispositivo found by the `where` argument doesn't exist, create a new Dispositivo with this data.
     */
    create: XOR<DispositivoCreateInput, DispositivoUncheckedCreateInput>
    /**
     * In case the Dispositivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DispositivoUpdateInput, DispositivoUncheckedUpdateInput>
  }

  /**
   * Dispositivo delete
   */
  export type DispositivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter which Dispositivo to delete.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo deleteMany
   */
  export type DispositivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispositivos to delete
     */
    where?: DispositivoWhereInput
    /**
     * Limit how many Dispositivos to delete.
     */
    limit?: number
  }

  /**
   * Dispositivo without action
   */
  export type DispositivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
  }


  /**
   * Model Componente
   */

  export type AggregateComponente = {
    _count: ComponenteCountAggregateOutputType | null
    _avg: ComponenteAvgAggregateOutputType | null
    _sum: ComponenteSumAggregateOutputType | null
    _min: ComponenteMinAggregateOutputType | null
    _max: ComponenteMaxAggregateOutputType | null
  }

  export type ComponenteAvgAggregateOutputType = {
    id_componente: number | null
    id_usuario: number | null
  }

  export type ComponenteSumAggregateOutputType = {
    id_componente: number | null
    id_usuario: number | null
  }

  export type ComponenteMinAggregateOutputType = {
    id_componente: number | null
    tipo_componente: string | null
    estado_general: $Enums.EstadoGeneral | null
    resultado: $Enums.ResultadoClasificacion | null
    justificacion: string | null
    observaciones: string | null
    marca: string | null
    modelo: string | null
    numero: string | null
    ubicacion: string | null
    id_usuario: number | null
  }

  export type ComponenteMaxAggregateOutputType = {
    id_componente: number | null
    tipo_componente: string | null
    estado_general: $Enums.EstadoGeneral | null
    resultado: $Enums.ResultadoClasificacion | null
    justificacion: string | null
    observaciones: string | null
    marca: string | null
    modelo: string | null
    numero: string | null
    ubicacion: string | null
    id_usuario: number | null
  }

  export type ComponenteCountAggregateOutputType = {
    id_componente: number
    tipo_componente: number
    estado_general: number
    resultado: number
    justificacion: number
    observaciones: number
    marca: number
    modelo: number
    numero: number
    ubicacion: number
    id_usuario: number
    _all: number
  }


  export type ComponenteAvgAggregateInputType = {
    id_componente?: true
    id_usuario?: true
  }

  export type ComponenteSumAggregateInputType = {
    id_componente?: true
    id_usuario?: true
  }

  export type ComponenteMinAggregateInputType = {
    id_componente?: true
    tipo_componente?: true
    estado_general?: true
    resultado?: true
    justificacion?: true
    observaciones?: true
    marca?: true
    modelo?: true
    numero?: true
    ubicacion?: true
    id_usuario?: true
  }

  export type ComponenteMaxAggregateInputType = {
    id_componente?: true
    tipo_componente?: true
    estado_general?: true
    resultado?: true
    justificacion?: true
    observaciones?: true
    marca?: true
    modelo?: true
    numero?: true
    ubicacion?: true
    id_usuario?: true
  }

  export type ComponenteCountAggregateInputType = {
    id_componente?: true
    tipo_componente?: true
    estado_general?: true
    resultado?: true
    justificacion?: true
    observaciones?: true
    marca?: true
    modelo?: true
    numero?: true
    ubicacion?: true
    id_usuario?: true
    _all?: true
  }

  export type ComponenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Componente to aggregate.
     */
    where?: ComponenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Componentes to fetch.
     */
    orderBy?: ComponenteOrderByWithRelationInput | ComponenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComponenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Componentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Componentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Componentes
    **/
    _count?: true | ComponenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComponenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComponenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComponenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComponenteMaxAggregateInputType
  }

  export type GetComponenteAggregateType<T extends ComponenteAggregateArgs> = {
        [P in keyof T & keyof AggregateComponente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComponente[P]>
      : GetScalarType<T[P], AggregateComponente[P]>
  }




  export type ComponenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponenteWhereInput
    orderBy?: ComponenteOrderByWithAggregationInput | ComponenteOrderByWithAggregationInput[]
    by: ComponenteScalarFieldEnum[] | ComponenteScalarFieldEnum
    having?: ComponenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComponenteCountAggregateInputType | true
    _avg?: ComponenteAvgAggregateInputType
    _sum?: ComponenteSumAggregateInputType
    _min?: ComponenteMinAggregateInputType
    _max?: ComponenteMaxAggregateInputType
  }

  export type ComponenteGroupByOutputType = {
    id_componente: number
    tipo_componente: string
    estado_general: $Enums.EstadoGeneral
    resultado: $Enums.ResultadoClasificacion
    justificacion: string | null
    observaciones: string | null
    marca: string | null
    modelo: string | null
    numero: string | null
    ubicacion: string | null
    id_usuario: number
    _count: ComponenteCountAggregateOutputType | null
    _avg: ComponenteAvgAggregateOutputType | null
    _sum: ComponenteSumAggregateOutputType | null
    _min: ComponenteMinAggregateOutputType | null
    _max: ComponenteMaxAggregateOutputType | null
  }

  type GetComponenteGroupByPayload<T extends ComponenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComponenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComponenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComponenteGroupByOutputType[P]>
            : GetScalarType<T[P], ComponenteGroupByOutputType[P]>
        }
      >
    >


  export type ComponenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    tipo_componente?: boolean
    estado_general?: boolean
    resultado?: boolean
    justificacion?: boolean
    observaciones?: boolean
    marca?: boolean
    modelo?: boolean
    numero?: boolean
    ubicacion?: boolean
    id_usuario?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["componente"]>

  export type ComponenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    tipo_componente?: boolean
    estado_general?: boolean
    resultado?: boolean
    justificacion?: boolean
    observaciones?: boolean
    marca?: boolean
    modelo?: boolean
    numero?: boolean
    ubicacion?: boolean
    id_usuario?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["componente"]>

  export type ComponenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    tipo_componente?: boolean
    estado_general?: boolean
    resultado?: boolean
    justificacion?: boolean
    observaciones?: boolean
    marca?: boolean
    modelo?: boolean
    numero?: boolean
    ubicacion?: boolean
    id_usuario?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["componente"]>

  export type ComponenteSelectScalar = {
    id_componente?: boolean
    tipo_componente?: boolean
    estado_general?: boolean
    resultado?: boolean
    justificacion?: boolean
    observaciones?: boolean
    marca?: boolean
    modelo?: boolean
    numero?: boolean
    ubicacion?: boolean
    id_usuario?: boolean
  }

  export type ComponenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_componente" | "tipo_componente" | "estado_general" | "resultado" | "justificacion" | "observaciones" | "marca" | "modelo" | "numero" | "ubicacion" | "id_usuario", ExtArgs["result"]["componente"]>
  export type ComponenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ComponenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ComponenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ComponentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Componente"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_componente: number
      tipo_componente: string
      estado_general: $Enums.EstadoGeneral
      resultado: $Enums.ResultadoClasificacion
      justificacion: string | null
      observaciones: string | null
      marca: string | null
      modelo: string | null
      numero: string | null
      ubicacion: string | null
      id_usuario: number
    }, ExtArgs["result"]["componente"]>
    composites: {}
  }

  type ComponenteGetPayload<S extends boolean | null | undefined | ComponenteDefaultArgs> = $Result.GetResult<Prisma.$ComponentePayload, S>

  type ComponenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComponenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComponenteCountAggregateInputType | true
    }

  export interface ComponenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Componente'], meta: { name: 'Componente' } }
    /**
     * Find zero or one Componente that matches the filter.
     * @param {ComponenteFindUniqueArgs} args - Arguments to find a Componente
     * @example
     * // Get one Componente
     * const componente = await prisma.componente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComponenteFindUniqueArgs>(args: SelectSubset<T, ComponenteFindUniqueArgs<ExtArgs>>): Prisma__ComponenteClient<$Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Componente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComponenteFindUniqueOrThrowArgs} args - Arguments to find a Componente
     * @example
     * // Get one Componente
     * const componente = await prisma.componente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComponenteFindUniqueOrThrowArgs>(args: SelectSubset<T, ComponenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComponenteClient<$Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Componente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponenteFindFirstArgs} args - Arguments to find a Componente
     * @example
     * // Get one Componente
     * const componente = await prisma.componente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComponenteFindFirstArgs>(args?: SelectSubset<T, ComponenteFindFirstArgs<ExtArgs>>): Prisma__ComponenteClient<$Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Componente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponenteFindFirstOrThrowArgs} args - Arguments to find a Componente
     * @example
     * // Get one Componente
     * const componente = await prisma.componente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComponenteFindFirstOrThrowArgs>(args?: SelectSubset<T, ComponenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComponenteClient<$Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Componentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Componentes
     * const componentes = await prisma.componente.findMany()
     * 
     * // Get first 10 Componentes
     * const componentes = await prisma.componente.findMany({ take: 10 })
     * 
     * // Only select the `id_componente`
     * const componenteWithId_componenteOnly = await prisma.componente.findMany({ select: { id_componente: true } })
     * 
     */
    findMany<T extends ComponenteFindManyArgs>(args?: SelectSubset<T, ComponenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Componente.
     * @param {ComponenteCreateArgs} args - Arguments to create a Componente.
     * @example
     * // Create one Componente
     * const Componente = await prisma.componente.create({
     *   data: {
     *     // ... data to create a Componente
     *   }
     * })
     * 
     */
    create<T extends ComponenteCreateArgs>(args: SelectSubset<T, ComponenteCreateArgs<ExtArgs>>): Prisma__ComponenteClient<$Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Componentes.
     * @param {ComponenteCreateManyArgs} args - Arguments to create many Componentes.
     * @example
     * // Create many Componentes
     * const componente = await prisma.componente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComponenteCreateManyArgs>(args?: SelectSubset<T, ComponenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Componentes and returns the data saved in the database.
     * @param {ComponenteCreateManyAndReturnArgs} args - Arguments to create many Componentes.
     * @example
     * // Create many Componentes
     * const componente = await prisma.componente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Componentes and only return the `id_componente`
     * const componenteWithId_componenteOnly = await prisma.componente.createManyAndReturn({
     *   select: { id_componente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComponenteCreateManyAndReturnArgs>(args?: SelectSubset<T, ComponenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Componente.
     * @param {ComponenteDeleteArgs} args - Arguments to delete one Componente.
     * @example
     * // Delete one Componente
     * const Componente = await prisma.componente.delete({
     *   where: {
     *     // ... filter to delete one Componente
     *   }
     * })
     * 
     */
    delete<T extends ComponenteDeleteArgs>(args: SelectSubset<T, ComponenteDeleteArgs<ExtArgs>>): Prisma__ComponenteClient<$Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Componente.
     * @param {ComponenteUpdateArgs} args - Arguments to update one Componente.
     * @example
     * // Update one Componente
     * const componente = await prisma.componente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComponenteUpdateArgs>(args: SelectSubset<T, ComponenteUpdateArgs<ExtArgs>>): Prisma__ComponenteClient<$Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Componentes.
     * @param {ComponenteDeleteManyArgs} args - Arguments to filter Componentes to delete.
     * @example
     * // Delete a few Componentes
     * const { count } = await prisma.componente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComponenteDeleteManyArgs>(args?: SelectSubset<T, ComponenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Componentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Componentes
     * const componente = await prisma.componente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComponenteUpdateManyArgs>(args: SelectSubset<T, ComponenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Componentes and returns the data updated in the database.
     * @param {ComponenteUpdateManyAndReturnArgs} args - Arguments to update many Componentes.
     * @example
     * // Update many Componentes
     * const componente = await prisma.componente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Componentes and only return the `id_componente`
     * const componenteWithId_componenteOnly = await prisma.componente.updateManyAndReturn({
     *   select: { id_componente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComponenteUpdateManyAndReturnArgs>(args: SelectSubset<T, ComponenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Componente.
     * @param {ComponenteUpsertArgs} args - Arguments to update or create a Componente.
     * @example
     * // Update or create a Componente
     * const componente = await prisma.componente.upsert({
     *   create: {
     *     // ... data to create a Componente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Componente we want to update
     *   }
     * })
     */
    upsert<T extends ComponenteUpsertArgs>(args: SelectSubset<T, ComponenteUpsertArgs<ExtArgs>>): Prisma__ComponenteClient<$Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Componentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponenteCountArgs} args - Arguments to filter Componentes to count.
     * @example
     * // Count the number of Componentes
     * const count = await prisma.componente.count({
     *   where: {
     *     // ... the filter for the Componentes we want to count
     *   }
     * })
    **/
    count<T extends ComponenteCountArgs>(
      args?: Subset<T, ComponenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComponenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Componente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComponenteAggregateArgs>(args: Subset<T, ComponenteAggregateArgs>): Prisma.PrismaPromise<GetComponenteAggregateType<T>>

    /**
     * Group by Componente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponenteGroupByArgs} args - Group by arguments.
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
      T extends ComponenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComponenteGroupByArgs['orderBy'] }
        : { orderBy?: ComponenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComponenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComponenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Componente model
   */
  readonly fields: ComponenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Componente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComponenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Componente model
   */
  interface ComponenteFieldRefs {
    readonly id_componente: FieldRef<"Componente", 'Int'>
    readonly tipo_componente: FieldRef<"Componente", 'String'>
    readonly estado_general: FieldRef<"Componente", 'EstadoGeneral'>
    readonly resultado: FieldRef<"Componente", 'ResultadoClasificacion'>
    readonly justificacion: FieldRef<"Componente", 'String'>
    readonly observaciones: FieldRef<"Componente", 'String'>
    readonly marca: FieldRef<"Componente", 'String'>
    readonly modelo: FieldRef<"Componente", 'String'>
    readonly numero: FieldRef<"Componente", 'String'>
    readonly ubicacion: FieldRef<"Componente", 'String'>
    readonly id_usuario: FieldRef<"Componente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Componente findUnique
   */
  export type ComponenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Componente
     */
    select?: ComponenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Componente
     */
    omit?: ComponenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponenteInclude<ExtArgs> | null
    /**
     * Filter, which Componente to fetch.
     */
    where: ComponenteWhereUniqueInput
  }

  /**
   * Componente findUniqueOrThrow
   */
  export type ComponenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Componente
     */
    select?: ComponenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Componente
     */
    omit?: ComponenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponenteInclude<ExtArgs> | null
    /**
     * Filter, which Componente to fetch.
     */
    where: ComponenteWhereUniqueInput
  }

  /**
   * Componente findFirst
   */
  export type ComponenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Componente
     */
    select?: ComponenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Componente
     */
    omit?: ComponenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponenteInclude<ExtArgs> | null
    /**
     * Filter, which Componente to fetch.
     */
    where?: ComponenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Componentes to fetch.
     */
    orderBy?: ComponenteOrderByWithRelationInput | ComponenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Componentes.
     */
    cursor?: ComponenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Componentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Componentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Componentes.
     */
    distinct?: ComponenteScalarFieldEnum | ComponenteScalarFieldEnum[]
  }

  /**
   * Componente findFirstOrThrow
   */
  export type ComponenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Componente
     */
    select?: ComponenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Componente
     */
    omit?: ComponenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponenteInclude<ExtArgs> | null
    /**
     * Filter, which Componente to fetch.
     */
    where?: ComponenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Componentes to fetch.
     */
    orderBy?: ComponenteOrderByWithRelationInput | ComponenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Componentes.
     */
    cursor?: ComponenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Componentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Componentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Componentes.
     */
    distinct?: ComponenteScalarFieldEnum | ComponenteScalarFieldEnum[]
  }

  /**
   * Componente findMany
   */
  export type ComponenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Componente
     */
    select?: ComponenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Componente
     */
    omit?: ComponenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponenteInclude<ExtArgs> | null
    /**
     * Filter, which Componentes to fetch.
     */
    where?: ComponenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Componentes to fetch.
     */
    orderBy?: ComponenteOrderByWithRelationInput | ComponenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Componentes.
     */
    cursor?: ComponenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Componentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Componentes.
     */
    skip?: number
    distinct?: ComponenteScalarFieldEnum | ComponenteScalarFieldEnum[]
  }

  /**
   * Componente create
   */
  export type ComponenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Componente
     */
    select?: ComponenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Componente
     */
    omit?: ComponenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Componente.
     */
    data: XOR<ComponenteCreateInput, ComponenteUncheckedCreateInput>
  }

  /**
   * Componente createMany
   */
  export type ComponenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Componentes.
     */
    data: ComponenteCreateManyInput | ComponenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Componente createManyAndReturn
   */
  export type ComponenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Componente
     */
    select?: ComponenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Componente
     */
    omit?: ComponenteOmit<ExtArgs> | null
    /**
     * The data used to create many Componentes.
     */
    data: ComponenteCreateManyInput | ComponenteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponenteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Componente update
   */
  export type ComponenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Componente
     */
    select?: ComponenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Componente
     */
    omit?: ComponenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Componente.
     */
    data: XOR<ComponenteUpdateInput, ComponenteUncheckedUpdateInput>
    /**
     * Choose, which Componente to update.
     */
    where: ComponenteWhereUniqueInput
  }

  /**
   * Componente updateMany
   */
  export type ComponenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Componentes.
     */
    data: XOR<ComponenteUpdateManyMutationInput, ComponenteUncheckedUpdateManyInput>
    /**
     * Filter which Componentes to update
     */
    where?: ComponenteWhereInput
    /**
     * Limit how many Componentes to update.
     */
    limit?: number
  }

  /**
   * Componente updateManyAndReturn
   */
  export type ComponenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Componente
     */
    select?: ComponenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Componente
     */
    omit?: ComponenteOmit<ExtArgs> | null
    /**
     * The data used to update Componentes.
     */
    data: XOR<ComponenteUpdateManyMutationInput, ComponenteUncheckedUpdateManyInput>
    /**
     * Filter which Componentes to update
     */
    where?: ComponenteWhereInput
    /**
     * Limit how many Componentes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponenteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Componente upsert
   */
  export type ComponenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Componente
     */
    select?: ComponenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Componente
     */
    omit?: ComponenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Componente to update in case it exists.
     */
    where: ComponenteWhereUniqueInput
    /**
     * In case the Componente found by the `where` argument doesn't exist, create a new Componente with this data.
     */
    create: XOR<ComponenteCreateInput, ComponenteUncheckedCreateInput>
    /**
     * In case the Componente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComponenteUpdateInput, ComponenteUncheckedUpdateInput>
  }

  /**
   * Componente delete
   */
  export type ComponenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Componente
     */
    select?: ComponenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Componente
     */
    omit?: ComponenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponenteInclude<ExtArgs> | null
    /**
     * Filter which Componente to delete.
     */
    where: ComponenteWhereUniqueInput
  }

  /**
   * Componente deleteMany
   */
  export type ComponenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Componentes to delete
     */
    where?: ComponenteWhereInput
    /**
     * Limit how many Componentes to delete.
     */
    limit?: number
  }

  /**
   * Componente without action
   */
  export type ComponenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Componente
     */
    select?: ComponenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Componente
     */
    omit?: ComponenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponenteInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    gender: 'gender',
    birthDate: 'birthDate',
    country: 'country',
    city: 'city',
    university: 'university',
    career: 'career'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const DispositivoScalarFieldEnum: {
    id_dispositivo: 'id_dispositivo',
    nombre: 'nombre',
    marca: 'marca',
    modelo: 'modelo',
    estado_general: 'estado_general',
    resultado: 'resultado',
    justificacion: 'justificacion',
    descripcion: 'descripcion',
    categoria: 'categoria',
    numero: 'numero',
    ubicacion: 'ubicacion',
    id_usuario: 'id_usuario'
  };

  export type DispositivoScalarFieldEnum = (typeof DispositivoScalarFieldEnum)[keyof typeof DispositivoScalarFieldEnum]


  export const ComponenteScalarFieldEnum: {
    id_componente: 'id_componente',
    tipo_componente: 'tipo_componente',
    estado_general: 'estado_general',
    resultado: 'resultado',
    justificacion: 'justificacion',
    observaciones: 'observaciones',
    marca: 'marca',
    modelo: 'modelo',
    numero: 'numero',
    ubicacion: 'ubicacion',
    id_usuario: 'id_usuario'
  };

  export type ComponenteScalarFieldEnum = (typeof ComponenteScalarFieldEnum)[keyof typeof ComponenteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EstadoGeneral'
   */
  export type EnumEstadoGeneralFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoGeneral'>
    


  /**
   * Reference to a field of type 'EstadoGeneral[]'
   */
  export type ListEnumEstadoGeneralFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoGeneral[]'>
    


  /**
   * Reference to a field of type 'ResultadoClasificacion'
   */
  export type EnumResultadoClasificacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResultadoClasificacion'>
    


  /**
   * Reference to a field of type 'ResultadoClasificacion[]'
   */
  export type ListEnumResultadoClasificacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResultadoClasificacion[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    country?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    university?: StringNullableFilter<"User"> | string | null
    career?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    dispositivos?: DispositivoListRelationFilter
    componentes?: ComponenteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    university?: SortOrderInput | SortOrder
    career?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    dispositivos?: DispositivoOrderByRelationAggregateInput
    componentes?: ComponenteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    country?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    university?: StringNullableFilter<"User"> | string | null
    career?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    dispositivos?: DispositivoListRelationFilter
    componentes?: ComponenteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    university?: SortOrderInput | SortOrder
    career?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    university?: StringNullableWithAggregatesFilter<"User"> | string | null
    career?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: IntFilter<"Account"> | number
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: IntFilter<"Account"> | number
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: IntWithAggregatesFilter<"Account"> | number
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type DispositivoWhereInput = {
    AND?: DispositivoWhereInput | DispositivoWhereInput[]
    OR?: DispositivoWhereInput[]
    NOT?: DispositivoWhereInput | DispositivoWhereInput[]
    id_dispositivo?: IntFilter<"Dispositivo"> | number
    nombre?: StringFilter<"Dispositivo"> | string
    marca?: StringFilter<"Dispositivo"> | string
    modelo?: StringFilter<"Dispositivo"> | string
    estado_general?: EnumEstadoGeneralFilter<"Dispositivo"> | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFilter<"Dispositivo"> | $Enums.ResultadoClasificacion
    justificacion?: StringNullableFilter<"Dispositivo"> | string | null
    descripcion?: StringNullableFilter<"Dispositivo"> | string | null
    categoria?: StringNullableFilter<"Dispositivo"> | string | null
    numero?: StringNullableFilter<"Dispositivo"> | string | null
    ubicacion?: StringNullableFilter<"Dispositivo"> | string | null
    id_usuario?: IntFilter<"Dispositivo"> | number
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DispositivoOrderByWithRelationInput = {
    id_dispositivo?: SortOrder
    nombre?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    estado_general?: SortOrder
    resultado?: SortOrder
    justificacion?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    id_usuario?: SortOrder
    usuario?: UserOrderByWithRelationInput
  }

  export type DispositivoWhereUniqueInput = Prisma.AtLeast<{
    id_dispositivo?: number
    numero?: string
    AND?: DispositivoWhereInput | DispositivoWhereInput[]
    OR?: DispositivoWhereInput[]
    NOT?: DispositivoWhereInput | DispositivoWhereInput[]
    nombre?: StringFilter<"Dispositivo"> | string
    marca?: StringFilter<"Dispositivo"> | string
    modelo?: StringFilter<"Dispositivo"> | string
    estado_general?: EnumEstadoGeneralFilter<"Dispositivo"> | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFilter<"Dispositivo"> | $Enums.ResultadoClasificacion
    justificacion?: StringNullableFilter<"Dispositivo"> | string | null
    descripcion?: StringNullableFilter<"Dispositivo"> | string | null
    categoria?: StringNullableFilter<"Dispositivo"> | string | null
    ubicacion?: StringNullableFilter<"Dispositivo"> | string | null
    id_usuario?: IntFilter<"Dispositivo"> | number
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id_dispositivo" | "numero">

  export type DispositivoOrderByWithAggregationInput = {
    id_dispositivo?: SortOrder
    nombre?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    estado_general?: SortOrder
    resultado?: SortOrder
    justificacion?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    id_usuario?: SortOrder
    _count?: DispositivoCountOrderByAggregateInput
    _avg?: DispositivoAvgOrderByAggregateInput
    _max?: DispositivoMaxOrderByAggregateInput
    _min?: DispositivoMinOrderByAggregateInput
    _sum?: DispositivoSumOrderByAggregateInput
  }

  export type DispositivoScalarWhereWithAggregatesInput = {
    AND?: DispositivoScalarWhereWithAggregatesInput | DispositivoScalarWhereWithAggregatesInput[]
    OR?: DispositivoScalarWhereWithAggregatesInput[]
    NOT?: DispositivoScalarWhereWithAggregatesInput | DispositivoScalarWhereWithAggregatesInput[]
    id_dispositivo?: IntWithAggregatesFilter<"Dispositivo"> | number
    nombre?: StringWithAggregatesFilter<"Dispositivo"> | string
    marca?: StringWithAggregatesFilter<"Dispositivo"> | string
    modelo?: StringWithAggregatesFilter<"Dispositivo"> | string
    estado_general?: EnumEstadoGeneralWithAggregatesFilter<"Dispositivo"> | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionWithAggregatesFilter<"Dispositivo"> | $Enums.ResultadoClasificacion
    justificacion?: StringNullableWithAggregatesFilter<"Dispositivo"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"Dispositivo"> | string | null
    categoria?: StringNullableWithAggregatesFilter<"Dispositivo"> | string | null
    numero?: StringNullableWithAggregatesFilter<"Dispositivo"> | string | null
    ubicacion?: StringNullableWithAggregatesFilter<"Dispositivo"> | string | null
    id_usuario?: IntWithAggregatesFilter<"Dispositivo"> | number
  }

  export type ComponenteWhereInput = {
    AND?: ComponenteWhereInput | ComponenteWhereInput[]
    OR?: ComponenteWhereInput[]
    NOT?: ComponenteWhereInput | ComponenteWhereInput[]
    id_componente?: IntFilter<"Componente"> | number
    tipo_componente?: StringFilter<"Componente"> | string
    estado_general?: EnumEstadoGeneralFilter<"Componente"> | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFilter<"Componente"> | $Enums.ResultadoClasificacion
    justificacion?: StringNullableFilter<"Componente"> | string | null
    observaciones?: StringNullableFilter<"Componente"> | string | null
    marca?: StringNullableFilter<"Componente"> | string | null
    modelo?: StringNullableFilter<"Componente"> | string | null
    numero?: StringNullableFilter<"Componente"> | string | null
    ubicacion?: StringNullableFilter<"Componente"> | string | null
    id_usuario?: IntFilter<"Componente"> | number
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ComponenteOrderByWithRelationInput = {
    id_componente?: SortOrder
    tipo_componente?: SortOrder
    estado_general?: SortOrder
    resultado?: SortOrder
    justificacion?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    marca?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    id_usuario?: SortOrder
    usuario?: UserOrderByWithRelationInput
  }

  export type ComponenteWhereUniqueInput = Prisma.AtLeast<{
    id_componente?: number
    AND?: ComponenteWhereInput | ComponenteWhereInput[]
    OR?: ComponenteWhereInput[]
    NOT?: ComponenteWhereInput | ComponenteWhereInput[]
    tipo_componente?: StringFilter<"Componente"> | string
    estado_general?: EnumEstadoGeneralFilter<"Componente"> | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFilter<"Componente"> | $Enums.ResultadoClasificacion
    justificacion?: StringNullableFilter<"Componente"> | string | null
    observaciones?: StringNullableFilter<"Componente"> | string | null
    marca?: StringNullableFilter<"Componente"> | string | null
    modelo?: StringNullableFilter<"Componente"> | string | null
    numero?: StringNullableFilter<"Componente"> | string | null
    ubicacion?: StringNullableFilter<"Componente"> | string | null
    id_usuario?: IntFilter<"Componente"> | number
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id_componente">

  export type ComponenteOrderByWithAggregationInput = {
    id_componente?: SortOrder
    tipo_componente?: SortOrder
    estado_general?: SortOrder
    resultado?: SortOrder
    justificacion?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    marca?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    id_usuario?: SortOrder
    _count?: ComponenteCountOrderByAggregateInput
    _avg?: ComponenteAvgOrderByAggregateInput
    _max?: ComponenteMaxOrderByAggregateInput
    _min?: ComponenteMinOrderByAggregateInput
    _sum?: ComponenteSumOrderByAggregateInput
  }

  export type ComponenteScalarWhereWithAggregatesInput = {
    AND?: ComponenteScalarWhereWithAggregatesInput | ComponenteScalarWhereWithAggregatesInput[]
    OR?: ComponenteScalarWhereWithAggregatesInput[]
    NOT?: ComponenteScalarWhereWithAggregatesInput | ComponenteScalarWhereWithAggregatesInput[]
    id_componente?: IntWithAggregatesFilter<"Componente"> | number
    tipo_componente?: StringWithAggregatesFilter<"Componente"> | string
    estado_general?: EnumEstadoGeneralWithAggregatesFilter<"Componente"> | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionWithAggregatesFilter<"Componente"> | $Enums.ResultadoClasificacion
    justificacion?: StringNullableWithAggregatesFilter<"Componente"> | string | null
    observaciones?: StringNullableWithAggregatesFilter<"Componente"> | string | null
    marca?: StringNullableWithAggregatesFilter<"Componente"> | string | null
    modelo?: StringNullableWithAggregatesFilter<"Componente"> | string | null
    numero?: StringNullableWithAggregatesFilter<"Componente"> | string | null
    ubicacion?: StringNullableWithAggregatesFilter<"Componente"> | string | null
    id_usuario?: IntWithAggregatesFilter<"Componente"> | number
  }

  export type UserCreateInput = {
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    password?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    country?: string | null
    city?: string | null
    university?: string | null
    career?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    dispositivos?: DispositivoCreateNestedManyWithoutUsuarioInput
    componentes?: ComponenteCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    password?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    country?: string | null
    city?: string | null
    university?: string | null
    career?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    dispositivos?: DispositivoUncheckedCreateNestedManyWithoutUsuarioInput
    componentes?: ComponenteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    career?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    dispositivos?: DispositivoUpdateManyWithoutUsuarioNestedInput
    componentes?: ComponenteUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    career?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    dispositivos?: DispositivoUncheckedUpdateManyWithoutUsuarioNestedInput
    componentes?: ComponenteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    password?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    country?: string | null
    city?: string | null
    university?: string | null
    career?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    career?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    career?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispositivoCreateInput = {
    nombre: string
    marca: string
    modelo: string
    estado_general: $Enums.EstadoGeneral
    resultado: $Enums.ResultadoClasificacion
    justificacion?: string | null
    descripcion?: string | null
    categoria?: string | null
    numero?: string | null
    ubicacion?: string | null
    usuario: UserCreateNestedOneWithoutDispositivosInput
  }

  export type DispositivoUncheckedCreateInput = {
    id_dispositivo?: number
    nombre: string
    marca: string
    modelo: string
    estado_general: $Enums.EstadoGeneral
    resultado: $Enums.ResultadoClasificacion
    justificacion?: string | null
    descripcion?: string | null
    categoria?: string | null
    numero?: string | null
    ubicacion?: string | null
    id_usuario: number
  }

  export type DispositivoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    estado_general?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFieldUpdateOperationsInput | $Enums.ResultadoClasificacion
    justificacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UserUpdateOneRequiredWithoutDispositivosNestedInput
  }

  export type DispositivoUncheckedUpdateInput = {
    id_dispositivo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    estado_general?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFieldUpdateOperationsInput | $Enums.ResultadoClasificacion
    justificacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type DispositivoCreateManyInput = {
    id_dispositivo?: number
    nombre: string
    marca: string
    modelo: string
    estado_general: $Enums.EstadoGeneral
    resultado: $Enums.ResultadoClasificacion
    justificacion?: string | null
    descripcion?: string | null
    categoria?: string | null
    numero?: string | null
    ubicacion?: string | null
    id_usuario: number
  }

  export type DispositivoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    estado_general?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFieldUpdateOperationsInput | $Enums.ResultadoClasificacion
    justificacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispositivoUncheckedUpdateManyInput = {
    id_dispositivo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    estado_general?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFieldUpdateOperationsInput | $Enums.ResultadoClasificacion
    justificacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type ComponenteCreateInput = {
    tipo_componente: string
    estado_general: $Enums.EstadoGeneral
    resultado: $Enums.ResultadoClasificacion
    justificacion?: string | null
    observaciones?: string | null
    marca?: string | null
    modelo?: string | null
    numero?: string | null
    ubicacion?: string | null
    usuario: UserCreateNestedOneWithoutComponentesInput
  }

  export type ComponenteUncheckedCreateInput = {
    id_componente?: number
    tipo_componente: string
    estado_general: $Enums.EstadoGeneral
    resultado: $Enums.ResultadoClasificacion
    justificacion?: string | null
    observaciones?: string | null
    marca?: string | null
    modelo?: string | null
    numero?: string | null
    ubicacion?: string | null
    id_usuario: number
  }

  export type ComponenteUpdateInput = {
    tipo_componente?: StringFieldUpdateOperationsInput | string
    estado_general?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFieldUpdateOperationsInput | $Enums.ResultadoClasificacion
    justificacion?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UserUpdateOneRequiredWithoutComponentesNestedInput
  }

  export type ComponenteUncheckedUpdateInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    tipo_componente?: StringFieldUpdateOperationsInput | string
    estado_general?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFieldUpdateOperationsInput | $Enums.ResultadoClasificacion
    justificacion?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type ComponenteCreateManyInput = {
    id_componente?: number
    tipo_componente: string
    estado_general: $Enums.EstadoGeneral
    resultado: $Enums.ResultadoClasificacion
    justificacion?: string | null
    observaciones?: string | null
    marca?: string | null
    modelo?: string | null
    numero?: string | null
    ubicacion?: string | null
    id_usuario: number
  }

  export type ComponenteUpdateManyMutationInput = {
    tipo_componente?: StringFieldUpdateOperationsInput | string
    estado_general?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFieldUpdateOperationsInput | $Enums.ResultadoClasificacion
    justificacion?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComponenteUncheckedUpdateManyInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    tipo_componente?: StringFieldUpdateOperationsInput | string
    estado_general?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFieldUpdateOperationsInput | $Enums.ResultadoClasificacion
    justificacion?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type DispositivoListRelationFilter = {
    every?: DispositivoWhereInput
    some?: DispositivoWhereInput
    none?: DispositivoWhereInput
  }

  export type ComponenteListRelationFilter = {
    every?: ComponenteWhereInput
    some?: ComponenteWhereInput
    none?: ComponenteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DispositivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComponenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    country?: SortOrder
    city?: SortOrder
    university?: SortOrder
    career?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    country?: SortOrder
    city?: SortOrder
    university?: SortOrder
    career?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    country?: SortOrder
    city?: SortOrder
    university?: SortOrder
    career?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    userId?: SortOrder
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    userId?: SortOrder
    expires_at?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumEstadoGeneralFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoGeneral | EnumEstadoGeneralFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoGeneralFilter<$PrismaModel> | $Enums.EstadoGeneral
  }

  export type EnumResultadoClasificacionFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultadoClasificacion | EnumResultadoClasificacionFieldRefInput<$PrismaModel>
    in?: $Enums.ResultadoClasificacion[] | ListEnumResultadoClasificacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResultadoClasificacion[] | ListEnumResultadoClasificacionFieldRefInput<$PrismaModel>
    not?: NestedEnumResultadoClasificacionFilter<$PrismaModel> | $Enums.ResultadoClasificacion
  }

  export type DispositivoCountOrderByAggregateInput = {
    id_dispositivo?: SortOrder
    nombre?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    estado_general?: SortOrder
    resultado?: SortOrder
    justificacion?: SortOrder
    descripcion?: SortOrder
    categoria?: SortOrder
    numero?: SortOrder
    ubicacion?: SortOrder
    id_usuario?: SortOrder
  }

  export type DispositivoAvgOrderByAggregateInput = {
    id_dispositivo?: SortOrder
    id_usuario?: SortOrder
  }

  export type DispositivoMaxOrderByAggregateInput = {
    id_dispositivo?: SortOrder
    nombre?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    estado_general?: SortOrder
    resultado?: SortOrder
    justificacion?: SortOrder
    descripcion?: SortOrder
    categoria?: SortOrder
    numero?: SortOrder
    ubicacion?: SortOrder
    id_usuario?: SortOrder
  }

  export type DispositivoMinOrderByAggregateInput = {
    id_dispositivo?: SortOrder
    nombre?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    estado_general?: SortOrder
    resultado?: SortOrder
    justificacion?: SortOrder
    descripcion?: SortOrder
    categoria?: SortOrder
    numero?: SortOrder
    ubicacion?: SortOrder
    id_usuario?: SortOrder
  }

  export type DispositivoSumOrderByAggregateInput = {
    id_dispositivo?: SortOrder
    id_usuario?: SortOrder
  }

  export type EnumEstadoGeneralWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoGeneral | EnumEstadoGeneralFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoGeneralWithAggregatesFilter<$PrismaModel> | $Enums.EstadoGeneral
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoGeneralFilter<$PrismaModel>
    _max?: NestedEnumEstadoGeneralFilter<$PrismaModel>
  }

  export type EnumResultadoClasificacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultadoClasificacion | EnumResultadoClasificacionFieldRefInput<$PrismaModel>
    in?: $Enums.ResultadoClasificacion[] | ListEnumResultadoClasificacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResultadoClasificacion[] | ListEnumResultadoClasificacionFieldRefInput<$PrismaModel>
    not?: NestedEnumResultadoClasificacionWithAggregatesFilter<$PrismaModel> | $Enums.ResultadoClasificacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResultadoClasificacionFilter<$PrismaModel>
    _max?: NestedEnumResultadoClasificacionFilter<$PrismaModel>
  }

  export type ComponenteCountOrderByAggregateInput = {
    id_componente?: SortOrder
    tipo_componente?: SortOrder
    estado_general?: SortOrder
    resultado?: SortOrder
    justificacion?: SortOrder
    observaciones?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numero?: SortOrder
    ubicacion?: SortOrder
    id_usuario?: SortOrder
  }

  export type ComponenteAvgOrderByAggregateInput = {
    id_componente?: SortOrder
    id_usuario?: SortOrder
  }

  export type ComponenteMaxOrderByAggregateInput = {
    id_componente?: SortOrder
    tipo_componente?: SortOrder
    estado_general?: SortOrder
    resultado?: SortOrder
    justificacion?: SortOrder
    observaciones?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numero?: SortOrder
    ubicacion?: SortOrder
    id_usuario?: SortOrder
  }

  export type ComponenteMinOrderByAggregateInput = {
    id_componente?: SortOrder
    tipo_componente?: SortOrder
    estado_general?: SortOrder
    resultado?: SortOrder
    justificacion?: SortOrder
    observaciones?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numero?: SortOrder
    ubicacion?: SortOrder
    id_usuario?: SortOrder
  }

  export type ComponenteSumOrderByAggregateInput = {
    id_componente?: SortOrder
    id_usuario?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type DispositivoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DispositivoCreateWithoutUsuarioInput, DispositivoUncheckedCreateWithoutUsuarioInput> | DispositivoCreateWithoutUsuarioInput[] | DispositivoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutUsuarioInput | DispositivoCreateOrConnectWithoutUsuarioInput[]
    createMany?: DispositivoCreateManyUsuarioInputEnvelope
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
  }

  export type ComponenteCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ComponenteCreateWithoutUsuarioInput, ComponenteUncheckedCreateWithoutUsuarioInput> | ComponenteCreateWithoutUsuarioInput[] | ComponenteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComponenteCreateOrConnectWithoutUsuarioInput | ComponenteCreateOrConnectWithoutUsuarioInput[]
    createMany?: ComponenteCreateManyUsuarioInputEnvelope
    connect?: ComponenteWhereUniqueInput | ComponenteWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type DispositivoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DispositivoCreateWithoutUsuarioInput, DispositivoUncheckedCreateWithoutUsuarioInput> | DispositivoCreateWithoutUsuarioInput[] | DispositivoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutUsuarioInput | DispositivoCreateOrConnectWithoutUsuarioInput[]
    createMany?: DispositivoCreateManyUsuarioInputEnvelope
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
  }

  export type ComponenteUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ComponenteCreateWithoutUsuarioInput, ComponenteUncheckedCreateWithoutUsuarioInput> | ComponenteCreateWithoutUsuarioInput[] | ComponenteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComponenteCreateOrConnectWithoutUsuarioInput | ComponenteCreateOrConnectWithoutUsuarioInput[]
    createMany?: ComponenteCreateManyUsuarioInputEnvelope
    connect?: ComponenteWhereUniqueInput | ComponenteWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type DispositivoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DispositivoCreateWithoutUsuarioInput, DispositivoUncheckedCreateWithoutUsuarioInput> | DispositivoCreateWithoutUsuarioInput[] | DispositivoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutUsuarioInput | DispositivoCreateOrConnectWithoutUsuarioInput[]
    upsert?: DispositivoUpsertWithWhereUniqueWithoutUsuarioInput | DispositivoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DispositivoCreateManyUsuarioInputEnvelope
    set?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    disconnect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    delete?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    update?: DispositivoUpdateWithWhereUniqueWithoutUsuarioInput | DispositivoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DispositivoUpdateManyWithWhereWithoutUsuarioInput | DispositivoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
  }

  export type ComponenteUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ComponenteCreateWithoutUsuarioInput, ComponenteUncheckedCreateWithoutUsuarioInput> | ComponenteCreateWithoutUsuarioInput[] | ComponenteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComponenteCreateOrConnectWithoutUsuarioInput | ComponenteCreateOrConnectWithoutUsuarioInput[]
    upsert?: ComponenteUpsertWithWhereUniqueWithoutUsuarioInput | ComponenteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ComponenteCreateManyUsuarioInputEnvelope
    set?: ComponenteWhereUniqueInput | ComponenteWhereUniqueInput[]
    disconnect?: ComponenteWhereUniqueInput | ComponenteWhereUniqueInput[]
    delete?: ComponenteWhereUniqueInput | ComponenteWhereUniqueInput[]
    connect?: ComponenteWhereUniqueInput | ComponenteWhereUniqueInput[]
    update?: ComponenteUpdateWithWhereUniqueWithoutUsuarioInput | ComponenteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ComponenteUpdateManyWithWhereWithoutUsuarioInput | ComponenteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ComponenteScalarWhereInput | ComponenteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type DispositivoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DispositivoCreateWithoutUsuarioInput, DispositivoUncheckedCreateWithoutUsuarioInput> | DispositivoCreateWithoutUsuarioInput[] | DispositivoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutUsuarioInput | DispositivoCreateOrConnectWithoutUsuarioInput[]
    upsert?: DispositivoUpsertWithWhereUniqueWithoutUsuarioInput | DispositivoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DispositivoCreateManyUsuarioInputEnvelope
    set?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    disconnect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    delete?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    update?: DispositivoUpdateWithWhereUniqueWithoutUsuarioInput | DispositivoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DispositivoUpdateManyWithWhereWithoutUsuarioInput | DispositivoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
  }

  export type ComponenteUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ComponenteCreateWithoutUsuarioInput, ComponenteUncheckedCreateWithoutUsuarioInput> | ComponenteCreateWithoutUsuarioInput[] | ComponenteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComponenteCreateOrConnectWithoutUsuarioInput | ComponenteCreateOrConnectWithoutUsuarioInput[]
    upsert?: ComponenteUpsertWithWhereUniqueWithoutUsuarioInput | ComponenteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ComponenteCreateManyUsuarioInputEnvelope
    set?: ComponenteWhereUniqueInput | ComponenteWhereUniqueInput[]
    disconnect?: ComponenteWhereUniqueInput | ComponenteWhereUniqueInput[]
    delete?: ComponenteWhereUniqueInput | ComponenteWhereUniqueInput[]
    connect?: ComponenteWhereUniqueInput | ComponenteWhereUniqueInput[]
    update?: ComponenteUpdateWithWhereUniqueWithoutUsuarioInput | ComponenteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ComponenteUpdateManyWithWhereWithoutUsuarioInput | ComponenteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ComponenteScalarWhereInput | ComponenteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutDispositivosInput = {
    create?: XOR<UserCreateWithoutDispositivosInput, UserUncheckedCreateWithoutDispositivosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDispositivosInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEstadoGeneralFieldUpdateOperationsInput = {
    set?: $Enums.EstadoGeneral
  }

  export type EnumResultadoClasificacionFieldUpdateOperationsInput = {
    set?: $Enums.ResultadoClasificacion
  }

  export type UserUpdateOneRequiredWithoutDispositivosNestedInput = {
    create?: XOR<UserCreateWithoutDispositivosInput, UserUncheckedCreateWithoutDispositivosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDispositivosInput
    upsert?: UserUpsertWithoutDispositivosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDispositivosInput, UserUpdateWithoutDispositivosInput>, UserUncheckedUpdateWithoutDispositivosInput>
  }

  export type UserCreateNestedOneWithoutComponentesInput = {
    create?: XOR<UserCreateWithoutComponentesInput, UserUncheckedCreateWithoutComponentesInput>
    connectOrCreate?: UserCreateOrConnectWithoutComponentesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutComponentesNestedInput = {
    create?: XOR<UserCreateWithoutComponentesInput, UserUncheckedCreateWithoutComponentesInput>
    connectOrCreate?: UserCreateOrConnectWithoutComponentesInput
    upsert?: UserUpsertWithoutComponentesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutComponentesInput, UserUpdateWithoutComponentesInput>, UserUncheckedUpdateWithoutComponentesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEstadoGeneralFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoGeneral | EnumEstadoGeneralFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoGeneralFilter<$PrismaModel> | $Enums.EstadoGeneral
  }

  export type NestedEnumResultadoClasificacionFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultadoClasificacion | EnumResultadoClasificacionFieldRefInput<$PrismaModel>
    in?: $Enums.ResultadoClasificacion[] | ListEnumResultadoClasificacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResultadoClasificacion[] | ListEnumResultadoClasificacionFieldRefInput<$PrismaModel>
    not?: NestedEnumResultadoClasificacionFilter<$PrismaModel> | $Enums.ResultadoClasificacion
  }

  export type NestedEnumEstadoGeneralWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoGeneral | EnumEstadoGeneralFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoGeneralWithAggregatesFilter<$PrismaModel> | $Enums.EstadoGeneral
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoGeneralFilter<$PrismaModel>
    _max?: NestedEnumEstadoGeneralFilter<$PrismaModel>
  }

  export type NestedEnumResultadoClasificacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultadoClasificacion | EnumResultadoClasificacionFieldRefInput<$PrismaModel>
    in?: $Enums.ResultadoClasificacion[] | ListEnumResultadoClasificacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResultadoClasificacion[] | ListEnumResultadoClasificacionFieldRefInput<$PrismaModel>
    not?: NestedEnumResultadoClasificacionWithAggregatesFilter<$PrismaModel> | $Enums.ResultadoClasificacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResultadoClasificacionFilter<$PrismaModel>
    _max?: NestedEnumResultadoClasificacionFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DispositivoCreateWithoutUsuarioInput = {
    nombre: string
    marca: string
    modelo: string
    estado_general: $Enums.EstadoGeneral
    resultado: $Enums.ResultadoClasificacion
    justificacion?: string | null
    descripcion?: string | null
    categoria?: string | null
    numero?: string | null
    ubicacion?: string | null
  }

  export type DispositivoUncheckedCreateWithoutUsuarioInput = {
    id_dispositivo?: number
    nombre: string
    marca: string
    modelo: string
    estado_general: $Enums.EstadoGeneral
    resultado: $Enums.ResultadoClasificacion
    justificacion?: string | null
    descripcion?: string | null
    categoria?: string | null
    numero?: string | null
    ubicacion?: string | null
  }

  export type DispositivoCreateOrConnectWithoutUsuarioInput = {
    where: DispositivoWhereUniqueInput
    create: XOR<DispositivoCreateWithoutUsuarioInput, DispositivoUncheckedCreateWithoutUsuarioInput>
  }

  export type DispositivoCreateManyUsuarioInputEnvelope = {
    data: DispositivoCreateManyUsuarioInput | DispositivoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ComponenteCreateWithoutUsuarioInput = {
    tipo_componente: string
    estado_general: $Enums.EstadoGeneral
    resultado: $Enums.ResultadoClasificacion
    justificacion?: string | null
    observaciones?: string | null
    marca?: string | null
    modelo?: string | null
    numero?: string | null
    ubicacion?: string | null
  }

  export type ComponenteUncheckedCreateWithoutUsuarioInput = {
    id_componente?: number
    tipo_componente: string
    estado_general: $Enums.EstadoGeneral
    resultado: $Enums.ResultadoClasificacion
    justificacion?: string | null
    observaciones?: string | null
    marca?: string | null
    modelo?: string | null
    numero?: string | null
    ubicacion?: string | null
  }

  export type ComponenteCreateOrConnectWithoutUsuarioInput = {
    where: ComponenteWhereUniqueInput
    create: XOR<ComponenteCreateWithoutUsuarioInput, ComponenteUncheckedCreateWithoutUsuarioInput>
  }

  export type ComponenteCreateManyUsuarioInputEnvelope = {
    data: ComponenteCreateManyUsuarioInput | ComponenteCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: IntFilter<"Account"> | number
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type DispositivoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: DispositivoWhereUniqueInput
    update: XOR<DispositivoUpdateWithoutUsuarioInput, DispositivoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DispositivoCreateWithoutUsuarioInput, DispositivoUncheckedCreateWithoutUsuarioInput>
  }

  export type DispositivoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: DispositivoWhereUniqueInput
    data: XOR<DispositivoUpdateWithoutUsuarioInput, DispositivoUncheckedUpdateWithoutUsuarioInput>
  }

  export type DispositivoUpdateManyWithWhereWithoutUsuarioInput = {
    where: DispositivoScalarWhereInput
    data: XOR<DispositivoUpdateManyMutationInput, DispositivoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type DispositivoScalarWhereInput = {
    AND?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
    OR?: DispositivoScalarWhereInput[]
    NOT?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
    id_dispositivo?: IntFilter<"Dispositivo"> | number
    nombre?: StringFilter<"Dispositivo"> | string
    marca?: StringFilter<"Dispositivo"> | string
    modelo?: StringFilter<"Dispositivo"> | string
    estado_general?: EnumEstadoGeneralFilter<"Dispositivo"> | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFilter<"Dispositivo"> | $Enums.ResultadoClasificacion
    justificacion?: StringNullableFilter<"Dispositivo"> | string | null
    descripcion?: StringNullableFilter<"Dispositivo"> | string | null
    categoria?: StringNullableFilter<"Dispositivo"> | string | null
    numero?: StringNullableFilter<"Dispositivo"> | string | null
    ubicacion?: StringNullableFilter<"Dispositivo"> | string | null
    id_usuario?: IntFilter<"Dispositivo"> | number
  }

  export type ComponenteUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ComponenteWhereUniqueInput
    update: XOR<ComponenteUpdateWithoutUsuarioInput, ComponenteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ComponenteCreateWithoutUsuarioInput, ComponenteUncheckedCreateWithoutUsuarioInput>
  }

  export type ComponenteUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ComponenteWhereUniqueInput
    data: XOR<ComponenteUpdateWithoutUsuarioInput, ComponenteUncheckedUpdateWithoutUsuarioInput>
  }

  export type ComponenteUpdateManyWithWhereWithoutUsuarioInput = {
    where: ComponenteScalarWhereInput
    data: XOR<ComponenteUpdateManyMutationInput, ComponenteUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ComponenteScalarWhereInput = {
    AND?: ComponenteScalarWhereInput | ComponenteScalarWhereInput[]
    OR?: ComponenteScalarWhereInput[]
    NOT?: ComponenteScalarWhereInput | ComponenteScalarWhereInput[]
    id_componente?: IntFilter<"Componente"> | number
    tipo_componente?: StringFilter<"Componente"> | string
    estado_general?: EnumEstadoGeneralFilter<"Componente"> | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFilter<"Componente"> | $Enums.ResultadoClasificacion
    justificacion?: StringNullableFilter<"Componente"> | string | null
    observaciones?: StringNullableFilter<"Componente"> | string | null
    marca?: StringNullableFilter<"Componente"> | string | null
    modelo?: StringNullableFilter<"Componente"> | string | null
    numero?: StringNullableFilter<"Componente"> | string | null
    ubicacion?: StringNullableFilter<"Componente"> | string | null
    id_usuario?: IntFilter<"Componente"> | number
  }

  export type UserCreateWithoutAccountsInput = {
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    password?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    country?: string | null
    city?: string | null
    university?: string | null
    career?: string | null
    dispositivos?: DispositivoCreateNestedManyWithoutUsuarioInput
    componentes?: ComponenteCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    password?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    country?: string | null
    city?: string | null
    university?: string | null
    career?: string | null
    dispositivos?: DispositivoUncheckedCreateNestedManyWithoutUsuarioInput
    componentes?: ComponenteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    career?: NullableStringFieldUpdateOperationsInput | string | null
    dispositivos?: DispositivoUpdateManyWithoutUsuarioNestedInput
    componentes?: ComponenteUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    career?: NullableStringFieldUpdateOperationsInput | string | null
    dispositivos?: DispositivoUncheckedUpdateManyWithoutUsuarioNestedInput
    componentes?: ComponenteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UserCreateWithoutDispositivosInput = {
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    password?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    country?: string | null
    city?: string | null
    university?: string | null
    career?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    componentes?: ComponenteCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutDispositivosInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    password?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    country?: string | null
    city?: string | null
    university?: string | null
    career?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    componentes?: ComponenteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutDispositivosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDispositivosInput, UserUncheckedCreateWithoutDispositivosInput>
  }

  export type UserUpsertWithoutDispositivosInput = {
    update: XOR<UserUpdateWithoutDispositivosInput, UserUncheckedUpdateWithoutDispositivosInput>
    create: XOR<UserCreateWithoutDispositivosInput, UserUncheckedCreateWithoutDispositivosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDispositivosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDispositivosInput, UserUncheckedUpdateWithoutDispositivosInput>
  }

  export type UserUpdateWithoutDispositivosInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    career?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    componentes?: ComponenteUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutDispositivosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    career?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    componentes?: ComponenteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UserCreateWithoutComponentesInput = {
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    password?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    country?: string | null
    city?: string | null
    university?: string | null
    career?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    dispositivos?: DispositivoCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutComponentesInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    password?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    country?: string | null
    city?: string | null
    university?: string | null
    career?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    dispositivos?: DispositivoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutComponentesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutComponentesInput, UserUncheckedCreateWithoutComponentesInput>
  }

  export type UserUpsertWithoutComponentesInput = {
    update: XOR<UserUpdateWithoutComponentesInput, UserUncheckedUpdateWithoutComponentesInput>
    create: XOR<UserCreateWithoutComponentesInput, UserUncheckedCreateWithoutComponentesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutComponentesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutComponentesInput, UserUncheckedUpdateWithoutComponentesInput>
  }

  export type UserUpdateWithoutComponentesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    career?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    dispositivos?: DispositivoUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutComponentesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    career?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    dispositivos?: DispositivoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type DispositivoCreateManyUsuarioInput = {
    id_dispositivo?: number
    nombre: string
    marca: string
    modelo: string
    estado_general: $Enums.EstadoGeneral
    resultado: $Enums.ResultadoClasificacion
    justificacion?: string | null
    descripcion?: string | null
    categoria?: string | null
    numero?: string | null
    ubicacion?: string | null
  }

  export type ComponenteCreateManyUsuarioInput = {
    id_componente?: number
    tipo_componente: string
    estado_general: $Enums.EstadoGeneral
    resultado: $Enums.ResultadoClasificacion
    justificacion?: string | null
    observaciones?: string | null
    marca?: string | null
    modelo?: string | null
    numero?: string | null
    ubicacion?: string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispositivoUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    estado_general?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFieldUpdateOperationsInput | $Enums.ResultadoClasificacion
    justificacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispositivoUncheckedUpdateWithoutUsuarioInput = {
    id_dispositivo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    estado_general?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFieldUpdateOperationsInput | $Enums.ResultadoClasificacion
    justificacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispositivoUncheckedUpdateManyWithoutUsuarioInput = {
    id_dispositivo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    estado_general?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFieldUpdateOperationsInput | $Enums.ResultadoClasificacion
    justificacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComponenteUpdateWithoutUsuarioInput = {
    tipo_componente?: StringFieldUpdateOperationsInput | string
    estado_general?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFieldUpdateOperationsInput | $Enums.ResultadoClasificacion
    justificacion?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComponenteUncheckedUpdateWithoutUsuarioInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    tipo_componente?: StringFieldUpdateOperationsInput | string
    estado_general?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFieldUpdateOperationsInput | $Enums.ResultadoClasificacion
    justificacion?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComponenteUncheckedUpdateManyWithoutUsuarioInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    tipo_componente?: StringFieldUpdateOperationsInput | string
    estado_general?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    resultado?: EnumResultadoClasificacionFieldUpdateOperationsInput | $Enums.ResultadoClasificacion
    justificacion?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }



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