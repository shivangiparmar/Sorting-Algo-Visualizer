function Bubble()
{

    document.getElementById('best').innerHTML="Best Case : Ω( N )";
    document.getElementById('avg').innerHTML="Average Case : Θ( N<sup>2</sup> )";
    document.getElementById('worst').innerHTML="Worst Case : O( N<sup>2</sup> )";
    document.getElementById('space').innerHTML="O( 1 )";


    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");    // current element
            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");
                div_update(divs[j+1],div_sizes[j+1], "red");
                                                                          
                var temp=div_sizes[j];                                //swapped
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");
                div_update(divs[j+1],div_sizes[j+1], "red");
            }
            div_update(divs[j],div_sizes[j], "blue");                 //correct after swapped
        }
        div_update(divs[j],div_sizes[j], "green");              //accurate position
    }
    div_update(divs[0],div_sizes[0], "green");
    enable_buttons();
}
