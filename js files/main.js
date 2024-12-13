var inp_as = document.getElementById("a_size");
var array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");


var butts_algos = document.querySelectorAll(".algos button");

var div_sizes = [];
var divs = [];
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";



inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {

    document.getElementById('best').innerHTML="Best Case :";
    document.getElementById('avg').innerHTML="Average Case :";
    document.getElementById('worst').innerHTML="Worst Case :";
    document.getElementById('space').innerHTML="";
    document.getElementById('algo-name').innerHTML="";


    cont.innerHTML = "";

    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 4 * (inp_as.max - inp_as.min)) + 20;
        divs[i] = document.createElement('div');
        cont.appendChild(divs[i]);

        divs[i].innerHTML = `

        <div class="tube">
            <div class="tube__top"></div>
            <div class="tube__contents" style="height:${(div_sizes[i]) + 40}%"></div>
            <div class="tube__outer-glass"></div>
        </div>
        
        `

        // divs[i].classList.add('tube');
        // divs[i].classList.add('tube__top');
        // divs[i].classList.add('tube__contents');
        // divs[i].classList.add('tube__outer-glass');


    }
}
// console.log(div_sizes);
function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}

window.onload = update_array_size();

for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function runalgo()
{
    disable_buttons();
    document.getElementById('algo-name').innerHTML=this.innerHTML;
    switch(this.innerHTML)
    {
        case "Bubble Sort":Bubble();
                        break;
        case "Selection Sort":Selection_();
                        break;
        case "Insertion Sort":Insertion();
                        break;
        case "Merge Sort":Merge();
                        break;
        case "Quick Sort":Quick();
                        break;
        case "Heap Sort":Heap();
                        break;
    }
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}



var speed=1000;

inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=7;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time = 10000/(Math.floor(array_size/10)*speed);        
}



var delay_time=10000/(Math.floor(array_size/10)*speed);        
var c_delay=0;

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        // console.log("bubble ne bulaya");
        cont.innerHTML = `

        <div class="tube">
            <div class="tube__top"></div>
            <div class="tube__contents" style="height:${height + 40}% ; background-color:${color};"></div>
            <div class="tube__outer-glass"></div>
        </div>
        
        `
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time);
}