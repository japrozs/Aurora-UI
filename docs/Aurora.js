/* 
Aurora UI
Author : Japroz Saini <sainijaproz@gmail.com>
Date : 8th October 2020
*/

//Dynamic coloring
// function dynamicColoring() {
// const element = document.querySelector(".bg:rgb(0, 255, 0)");
// console.log(element);
// }

// Call all the functions when the DOM loads
// document.querySelector("DOMContentLoaded", () => {
// })

//ALL THE FUNCTIONS FROM HERE ARE COMMENTED AS SOME OF THEM
// ARE NOT TO BE EXECUTES IN THE BROWSER

// const fs = require('fs');
// for (let i = 0; i < 101; i++) {
//     fs.appendFileSync('css.txt', `
//         .mb-${i}{
//             margin-bottom:${i}px;
//         }
//         .ml-${i}{
//             margin-left:${i}px;
//         }
//         .mt-${i}{
//             margin-top:${i}px;
//         }
//         .mr-${i}{
//             margin-right:${i}px;
//         }
//         .pb-${i}{
//             padding-bottom:${i}px;
//         }
//         .pl-${i}{
//             padding-left:${i}px;
//         }
//         .pt-${i}{
//             padding-top:${i}px;
//         }
//         .pr-${i}{
//             padding-right:${i}px;
//         }
//         .m-${i}{
//             margin:${i}px;
//         }
//         .p${i}{
//             padding:${i}px;
//         }
//     `, 'utf-8');
// }

function toggleMobileMenu() {
    document.querySelector('.nav-menu').classList.toggle('active')
    document.querySelector('.mav-toggle').classList.toggle('active')
}