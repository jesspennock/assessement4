const colors = require('./colors.json')
let globalId =5

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["You will get an A on your test!", "You will eat some tasty food this weekend!", "A pleasant surprise is waiting for you.", "Take a nap and your world will make more sense.", "Keep going and you will develop a great love for coding!"]
        let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomFortuneIndex];

        res.status(200).send(randomFortune)
    },
    getColors: (req, res)=> {
        res.status(200).send(colors)
    },
    
    addColor: (req, res)=> {
        let{name, hex} = req.body
        let newColor = {
            id: globalId,
            name,
            hex
        }
        colors.push(newColor)
        res.status(200).send(colors)
        globalId++
    },   
    deleteColor: (req, res) => {
        let deletedColorIndex = colors.findIndex((item) => item.id == req.params.id)
        colors.splice(deletedColorIndex, 1)
        res.status(200).send(colors)
    }

}