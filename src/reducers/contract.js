import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const contract = handleActions({
  [actions.setActiveContract](state, { payload: { id } }) {
    return {
      ...state,
      currentContractId: id,
    };
  },
  [actions.createProductSuccess](state, { payload: { product } }) {
    return {
      ...state,
      products: [...state.products, product],
    };
  },
}, {
  currentContractId: null,
  products: [{
    "id": 2,
    "document": 3,
    "category": {
      "id": 1,
      "name": "Сель. хоз. продукция"
    },
    "name": "test",
    "model": "test",
    "specifications": "test test test",
    "unit": {
      "id": 1,
      "name": "КГ",
      "full_name": "Килограм"
    },
    "count": 32,
    "currency": {
      "id": 1,
      "name": "UZS",
      "full_name": "Узбекский сум"
    },
    "price_per_unit": 12312312,
    "code_tnved": {
      "id": 1,
      "code": "25165465"
    },
    "manufacturer": "dsafa",
    "manufacturer_country": {
      "id": 201,
      "name": "\ufeffАвстралия"
    },
    "add_time": "2020-02-21T01:43:00.693915+05:00",
    "edit_time": "2020-02-21T01:43:00.693932+05:00"
  }],
});

export default contract;
