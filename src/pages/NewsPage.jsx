import MainCategories from "../components/News/MainCategories";
import FeaturedPosts from "../components/News/FeaturedPosts";

export const NewsPage = () => {
    return (
        <>
            <h1 className='text-4xl font-bold py-4 ml-32 text-native'>Today's News</h1>
        {/*  CATEGORIES  */}
            <MainCategories />
        {/*  FEATURED POSTS  */}
            <FeaturedPosts />
        {/*  POST LIST  */}
        </>
    )
}