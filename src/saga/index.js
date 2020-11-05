import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getIncomeExpenditureData } from '../services';
import { actions, PREFIX, types } from '../redux';

function* fetchIncExpData() {
    try {
        const data = yield call(getIncomeExpenditureData);
        yield put(actions.success(data)); 
    } catch(error) {
        yield put(actions.error(error));
    }
}

function* sagaWorker() {
    yield takeLatest(types[PREFIX].FETCH, fetchIncExpData);
}

function* saga() {
    yield all([
        sagaWorker()
    ]);
  }

export default saga;