/**
 * Makes only specific properties of a type optional while keeping others required.
 *
 * This utility type allows you to selectively make certain properties of an interface
 * optional while ensuring the rest remain required.
 *
 * @template T - The original type
 * @template U - Union of keys from T that should be made optional
 *
 * @example
 * ```ts
 * interface User {
 *   id: number;
 *   name: string;
 *   email: string;
 *   avatar: string;
 * }
 *
 * // Only avatar is optional, everything else is required
 * type NewUserForm = PartiallyOptional<User, 'avatar'>;
 * ```
 */
export type PartiallyOptional<T, U extends keyof T> = Partial<Pick<T, U>> & Required<Omit<T, U>>;

/**
 * Makes only specific properties of a type required while keeping others optional.
 *
 * This utility type allows you to selectively make certain properties of an interface
 * required while allowing the rest to be optional.
 *
 * @template T - The original type
 * @template U - Union of keys from T that should be made required
 *
 * @example
 * ```ts
 * interface UserProfile {
 *   id: number;
 *   name: string;
 *   email: string;
 *   bio: string;
 *   location: string;
 * }
 *
 * // Only id and email are required, everything else is optional
 * type UpdateProfile = PartiallyRequired<UserProfile, 'id' | 'email'>;
 * ```
 */
export type PartiallyRequired<T, U extends keyof T> = Partial<Omit<T, U>> & Required<Pick<T, U>>;
