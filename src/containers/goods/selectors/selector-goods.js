import {
  createSelector
} from 'reselect';
import Immutable from 'immutable';
import { key_goods } from '@/constants'
import { commonLoginSelector } from '@/common/selectors'

const goodsSelector = (immu_state) => {
  return immu_state.get(key_goods);
};

const proSelector = createSelector([goodsSelector], (immu_home) => {
  return immu_home&&immu_home.get('productDetail')
});

export default (immu_state) => {
  return {
  	__state_login: commonLoginSelector(immu_state),
    products: proSelector(immu_state) || Immutable.Map({}),
    banners: proSelector(immu_state)&&proSelector(immu_state).get('productDetailList')
  };
};
