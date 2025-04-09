import config from '../boot/config.json';

function get_horse_info(index) {
    let out = null;
    switch(index) {
        case 0:
            out = {id: "SST", name: "Satoshi Stallion", sponsor: "BTC", color: "#ff9900"}; break;
        case 1:
            out = {id: "SGA", name: "Smart Gallop", sponsor: "ETH", color: "#3c3c3d"}; break;
        case 2:
            out = {id: "HTH", name: "Hosky Thunder", sponsor: "ADA", color: "#3cc8f5"}; break;
        case 3:
            out = {id: "WRN", name: "Wave Runner", sponsor: "XRP", color: "#4b5b8c"}; break;
        case 4:
            out = {id: "SBS", name: "Sunbeam Sprinter", sponsor: "SOL", color: "#f7a900"}; break;
        case 5:
            out = {id: "WRC", name: "Wow Racer", sponsor: "DOGE", color: "#c2a16d"}; break;
        case 6:
            out = {id: "HHS", name: "Halving Hustler", sponsor: "LTC", color: "#f2a900"}; break;
        case 7:
            out = {id: "SRN", name: "Shadow Runner", sponsor: "XMR", color: "#ff6600"}; break;
    }
    if(out) {
        out.index = index;
    }
    return out;
}

function get_horse_name(index) {
    return get_horse_info(index).name;
}

function get_horse_sponsor(index) {
    return get_horse_info(index).sponsor;
}

function get_horse_color(index) {
    return get_horse_info(index).color;
}

function get_horse_list() {
    let horses = [];
    for (let i = 0; i < config.num_horses; i++) {
        horses.push(get_horse_info(i));
    }
    return horses;
}

export { get_horse_info, get_horse_name, get_horse_sponsor, get_horse_color, get_horse_list };
