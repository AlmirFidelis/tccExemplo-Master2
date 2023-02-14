const items = [
    {
        id: 0,
        nome: 'Bali',
        img: 'images/hidratante001.png',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Coliseu',
        img: 'images/hidratante002.png',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Celebration',
        img: 'images/hidratante003.png',
        quantidade: 0
    },
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        // console.log(val.nome);
        containerProdutos.innerHTML += `
        <div class="produto-single">
            <img src="`+val.img+`" />
            <p>`+val.nome+`</p>
            <a class="link-produto" key="`+val.id+`" href="#">Adicionar ao carrinho!</a>
        </div>
        `
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        // console.log(val.nome);
        if(val.quantidade > 0){
        containerCarrinho.innerHTML += `
        <div class="info-single-checkout">
            <p style="float:left;">Produto: `+val.nome+`</p>
            <p style="float:right;">Quantidade: `+val.quantidade+`</p>
            <div style="clear:both"></div>
        </div>
        `
        }
    })
}

var links = document.getElementsByClassName('link-produto');

for(var i = 0; i < links.length; i++) {
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        items[key].quantidade++
        atualizarCarrinho();
        return false;
    })
}

var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if(ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else {
        ul.classList.add('open');
    }
}