Jerinca Vreugdenhil. 
Studentnumber: 12405965

# Design Document

<!-- * a list of data sources if you will get data from an external source, including information on how your are going to filter and transform the data for your project
 -->
## Data Sources

Had a closer look on how to get to real time data. When I would use kaggle dataset, it is 5 year historical data. But I want also the real time information about stocks. 

That is working now I have got a new API key through ALPHA VANTAGE, where you can get realtime and historical stock data in json or csv formats. In the following picture you can see what the data looks like.

<img width="768" alt="schermafbeelding 2019-01-08 om 14 38 29" src="https://user-images.githubusercontent.com/44025022/50834983-bfa63700-1355-11e9-91fe-9e27afcbf6ac.png">

You can get either a compact output (the latest 100 data points). But you can also get the full-length time series of up to 20 years of historical data. The "compact" option is recommended if you would like to reduce the data size of each API call. 

<!-- * a diagram with an overview of the technical components of your app (visualizations, scraper etc etc)
as well as descriptions of each of the components and what you need to implement these -->

## Diagram

The main thing is that the user should be able to create a portfolio from stocks and follow the portfolio growth from that particular portfolio. 

<img width="839" alt="schermafbeelding 2019-01-08 om 15 17 15" src="https://user-images.githubusercontent.com/44025022/50836114-b8345d00-1358-11e9-8361-63371c136478.png">

<img width="960" alt="schermafbeelding 2019-01-08 om 15 14 44" src="https://user-images.githubusercontent.com/44025022/50835985-5f64c480-1358-11e9-840c-d72165234d5d.png">


The idea next to that is to create a page where a user can see the stock information about a stock of the past +- 20 years in a graph. The users should be able to insert a ticker symbol. 

## Sketch

<img width="1021" alt="schermafbeelding 2019-01-08 om 16 24 38" src="https://user-images.githubusercontent.com/44025022/50840221-4d881f00-1362-11e9-8c09-daa0fb3bcaea.png">
<img width="988" alt="schermafbeelding 2019-01-08 om 16 24 48" src="https://user-images.githubusercontent.com/44025022/50840223-4d881f00-1362-11e9-990e-0085c7f99aec.png">
<img width="940" alt="schermafbeelding 2019-01-08 om 16 25 05" src="https://user-images.githubusercontent.com/44025022/50840301-71e3fb80-1362-11e9-82d7-6f51edcf4585.png">
[Documentscans.pdf](https://github.com/Jerinca/Project/files/2737320/Documentscans.pdf)



<!-- * a list of APIs or D3 plugins that you will be using to provide functionality in your app -->

## Libaries, API's & plugins


