export interface Posts {
    data:{
    children:Post[];
    }
}

export interface Post {
    data:{
    permalink:string;
    thumbnail:string;
    title:string;
    url:string;
    }
}