import { createProjectDescription } from './createProjectDescription';

function createSectionWithProjects(data) {
    const section = document.createElement('section');

    for(let prop in data) {
        section.appendChild(createProjectDescription(data[prop]));
    }

    return section;
}

export { createSectionWithProjects };