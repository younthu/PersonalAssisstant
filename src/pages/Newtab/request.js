// http://rainbow.ilibrary.me/api/rainbow/random
import axios from 'axios';

async function getRainbowFart() {
    let fart = await axios.get('http://rainbow.ilibrary.me/api/rainbow/random')
    return fart.data.sentence;
}
const Request = {
    getRainbowFart: getRainbowFart
};
export default Request