function createProjectDescription(data) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const a = document.createElement('a');
    const p = document.createElement('p');

    div.classList.add('project-info');
    div.classList.add('clearfix');

    img.setAttribute('src', data.img_src);
    img.setAttribute('alt', data.img_alt);
    img.classList.add('projects-img');
    img.classList.add('pull-left');

    a.setAttribute('href', data.href);
    a.textContent = data.title;

    h3.appendChild(a);

    p.textContent = data.description;

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);

    return div;
}

export { createProjectDescription };