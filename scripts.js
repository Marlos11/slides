const btnNext = document.querySelector('.next')
const btnBack = document.querySelector('.back')
const container = document.querySelector('.container')
const list = document.querySelector('.container .list')
const thumb = document.querySelector('.container .thumb')




btnNext.onclick = () => moveItemsOnclick('next')
btnBack.onclick = () => moveItemsOnclick('back')


const moveItemsOnclick = (type) => {
    const listItem = document.querySelectorAll('.list .list-item')
    const thumbList = document.querySelectorAll('.thumb .thumb-item')

    if (type === 'next') {

        list.appendChild(listItem[0])
        thumb.appendChild(thumbList[0])
        container.classList.add('next')

    } else {
        list.prepend(listItem[listItem.length - 1])
        thumb.prepend(thumbList[listItem.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')


    }, 3000);
    console.log(type)
}