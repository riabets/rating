import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ratingData:{},
    },
    mutations: {
        RATING_DATA_FOOD(state, value) {
            state.ratingData = {
                ...state.ratingData,
                1: value
            };
        },
        RATING_DATA_DRIVER(state, value) {
            state.ratingData = {
                ...state.ratingData,
                2: value
            };
        },
        RATING_DATA_EXPERIENCE(state, value) {
            state.ratingData = {
                ...state.ratingData,
                3: value
            };
        },
    }
})