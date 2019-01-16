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
