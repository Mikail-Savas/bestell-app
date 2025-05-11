window.onresize = () => {
    applyResponsiveDesign();
};

/**
 * Handle responsive design at a certain breakboint.
 * On mobile, tablet this operation removes scroll event for sidebar synchronation and hides the sidebar.
 * On laptop, desktop exactly the opposite.
 */
function applyResponsiveDesign() {
    const breakpoint = 900;
    if (window.innerWidth <= breakpoint) {
        window.removeEventListener('scroll', synchronizeSidebar);
        refs.sidebar.classList.add('d-none');
    } else {
        window.addEventListener('scroll', synchronizeSidebar);
        refs.sidebar.classList.remove('d-none');
    }
}