export interface Posts {
    children:Post[];
    data:string;
}

export interface Post {
    data:any;
    permalink:string;
    thumbnail:string;
    title:string;
    url:string;
}