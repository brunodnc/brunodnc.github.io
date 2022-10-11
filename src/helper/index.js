import { Docker, Gnubash, Javascript, Jest, Mysql, Nodedotjs, Postgresql, ReactJs, DThreeDotjs, Markdown, Redux, Html5, CssThree, Express, Chai, Sequelize } from '@icons-pack/react-simple-icons';

const generateIcon = (stack) => {
    switch (stack) {
        case 'JavaScript':
            return <Javascript />;
        case 'React':
            return <ReactJs />;
        case 'Docker':
            return <Docker />;
        case 'Node.js':
            return <Nodedotjs />;
        case 'Bash':
            return <Gnubash />;
        case 'Jest':
            return <Jest />;
        case 'MySQL':
            return <Mysql />;
        case 'PostgreSQL':
            return <Postgresql />;
        case 'D3.js':
            return <DThreeDotjs />;
        case 'Markdown':
            return <Markdown />;
        case 'Redux':
            return <Redux />;
        case 'HTML':
            return <Html5 />;
        case 'CSS': 
            return <CssThree />;
        case 'Express':
            return <Express />;
        case 'Chai':
            return <Chai />;
        case 'Sequelize':
            return <Sequelize />;
        default:
            break;
    }
}

export {generateIcon};