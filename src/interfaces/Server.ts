export default interface Server {
    key: Number;
    name: String;
    description: Array<String>;
    cpu: String;
    cpu_benchmark: Number;
    cpu_count: Number;
    is_highio: Boolean;
    is_ecc: Boolean;
    traffic: String;
    dist: Array<String>;
    bandwith: Number;
    ram: Number;
    price: String;
    price_v: String;
    ram_hr: String;
    setup_price: String;
    hdd_size: Number;
    hdd_count: Number;
    hdd_hr: String;
    fixed_price: Boolean;
    next_reduce: Number;
    next_reduce_hr: String;
    next_reduce_timestamp: Number;
    datacenter: Array<String>;
    specials: Array<String>;
    specialHdd: String;
    freetext: String;
}

