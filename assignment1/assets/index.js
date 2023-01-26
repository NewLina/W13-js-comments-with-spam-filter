const usernameInput=document.querySelector('.username__input');
const pictureInput=document.querySelector('.userpic__input');
const commentInput=document.querySelector('.text__input');
const button=document.querySelector('.button');
const form=document.querySelector('.form__body');
const answerYes=document.querySelector('.answer--1');
const chatBlock=document.querySelector('.chat-block');

const createComment = () => {
    const chatComment=document.createElement('div');
    chatComment.className='chat__comment';
    chatBlock.append(chatComment);

    const commentImage=document.createElement('div');
    commentImage.className='comment__image';
    chatComment.prepend(commentImage);

    const avatar=document.createElement('img');
    avatar.className='avatar';
    commentImage.prepend(avatar);
    const pictureSource=pictureInput.value;
        switch(pictureSource) {
            case '':
        avatar.src=choosePicture();
            break;
            default:
                avatar.src=pictureSource;
        }

    const username=document.createElement('div');
    username.className='comment__username';
    chatComment.prepend(username);
    if (answerYes.checked===true) {
        username.textContent=checkName();
    } else {
        username.textContent="username";
    };

    let date=document.createElement('div');
    date.className='comment__date';
    chatComment.prepend(date);
    date.textContent=showDate();

    let comment=document.createElement('div');
    comment.className='comment__content';
    chatComment.prepend(comment);
    comment.textContent=commentFilter();

};

function choosePicture() {
    const picNumber=Math.random()*6|0;
    const randomPicture = (picNumber===0) ? 'https://cdn.fishki.net/upload/post/2017/08/31/2369165/wallpaper-strange-funny-weird-crazy-absurd-awesome-259.jpg':(picNumber===1) ? 'https://pix.avax.news/avaxnews/98/b7/0002b798.jpeg':(picNumber===2) ? 'https://zefirka.net/wp-content/uploads/2018/09/konkurs-samyx-smeshnyx-fotografij-zhivotnyx-2018-1.jpg':(picNumber===3) ? 'https://i.pinimg.com/originals/55/a6/20/55a62058b47af5222a44fdd6e70b02e1.jpg':(picNumber===4) ? 'https://zooblog.ru/uploads/posts/2014-10/1412669433_zhivotnye-sposobnye-ubit-1.jpg' : 'https://4tololo.ru/sites/default/files/images/20170811210729.jpg';
    return randomPicture;}

function capitalize(cleanModifier) {
    return cleanModifier.replace(/(^|\s)\S/g, function(upperCase) {return upperCase.toUpperCase()})
}

function checkName() {
const usernameValue=usernameInput.value;
const modifier=usernameValue.toLowerCase();
const cleanModifier=modifier.trim();
const capital=capitalize(cleanModifier);
return capital;}

function commentFilter() {
    const commentValue=commentInput.value;
    const filter = commentValue.replace(/viagra|XXX/ig, "***");
    return filter;
};

function showDate() {
    const dateNow=new Date();
    const options= {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC',
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric'
    };
const dateText=`${dateNow.toLocaleString('ru', options)}`;
return dateText;
}


function clear() {
    usernameInput.value=""; 
    pictureInput.value="";
    commentInput.value="";
    };

function publishComment() {
createComment();
clear();
} 

button.addEventListener('click', publishComment);