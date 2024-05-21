import {createStore} from "vuex";
import {sessionsModule} from "./trainingSessions.ts";

export default createStore({
    modules: {
        trainingSessions: sessionsModule,
    }
})