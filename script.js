let gridCount = 16;
const CONTAINER = document.querySelector('.container');
const CONTAINER_SIZE = 512;
const slider = document.getElementById('slider');
const gridSizeText = document.querySelector(".grid-size");
const sliderContainer = document.querySelector('.slider-container');
const colorPicker = document.querySelector("#color-wheel");
let hoverCheck = document.getElementById("checkbox");
let color = "#0000ff";
let mode = 'mousedown';



slider.oninput = function generateGrid(){
    gridCount = slider.value
    console.log(slider.value)
    
    while(CONTAINER.lastElementChild){
        CONTAINER.removeChild(CONTAINER.lastElementChild)
    }

        
        for(let i = 1; i <= gridCount * gridCount; i++){
            let div = document.createElement('div')
            div.setAttribute("id",i);
            div.setAttribute("class", "pixel")
            div.style.flexBasis = (CONTAINER_SIZE / gridCount) + 'px';
            div.style.height = (CONTAINER_SIZE / gridCount) + 'px';

            CONTAINER.appendChild(div)

            
            gridSizeText.textContent = gridCount + ' x ' + gridCount;

            sliderContainer.appendChild(gridSizeText)




        
    }
}






CONTAINER.addEventListener('mousedown', (e) =>{
    let target = e.target;
    let tile = document.getElementById(target.id);
    console.log(target.id)

    switch(e.button){
        case 0:
            tile.style.backgroundColor = color;
            break;
        case 1:
            tile.style.backgroundColor = '#acace0';
    }
    
   
    
})






colorPicker.addEventListener("input", (e) =>{
    let target = e.target;
    color = target.value



})

