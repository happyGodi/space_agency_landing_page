function getEl(el){
    return document.getElementsByClassName(el);
}
function getId(id){
    return document.getElementById(id);
}
let loader = getId('preloader');
window.addEventListener('load', function(){
    loader.style.display = 'none'
})
let item = getEl('item');
let desc = getId('shortDesc');
//console.log(item.length);

desc.addEventListener('load', (e) => {
    e.preventDefault();
    setInterval(() => {
        desc.style.display = 'none';
    }, 30);
})

/*dicotolic search */
let arr = [2, 5, 9, 12, 24, 32, 102, 154, 258];
let inf = 0;
let sup = arr.length;
let found = false;
let mid;

function dicotomic(a, val){
    mid = parseInt((inf + sup)/2);
    while (!found && inf <= sup){
        if (val === a[mid])
            found = true;
        else
            if (val > a[mid])
                inf = mid + 1;
            else
                sup = mid - 1;
        mid = parseInt((inf + sup)/2);
    }
    found?console.log('Value located at ' + (mid + 1)):console.log('Value not found');
}

function recursDico(a, val){
    mid = parseInt((inf + sup)/2);
    if (val === a[mid])
        found = true;
    else
        if (val > a[mid])
            inf = mid + 1;
        else
            sup = mid - 1;
    if (found && inf <= sup)
        console.log('Value located at ' + (mid + 1));
    else
        if (!found && inf > sup)
            console.log('Value not found');
        else
            recursDico(a, val);
}
recursDico(arr, 9);
