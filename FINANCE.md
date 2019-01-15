**Summary**

[Introduction]{.underline}

We are going to calculate the daily historical returns of a stock if
there would be options. [^1]

From there on we can do some calculations about the stocks to get to the
volatility of a stock. In the formula $R$ stands for Return on a certain
$T$ date. Furthermore $S$ stands for strike price[^2] of a stock.

**The daily return**

[Step 1 ]{.underline}

The formula for calculating a return is described below:

$$R_{T} = \ \frac{S_{t} - S_{t - 1}}{S_{t - 1}}$$

**The average return**

[Step 2]{.underline}

To get closer to the calculation of the volatility we need to calculate
the average return of a stock over a certain period. This could be from
only one day but also over a month or over a year. What is happening is
that you take all the returns from all the daily data that you have and
you divide it by the total amount of days.

The formula for calculating the average return is described below:

$$\overline{R} = \ \frac{1}{T}\ \sum_{t = 1}^{T}R_{t}$$

Important is that when you use an average return you should use the same
time period in the calculation for the volatility.

**The variance**

[Step 3 ]{.underline}

On this point we have got all the information to calculate the variance
( $\sigma^{2}\ $ ) of a stock.

The formula for calculating the variance is described below:

$$Var = \ \frac{1}{T - 1}\ \sum_{t = 1}^{T}\left\lbrack R_{t} - \ \overline{R} \right\rbrack^{2}$$

**The volatility**

[Step 4]{.underline}

Now we can finally calculate the volatility of a stock.

NOTE: Once again it is highly important that we take the right Time
period.

$$Volatiliteit = \ \sqrt{\text{Variance}}$$

$$\sigma = \ \sqrt{\sigma^{2}}$$

**The volatility, daily, monthly and yearly**

[Step 5]{.underline}

There are handy fomula's to calculate the volatility per month or year
once you have the daily volatility.

The formula's for calculating these volatilities are described below:

We start off with daily:

$$\sigma_{\text{daily}} = \ \sqrt{\sigma^{2}}$$

We use the daily volatility to come to the yearly volatility:

$$\sigma_{\text{yearly}} = \sigma_{\text{daily}}*\ \sqrt{251}\ $$

Then we can also calculate the monthly volatility:

$$\sigma_{\text{monthly}} = \ \frac{\sigma_{\text{yearly}}}{\sqrt{12}}$$

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
