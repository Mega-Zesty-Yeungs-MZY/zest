# Logic Gates

### AND
Boolean multiplication corresponds to the logical function of an “AND” gate, as well as to series switch contacts:

![]({{ site.baseurl }}/images/truth-table-for-AND-gate1.webp)


### OR
Boolean addition corresponds to the logical function of an “OR” gate, as well as to parallel switch contacts:

![]({{ site.baseurl }}/images/logical-function-of-OR-gate2.webp)


### NOT
Boolean complementation finds equivalency in the form of the NOT gate, or a normally-closed switch or relay contact:

![]({{ site.baseurl }}/images/boolean-complementation-NOT-gate1.webp)

## Half-Adder Circuit
A half-adder circuit is used to add two bits of data together and is based on the following Truth Table.

|A|B|Sum|Carry|
|-|-|-|-|
|0|0|0|0|
|1|0|1|0|
|0|1|1|0|
|1|1|0|1|

A half-adder circuit consists of two logic gates as follows:

![]({{ site.baseurl }}/images/Half-Adder.png)

## Full-Adder Circuit
A full-adder circuit is used to add three bits of data together and is based on the following Truth Table.

|A|B|Cin|Sum|Cout|
|-|-|-|-|-|
|0|0|0|0|0|
|1|0|0|1|0|
|0|1|0|1|0|
|1|1|0|0|1|
|0|0|1|1|0|
|1|0|1|0|1|
|0|1|1|0|1|
|1|1|1|1|1|

A full-adder circuit consists of two half-adder circuits and an OR gate connected as follows:

![]({{ site.baseurl }}/images/Full-Adder.png)

# Conclusion Questions

1. How can logic gates be used to execute basic computer functions?

2. What is the difference between boolean operations and logic gates?