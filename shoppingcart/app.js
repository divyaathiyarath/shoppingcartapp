const Express=require('express');
var app=new Express();
app.set('view engine','ejs');
app.use(Express.static(__dirname+"/public"));
mobile=[
{
name:"Redmi 7",
price:7499.00,
description:"Commit Blue,2 GB RAM,32 GB storage",
pic:"/images/redmi7.jpg",
review:["Low Price with Powerful Battery Performance",
"Good mobile this price"]
},
{
name:"Samsung Galaxy M20",
price: 9990.00,
description:"Ocean Blue, 3+32GB",
pic:"/images/samsung.jpg",
review:["Poor Battery Overheating and Bad camera","Better options are available in this price"]
},
{
    name:"Honor 8X",
    price: 11999.00,
    description:"Blue, 4GB RAM, 64GB Storage",
    pic:"/images/honor.jpg",
    review:["Great phone with pathetic camera",
         "Very bad performance. If u buy than carefully."]
    }
    
];
laptop=[
{
    name:"Dell Inspiron 3567 Intel Core i3 7th Gen 15.6-inch FHD Laptop",
    price: 29699.00,
    description:"4GB/1TB HDD/Windows 10 Home/MS Office/Black/2.5kg",
    pic:"/images/dell.jpg",
    review:["MS Office only trial pack of 1 month",
    "Manufacturing defects. Not at all system is opening."]
},
{
    name:"HP 15 Intel Core i5",
    price: 41990.00,
    description:"8GB DDR4/1TB HDD/Win 10/MS Office/Integrated Graphics/2.04 kg",
    pic:"/images/hp.jpg",
    review:["1 TB Hard Drive is missing in the laptop",
    "wifi adapter doesn't work on 5GHz Airtel/ Reliance wifi"]
},
{
    name:"iBall Marvel 6 V 2.0 2017 14-inch Laptop",
    price: 10490.00,
    description:"Intel Celeron Processor N3350/3GB/32GB/Windows 10 Home/Integrated Graphics",
    pic:"/images/iball.jpg",
    review:["Good product...",
    "Nice"]
}

];
books=[
    {
        name:'Turning points',
        author:'A.P.J.Abdulkalam'  ,
        price:225,
        pic:"/images/turningpoints.jpg",
        description:'Turning points,',
        review:["One of the most beautiful book",
        "Like all his other books this is also a must ..."]


    },
    {
        name:"Randamoozham",
        author:"M.T.Vasudevan Nair",
        price:225,
        pic:"/images/randamoozham.jpg",
        description:"Malayalam novel",
        review:["Masterpiece",
         "Interesting story"]

    },
    {
        name:"Aarachaar",
        author:"K.R.Meera",
        price:225,
        pic:"/images/aarachar.jpg",
        description:"Novel",
        review:["awesome writing but poor quality of book",
        "A wonderful and intense read"]
    },
    {
        name:"Pathummayude Aadu",
        author:"Vaikom Muhammad Basheer",
        price:225,
        pic:"/images/pathummayudeaadu.jpg",
        description:"Novel",
        review:["It is one of the best book I've ever read..",
        "Awesome !"]

    },
    {
        name:"Oru Desathinte Katha",
        author:"S. K. Pottekkatt",
        price:225,
        pic:"/images/orudeshathintekatha.jpg",
        description:"Novel",
        review:["A must read for all Malayalees..",
        "Great to read it again"]

    },
    {
        name:"Oru Sankeerthanam Pole",
        author:"Perumbadavam Sreedharan",
        price:225,
        pic:"/images/orusankeerthanampole.jpg",
        description:"Novel",
        review:["Masterpiece of perumbadawam.Read it or its a loss for you",
        "An excellent book from Perumbadavam. Really must read."]
    },
    {
        name:"Naalukettu",
        author:"M. T. Vasudevan Nair",
        price:225,
        pic:"/images/naalukettu.jpg",
        description:"Novel",
        review:["A very heart warming book to read",
        "Must read"]

    },
    {
        name:"Ente Katha",
        author:"Kamala Suraiyya",
        price:225,
        pic:"/images/entekatha.jpg",
        description:"Novel",
        review:["Worth it",
        "Nice book with deep emotion"]

    },
    {
        name:"Balyakalasakhi",
        author:"Vaikom Muhammad Basheer",
        price:225,
        pic:"/images/balyakalasakhi.jpg",
        description:"Novel",
        review:["good",
        "Nice book"]
    },
    {
        name:"Ini Njan Urangatte",
        author:"P. K. Balakrishnan",
        price:225,
        pic:"/images/ininjanuranghatte.jpg",
        description:"Novel",
        review:[" 5 starsWonferful Novel based on Mahabharata",
        "Must read book for all Malayalam classic lovers"]
    }
];
home=[{
    name:"Milton Thermosteel Flip Lid Flask",
    price:424.00,
    description:"350 milliliters, Silver",
    pic:"/images/milton.jpg",
    review:["Not good",
    "Nice product"]
},
{
    name:"Prestige Electric Kettle PKOSS",
    price:709.50,
    description:"1500watts, Steel (1.5Ltr), Black",
    pic:"/images/kettle.jpg",
    review:["Works for the purpose but not good quality",
    "Value for money"]
},
{
    name:"Prestige Iris(750 Watt) Mixer Grinder",
    price:2799.00,
    pic:"/images/mixergrinder.jpg",
    description:"Prestige Iris(750 Watt) Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar,White and Blue",
    review:["Great looking and color i love it and powerful motor 750 is awesome grinding machine",
    "Not worth it"]
},
];
categories=[
{
 item:"Mobile",
 link:"/mobile"
},
{
 item:"Laptop",
 link:"/laptop"
},
{
 item:"Books",
 link:"/books"
},
{
item:"Home&Kitchen",
link:"/home&kitchen"
}
];
app.get('/',(req,res)=>{
    res.render('index',{categories:categories,title:"Home"});
});
app.get('/index',(req,res)=>{
    res.render('index',{categories:categories,title:"Home"});
});

app.get('/mobile',(req,res)=>{
    res.render('mobile',{mobile:mobile,title:"Mobiles"});
});
app.get('/mobilesingle/:id',(req,res)=>{
    const x=req.params.id;
    res.render('mobilesingle',{mobile:mobile[x],title:"Mobiles"});
});
 app.get('/books',(req,res)=>{
     res.render('books',{books:books,title:"Books"});
});
app.get('/booksingle/:id',(req,res)=>{
    const x=req.params.id;
    res.render('booksingle',{books:books[x],title:"books"});
});
app.get('/laptop',(req,res)=>{
    res.render('laptop',{laptop:laptop,title:"Laptop"});
});
app.get('/laptopsingle/:id',(req,res)=>{
    const x=req.params.id;
    res.render('laptopsingle',{laptop:laptop[x],title:"Laptop"});
});
app.get('/home&kitchen',(req,res)=>{
    res.render('home&kitchen',{home:home,title:"Home&Kitchen"});
});
app.get('/home&kitchensingle/:id',(req,res)=>{
    const x=req.params.id;
    res.render('home&kitchensingle',{home:home[x],title:"Home&Kitchen"});
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running");
});