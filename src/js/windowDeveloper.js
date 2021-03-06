import {root} from './script';


function createModalWindowDeveloper() {
    let modal;

    class Page {
        constructor(name) {
            this.name = name;  
        }
     
        createModal() {
            modal = document.createElement('div');
            modal.classList.add('modal_developer');
            root.appendChild(modal);
        }
     
        createDark() {
            const dark = document.createElement('div');
            dark.classList.add('dark_developer');
            root.appendChild(dark);
        }
        
        createClose() {
            const closeBtn = document.createElement('i');
            closeBtn.classList.add('fas', 'fa-times', 'close_btn_window_developer');
            modal.appendChild(closeBtn);
        }

        createTitle(classTitle, textTitle, placeTitle) {
            const h1 = document.createElement('h1');
            h1.classList.add(classTitle);
            h1.textContent = textTitle;

            placeTitle.appendChild(h1);
        } 

        createWrapper(classWrapeer, textWrapper) {
            const div = document.createElement('div');
            div.classList.add(classWrapeer);
            div.textContent = textWrapper;

            modal.appendChild(div);
        }
    }
    
    class Developer {
        constructor(name) {
            this.name = name;
        }
      
        createAvatar(place) {
            fetch('https://api.github.com/users/kayarmolenka')
            .then(response => response.json())
            .then(user => {
                let img = document.createElement('img');
                img.src = user.avatar_url;
                img.alt = 'avatar';
                img.className = 'avatar';
                place.appendChild(img);
            })
        }

        createName(place) {
            fetch('https://api.github.com/users/kayarmolenka')
            .then(response => response.json())
            .then(user => new Promise((res, rej) => {
                let p = document.createElement('p');
                p.textContent = user.name;
                p.className = 'name_user';
                place.appendChild(p);
            }));
        }

        createLinkRepository(place) {
        fetch('https://api.github.com/users/kayarmolenka/repos')
            .then(response => response.json())
            .then(response => response.map(repos => repos.html_url))
            .then(url => new Promise((res, rej) => {
                let p = document.createElement('p');
                p.className = 'text_repos';
                p.innerHTML = `If you want to see the code of the game, you can go to the <a class="link_repos_dom" href="${url[0]}" target="_blank">repository</a>.`
                place.appendChild(p);
            }));
        }
    
    }
    
    const pageDeveloper = new Page();
    
    pageDeveloper.createModal();
    pageDeveloper.createDark();
    pageDeveloper.createClose();

    pageDeveloper.createWrapper('title_developer');
    const titleDeveloper = document.querySelector('.title_developer');
    pageDeveloper.createTitle('header_developer', 'Application developer', titleDeveloper);
    
    pageDeveloper.createWrapper('image_developer');
    const imageDeveloper = document.querySelector('.image_developer');
    
    pageDeveloper.createWrapper('name_developer');
    const nameDeveloper = document.querySelector('.name_developer');
    pageDeveloper.createWrapper('repos_developer');
    const reposDeveloper = document.querySelector('.repos_developer');
    
    
    const kosty = new Developer();
    kosty.createAvatar(imageDeveloper);
    kosty.createName(nameDeveloper);
    kosty.createLinkRepository(reposDeveloper);

    function closeWindowDeveloper() {
        const d = document.querySelector('.dark_developer'),
        m = document.querySelector('.modal_developer'),
        iconsClose = document.querySelector('.close_btn_window_developer');

        window.addEventListener('click', e => {
            if(e.target === d) {
                m.remove();
                d.remove(); 
            }
        });
        
        iconsClose.addEventListener('click', () => {
            m.remove();
            d.remove();  
        })
    }
    closeWindowDeveloper();
}

export default createModalWindowDeveloper;
