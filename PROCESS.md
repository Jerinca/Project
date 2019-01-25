Jerinca Vreugdenhil. 
Studentnumber: 12405965

## Process Book

# day 1
Handed in proposal again, added a feature to get real time stock prices

# day 2
Found API to get real time stock prices but also, historical stock prices. 
Had a Team meeting and shared our ideas.
Figured out you can always make you project bigger.

# day 3
Talked to Jasper in the morning & I had a lot of questions.
Figured out that you can use a good basic bootstrap template to get tabs as I wanted it.
Also; If I wanted to make a website that can create a portfolio for a user and keep track of that portfolio, I would need a database.
Therefor, I made the desicion to make a graph about historical stock prices if the user enters a ticker symbol.

After that I am going to chech what I can do for the portfoliopart.

# day 4
Made a search bar and a grid. Still need to figure out how to implement a click on feature.

# day 5
I can use the users input to search for the right API.

Furthermore the interactive graph with historical stock information is not going to be a problem. The idea now is to create a barchart underneath that is going to show the volatility of a stock per day month and year.

We had a meeting this morning with Kim, and Figured out that I needed to create a concrete 3rd visualisation. The portfolio idea, is going to be a bit complex. Due to a database that is going to be neccesary but also because of the amount of API calls you need to make. Therefor I had to come up with another idea. That is going to be an overvieuw of the Headquarters location of the s&p 500 companies in a map. 

# day 6
I can get my data in a list now

# day 7
The user can enter a ticker symbol, and then a graph pops up with the historical stock prices of the entered stock. When a new stock is entered a new graph comes underneath.

The goal is to update the graph instead of creating a new one underneath. Also I'm trying to make a tooltip so you can hover over the line chart and click on a day so you can see the daily volatility.

###PLAN

**Summary**

__Introduction__

We are going to calculate the daily historical returns of a stock if
there would be options. [^1]

From there on we can do some calculations about the stocks to get to the
volatility of a stock. In the formula $R$ stands for Return on a certain
$T$ date. Furthermore $S$ stands for strike price[^2] of a stock.

**The daily return**

__Step 1__

The formula for calculating a return is described below:

<img width="323" alt="schermafbeelding 2019-01-15 om 22 44 40" src="https://user-images.githubusercontent.com/44025022/51211990-615df300-1917-11e9-86da-cadc2186a76b.png">

**The average return**

__Step 2__

To get closer to the calculation of the volatility we need to calculate
the average return of a stock over a certain period. This could be from
only one day but also over a month or over a year. What is happening is
that you take all the returns from all the daily data that you have and
you divide it by the total amount of days.

The formula for calculating the average return is described below:

<img width="245" alt="schermafbeelding 2019-01-15 om 22 45 02" src="https://user-images.githubusercontent.com/44025022/51212008-72a6ff80-1917-11e9-973f-577853d94049.png">


Important is that when you use an average return you should use the same
time period in the calculation for the volatility.

**The variance**

__Step 3__

On this point we have got all the information to calculate the variance
( $\sigma^{2}\ $ ) of a stock.

The formula for calculating the variance is described below:

<img width="588" alt="schermafbeelding 2019-01-15 om 22 45 09" src="https://user-images.githubusercontent.com/44025022/51212021-82264880-1917-11e9-987b-642f2e1f2af5.png">

**The volatility**

__Step 4__

Now we can finally calculate the volatility of a stock.

NOTE: Once again it is highly important that we take the right Time
period.

<img width="537" alt="schermafbeelding 2019-01-15 om 22 45 16" src="https://user-images.githubusercontent.com/44025022/51212031-8e120a80-1917-11e9-99c7-ef437bf61ae3.png">

**The volatility, daily, monthly and yearly**

__Step 5__

There are handy fomula's to calculate the volatility per month or year
once you have the daily volatility.

The formula's for calculating these volatilities are described below:

<img width="788" alt="schermafbeelding 2019-01-15 om 22 45 30" src="https://user-images.githubusercontent.com/44025022/51212064-a84be880-1917-11e9-9d3e-5b013ebe3ef4.png">

**Created by:**

**Jerinca Vreugdenhil**

[^1]: Options are a financial derivative sold by an [[option
    writer]{.underline}](https://www.investopedia.com/terms/w/writing-an-option.asp) to
    an option buyer. The contract offers the buyer the right, but not
    the obligation, to buy (call option) or sell (put option) the
    underlying asset at an agreed-upon price during a certain period of
    time or on a specific date. The agreed upon price is called
    the [[strike
    price]{.underline}](https://www.investopedia.com/terms/s/strikeprice.asp).
    American options can be exercised any time before the expiration
    date of the option, while European options can only be exercised on
    the expiration date (exercise date). Exercising means utilizing the
    right to buy or the sell the underlying security.

[^2]: A strike price is the price at which a derivative contract can be
    exercised. The term is mostly used to describe stock and index
    options. For call options, the strike price is where the security
    can be bought by the option buyer up till the expiration date. For
    put options, the strike price is the price at which shares can be
    sold by the option buyer.


# day 8

Graph is updating now! So thats really cool. Tried to implement a tooltip wich isn't working sadly. 

# day 9

Choose this colorpallete to work with for the design

 <img width="449" alt="schermafbeelding 2019-01-16 om 17 25 03" src="https://user-images.githubusercontent.com/44025022/51337776-524a8280-1a88-11e9-8b38-0447dc7904b0.png">

 Worlmap template is displayed on site. 
 Got data with headquarter locations s&p500.

 Did all the steps in javascript to calculate the volatility (daily monthly & yearly)
 After that, I started creating a barchart. That needs to be updated, the same as the line chart does when another stock is entered by the user.

 Furthermore the barchart is not completely working yet. It shows the right values but the 1 bin is not placed correctly, need to figure out why.

# day 10

Fixed bar chart.

need to update that one when new stock is being entered.

# day 11

I tried writing some code for updating the bar chart as well. is not really working yet. tomorrow I am going to visualize the worldmap with S&P 500 companies. And trying to create click on line graph. 

# day 13

I rewrote my code in different files to get a little bit of an overview. I am a little bit stuck.. and Im stressed about the deadline and I forgot to upload my processbook..... anyway. today is the hacketon. Lets hope I can make some progress this evening and tomorrow. Need to update my barchart. Is not worken. my click on is not working.

# day 14 

set everything back to on line click. 




