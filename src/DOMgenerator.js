function DOMMaker(){
    const makeDiv = (string, group) =>{
        let el = document.createElement('div');
        el.textContent = string;
        el.classList.add(group);
        return el
    }

    const makePara  = (string, group) =>{
        let el = document.createElement('p');
        el.textContent = string;
        el.classList.add(group);
        return el
}

    const makeHeader = (string, group) =>{
        let el = document.createElement('h1');
        el.textContent = string;
        el.classList.add(group);
        return el
}  
    const makeButton  = (string, group) =>{
        let el = document.createElement('button');
        el.textContent = string;
        el.classList.add(group);
        return el
}

const makeListItem = (string, group) =>{
    let el = document.createElement('li');
    el.textContent = string;
    el.classList.add(group);
    return el
}

return {makeDiv, makePara, makeHeader, makeButton, makeListItem}

}

export const DOMgen = DOMMaker();