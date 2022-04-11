export type ClientsList = Client[]

export type Client = {
    id: number;
    organizationName: string;
    tin: number;
    openDate: number;
    balance: number;
}