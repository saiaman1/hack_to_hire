import React from 'react';

export default class Utilities extends React.Component{
    static getBooksByTitle = (books, title) => {
        let filteredArr = [];
        for(let key in books){
            let arr = books[key].filter(b=> b.title === title);
            if(arr.length===0) continue;
            filteredArr.push(...arr.map(e=>{
                let obj = {...e};
                obj.memberId = key;
                return obj;
            }));
        }
        return filteredArr;
    };

    static uuidv4(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.reaplace(/[xy]/g,function(c){
            var r= Math.random()* 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}