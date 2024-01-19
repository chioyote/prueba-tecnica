const backgrounds = ['default','purple','red','pink','green','yellow','blue'];
const main = () => {

    const changeColorButton = document.getElementById('change-button');
    const bodyElement = document.getElementsByTagName('body')
    let currentColor = 'default'
    changeColorButton.addEventListener('click',(e)=> {
        let selectedColor = getRandomIndex(backgrounds)
        const selectedBackground = `background__${selectedColor}`;
        currentColor = selectedColor;

        bodyElement[0].classList = ''
        bodyElement[0].classList.add(selectedBackground)
    })

    function getRandomIndex ( array ){
        let sortArray = array.sort( ()=> .5 - Math.random() );
        let finalColor = sortArray.filter(( value) => value !== currentColor );

        return finalColor[0]
    }
} 
main();