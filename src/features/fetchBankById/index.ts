export type { BankSchema } from './model/types/bankSchema';
export { bankActions, bankReducer } from './model/slice/bankSlice';

export { fetchBankById } from './model/services/fetchBankById';

export { errorBank } from './model/selectors/errorBank';
export { getBank } from './model/selectors/getBank';
export { loadingBank } from './model/selectors/loadingBank';
