function fetchData(){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            let success = true
            if(success){
                resolve("Data fetched successfully")
            }else {
                reject ("Error fetching the data")
            }
        }, 3000);
    })
}

// let datFetch = fetchData()
// console.log(fetchData())

fetchData()
    .then((data)=> {
        console.log(data)
        return data.toLowerCase();
    })
    .then((value)=>{
        console.log(value);
    })
    .catch((error)=> console.error(error))