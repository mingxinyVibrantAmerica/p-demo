import { reactive } from "vue";

export const GameEngine = reactive({
    map: [],

    init() {
        this.initMap();
    },

    initMap() {
        for (let i = 0; i < 11; i ++) {
            let row = []
            for (let j = 0; j < 11; j++) {
                row.push(0);
            }
            this.map.push(row);
        }
        this.map[5][5] = 1;
    }


})

export default GameEngine;
