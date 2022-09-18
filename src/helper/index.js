import { Docker, Gnubash, Javascript, Jest, Mysql, Nodedotjs, Postgresql, ReactJs } from '@icons-pack/react-simple-icons';

const generateIcon = (stack) => {
    switch (stack) {
        case 'JS':
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
        case 'MySql':
            return <Mysql />;
        case 'PostgreSQL':
            return <Postgresql />;
        default:
            break;
    }
}

export {generateIcon};