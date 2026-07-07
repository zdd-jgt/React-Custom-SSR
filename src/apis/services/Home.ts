export interface HomeItem {
    id: number;
    name: string;
}

export const getHomeList = async (): Promise<HomeItem[]> => {
    await new Promise((resolve) => setTimeout(resolve, 100));

    return [
        { id: 1, name: "SSR data item 1" },
        { id: 2, name: "SSR data item 2" },
        { id: 3, name: "SSR data item 3" },
    ]
}