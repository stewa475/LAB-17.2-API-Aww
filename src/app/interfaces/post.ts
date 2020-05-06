export interface Posts {
    data:string;
    children:Post[];
    title:string;
}

export interface Post {
    data:any;
    title:string;
    thumbnail:string;
    url:string;
    permalink:string;
}