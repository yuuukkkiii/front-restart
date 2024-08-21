import {defineStore} from "pinia";

export const useCountStore = defineStore('Count', {
    // actions里面放置的是一个一个的方法，用于相应组件中的动作
    actions: {
        increment(value: number) {
            console.log("increment被执行", value)
            if (this.sum < 10) {
                this.sum += value
            }
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 6,
            address: "吴江",
            company: "maxwell"
        }
    },
    getters: {
        bigSum(state) {
            return state.sum * 2
        },
        upperSchool(){
            return this.company.toUpperCase()
        }
    }
});