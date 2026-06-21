document.addEventListener('DOMContentLoaded', ()=>{
    const navLinks = document.getElementById('header a, footer a');

    navLinks.forEach(Link => {
        Link.addEventListener('click', function(event){
            const targetd = this.getAttribute('href');

            if(targetId && targetId.startWith('#') && targetId !== '#'){
                event.preventDeafult();

                const targetSection = document.querySelector(targetId)
                if(targetSection){
                    targetSection.scrollIntoView({
                        behavior:'smooth',
                        block:'start'
                    });
                }
            }
        });
        
    });
});