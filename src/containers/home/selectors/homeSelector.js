import {
  createSelector
} from 'reselect';
import Immutable from 'immutable';
import { key_home } from '@/constants'
import { commonLoginSelector } from '@/common/selectors'

const homeSelector = (imState) => {
  return imState.get(key_home);
};

const bannerSelector = createSelector([homeSelector], (imHome) => {
  return imHome&&imHome.getIn(['homeSale','greatSale'])
});

const proSelector = createSelector([homeSelector], (imHome) => {
  return imHome&&imHome.getIn(['products','recommendList'])
});

export default (imState) => {
  return {
  	// __state_login: commonLoginSelector(imState),
    sales: bannerSelector(imState) || Immutable.Map({}),
    products: proSelector(imState) || Immutable.Map({}),
  };
};
