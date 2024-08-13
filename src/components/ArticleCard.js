import React from 'react';
import { format, parseISO } from 'date-fns';

const ArticleCard = ({ article }) => {
    // Format the date
    const formatDate = (dateString) => {
        try {
            return format(parseISO(dateString), 'MMMM d, yyyy');
        } catch (error) {
            return dateString;
        }
    };

    // Determine which type of response we have and render accordingly
    const renderContent = () => {
        if (article.webTitle) {
            // Guardian response
            return (
                <div className="p-4 border rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">{article.webTitle}</h2>
                    <p className="text-gray-600 mb-2">{article.sectionName}</p>
                    <p className="text-gray-800 mb-2">{formatDate(article.webPublicationDate)}</p>
                    {article?.elements?.[0]?.assets?.[0]?.file && <img src={article?.elements?.[0]?.assets?.[0]?.file} alt={article.webTitle} className="w-full h-40 object-cover mb-2" />}
                    <p className="text-gray-700 mb-2">{article.fields.trailText}</p>
                    <a href={article.webUrl} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            );
        } else if (article.title) {
            // NewsAPI response
            return (
                <div className="p-4 border rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                    <p className="text-gray-600 mb-2">{article.author}</p>
                    <p className="text-gray-800 mb-2">{formatDate(article.publishedAt)}</p>
                    {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover mb-2" />}
                    <p className="text-gray-700 mb-2">{article.description}</p>
                    <a href={article.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            );
        } else if (article.headline) {
            // NYT response
            return (
                <div className="p-4 border rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">{article.headline.main}</h2>
                    <p className="text-gray-600 mb-2">{article.section_name}</p>
                    <p className="text-gray-800 mb-2">{formatDate(article.pub_date)}</p>
                    <p className="text-gray-700 mb-2">{article.snippet}</p>
                    <a href={article.web_url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            );
        } else {
            return <div className="p-4 border rounded-lg shadow-md">Article information is not available.</div>;
        }
    };

    return renderContent();
};

export default ArticleCard;