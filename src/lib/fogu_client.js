import {Fogu} from "./fogu";

export default async({ }) => {
     const client = Fogu();
    const url=process.env.FOGU_URL||''
    await client.connect(url);
    client.kvdb = await client.channel("xkolanon.etcd");
    await client.kvdb.join("xkolanon.etcd");
    return client

}