
import { BlogDetailLayout } from '../components';

const BlogScreen = ({ route }) => {
    const { item } = route.params;
    return (
        <BlogDetailLayout
            title={item.name}
            description={item.content}
            category={item.category}
        />
    );
};

export default BlogScreen;