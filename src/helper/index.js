import { Docker, Gnubash, Javascript, Jest, Mysql, Nodedotjs, Postgresql, ReactJs, DThreeDotjs, Markdown, Redux } from '@icons-pack/react-simple-icons';

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
        default:
            break;
    }
}

export {generateIcon};