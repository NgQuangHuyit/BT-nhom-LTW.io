document.addEventListener("DOMContentLoaded", function() {
    function clickNarbarItem() {
        let navbarItems = document.querySelectorAll('.nav__item');
        let tabId = 0
        navbarItems.forEach(item => {
            item.addEventListener('click', function() {
                let tabs = document.querySelectorAll('.tab');
                tabs.forEach(tab => {
                    tab.classList.remove('tab--active');
                });
                if (this.id == 'list-exams') {
                    tabs[0].classList.add('tab--active');
                }
                if (this.id == 'list-users') {
                    tabs[1].classList.add('tab--active');
                }
                if (this.id == 'statistics') {
                    tabs[2].classList.add('tab--active');
                }
                navbarItems.forEach(item => {
                    item.classList.remove('nav__item--active');
                });
                this.classList.add('nav__item--active');
                
            });
        });
    }

    clickNarbarItem();

})