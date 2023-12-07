const api = "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";
const inp = document.getElementById('inp')
const images = document.querySelector('.images')

const getimage = async () => {
    const methods = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
            "prompt":inp.value,
            "n":3,
            "size":'256x256'
        }
        )
    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods);
    const data = await res.json()
    const listimages = data.data;
    images.innerHTML = ''
    listimages.map(photo => {
        const container = document.createElement("div")
        images.append(container)
        const img = document.createElement("img")
        container.append(img)
        img.src = photo.url
    })
}
