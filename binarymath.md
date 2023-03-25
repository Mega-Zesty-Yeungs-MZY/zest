# Binary Math
Learn some cool stuff about binary math!


## What Are Binary Numbers?

Binary numbers are numbers that are expressed using the base 2 number system, rather than the base 10 decimal system that we are all used to (1,2,3,4,5,etc). Additionally, with binary, there are only two possible values, 0 and 1, with 0 indicating that it is false or "off" and 1 indicating that it is true or "on" (more about that later on). No in betweens!


## What Do We Use Binary Numbers For?

It seems strange to use a base 2 number system that only consists of 0s and 1s; however, binary numbers have uses for a lot more things than you would probably expect. For example, binary allows devices to store, access, and manipulate all sorts of data directed to and from the CPU or memory. This allows us to perform some of the stuff that we like to do on our computers every day, such as viewing websites, playing games, creating and updating documents, and so much more. While we may not use the binary number system at our school (and probably in most schools around the world), binary numbers play a major role when it comes to the world of computer science. 

## Conversion

Apart from their uses in our computers, we can also convert that series of 0s and 1s to the original decimal numbers that we are all familiar with.


### How Do We Convert Decimal Numbers to Binary Numbers? (Sample Code)

```
def convertToBinary(n):
    # b represents the binary number
    b = ""

    # n represents the decimal number that will be converted into the binary number
    while n > 0:
    
    # r represents the remainder
        r = n % 2
        b = str(r) + b
        n = n // 2
    return b.zfill(8)

n = int(input("What decimal number would you like to convert to binary?"))
print("User input: ", n)
b = convertToBinary(n)
print("The number {} in binary is {}".format(n,b))

```




One way to go from decimal numbers to binary numbers is to repeatedly divide the decimal number given until its quotient is zero. We then reverse the order of the remainders in order to get that decimal number in binary. For example, if we wanted to convert the decimal number 83 to binary, we can do so as demonstrated below:

83/2 = 41 r 1
41/2 = 20 r 1
20/2 = 10 r 0
10/2 = 5 r 0
5/2 = 2 r 1
2/2 = 1 r 0
1/2 = 0 r 1 

The order of the remainders is technically 1100101; however, we need to reverse this, so it should now be 1010011. Therefore, 83 converted to binary is 1010011

1010011






