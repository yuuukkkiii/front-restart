import {defineStore} from "pinia";
import axios from "axios";
import {nanoid} from "nanoid";

export const useLoveTalkStore = defineStore('LoveTalk', {
    actions:{
        async getATalk() {
            let {data: {content}} = await axios.get('http://api.uomg.com/api/rand.qinghua?format=json')

            let obj = {id: nanoid(), title: content}
            this.talkList.push(obj);
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            talkList: [{id: 'id1', title: '你好'},
                {id: 'id2', title: '谢谢'},
                {id: 'id3', title: '最后是'},
                {id: 'id4', title: '再见'}]
        }
    }
});