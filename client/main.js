const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const colorBtn = document.getElementById("colorsButton")
const addColorForm = document.getElementById("addColor")
const deleteColorForm = document.getElementById("deleteColor")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune  = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
};

const getColors = ()=> {
    axios.get("http://localhost:4000/api/colors")
    .then(res => {
        const data = res.data;
        console.log(data);
        //add a way for users to see this data
    })
};
const addColors = colorObject => axios.post("http://localhost:4000/api/colors", colorObject)


function addColorHandler(event) {
    event.preventDefault()

    let name = document.querySelector('#name')
    let hex = document.querySelector('#hex')

    let colorObj = {
        name: name.value,
        hex: hex.value
    }

    addColors(colorObj)

    name.value = ''
    hex.value = ''
    //code in a way for users to see added color
}
const deleteColor = id => axios.delete(`http://localhost:4000/api/colors/${id}`)

function deleteColorHandler(event) {
    event.preventDefault()

    let colorToDelete = document.querySelector("#deleteColorObject")
    deleteColor(colorToDelete.value)
}

//code in way for users to see deleted color

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener("click", getFortune)
colorBtn.addEventListener("click", getColors)
addColorForm.addEventListener("submit", addColorHandler)
deleteColorForm.addEventListener("submit", deleteColorHandler)