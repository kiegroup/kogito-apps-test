/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Definition of a kogito app user.
 */
export interface User {
  /**
   * Identifier of the user.
   */
  id: string;

  /**
   * List of groups/roles the user belongs to.
   */
  groups: string[];
}

/**
 * Definition of a kogito app UserContext.
 */
export interface UserContext {
  /**
   * Retrieves the user that is currently logged to the app.
   */
  getCurrentUser(): User;
}

/**
 * Adds logout support to a UserContext
 */
export interface LogoutUserContext extends UserContext {
  /**
   * Logs out the current user
   */
  logout();
}

export class DefaultUser implements User {
  public readonly id: string;
  public readonly groups: string[];

  public constructor(id: string, groups: string[]) {
    this.id = id;
    this.groups = groups;
  }
}

export const ANONYMOUS_USER = new DefaultUser('john', ['employees']);

export const supportsLogout = (userContext: UserContext): boolean => {
  return 'logout' in userContext;
};
