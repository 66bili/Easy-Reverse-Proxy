export interface Proxy {
    domain: string;
    url: string;
}

export let proxys: Proxy[] = [
    {
        domain: "ggproxy-one.vercel.app/",
        url: "https://www.google.com/"
    }
];
