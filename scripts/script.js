{


  // 1. 最初にやること、「繰り返したいHTMLを入れる場所にidを指定した。
  // divProduct とは、 idがproduct-wrapperになっているdivタグのこと。
  // divProductの中に、下のdivProductElementに代入したHTMLを入れていく(2)ことで
  // 本体(index.html)の場所に、その代入したHTMLを書き込む。-> divProduct.innerHTML
  let divProduct = document.getElementById('product-w')

  let  productName = ['Timer','My Portfolio','Introduction of Tosashimizu City.']
  let  productLink = [
                      'https://hikariyamasaki.github.io/timer/view.html',
                      'https://hikariyamasaki.github.io/portfolio',
                      'https://hikariyamasaki.github.io/IntroductionOfTosashimizu']

  let productIcon = [
                      '"product-image"><i class="fas fa-stopwatch product-icon"></i>',
                      '"product-image product-my-portfolio"><i class="far fa-address-book product-icon "></i>',
                      '"product-image">']

  // // [HTML5,CSS3,JS] 使ってたら1,そうでなければ0
  // let usedSkill = [[1,1,1],[1,1,1],[1,1,1]]

  let divProductElement = ''
  for (var i in productName) {

    divProductElement += '<div class="product">  <div class='+productIcon[i]+'</div>  <div class="inner">      <h3 class="product-name">        <a href="'+productLink[i] +'">'+productName[i]+'</a>      </h3>    <ul class="used-skil">      <li class="used-html">HTML</li>      <li class="used-css3">CSS3</li>      <li class="used-js">JS</li>    </ul>    <div>      <a class="inner-link" href="'+productLink[i]+'" target="_blank">'+productLink[i]+'</a>    </div>  </div></div>'

  }



  // (2)divProductの中(innerHTML)に代入
  divProduct.innerHTML = divProductElement



}
