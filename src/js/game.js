import {createHeader, createHeaderLoginRegistration, createContainer, createLink, createContentHeader} from './script';
import {header, container} from './script';


function startGame() {
    
    const root = document.querySelector('.root');
    root.classList.add('game-zone');

    let gameZone = document.querySelector('.root'),
        count = 0,
        fps = 1000 / 60,
        player = {
            el: false,
            x: 500,
            y: 400,
            step: 10,
            run: false,
            side: 1, 
            w: 78,
            h: 77
        },
        ints = {
            plRun: false,
            run: false,
            icons: false,
            bom: false,	
            
        },
        countLife = 3;
    
    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    
    function init() {
        gameZone.innerHTML += `<div class="player" style="left: ${player.x}px; top: ${player.y}px;"></div>`;
        player.el = document.querySelector('.player');
    }
    
    function createCount() {
        const tableCoins = document.createElement('div'),
              lab = document.createElement('label'); 
    
        tableCoins.innerHTML = 'Count:';
        tableCoins.classList.add('form_count');
        lab.classList.add('count_game')
        lab.textContent = `${count}`;    
        
        tableCoins.append(lab);
        root.append(tableCoins); 
    }
    
    function createHearts() {
        const icon = document.createElement('i'),
              icon2 = document.createElement('i'),
              icon3 = document.createElement('i'),
              divIcon = document.createElement('div');
    
        divIcon.classList.add('form_icons');
        icon.classList.add('fa', 'fa-heart', 'icon_heart');
        icon2.classList.add('fa', 'fa-heart', 'icon_heart');
        icon3.classList.add('fa', 'fa-heart', 'icon_heart');

        divIcon.append(icon, icon2, icon3);
        root.append(divIcon);
    }
    
    createHearts();
    createCount();
        
    function gameOver() {
        let modal;
    
        function createModal() {
            modal = document.createElement('div');
            modal.classList.add('modal_game_over');
            document.body.appendChild(modal);
        }
    
        function createDark() {
            const dark = document.createElement('div');
            dark.classList.add('dark_game_over');
            document.body.appendChild(dark);
        }
    
        createModal();
        createDark();
    
        function createFinalPoints() {
            const div = document.createElement('div'),
                  label = document.createElement('label');
            
            div.classList.add('form_final_points');
            label.classList.add('final_points');
            div.textContent = "Your points: ";
            label.textContent = `${count}`;

            div.append(label);
            modal.append(div);
        }
        createFinalPoints();

        function createLinkReplayAndExit(classIcons, classLink) {
            const i = document.createElement('i'),
                  a = document.createElement('a');  
    
            i.classList.add('fas', classIcons);
            a.classList.add(classLink);
            a.setAttribute('href', '#')
    
            a.append(i);
            modal.append(a);
        }
        createLinkReplayAndExit('fa-redo-alt', 'link_replay');
        createLinkReplayAndExit('fa-sign-out-alt', 'link_exit');

        function savePointLocalStorage() {
            const finalPoints = JSON.parse(localStorage.getItem('points')) || [],
              objPlayer = {
                points: `${count}` 
              }
        
            if(finalPoints == null) {
                finalPoints.push(objPlayer);
                localStorage.setItem('points', JSON.stringify(finalPoints));
            } else {
                const pointsNew = JSON.parse(localStorage.getItem('points'))
                pointsNew.push(objPlayer);
                localStorage.setItem('points', JSON.stringify(pointsNew));
            }
        }
        savePointLocalStorage();        
    }
            
    function intervals() {
        ints.plRun = setInterval(() => {
                if (player.run) {
                    switch (player.side) {
                        case 1: // Right
                            if (player.x < gameZone.getBoundingClientRect().right - player.w - 2) {
                                player.x += player.step;
                                player.el.style.left = `${player.x}px`;
                            }
                            break;
                        case 2: // Left
                            if (player.x > 0) {
                                player.x -= player.step;
                                player.el.style.left = `${player.x}px`;
                            }
                            break;
                    }
                }
        }, fps);
    
        ints.run = setInterval(() => {
            let enemies = document.querySelectorAll('.coin');
                enemies.forEach((coin) => {
                            if (coin.getBoundingClientRect().bottom >= gameZone.getBoundingClientRect().height - 100) {
                                coin.parentNode.removeChild(coin);
                            } else {
                                coin.style.top = coin.getBoundingClientRect().top + 3 + 'px';
                            }   
    
                const playerPosTop = player.el.getBoundingClientRect().top,
                            playerPosRight = player.el.getBoundingClientRect().right,
                            playerPosBottom = player.el.getBoundingClientRect().bottom,
                            playerPosLeft = player.el.getBoundingClientRect().left,
                            coinPosTop = coin.getBoundingClientRect().top,
                            coinPosRight = coin.getBoundingClientRect().right,
                            coinPosBottom = coin.getBoundingClientRect().bottom,
                            coinPosLeft = coin.getBoundingClientRect().left;
                    if (
                        playerPosTop < coinPosBottom &&
                        playerPosBottom > coinPosTop &&
                        playerPosRight > coinPosLeft &&
                        playerPosLeft < coinPosRight
                    ) {
                    coin.parentNode.removeChild(coin);
                    count += 100;
                    let la =  document.querySelector('.count_game');    
                    la.innerHTML = count;
                    }         
                });
    
            let bombs = document.querySelectorAll('.bomb');
                bombs.forEach((bomb) => {
                        if (bomb.getBoundingClientRect().bottom >= gameZone.getBoundingClientRect().height - 100) {
                            bomb.parentNode.removeChild(bomb);
                        } else {
                            bomb.style.top = bomb.getBoundingClientRect().top + 3 + 'px';
                        }   
                    const playerPosTop = player.el.getBoundingClientRect().top,
                                playerPosRight = player.el.getBoundingClientRect().right,
                                playerPosBottom = player.el.getBoundingClientRect().bottom,
                                playerPosLeft = player.el.getBoundingClientRect().left,
                                bombPosTop = bomb.getBoundingClientRect().top,
                                bombPosRight = bomb.getBoundingClientRect().right,
                                bombPosBottom = bomb.getBoundingClientRect().bottom,
                                bombPosLeft = bomb.getBoundingClientRect().left;
                        if (
                            playerPosTop < bombPosBottom &&
                            playerPosBottom > bombPosTop &&
                            playerPosRight > bombPosLeft &&
                            playerPosLeft < bombPosRight
                        ) {
                            if(countLife > 0) {
                                bomb.parentNode.removeChild(bomb);
                        
                                let hearts = document.querySelectorAll('.icon_heart');
                                countLife = countLife - 1;	 
                                hearts[0].remove();
                            } else {
                                clearInterval(ints.icons);
                                clearInterval(ints.bom);
                                clearInterval(ints.run);
                                clearInterval(ints.plRun);
                                gameOver();

                                const replay = document.querySelector('.link_replay'),
                                      modal = document.querySelector('.modal_game_over'),
                                      dark = document.querySelector('.dark_game_over'),
                                      pl = document.querySelector('.player'),
                                      formCount = document.querySelector('.form_count'),
                                      formCoins = document.querySelector('.form_icons'),
                                      coin = document.querySelectorAll('.coin'),
                                      bomb = document.querySelectorAll('.bomb'),
                                      exit = document.querySelector('.link_exit');

                                
                                function replayGame() {
                                    replay.addEventListener('click', () => {
                                        root.classList.remove('game-zone');
                                        modal.remove();
                                        dark.remove();
                                        pl.remove();
                                        formCount.remove();
                                        formCoins.remove();
                                        coin.forEach(e => e.remove())
                                        bomb.forEach(e => e.remove())
                                        startGame();
                                   
                                    });
                                }
                                replayGame();
                                                               
                                exit.addEventListener('click', () => {
                                    root.classList.remove('game-zone');
                                    modal.remove();
                                    dark.remove();
                                    pl.remove();
                                    formCount.remove();
                                    formCoins.remove();
                                    coin.forEach(e => e.remove());
                                    bomb.forEach(e => e.remove());
                                    
                                    createHeader();
                                    createHeaderLoginRegistration();
                                    createContentHeader();
                                    createContainer();
                                    createLink('Start', 'link_start');
                                    createLink('Record', 'record');
                                    createLink('Help', 'help');

                                    const linkStart = document.querySelector('#link_start');
                                    linkStart.addEventListener('click', () => {
                                        header.remove();
                                        container.remove();
                                        startGame();
                                        console.log('sds')
                                    })
                                });
                            }
                        }     
                })
        }, fps);
    
        ints.icons = setInterval(() => {
            gameZone.innerHTML += `<div class="coin" style="top: 0; left: ${randomInteger(0, gameZone.getBoundingClientRect().width - player.w)}px;"></div>`;
            player.el = document.querySelector('.player');
        }, 1000);
    
        ints.bom =   setInterval(() => {
            gameZone.innerHTML += `<div class="bomb" style="top: 0; left: ${randomInteger(0, gameZone.getBoundingClientRect().width - player.w)}px;"></div>`;
            player.el = document.querySelector('.player');
        }, 1000);
    }
    
    function controllers() {
        document.addEventListener('keydown', e => {
            switch (e.keyCode) {
                case 39: // Right
                    player.run = true;
                    player.side = 1;
                    break;
                case 68: // Right
                    player.run = true;
                    player.side = 1;
                    break;
                case 37: //Left
                    player.run = true;
                    player.side = 2;
                    break;
                case 65: //Left
                    player.run = true;
                    player.side = 2;
                    break;
            }
        });
    
        document.addEventListener('keyup', e => {
            if ([39, 37, 65, 68].includes(e.keyCode))
                player.run = false;
        })
    }
        
    function start() {
        init();
        controllers();
        intervals();
    }
    
    start();
}

export default startGame; 