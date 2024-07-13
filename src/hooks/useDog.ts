import {onMounted, reactive} from 'vue'
import axios from "axios";

// 这里用函数返回对象，是为了每次调用的时候new一个对象，避免修改同一个对象
export default function () {
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_3474.jpg',
        'https://images.dog.ceo/breeds/pembroke/n02113023_5985.jpg',
        'https://images.dog.ceo/breeds/pembroke/n02113023_4893.jpg',
        'https://images.dog.ceo/breeds/pembroke/n02113023_6140.jpg'
    ])

    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
            dogList.push(result.data.message)
            console.log(result.data)
        } catch (error) {
            alert(error)
        }
    }

    onMounted(() => {
        getDog()
    })

//     向外部提供东西
    return {dogList, getDog}
}

