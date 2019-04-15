# Project Stock history & info 

Jerinca Vreugdenhil. 
Studentnumber: 12405965. 
Course: Programmeerproject

https://jerinca.github.io/Project/

## Problem statement. 

Investing in stocks can be scary. Because you do not always know what your chances are. Especially with big events that are occuring like Brexit, or the whole situation around Donald Trump. Investors do want to know what their risks are and they need to monitor what is happening on the stockmarket to be sure they will not lose a lot of money all of a sudden. There are several ways to keep track of how risky a stock is and there are also various stock market indexes which we can use as a benchmark. One way of having a look at the riskyness of a stock is by calculating the volatility. We can caluculate this on historical information.

To look at the risk of a stock we can have a closer look at the volatility of a stock. 
Furthermore we would like to see what stock prices did in the past if you want to invest in them (still). 


## Solution. 
The idea is to create an informative website with stock history on it from any stock from the past 100 days. Added to that you would maybe like to compare the daily volatility from a stock with the monthly and yearly volatility. Is there a big difference in this? By visualizing this we have an idea what has been happening in the past and with this we can have an idea of what is going to happen in the nearby future. 

To make sure an investors picks the stock he wants to trade in he should be able to see a detailed and statistic overview of a stock that he is looking for. By calculating the standard deviation of a stock we can get to the volatility of a stock. For instance the FSE 100 index is pretty votile at the moment thanks to the brexit. 

In this project the focus is layed on the S&P500 market index. The idea is to create a bubble chart which contains the companies and how much they weight. How bigger the bubble the higher the weight in the index. Furthermore there is going to be an overview of stock prices from the past 100 days and a barchart with the daily, monthly and yearly volatility form a specific stock. 

### Visual sketch. 

The first page an Investor is entering is going to be the homepage. On that homepage the investor you be able to go to different pages. There is a navigation bar with history, information and calculations. The picture represents the financial industry in the US. 

<img width="1124" alt="Schermafbeelding 2019-04-15 om 12 02 31" src="https://user-images.githubusercontent.com/44025022/56124211-6bbf7580-5f76-11e9-91e3-a633dbf312bd.png">

### Main features. 

MVP
See an overview of the risk per stock. 
Create a bubble chart with the S&P500 companies

<img width="1219" alt="Schermafbeelding 2019-04-15 om 12 05 25" src="https://user-images.githubusercontent.com/44025022/56124397-d8d30b00-5f76-11e9-8439-faf97ff9ca36.png">

By inserting a stock symbol and see an overview of more complex statistics of the stock. 

There should be an information page as well, were you can find what the website is showing you and why.

<img width="1209" alt="Schermafbeelding 2019-04-15 om 12 05 34" src="https://user-images.githubusercontent.com/44025022/56124398-d96ba180-5f76-11e9-96be-d458239bb4b0.png">

There will be an map with an overvieuw of the companiess that are in the S&P500 and how much their weight is in that index.


### About
<img width="1137" alt="Schermafbeelding 2019-04-15 om 12 08 01" src="https://user-images.githubusercontent.com/44025022/56124558-336c6700-5f77-11e9-94e3-5fcaad9d0731.png">


### Calculations
<img width="1232" alt="Schermafbeelding 2019-04-15 om 12 08 16" src="https://user-images.githubusercontent.com/44025022/56124637-61ea4200-5f77-11e9-8ad2-a9093603beaa.png">
 

### data sources. 
YAHOO \
https://pypi.org/project/yahoo-finance/ \
https://www.kaggle.com/camnugent/sandp500 \


### external components. 
To be agreed

### review of similar or related visualizations. 
When you would visit https://www.portfoliovisualizer.com/examples, you see a few examples of how a stock is being presented. In my opinion this can be done better. 
