

// declare variables

const hideButton = $(".fa-caret-left");
const showButton = $(".fa-caret-right");
const leftBlock = $(".leftPart");
const rightBlock = $(".rightPart");
const pinkBlock = $(".pinkBlock");
const orangeBlock = $(".orangeBlock");
const pageBlock = $(".container-fluid");
const equalsRight= $("#equalsRight");
const equalsLeft= $("#equalsLeft");



$(document).ready(function(){
    hideButton.click(function(){
        hideBlock()
    });
    showButton.click(function(){
        showBlock()
    });
    
    equalsLeft.mousedown(() => {
        console.log("in")
        moveDownBlock(pinkBlock)
    })
    equalsRight.mousedown(() => {
        moveDownBlock(orangeBlock);
    });

})   


 
const moveDownBlock = (block) => {


    $(block.parent()).mousemove( (e) => {
        let y = pageBlock.height() - e.clientY - block.height();
        block.height(y + "px");
        
    })    
};
    

    // The left block should collapse 
    const hideBlock = () => {
        leftBlock.hide();
        rightBlock.width("98%");
        hideButton.hide();
        showButton.toggle()

    }

    // The left block should appear again 
    const showBlock = () => {
        leftBlock.toggle();
        hideButton.toggle();
        showButton.hide()
    }
