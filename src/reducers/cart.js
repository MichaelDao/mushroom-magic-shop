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
  SET_CART,
  ADD_TO_CART,
  EDIT_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
} from '../actions/cart.js';

const cart = (state = {}, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...action.cart
      };
    case ADD_TO_CART:
    case EDIT_CART:
      return {
        ...state,
        [action.entryId]: entry(state[action.entryId], action)
      };
    case REMOVE_FROM_CART:
      const result = {...state};
      delete result[action.entryId];
      return result;
    case CLEAR_CART:
      return {};
    default:
      return state;
  }
}

const entry = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...action.entry,
        quantity: (state.quantity || 0) + action.entry.quantity
      };
    case EDIT_CART:
      return {
        ...action.entry
      };
    default:
      return state;
  }
}

export default cart;
