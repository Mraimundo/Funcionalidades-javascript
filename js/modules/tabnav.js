export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContant = document.querySelectorAll('[data-tab="contant"] section');

    if(tabMenu.length && tabContant.length){
        tabContant[0].classList.add('ativo');

        function activeTab (index){
            tabContant.forEach((section) => {
                section.classList.remove('ativo');
            });

            const direcao = tabContant[index].dataset.anime;
            tabContant[index].classList.add('ativo', direcao);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () =>{
                activeTab(index);
            });
        });
    }
}