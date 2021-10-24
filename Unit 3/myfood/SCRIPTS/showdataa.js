//get data
//append data
// `https://www.themealdb.com/api/json/v1/1/random.php`



async function getData(url){

    let res = await fetch(url)
    let data = await res.json()

    return data.categories;
}

function append(data, container){

    data.forEach(({strCategory,strCategoryThumb,idCategory})=>{

        let div = document.createElement("div");

        let p  = document.createElement("p");
        p.innerText=strCategory

        let pa = document.createElement("p");
        pa.innerText=idCategory

        
        
        let img = document.createElement("img");
        img.src = strCategoryThumb

        div.append(img,p,pa)


        container.append(div);

    })
}

export {getData,append}


