/**
 * Represents a user in the system
 * @interface User
 * @property {number} id - Unique identifier for the user
 * @property {string} username - User's display name
 * @property {string} created_at - ISO timestamp of when the user account was created
 * @property {string} [bio] - Optional user biography or description
 */
export interface User {
  id: number;
  username: string;
  created_at: string;
  bio?: string;
}
