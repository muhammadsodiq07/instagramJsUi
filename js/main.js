let headerInp = document.querySelector('.header__form-inp');
let xBtn = document.querySelector('.fa-times-circle');

headerInp.addEventListener('keyup', () => {
   if (headerInp.value != '') {
      xBtn.style.display = 'block';

      xBtn.addEventListener('click', () => {
         headerInp.value = '';
         if (headerInp.value == '') {
            xBtn.style.display = 'none';
         }
      })
   } else {
      xBtn.style.display = 'none';
   }
});

// --------------------

let postLike = document.querySelector('.posts__body-img');
let heart = document.querySelector('.img-heart');
let redHeart = document.querySelector('.like-heart');
let imgHeart = document.querySelector('.likes-img');

imgHeart.addEventListener('click', () => {
   redHeart.style.display = 'block';
   imgHeart.style.display = 'none';
})

redHeart.addEventListener('click', () => {
   imgHeart.style.display = 'block';
   redHeart.style.display = 'none';
})

postLike.addEventListener('dblclick', () => {

   imgHeart.style.display = 'none';
   redHeart.style.display = 'block';
   heart.style.display = 'block';

   setTimeout(() => {
      heart.style.display = 'none';
   }, 1000)
});

// --------------------

let addCommentForm = document.querySelector('.addcomment__form');
let addCommentInp = document.querySelector('.addcomment__inp');
let addCommentBtn = document.querySelector('.addcomment__btn');
let postsDiv = document.querySelector('.posts__desc');

addCommentForm.addEventListener('submit', (e) => {
   e.preventDefault();
   
   if (addCommentInp.value != '') {
      let comment = document.createElement('span');
      comment.classList.add('posts__desc-txt');
      comment.appendChild(document.createTextNode(addCommentInp.value));
      postsDiv.appendChild(comment);
      console.log(comment);
   }

   addCommentInp.value = '';
})

addCommentInp.addEventListener('keyup', () => {
   if (addCommentInp.value != '') {
      addCommentBtn.style.opacity = '1';
   } else {
      addCommentBtn.style.opacity = '0.6';
   }
})



