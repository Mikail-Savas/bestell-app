function synchronizeSidebar() {
    sidebar.synchronize();
}

function openSidebar() {
    sidebar.open();
    freezeBody(true);
}

function closeSidebar() {
    sidebar.close();
    freezeBody(false);
}

function freezeBody(freeze) {
    if (freeze) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
}