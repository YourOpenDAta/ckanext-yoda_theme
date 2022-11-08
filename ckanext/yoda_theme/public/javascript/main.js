console.log("hola");






//declaración de variables
let landingIntro = document.querySelector('.homepage div .main .container .row .col-md-6 .module-content div');
let landingIntroParagraph = document.querySelector('.homepage div .main .container .row .col-md-6 .module-content div p');
let about = document.querySelector('.main .container .row .module .module-content');
let aboutParagraph = document.querySelectorAll('.main .container .row .module .module-content p');
let organizaciones = document.querySelector('.main .container .row .secondary .module .module-content');
let organizacionesParagraph = document.querySelector('.main .container .row .secondary .module .module-content p');
let grupos = document.querySelector('.main .container .row .secondary .module .module-content');
let gruposParagraph = document.querySelector('.main .container .row .secondary .module .module-content p');


// pintado de datos
let renderLanding = () => {
    console.log('hola desde la landing');
    landingIntroParagraph.classList.add('invisible');

    landingIntro.innerHTML += `
            <h1 class="landing-title">
                Bienvenido a YODA
            </h1>
            <p class="landing-text">
                YODA (Your Open DAta) provides a service for European citizens that allows them to create personalised dashboards binding several sources of data through a single application.In addition, the Action deploys a data processing infrastructure that, on the basis of real time and machine learning processing, will provide additional processed results and predictions to the developed personalised service.
            </p>
        `;
};

let renderAbout = () => {
    console.log('hola desde el about');
    aboutParagraph.forEach(paragraph => {
        paragraph.classList.add('invisible');
    });

    about.innerHTML += `
            <h1 class="about-title">
                Acerca de YODA
            </h1>
            <p class="about-text">
                YODA (Your Open DAta) provides a service for European citizens that allows them to create personalised dashboards binding several sources of data through a single application.In addition, the Action deploys a data processing infrastructure that, on the basis of real time and machine learning processing, will provide additional processed results and predictions to the developed personalised service.
            </p>
        `;
};

let renderOrganizaciones = () => {
    console.log('hola desde las organizaciones');
    organizacionesParagraph.classList.add('invisible');

    organizaciones.innerHTML += `
            <p class="organizaciones-text">
                Las organizaciones en YODA son usadas para crear, gestionar y publicar colecciones de conjuntos de datos. Los usuarios pueden tener diferentes perfiles en una organización, dependiente de su nivel de autorización para crear, editar y publicar
            </p>
        `;
};

let renderGrupos = () => {
    console.log('hola desde los grupos');
    gruposParagraph.classList.add('invisible');

    grupos.innerHTML += `
            <p class="organizaciones-text">
                Puedes usar los grupos de YODA para crear y administrar colecciones de conjuntos de datos. Esto se puede usar para catalogar conjuntos de datos de un proyecto concreto o un equipo, o de un tema en particular, o como una manera muy sencilla de ayudar a la gente a buscar y encontrar sus propios conjuntos de datos publicados.
            </p>
        `;
};

// llamada de las funciones de renderizado
if (document.title == 'Bienvenida - YODA' && 'Bienvenido - YODA') {
    renderLanding();
} else if (document.title == 'Acerca de - YODA') {
    renderAbout();
} else if (document.title == 'Organizaciones - YODA') {
    renderOrganizaciones();
} else if (document.title == 'Grupos - YODA') {
    renderGrupos();
} else {
    console.log('error!');
};