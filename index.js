import Navigation from './src/Navigation';
import Content from './src/Content';
import Header from './src/Header';
import Footer from './src/Footer';

function render(state){
    root.innerHTML = `
        ${Navigation(state)}
        ${Content(state)}
        ${Footer(state)}
        ${Header(state.title)}
    `;

    router.updatePageLinks();
}