# Northcoders News

## Summary 

This is a front-end React application which connects to the NCnews API (which was built during the back-end phase of this project) to allow users to browse and interact with articles and comments from the API.

The NCnews API provides data from the nc_news database, which was built with postgres and contains data for articles, topics, comments and users.

The front-end application was built using React and styled using CSS.

## Links

Description | Link
--- | ---
Deployed version of front-end app | https://alicewilson-ncnews.netlify.app/
Back-end live API | https://nc-news-uv52.onrender.com
Back-end repo | https://github.com/alicewilson17/nc-news

## Prerequisites

To run this app locally, please ensure that the following are installed:

- Node.js v21.4.0
- Node package manager v10.2.4

## Getting Started

To set up your own version of this repository, follow the instructions below.

1. In the command line, navigate to the folder you wish to work from, and run the following code:
```
git clone https://github.com/alicewilson17/fe-nc-news.git
cd fe-nc-news
```

2. Open the directory in your code editor of choice, e.g. VSCode.

3. To install the dependencies that are needed for this project, run the following command:
```
npm install
```

4. Run the app locally by running the following command:
```
npm run dev
```

## How to use this app

1. Upon visiting the app, you will see a list of articles displayed on the homepage. 
2. Using the dropdown menus, you can sort the articles by date posted, number of likes or number of comments, in ascending or descending order.
3. You can also use the list of topics in the navigation bar at the top to filter the articles according to the selected topic.
4. You can click on any article to see its full content and comments.
5. You can upvote or downvote an article using the respective buttons.
6. You can also post comments on an article using the comment form. If you wish to delete a topic, you can click the "delete" button which will be displayed on the comments posted by you.




