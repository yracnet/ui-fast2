export const showBlock = () => {
    let blockMessage = document.getElementById("block-message");
    if (!blockMessage) {
        blockMessage = document.createElement("span");
        blockMessage.id = "block-message";
        document.body.appendChild(blockMessage);
        blockMessage.className = "modal fade";
    }
    blockMessage.style.display = "block";
    blockMessage.style.opacity = "0.5";
    blockMessage.style.backgroundColor = "gray";
    blockMessage.className = "modal fade in show";
}

export const hideBlock = () => {
    let blockMessage = document.getElementById("block-message");
    if (blockMessage) {
        blockMessage.className = "modal fade in hide";
        blockMessage.style.display = "none";
    }
}