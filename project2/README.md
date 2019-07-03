![](https://media.giphy.com/media/lf7YrlVZ1PicU/giphy.gif)

## Project Overview


## Project Description:
http://jobs-io.surge.sh/

This React app uses the GitHub API to retrieve available job postings based on user input. User input can be either location, or a regular search paramater that the job posting contains (e.g. full time, python, Apple)

## Wireframes:
![](https://i.imgur.com/fp2bzMP.png)

## Build
- fork and clone this repository
- cd into project2 
- run ```npm install react-router-dom```
- run ```npm install axios```
- run ```npm start```

## MVP:
- Using the GitHub API, the user can search for available jobs posted on GitHub and narrow that search by specifying the location and the type of job.
- The app will contain a search bar, and a button will show the resulting jobs on the page.
- The job posting can be clicked on to go to a different page with more information about the job.

## PostMVP 
- A "heart" next to each job posting will save that specific job to a page called "my jobs", where the user can store their favorites 

## React Component Hierarchy
- Home component 
    - Header component
    - Search bar component which shows results of searches
    - OneJob component that shows more information about each job
    - Footer 

## Code Snippet
The GitHub API has the job description hardcoded as HTML, thus when initially rendering this data, all one sees is a string with html tags and its following data. To make that string comply with the HTML tags, the following code is used:

From OneJob.jsx

```js 
createMarkup = () => { 
        return {__html: this.props.job.description}; 
    };

   render(){
       return(
            <div className="more-data">
                <div dangerouslySetInnerHTML={this.createMarkup()} />
            </div>
       )
   }```
