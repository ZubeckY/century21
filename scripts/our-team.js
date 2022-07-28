let littleList = document.querySelector('.our--team__list__container')
let maxList = document.querySelector('.list__baskov__active')
let len = 9

let minElem =
    `
                <div class="our--team__list__item">
                    <img src="media/our-team-list/baskov-pomenshe.png">
                </div>
            `;

let maxElem =
    `
                <div class="our--team__info">
                    <div class="our--team__info__container">

                        <div class="our--team__info__header">
                            <img src="media/our-team-list/baskov-pobolshe.png">
                        </div>

                        <div class="our--team__info__body">
                            <div class="our--team__info__body__header">
                                <div class="card--title section--title__little">Николай Басков</div>
                                <div class="card--text">Агент по недвижимости</div>
                            </div>
                            <div class="our--team__info__body__body list justify-between">
                                <div  class="our--team__info__body__body__text">+7 915 451-34-60</div>
                                <span class="between--info--round"></span>
                                <div  class="our--team__info__body__body__text">mala@century21.ru</div>
                                <span class="between--info--round"></span>
                                <ul class="list">
                                    <li class="nav__contacts__item center our--team__info__body__round" style="margin-right: 5px">
                                        <a class="nav__contacts__item__round item__telegram" href=""></a>
                                    </li>
                                    <!-- Whats-app -->
                                    <li class="nav__contacts__item center our--team__info__body__round">
                                        <a class="nav__contacts__item__round item__whatsapp" href=""></a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            `;

for (let i = 0; i < len; i++) {
    littleList.innerHTML += minElem;
    maxList.innerHTML += maxElem;
}

//

$('.list__baskov__active').slick ({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    centerMode: false,
    infinite: false,
    responsive: [
        {
            breakpoint: 1160,
            settings: {
                centerMode: true
            },
        },
    ]
})