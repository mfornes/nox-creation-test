import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};
const fetchPosts = async (): Promise<Post[]> => {
    const response = await client.get('/posts');
    return response.data.slice(0, 6);
};

export {
    fetchPosts,
}