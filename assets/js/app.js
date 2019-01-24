// Materialize initializations
document.addEventListener('DOMContentLoaded', () => {
    var scrollspy = document.querySelectorAll('.scrollspy');
    var instScrollspy = M.ScrollSpy.init(scrollspy);

    var sidenav = document.querySelectorAll('.sidenav');
    var instSidenav = M.Sidenav.init(sidenav);

    var modals = document.querySelectorAll('.modal');
    var instModal = M.Modal.init(modals);
});