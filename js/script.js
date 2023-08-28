'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
    
    
  console.log('Link was clicked!');
  console.log(event);

  /* [DONE]remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}
  /* [DONE]add class 'active' to the clicked link */
console.log('clickedElement:', clickedElement);
clickedElement.classList.add('active');

  /* [DONE]remove class 'active' from all articles */
const activeArticles = document.querySelectorAll('.post.active');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}
  /* [DONE]get 'href' attribute from the clicked link */
const articleSelector = clickedElement.getAttribute('href');
console.log(articleSelector);

  /* [DONE]find the correct article using the selector (value of 'href' attribute) */
const href = clickedElement.getAttribute('href')
const targetArticle = document.querySelector(href);

  console.log(targetArticle);
  /* [DONE]add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
  
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optArticleAuthorSelector ='.post-author',
  optTagsListSelector ='.tags .list',
  optTitleListSelector = '.titles'; 


function generateTitleLinks(customSelector = ''){

  /* [DONE]remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  console.log("title list " + titleList);

  titleList.innerHTML = '';
  
  /* [DONE]find all the articles and save them to variable: articles */
  /* ... */
  
  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  let html ='';

  /* [DONE]for each article */
  for(let article of articles){
  /* get the article id */
    const articleId = article.getAttribute('id');
    console.log(articleId);

    /* find the title element */
    /* [DONE]get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);

    
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId +'"><span>' + articleTitle + '</span></a></li>';
    
    console.log(linkHTML);

    /* insert link into titleList */
    //titleList.innerHTML = titleList.innerHTML + linkHTML;
    titleList.insertAdjacentHTML('beforeend', linkHTML);

    /* insert link into html variable */
    html = html + linkHTML;
    //console.log(html);
  }
  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  // titleList.innerHTML = html;
 
}



generateTitleLinks();