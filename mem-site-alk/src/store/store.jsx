import { createStore } from "redux";
import reducer from "store/reducers/reducer";

const memsStore = createStore(reducer);

export default memsStore;
