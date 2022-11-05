function showpage(index){

    const p = document.querySelector('.show-classdemo');
    console.log('p',p);

    switch(index){
        case 1:
        p.innerHTML = `<iframe src="./learning_67.html" width="100%" height="100%" />`
            break;
        case 2:
        p.innerHTML = `<iframe src="./resume_67.html" width="100%" height="100%" />`
            break;
        case 3:
        p.innerHTML = `<iframe src="./works_67.html" width="100%" height="100%" />`
            break;
        case 4:
        p.innerHTML = `<iframe src="../../demo_67.html" width="100%" height="100%" />`
            break;
    }
 }