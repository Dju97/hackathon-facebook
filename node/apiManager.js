const login = require('facebook-chat-api'); 

class ApiListener{
    async init(email,password){
        await new Promise((resolve,reject)=>{
            login({email: email, password: password},(err,api)=>{
            if(err){
                reject();
                throw new Error(err)
            }
            this.api = api;
            resolve(api);
            });
        });
    }

   getThreadHistory(thread,nbMessages,timestamp){
        return new Promise((resolve,reject) => {
            this.api.getThreadHistory(thread,nbMessages,timestamp,(err,history)=>{
                if(err){
                    reject();
                    throw new Error(err);
                }
                resolve(history);
            });
        });
    }

    getThreadInfo(thread){
        return new Promise((resolve,reject)=>{
            this.api.getThreadInfo(thread,(err,info)=>{
                if(err){
                    console.error('Error while reading info',err);
                    reject();
                }
                resolve(info);
            });
        })
    }

    async getWholeThreadHistory(thread){
        let info;
        try{
            info = await this.getThreadInfo(thread);
        } catch(err) {
            console.log('Error while fetching infos',err)
        }
        let numberBatch = info.messageCount
        let data = []
        let timestamp;
        let history;
        for(var i = 0, c = Math.floor(numberBatch/50);i<c;i++){
            history = await this.getThreadHistory(thread,50,timestamp);
            if(timestamp != undefined) history.pop();
            data.push(history);
            timestamp = history[0].timestamp;
        }
        return data;
    }
}

module.exports = ApiListener;