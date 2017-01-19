import { FCCProjects } from './data/FCCProjects';
import { RSSProjects } from './data/RSSProjects';
import { createSectionWithProjects } from './disp/createSectionWithProjects';

const RssProjectsSection = document.querySelector('#rss-projects');
const FccProjectsSection = document.querySelector('#fcc-projects');
const DataForRssProjectSection = createSectionWithProjects(RSSProjects);
const DataForFccProjectSection = createSectionWithProjects(FCCProjects);

RssProjectsSection.appendChild(DataForRssProjectSection);
FccProjectsSection.appendChild(DataForFccProjectSection);