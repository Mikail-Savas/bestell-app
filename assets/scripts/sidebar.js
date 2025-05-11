const sidebar = {
    content: document.querySelector('.sidebar-content'),
    open: function () {
        refs.sidebar.classList.remove('d-none');
    },
    close: function () {
        refs.sidebar.classList.add('d-none');
    },
    updateHeight: function (height) {
        sidebar.content.style.height = height + 'px';
    },
    synchronize: function () {
        const header = document.querySelector('header');
        const mainSection = document.querySelector('.main-section');
        let newHeight = window.innerHeight;
        if (window.pageYOffset <= header.clientHeight) {
            newHeight -= (header.clientHeight - window.pageYOffset);
        } else if (window.pageYOffset + window.innerHeight >= header.clientHeight + mainSection.clientHeight) {
            newHeight -= (window.pageYOffset + window.innerHeight) - (header.clientHeight + mainSection.clientHeight);
        }
        sidebar.updateHeight(newHeight.toFixed(0));
    }
}

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