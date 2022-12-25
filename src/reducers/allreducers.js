import { combineReducers } from 'redux';
import {displayreducer} from './displayreducer';
import { familytree_and_addreducer } from './addfamily&treereducer';

const reducers = combineReducers({
    displaydetails: displayreducer,
    familyreducer : familytree_and_addreducer
})

export default reducers;