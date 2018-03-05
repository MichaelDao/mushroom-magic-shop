/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {
  CLEAR_ANNOUNCER_LABEL,
  SET_ANNOUNCER_LABEL,
  CLOSE_MODAL,
  UPDATE_NETWORK_STATUS,
  CLOSE_SNACKBAR
} from '../actions/app.js';
import { ADD_TO_CART } from '../actions/cart.js';

const app = (state = {}, action) => {
  switch (action.type) {
    case CLEAR_ANNOUNCER_LABEL:
      return {
        ...state,
        announcerLabel: ''
      };
    case SET_ANNOUNCER_LABEL:
      return {
        ...state,
        announcerLabel: action.label
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartModalOpened: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        cartModalOpened: false
      };
    case UPDATE_NETWORK_STATUS:
      return {
        ...state,
        offline: action.offline,
        // Don't show the snackbar on the first load of the page if online.
        snackbarOpened: action.offline || (state.offline !== undefined)
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbarOpened: false
      };
    default:
      return state;
  }
}

export default app;
