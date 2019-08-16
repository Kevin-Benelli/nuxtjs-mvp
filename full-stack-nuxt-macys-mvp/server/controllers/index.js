const express = require('express');
const router = express.Router();


// const listUser = (req,res)=>{

//     const  = [{


            
//     }]


//     res.json({ });
// },


const mensClothesList = (req,res)=>{

    const mensClothes = [
    {
        id: 1,
        gender: "Male",
        type: "male-shirt"
    },
    {
        id: 2,
        gender: "Male",
        type: "male-shirt"
    },
    {
        id: 3,
        gender: "Male",
        type: "male-shirt"
    },
    {
        id: 4,
        gender: "Male",
        type: "male-shirt"
    },
    {
        id: 5,
        gender: "Male",
        type: "male-shirt"
    },
    {
        id: 6,
        gender: "Male",
        type: "male-tank-top"
    },
    {
        id: 7,
        gender: "Male",
        type: "male-tank-top"
    },
    {
        id: 8,
        gender: "Male",
        type: "male-tank-top"
    },
    {
        id: 9,
        gender: "Male",
        type: "male-tank-top"
    },
    {
        id: 10,
        gender: "Male",
        type: "male-tank-top"
    },];


    res.json({ mensClothes:mensClothes });
}





const womensClothesList = (req,res)=>{

    const womensClothes = [
    {
        id: 1,
        gender: "Female",
        type: "women-dress"
    },
    {
        id: 2,
        gender: "Female",
        type: "women-dress"
    },
    {
        id: 3,
        gender: "Female",
        type: "women-dress"
    },
    {
        id: 4,
        gender: "Female",
        type: "women-dress"
    },
    {
        id: 5,
        gender: "Female",
        type: "women-dress"
    },
    {
        id: 6,
        gender: "Female",
        type: "women-tank-top"
    },
    {
        id: 7,
        gender: "Female",
        type: "women-tank-top"
    },
    {
        id: 8,
        gender: "Female",
        type: "women-tank-top"
    },
    {
        id: 9,
        gender: "Female",
        type: "women-tank-top"
    },
    {
        id: 10,
        gender: "Female",
        type: "women-tank-top"
    },];


    res.json({ womensClothes:womensClothes });
}



const girlsClothesList = (req,res)=>{

    const girlsClothes = [
    {
        id: 1,
        gender: "girl",
        type: "girl-dress"
    },
    {
        id: 2,
        gender: "girl",
        type: "girl-dress"
    },
    {
        id: 3,
        gender: "girl",
        type: "girl-dress"
    },
    {
        id: 4,
        gender: "girl",
        type: "girl-dress"
    },
    {
        id: 5,
        gender: "girl",
        type: "girl-dress"
    },
    {
        id: 6,
        gender: "girl",
        type: "girl-tank-top"
    },
    {
        id: 7,
        gender: "girl",
        type: "girl-tank-top"
    },
    {
        id: 8,
        gender: "girl",
        type: "girl-tank-top"
    },
    {
        id: 9,
        gender: "girl",
        type: "girl-tank-top"
    },
    {
        id: 10,
        gender: "girl",
        type: "girl-tank-top"
    },];


    res.json({ girlsClothes:girlsClothes });
}


const boysClothesList = (req,res)=>{

    const boysClothes = [
    {
        id: 1,
        gender: "male",
        type: "boy-shirt"
    },
    {
        id: 2,
        gender: "male",
        type: "boy-shirt"
    },
    {
        id: 3,
        gender: "male",
        type: "boy-shirt"
    },
    {
        id: 4,
        gender: "male",
        type: "boy-shirt"
    },
    {
        id: 5,
        gender: "male",
        type: "boy-shirt"
    },
    {
        id: 6,
        gender: "male",
        type: "boy-tank-top"
    },
    {
        id: 7,
        gender: "male",
        type: "boy-tank-top"
    },
    {
        id: 8,
        gender: "male",
        type: "boy-tank-top"
    },
    {
        id: 9,
        gender: "male",
        type: "boy-tank-top"
    },
    {
        id: 10,
        gender: "male",
        type: "boy-tank-top"
    },];


    res.json({ boysClothes:boysClothes });
}



const mensActiveClothesList = (req,res)=>{

    const mensActiveClothes = [
    {
        id: 1,
        gender: "male",
        type: "active-shirt"
    },
    {
        id: 2,
        gender: "male",
        type: "active-shirt"
    },
    {
        id: 3,
        gender: "male",
        type: "active-shirt"
    },
    {
        id: 4,
        gender: "male",
        type: "active-shirt"
    },
    {
        id: 5,
        gender: "male",
        type: "active-shirt"
    },
    {
        id: 6,
        gender: "male",
        type: "active-tank-top"
    },
    {
        id: 7,
        gender: "male",
        type: "active-tank-top"
    },
    {
        id: 8,
        gender: "male",
        type: "active-tank-top"
    },
    {
        id: 9,
        gender: "male",
        type: "active-tank-top"
    },
    {
        id: 10,
        gender: "male",
        type: "active-tank-top"
    },];


    res.json({ mensActiveClothes:mensActiveClothes });
}



const womensActiveClothesList = (req,res)=>{

    const womensActiveClothes = [
    {
        id: 1,
        gender: "female",
        type: "womens-active-shirt"
    },
    {
        id: 2,
        gender: "female",
        type: "womens-active-shirt"
    },
    {
        id: 3,
        gender: "female",
        type: "womens-active-shirt"
    },
    {
        id: 4,
        gender: "female",
        type: "womens-active-shirt"
    },
    {
        id: 5,
        gender: "female",
        type: "womens-active-shirt"
    },
    {
        id: 6,
        gender: "female",
        type: "womens-active-tank-top"
    },
    {
        id: 7,
        gender: "female",
        type: "womens-active-tank-top"
    },
    {
        id: 8,
        gender: "female",
        type: "womens-active-tank-top"
    },
    {
        id: 9,
        gender: "female",
        type: "womens-active-tank-top"
    },
    {
        id: 10,
        gender: "female",
        type: "womens-active-tank-top"
    },];


    res.json({ womensActiveClothes:womensActiveClothes });
}



router.get('/mens_clothes', mensClothesList);
router.get('/womens_clothes', womensClothesList);
router.get('/girls_clothes', girlsClothesList);
router.get('/boys_clothes', boysClothesList);

router.get('/mens_active_clothes', mensActiveClothesList);
router.get('/womens_active_clothes', womensActiveClothesList);



module.exports = router;


    // womens =[
    //     {
    //         gender: "Male",
    //         type: "tank-top"
    //     }
    // ]