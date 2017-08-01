var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var center = c.width/2;

//Select the following Elements using the querySelector function

	var carWidth;

	var wheelDistance;

	var roofSlider;

	var ftSlider;

	var rtSlider;

	var rearSlider;

	var frontSlider;

	var colorInput;

	var sponsored;

	var sponsorNameBox;
        
       document.querySelector('#carWidth > input');
       document.querySelector('#wheelDistance');
       document.querySelector('#roofSlider > label');
       document.querySelector('#ftSlider > label');
       document.querySelector('#rtSlider > label');
       document.querySelector(rearSlider);
       document.querySelector(frontSlider);
       document.querySelector(colorInput);
       document.querySelector(sponsored);
       document.querySelector(sponsorNameBox);


//Open up the console and look at the properties for the protocar object
console.log(protocar);

/*	
	Create a new object called "car" in object literal notation. Give it all the properties and values of the protocar. 
	Please note that the rt (rear tire), ft (front tire) and sponsor properties are child objects.
	
*/

var  car = {
    ft:{
      color : "#000000",
      radius : 100,
      x : 550,
      y: 550
      
    },
    
    rt:{
       color : "#000000",
       radius : 100,
       x : 350,
       y : 550
        
    },
    
    sponsor :{
       decal : false,
       name :  ""

        
    },
    
        color : "#ff0000",
        front : 100,
        rear : 100,
        roof : 100,
        __proto__ : Object,
        topLimit :"550",
        width : 400
        
    
};



var timer = setInterval(animate, 1000/60);

function animate()
{
		ctx.clearRect(0,0,c.width,c.height);
		
        //call the drawCar() function and pass it your car object
		
		//Assign the colorInput's value to the car's color property
		
		//convert the roofSlider's value to a number and assign it to the car's roof property
        
		//convert the frontSlider's value to a number and assign it to the car's front property
       
		//convert the rearSlider's value to a number and assign it to the car's rear property
       
		//convert the carWidth's value to a number and assign it to the car's width property
       
		//set the roof, front and rear sliders' .max attributes to the car's topLimit property
        
		//set the car's front and rear tires' radius properties equal to the ft and rt slider's values
		
		//create a variable called wd and assign the wheelDistance slider's value to it as a Number.
		
		//set the car's front tire's x property equal to the center plus wd.
		
		//set the car's rear tire's x property equal to the center minus wd.
		
  
		
		/*
		
		Use a conditional statement (if else) to determine whether the sponsored input is checked or not.
	
		if it is checked do the following:
			1. enable the sponsorNameBox
			2. set the car's sponsor decal to true
			3. set the car's sponsor name to the value of the sponsorNameBox
		else
			1. disable the sponsorNameBox
			2. set the car's sponsor decal to false
		
		*/
		
	
		
     
}
