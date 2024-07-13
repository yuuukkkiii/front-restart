import {computed, onMounted, ref} from 'vue'
import {s} from "vite/dist/node/types.d-aGj9QkWt";

export default function () {
    let sum = ref(0);
    let bigSum = computed(() => {
        return sum.value * 10;
    })

    function add() {
        sum.value += 1;
    }

    onMounted(() => {
        add()
    })
    return {sum, add,bigSum}
}