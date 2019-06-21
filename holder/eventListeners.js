window.addEventListener('keydown',(e) => {
    if(e.key == ' ' && onGround())
    {
        yv = -JUMP_HEIGHT;
    }
})