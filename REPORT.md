### Final Report

Jerinca Vreugdenhil. 
Studentnumber: 12405965. 
Course: Programmeerproject

## Short Decription

The webpage I build contains a bubble chart, a line graph and a bar chart. These three visualisations give insights to various stocks in the financial world. It also gives an insight in the risk of a stock and how important certain companies are within the S&P500 market index. 

<img width="1124" alt="Schermafbeelding 2019-04-15 om 12 02 31" src="https://user-images.githubusercontent.com/44025022/56124211-6bbf7580-5f76-11e9-91e3-a633dbf312bd.png">

## Technical Design

## Files

### HTML

The index.html page show us the homepage and contains the sources of the visualisations on the tabs (history, information and calculations). 

### JavaScript

There is a main javascript file, getinfo.js, which will have the structure of what happens from the point where the screen will ben loaded. Furthermore there are different javascript files for each visualisation such as barchart.js, linechart.js and calcvolatility.js. Also there are different javascript files in which the visualisations will be updated when the user clicks on it for example updatebars.js. 

### CSS

Within this folder you can find three different files for the layout of the linchart, the homepage and the point of the mouse. 

### D3

There is a seperate D3 folder which contains the D3 folder and the sources needed to work with this programm. 

## Detailed Description

HTML

To work with some kind of grid in HTML I have been using Bootstrap. This way each visualisation has it's own place on the page by using rows and collums. The navigation bar at the top will stay in place where ever the user is going, this way it makes it easier for the user to navigate on the webpage. 

For the user to insert it's own ticker symbol there is underneath the history tab a search bar implemented. The search bar will unfold when you hover your mouse over it. You can submit your input by clicking on the search icon or by hitting the enter key.

Under the same tab we see the bubble chart with the S&P500 market index. When the user hovers over the bubbles he/she will see the name of the company and the weight within the index. When the user clicks on the bubble the charts will be updated. 

Note: there is a html element with an option to select stock prices form the past 20 years as well. Sadly I could not get this working. 

JavaScript & main functions

- window.onload = function() 

As said above are main file getinfo.js is responsible for the structure of the code/page. In this file data will be retrieved when the page will be unloaded. In the first place data from Microsof (MSFT) will be retrieved because this is the company with the highest weight within the S&P500. When the user enters another ticker symbol, new data will be retrieved.
This brings us to the next function:

- Promise.all()

This function will make sure that when the data is retrieved it will hold the data in place. 

- Alpha Advantage:

To retrieve the data I needed I used an API key from alpha advantage. This website provides stock information in json and csv format. In the main script, getinfo.js the data will be converted and put in the right format when you unload the index.html page. 

Converting data

To get the data in the right format, and select only the data needed (in this case we only needed the closing prices) there is a function:

- function writeToJson()

This functions writes the data in a json format and after that puts it in a dictionairy so that working with the data will be easier.  After that the data will be reversed to get it in the right order. In the visualisation (and within the calulations) we want to start with the oldest information and end with the most recent info. The data of hundred days with the dates itself will be send to the file calcvolatility which contains a function:

- function calculateVolatility()

In this file we do all the steps we can find in the FINANCE.md file and there will be a dictionairy returned with the right volatilities. After that we got all the information ready to create a line and a barchart.

- function createLineChart() & createBarChart()

These functions create the first time the whole charts. After this they only need to be updated

- function updateDataLine() & updateDataGraph()

In these functions certains elements are selected by class and will be transitioned with the new data that is being retrieved. The line graph and the bar chart will be updated when a new ticker symbol is being entered by the user of when a bubble of the bubble chart is being clicked on. 

- function getBubbles()

For this function another dataset is used with all the weights of the conmpanies within the S&P500. When the data will get selected in the main javascript file it is being put in a csv format. After that it is written in such a way that it is a dictionairy with childeren and passed to the function get bubbles. All these bubble are called nodes and contain data from the data set. This is why, when you click on it, it is possible to update the line and barchart. 

## Challenges

One of the challenges at one point was the decision on which visualisations would suit best. Because I work with stock data you easily go towards a linechart. In the first place I wanted to make a portfolio visualisation, but then I would need to make a database which was hard to do but not impossible. But there was another problem, because I am working with real time stock data you can only make 5 calls per minute which means if your portfolio would consist of 10 stocks the webpage would not work. Because of this I made the decision to creat a bubble chart. After that I had troubles with implementing the new idea of the bubble chart, luckily after a while it worked out. 

Creating a visualisation of the stock history of the past 20 years is something I really wanted to do as well as decribed in the design document. The problem here was not even retrieving the data, but the problem was that I could not get the x axis right. I could not get rid of the overload on ticks. 


## Ideal world

In an ideal world I would be able to make as many API calls that would be needed. I would love to create some kind of dashboard, with more information for investors than what has been visualized by now. I would be awesome to create a database which could keep track of the portfolio that the user has created based on the visualisation of the stock characteristic. The investor would have his or her own account. This is something that is happening already in the real worl at companies like Kempne & Co.
