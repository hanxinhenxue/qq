import axios from 'axios'
const mutations = {
    async sendMsg(state,val) {
        if(val.id == 1) {
            state.talkList.push({_id:"person",text:val.val})
            let config = {
                "reqType": 0,
                "perception": {
                    "inputText": {
                        "text": val.val
                    }
                },
                "userInfo": {
                    "apiKey":"2d7071f2e88e409f83ce233bf11c7824",
                    "userId":"1111"
                }
            }
            let { data } = await axios.post('/api/v2',config)
            state.talkList.push(data.results[0].values)

        } else if (val.id == 2) {
            state.talkList2.push({_id:"person",text:val.val})
            let config = {
                "reqType": 0,
                "perception": {
                    "inputText": {
                        "text": val.val
                    }
                },
                "userInfo": {
                    "apiKey":"d6cea5854b024e8ead22404b0b67cc53",
                    "userId":"2222"
                }
            }
            let { data } = await axios.post('/api/v2',config)
            state.talkList2.push(data.results[0].values)
        } else if (val.id == 3) {
            state.talkList3.push({_id:"person",text:val.val})
            let config = {
                "reqType": 0,
                "perception": {
                    "inputText": {
                        "text": val.val
                    }
                },
                "userInfo": {
                    "apiKey":"b9f40a16ae4e4c8f8116ce071e62dfbe",
                    "userId":"3333"
                }
            }
            let { data } = await axios.post('/api/v2',config)
            state.talkList3.push(data.results[0].values)
        } else if (val.id == 4) {
            state.talkList4.push({_id:"person",text:val.val})
            let config = {
                "reqType": 0,
                "perception": {
                    "inputText": {
                        "text": val.val
                    }
                },
                "userInfo": {
                    "apiKey":"b2f80660a2134aa4a08ba7bd53fcecdf",
                    "userId":"4444"
                }
            }
            let { data } = await axios.post('/api/v2',config)
            state.talkList4.push(data.results[0].values)
        }
    }
}
export default mutations